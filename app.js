/* =============================================================
   Lillio Pause — App logic
   - Renders categorized YouTube/Spotify embeds from content.js
   - Tab navigation
   - Customizable Pomodoro timer (default 25/5 with long break every 4)
   ============================================================= */

(function () {
  "use strict";

  // ---- Helpers ----
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const ytEmbed = id =>
    `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
  const ytPlaylistEmbed = id =>
    `https://www.youtube-nocookie.com/embed/videoseries?list=${id}&rel=0&modestbranding=1`;
  const spotifyEmbed = (kind, id) =>
    `https://open.spotify.com/embed/${kind}/${id}?utm_source=lillio_pause`;

  // ---- Render content cards ----
  function renderCard(item) {
    const card = document.createElement("article");
    card.className = "card";

    let mediaHTML = "";
    let isAudio = false;
    if (item.type === "youtube") {
      mediaHTML = `<iframe src="${ytEmbed(item.id)}"
        title="${item.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
    } else if (item.type === "youtube-playlist") {
      mediaHTML = `<iframe src="${ytPlaylistEmbed(item.id)}"
        title="${item.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
    } else if (item.type === "spotify-playlist") {
      isAudio = true;
      mediaHTML = `<iframe src="${spotifyEmbed("playlist", item.id)}"
        title="${item.title}"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    } else if (item.type === "spotify-album") {
      isAudio = true;
      mediaHTML = `<iframe src="${spotifyEmbed("album", item.id)}"
        title="${item.title}" loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    } else if (item.type === "spotify-track") {
      isAudio = true;
      mediaHTML = `<iframe src="${spotifyEmbed("track", item.id)}"
        title="${item.title}" loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    }

    const sourceTag = item.type.startsWith("spotify") ? "spotify" : "youtube";
    card.innerHTML = `
      <div class="card-media ${isAudio ? "audio" : "video"}">${mediaHTML}</div>
      <div class="card-body">
        <div class="card-title">${escapeHTML(item.title)}</div>
        <div class="card-meta">
          ${item.tag ? `<span class="tag ${sourceTag}">${escapeHTML(item.tag)}</span>` : ""}
          ${item.duration ? `<span class="duration">${escapeHTML(item.duration)}</span>` : ""}
        </div>
      </div>
    `;
    return card;
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function renderSection(key, def) {
    const section = document.createElement("section");
    section.className = "section";
    section.dataset.section = key;
    section.innerHTML = `
      <div class="section-header">
        <span class="section-icon">${def.icon || ""}</span>
        <h2>${escapeHTML(def.title)}</h2>
      </div>
      <p class="section-sub">${escapeHTML(def.subtitle || "")}</p>
      <div class="grid"></div>
    `;
    const grid = $(".grid", section);
    def.items.forEach(item => grid.appendChild(renderCard(item)));
    return section;
  }

  function renderTabs(keys, defs) {
    const tabsEl = $("#tabs");
    const timerTab = tabsEl.querySelector('[data-target="timer"]');
    keys.forEach(key => {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.dataset.target = key;
      btn.textContent = `${defs[key].icon || ""} ${defs[key].title}`.trim();
      // Insert content tabs between the (hardcoded) Welcome and Timer tabs
      tabsEl.insertBefore(btn, timerTab);
    });
  }

  function activate(key) {
    $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.target === key));
    $$(".section").forEach(s => s.classList.toggle("active", s.dataset.section === key));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Pomodoro Timer ----
  const Timer = (() => {
    const state = {
      work: 25,
      shortBreak: 5,
      longBreak: 15,
      cyclesBeforeLong: 4,
      autoStart: false,
      sound: true,
      // runtime
      mode: "work",          // "work" | "short" | "long"
      remaining: 25 * 60,    // seconds
      running: false,
      cyclesCompleted: 0,
      tickHandle: null,
    };

    function loadSettings() {
      try {
        const saved = JSON.parse(localStorage.getItem("lillioPauseTimer") || "{}");
        Object.assign(state, saved);
      } catch (_) {}
    }
    function saveSettings() {
      const { work, shortBreak, longBreak, cyclesBeforeLong, autoStart, sound } = state;
      localStorage.setItem(
        "lillioPauseTimer",
        JSON.stringify({ work, shortBreak, longBreak, cyclesBeforeLong, autoStart, sound })
      );
    }

    function fmt(secs) {
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function modeLabel() {
      if (state.mode === "work") return "Focus";
      if (state.mode === "short") return "Short Break";
      return "Long Break";
    }

    function render() {
      $("#timerDisplay").textContent = fmt(state.remaining);
      $("#timerMode").textContent = modeLabel();
      // Cycle counter:
      //   - during work: this work session's number (1..N)
      //   - during short break: the cycle that just finished
      //   - during long break: the full set just finished (N of N)
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
      // sync inputs
      $("#cfgWork").value = state.work;
      $("#cfgShort").value = state.shortBreak;
      $("#cfgLong").value = state.longBreak;
      $("#cfgCycles").value = state.cyclesBeforeLong;
      $("#cfgAuto").checked = state.autoStart;
      $("#cfgSound").checked = state.sound;
      document.title = state.running
        ? `${fmt(state.remaining)} • ${modeLabel()} — Lillio Pause`
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
      } catch (_) {}
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
    function pause() {
      state.running = false;
      clearInterval(state.tickHandle);
      render();
    }
    function reset() {
      pause();
      state.mode = "work";
      state.cyclesCompleted = 0;
      state.remaining = durationFor("work");
      render();
    }
    function skip() {
      const wasRunning = state.running;
      pause();
      nextMode();
      render();
      if (wasRunning) start();
    }

    function bind() {
      $("#startBtn").addEventListener("click", () => state.running ? pause() : start());
      $("#resetBtn").addEventListener("click", reset);
      $("#skipBtn").addEventListener("click", skip);

      const onConfigChange = () => {
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
        $$("#cfgWork, #cfgShort, #cfgLong, #cfgCycles").forEach(i => i.addEventListener(ev, onConfigChange));
        $$("#cfgAuto, #cfgSound").forEach(i => i.addEventListener("change", onConfigChange));
      });
    }

    function clampInt(v, min, max, fallback) {
      const n = parseInt(v, 10);
      if (isNaN(n)) return fallback;
      return Math.max(min, Math.min(max, n));
    }

    function init() {
      loadSettings();
      state.remaining = durationFor(state.mode);
      bind();
      render();
    }

    return { init };
  })();

  // ---- Boot ----
  function init() {
    const data = window.CONTENT;
    if (!data) {
      console.error("content.js failed to load — no CONTENT object on window.");
      return;
    }
    const main = $("#main");
    const keys = Object.keys(data);
    keys.forEach(key => main.appendChild(renderSection(key, data[key])));

    renderTabs(keys, data);

    // Hook tab clicks (including the Timer tab in HTML)
    $$(".tab").forEach(tab => {
      tab.addEventListener("click", () => activate(tab.dataset.target));
    });

    // First-time visitors land on Welcome; returning visitors land on the
    // first content tab so they get straight to playing.
    const seenWelcome = (() => {
      try { return localStorage.getItem("lillioPauseSeen") === "1"; } catch (_) { return false; }
    })();
    if (!seenWelcome) {
      activate("welcome");
      try { localStorage.setItem("lillioPauseSeen", "1"); } catch (_) {}
    } else {
      activate(keys[0]);
    }

    Timer.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
