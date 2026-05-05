/* =============================================================
   Lillio Pause: app logic
   - Sidebar nav, search, mood filter, favorites
   - Today's picks (time-of-day aware)
   - Customizable Pomodoro timer (default 25 / 5, long break every 4)
   ============================================================= */

(function () {
  "use strict";

  // ---------- Config ----------
  // Edit this if your Slack ID changes. Format: slack://user?team=TEAMID&id=USERID
  // Or use a regular https://app.slack.com/client/TEAMID/USERID URL.
  const SLACK_DM_URL = "https://lillio.slack.com/team/U_VAHID";

  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const ytEmbed = id => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
  const ytPlaylistEmbed = id => `https://www.youtube-nocookie.com/embed/videoseries?list=${id}&rel=0&modestbranding=1`;
  const spotifyEmbed = (kind, id) => `https://open.spotify.com/embed/${kind}/${id}?utm_source=lillio_pause`;

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---------- Favorites (localStorage) ----------
  const Favorites = {
    KEY: "lillioPauseFavorites",
    _set: null,
    load() {
      try {
        const arr = JSON.parse(localStorage.getItem(this.KEY) || "[]");
        this._set = new Set(arr);
      } catch {
        this._set = new Set();
      }
    },
    save() {
      try {
        localStorage.setItem(this.KEY, JSON.stringify(Array.from(this._set)));
      } catch {}
    },
    keyFor(item) { return `${item.type}:${item.id}`; },
    has(item) { return this._set.has(this.keyFor(item)); },
    toggle(item) {
      const k = this.keyFor(item);
      if (this._set.has(k)) this._set.delete(k);
      else this._set.add(k);
      this.save();
    },
    list() { return Array.from(this._set); },
  };

  // ---------- Build a flat index of all items ----------
  let ALL_ITEMS = []; // {item, categoryKey}
  function buildIndex(content) {
    ALL_ITEMS = [];
    for (const key of Object.keys(content)) {
      for (const item of content[key].items || []) {
        ALL_ITEMS.push({ item, categoryKey: key });
      }
    }
  }

  // ---------- Card renderer ----------
  function renderCard(item) {
    const card = document.createElement("article");
    card.className = "card";

    let mediaHTML = "";
    let isAudio = false;
    if (item.type === "youtube") {
      mediaHTML = `<iframe src="${ytEmbed(item.id)}" title="${escapeHTML(item.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (item.type === "youtube-playlist") {
      mediaHTML = `<iframe src="${ytPlaylistEmbed(item.id)}" title="${escapeHTML(item.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (item.type === "spotify-playlist") {
      isAudio = true;
      mediaHTML = `<iframe src="${spotifyEmbed("playlist", item.id)}" title="${escapeHTML(item.title)}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    } else if (item.type === "spotify-album") {
      isAudio = true;
      mediaHTML = `<iframe src="${spotifyEmbed("album", item.id)}" title="${escapeHTML(item.title)}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    } else if (item.type === "spotify-track") {
      isAudio = true;
      mediaHTML = `<iframe src="${spotifyEmbed("track", item.id)}" title="${escapeHTML(item.title)}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    }

    const sourceTag = item.type.startsWith("spotify") ? "spotify" : "youtube";
    const isFav = Favorites.has(item);
    card.innerHTML = `
      <div class="card-media ${isAudio ? "audio" : "video"}">${mediaHTML}</div>
      <div class="card-body">
        <div class="card-title">
          <span class="card-title-text">${escapeHTML(item.title)}</span>
          <button class="fav-btn ${isFav ? "is-fav" : ""}" aria-label="${isFav ? "Remove from saved" : "Save to your list"}" title="${isFav ? "Saved" : "Save"}">
            ${isFav ? "♥" : "♡"}
          </button>
        </div>
        <div class="card-meta">
          ${item.tag ? `<span class="tag ${sourceTag}">${escapeHTML(item.tag)}</span>` : ""}
          ${item.duration ? `<span class="duration">${escapeHTML(item.duration)}</span>` : ""}
        </div>
      </div>
    `;

    // wire favorite toggle
    const favBtn = $(".fav-btn", card);
    favBtn.addEventListener("click", e => {
      e.stopPropagation();
      Favorites.toggle(item);
      const nowFav = Favorites.has(item);
      favBtn.classList.toggle("is-fav", nowFav);
      favBtn.textContent = nowFav ? "♥" : "♡";
      favBtn.setAttribute("aria-label", nowFav ? "Remove from saved" : "Save to your list");
      // Update fav count + favorites tab if open
      updateFavCount();
      if (currentSection === "favorites") renderFavorites();
    });

    return card;
  }

  function renderGrid(target, items) {
    target.innerHTML = "";
    if (!items.length) return false;
    items.forEach(it => target.appendChild(renderCard(it)));
    return true;
  }

  // ---------- Section rendering ----------
  function renderCategorySection(key, def) {
    const section = document.createElement("section");
    section.className = "section";
    section.dataset.section = key;
    section.innerHTML = `
      <div class="section-head">
        <div>
          <h1 class="section-title">${escapeHTML(def.title)}</h1>
          <p class="section-sub">${escapeHTML(def.subtitle || "")}</p>
        </div>
      </div>
      <div class="grid"></div>
    `;
    const grid = $(".grid", section);
    def.items.forEach(item => grid.appendChild(renderCard(item)));
    return section;
  }

  // ---------- Today's picks (time-of-day) ----------
  function pickToday(content) {
    const hour = new Date().getHours();
    let priority, greeting, sub;
    if (hour < 10) {
      // Morning: gentle starts
      priority = ["quickResets", "movement", "guidedMeditations", "focusMusic"];
      greeting = "Good morning";
      sub = "A soft place to start the day. Try a five-minute movement or a quick breath.";
    } else if (hour < 13) {
      // Late morning: focus
      priority = ["focusMusic", "quickResets", "soundscapes", "movement"];
      greeting = "Mid-morning, how's it going?";
      sub = "If you're prepping or planning, slip on focus music. A one-minute reset works too.";
    } else if (hour < 16) {
      // Afternoon: midday lull
      priority = ["quickResets", "movement", "guidedMeditations", "focusMusic"];
      greeting = "Afternoon check-in";
      sub = "Energy dipping? Try a quick reset or a short walk-friendly meditation.";
    } else if (hour < 19) {
      // Late afternoon: end of school day
      priority = ["guidedMeditations", "movement", "soundscapes", "quickResets"];
      greeting = "End of day energy";
      sub = "You made it. Here's something to soften the transition home.";
    } else {
      // Evening: wind down
      priority = ["sleepWindDown", "soundscapes", "guidedMeditations"];
      greeting = "Evening";
      sub = "Time to put it down. Sleep stories, soft sounds, and slow meditations are below.";
    }

    const picks = [];
    for (const k of priority) {
      const items = content[k]?.items || [];
      // Take up to 2 per category
      picks.push(...items.slice(0, 2));
      if (picks.length >= 6) break;
    }
    return { greeting, sub, picks: picks.slice(0, 6) };
  }

  // ---------- Mood filter ----------
  let activeMood = "all";
  function applyMood(mood, content) {
    activeMood = mood;
    $$(".mood-pill").forEach(p => p.classList.toggle("active", p.dataset.mood === mood));
    const grid = $("#todayGrid");
    if (mood === "all") {
      const { picks } = pickToday(content);
      renderGrid(grid, picks);
      return;
    }
    const items = [];
    for (const key of Object.keys(content)) {
      const def = content[key];
      if ((def.moods || []).includes(mood)) {
        items.push(...def.items.slice(0, 3));
      }
    }
    renderGrid(grid, items.slice(0, 9));
  }

  // ---------- Favorites view ----------
  function renderFavorites() {
    const grid = $("#favoritesGrid");
    const empty = $("#favoritesEmpty");
    const keys = new Set(Favorites.list());
    const items = ALL_ITEMS
      .filter(({ item }) => keys.has(`${item.type}:${item.id}`))
      .map(({ item }) => item);
    grid.innerHTML = "";
    if (!items.length) {
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    items.forEach(it => grid.appendChild(renderCard(it)));
  }
  function updateFavCount() {
    const n = Favorites.list().length;
    const el = $("#favCount");
    el.textContent = n > 0 ? n : "";
  }

  // ---------- Search ----------
  function runSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      activate(lastNonSearch || "today");
      return;
    }
    const matches = ALL_ITEMS
      .filter(({ item }) => item.title.toLowerCase().includes(q) || (item.tag || "").toLowerCase().includes(q))
      .map(({ item }) => item)
      .slice(0, 30);
    $("#searchTitle").textContent = `Search: "${query}"`;
    $("#searchSub").textContent = `${matches.length} ${matches.length === 1 ? "result" : "results"}`;
    const grid = $("#searchGrid");
    const empty = $("#searchEmpty");
    grid.innerHTML = "";
    if (!matches.length) {
      empty.hidden = false;
    } else {
      empty.hidden = true;
      matches.forEach(it => grid.appendChild(renderCard(it)));
    }
    activate("search", { silent: true });
  }

  // ---------- Section activation ----------
  let currentSection = "welcome";
  let lastNonSearch = null;
  function activate(key, opts = {}) {
    if (key !== "search") lastNonSearch = key;
    currentSection = key;
    $$(".nav-item").forEach(t => t.classList.toggle("active", t.dataset.target === key));
    $$(".section").forEach(s => s.classList.toggle("active", s.dataset.section === key));
    if (key === "favorites") renderFavorites();
    closeMobileSidebar();
    if (!opts.silent) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Mobile sidebar ----------
  function openMobileSidebar() {
    $("#sidebar").classList.add("open");
    $("#sidebarBackdrop").classList.add("show");
  }
  function closeMobileSidebar() {
    $("#sidebar").classList.remove("open");
    $("#sidebarBackdrop").classList.remove("show");
  }

  // ---------- Pomodoro Timer ----------
  const Timer = (() => {
    const state = {
      work: 25, shortBreak: 5, longBreak: 15, cyclesBeforeLong: 4,
      autoStart: false, sound: true,
      mode: "work", remaining: 25 * 60, running: false,
      cyclesCompleted: 0, tickHandle: null,
    };

    function loadSettings() {
      try {
        const saved = JSON.parse(localStorage.getItem("lillioPauseTimer") || "{}");
        Object.assign(state, saved);
      } catch {}
    }
    function saveSettings() {
      const { work, shortBreak, longBreak, cyclesBeforeLong, autoStart, sound } = state;
      localStorage.setItem("lillioPauseTimer", JSON.stringify({ work, shortBreak, longBreak, cyclesBeforeLong, autoStart, sound }));
    }
    function fmt(s) { const m = Math.floor(s / 60), x = s % 60; return `${String(m).padStart(2,"0")}:${String(x).padStart(2,"0")}`; }
    function modeLabel() {
      if (state.mode === "work") return "Focus";
      if (state.mode === "short") return "Short break";
      return "Long break";
    }
    function render() {
      $("#timerDisplay").textContent = fmt(state.remaining);
      $("#timerMode").textContent = modeLabel();
      let displayCycle;
      if (state.mode === "work") {
        displayCycle = (state.cyclesCompleted % state.cyclesBeforeLong) + 1;
      } else if (state.mode === "long") {
        displayCycle = state.cyclesBeforeLong;
      } else {
        const m = state.cyclesCompleted % state.cyclesBeforeLong;
        displayCycle = m === 0 ? state.cyclesBeforeLong : m;
      }
      $("#timerCycle").textContent = `Cycle ${displayCycle} of ${state.cyclesBeforeLong}`;
      $("#startBtn").textContent = state.running ? "Pause" : "Start";
      $("#cfgWork").value = state.work;
      $("#cfgShort").value = state.shortBreak;
      $("#cfgLong").value = state.longBreak;
      $("#cfgCycles").value = state.cyclesBeforeLong;
      $("#cfgAuto").checked = state.autoStart;
      $("#cfgSound").checked = state.sound;
      document.title = state.running
        ? `${fmt(state.remaining)} • ${modeLabel()} · Lillio Pause`
        : "Lillio Pause";
    }
    function durationFor(mode) {
      if (mode === "work") return state.work * 60;
      if (mode === "short") return state.shortBreak * 60;
      return state.longBreak * 60;
    }
    function nextMode() {
      if (state.mode === "work") {
        state.cyclesCompleted += 1;
        const isLong = state.cyclesCompleted % state.cyclesBeforeLong === 0;
        state.mode = isLong ? "long" : "short";
      } else {
        state.mode = "work";
      }
      state.remaining = durationFor(state.mode);
    }
    function chime() {
      if (!state.sound) return;
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = state.mode === "work" ? 660 : 880;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + 1.5);
      } catch {}
    }
    function tick() {
      if (!state.running) return;
      state.remaining -= 1;
      if (state.remaining <= 0) {
        chime();
        nextMode();
        if (!state.autoStart) {
          state.running = false;
          clearInterval(state.tickHandle);
        }
      }
      render();
    }
    function start() {
      if (state.running) return;
      state.running = true;
      state.tickHandle = setInterval(tick, 1000);
      render();
    }
    function pause() { state.running = false; clearInterval(state.tickHandle); render(); }
    function reset() { pause(); state.mode = "work"; state.cyclesCompleted = 0; state.remaining = durationFor("work"); render(); }
    function skip() { const wasRunning = state.running; pause(); nextMode(); render(); if (wasRunning) start(); }
    function clampInt(v, min, max, fb) { const n = parseInt(v, 10); return isNaN(n) ? fb : Math.max(min, Math.min(max, n)); }
    function bind() {
      $("#startBtn").addEventListener("click", () => state.running ? pause() : start());
      $("#resetBtn").addEventListener("click", reset);
      $("#skipBtn").addEventListener("click", skip);
      const onCfg = () => {
        state.work = clampInt($("#cfgWork").value, 1, 180, 25);
        state.shortBreak = clampInt($("#cfgShort").value, 1, 60, 5);
        state.longBreak = clampInt($("#cfgLong").value, 1, 90, 15);
        state.cyclesBeforeLong = clampInt($("#cfgCycles").value, 2, 12, 4);
        state.autoStart = $("#cfgAuto").checked;
        state.sound = $("#cfgSound").checked;
        if (!state.running) state.remaining = durationFor(state.mode);
        saveSettings();
        render();
      };
      ["change", "input"].forEach(ev => {
        $$("#cfgWork, #cfgShort, #cfgLong, #cfgCycles").forEach(i => i.addEventListener(ev, onCfg));
      });
      $$("#cfgAuto, #cfgSound").forEach(i => i.addEventListener("change", onCfg));
    }
    function init() { loadSettings(); state.remaining = durationFor(state.mode); bind(); render(); }
    return { init };
  })();

  // ---------- Boot ----------
  function init() {
    const data = window.CONTENT;
    if (!data) {
      console.error("content.js failed to load. CONTENT object not on window.");
      return;
    }
    Favorites.load();
    buildIndex(data);

    // Inject category sections into the main area, between Today's and Favorites
    const main = $("#main");
    const timerSection = main.querySelector('[data-section="timer"]');
    Object.keys(data).forEach(key => {
      const sec = renderCategorySection(key, data[key]);
      main.insertBefore(sec, timerSection);
    });

    // Today's picks (initial render)
    const today = pickToday(data);
    $("#todayGreeting").textContent = today.greeting;
    $("#todaySub").textContent = today.sub;
    renderGrid($("#todayGrid"), today.picks);

    // Mood filter wiring
    $$(".mood-pill").forEach(p => {
      p.addEventListener("click", () => applyMood(p.dataset.mood, data));
    });
    applyMood("all", data); // sets the "Everything" pill active

    // Slack CTA wiring
    const slackBtns = $$("#slackCta, #slackCtaInline");
    slackBtns.forEach(a => { a.href = SLACK_DM_URL; });

    // Sidebar nav
    $$(".nav-item").forEach(t => t.addEventListener("click", () => activate(t.dataset.target)));

    // Mobile menu
    $("#mobileMenuBtn").addEventListener("click", () => {
      const sb = $("#sidebar");
      sb.classList.contains("open") ? closeMobileSidebar() : openMobileSidebar();
    });
    $("#sidebarBackdrop").addEventListener("click", closeMobileSidebar);

    // Theme toggle (light/dark)
    function setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("lillioPauseTheme", theme); } catch {}
    }
    function toggleTheme() {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current === "dark" ? "light" : "dark");
    }
    $$("#themeToggle, #themeToggleMobile").forEach(b => b.addEventListener("click", toggleTheme));
    // Follow system changes only if user hasn't explicitly chosen
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener && mq.addEventListener("change", e => {
        try {
          if (!localStorage.getItem("lillioPauseTheme")) {
            document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
          }
        } catch {}
      });
    }

    // Search
    const searchInput = $("#searchInput");
    let searchTimer;
    searchInput.addEventListener("input", e => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => runSearch(e.target.value), 150);
    });
    document.addEventListener("keydown", e => {
      const isMeta = e.metaKey || e.ctrlKey;
      if (isMeta && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      } else if (e.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        runSearch("");
        searchInput.blur();
      }
    });

    updateFavCount();

    // First-visit lands on Welcome; returning visitors land on Today's picks
    let seen = false;
    try { seen = localStorage.getItem("lillioPauseSeen") === "1"; } catch {}
    if (!seen) {
      activate("welcome");
      try { localStorage.setItem("lillioPauseSeen", "1"); } catch {}
    } else {
      activate("today");
    }

    Timer.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
