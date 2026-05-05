// =====================================================================
//  Lillio Pause — Content Library
//  ---------------------------------------------------------------------
//  This is the ONLY file you need to edit to add, remove, or swap items.
//
//  HOW TO ADD A YOUTUBE ITEM:
//    1. Open the YouTube video in a browser.
//    2. Copy the video ID — it's the part after "v=" in the URL.
//         e.g. https://www.youtube.com/watch?v=4C-gxOE0j7s   →   4C-gxOE0j7s
//       For a playlist, copy the part after "list=".
//    3. Add a new entry to the relevant category below. Set:
//         type: "youtube"            (or "youtube-playlist")
//         id:   "the_id_you_copied"
//
//  HOW TO ADD A SPOTIFY ITEM:
//    1. In Spotify, click the (•••) menu on a playlist/album/track →
//       Share → Copy link. The playlist ID is the long string after
//       "/playlist/", e.g. 37i9dQZF1DWZqd5JICZI0u
//    2. Add an entry with:
//         type: "spotify-playlist"   (or "spotify-album" / "spotify-track")
//         id:   "the_id_you_copied"
//
//  Items render in the order listed. Keep titles short and friendly.
//  This file is automatically refreshed weekly by a scheduled task.
//  Last manual refresh: 2026-05-05
// =====================================================================

const CONTENT = {
  // ──────────────────────────────────────────────────────────────────
  //  QUICK RESETS — 1 to 5-minute breathers for between activities,
  //  during nap time, or before a tough conversation with a parent.
  // ──────────────────────────────────────────────────────────────────
  quickResets: {
    title: "Quick Resets",
    subtitle: "1–5 minutes. Use between activities or whenever you need a beat.",
    icon: "🌿",
    items: [
      { type: "youtube", id: "wWNaQr6RF8E", title: "4-7-8 Breathing — 1 Minute",          duration: "1 min", tag: "Breath" },
      { type: "youtube", id: "n6RbW2LtdFs", title: "Box Breathing — 1 Minute",             duration: "1 min", tag: "Breath" },
      { type: "youtube", id: "tEmt1Znux58", title: "Box Breathing for Stress Relief",      duration: "4 min", tag: "Breath" },
      { type: "youtube", id: "cEqZthCaMpo", title: "Mini Meditation: Breathe",             duration: "1 min", tag: "Reset" },
      { type: "youtube", id: "k0PSUDvLi8E", title: "7-Minute Meditation to Start Your Day", duration: "7 min", tag: "Morning" },
      { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga",                duration: "5 min", tag: "Movement" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix — 5 Minutes",          duration: "5 min", tag: "Movement" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  GUIDED MEDITATIONS — Longer sit-down sessions for breaks, before
  //  the workday, or to wind down at home.
  // ──────────────────────────────────────────────────────────────────
  guidedMeditations: {
    title: "Guided Meditations",
    subtitle: "10–20 minutes. Sit, settle, and let someone walk you through it.",
    icon: "🌼",
    items: [
      { type: "youtube", id: "DP3BE1ezThE", title: "Resolve to Evolve — 10-Minute Meditation",  duration: "10 min", tag: "Reset" },
      { type: "youtube", id: "O-6f5wQXSu8", title: "10-Minute Meditation for Anxiety",          duration: "10 min", tag: "Anxiety" },
      { type: "youtube", id: "d4S4twjeWTs", title: "Meditation for Inner Peace (YWA)",          duration: "13 min", tag: "Calm" },
      { type: "youtube", id: "4pLUleLdwY4", title: "Meditation for Anxiety (YWA)",              duration: "15 min", tag: "Anxiety" },
      { type: "youtube", id: "CscxGprl1yw", title: "Stillness for Stress Relief (YWA)",         duration: "15 min", tag: "Stress" },
      { type: "youtube", id: "MIr3RsUWrdo", title: "20-Minute Meditation: Clear the Clutter",   duration: "20 min", tag: "Stress" },
      { type: "spotify-playlist",  id: "37i9dQZF1DWZqd5JICZI0u", title: "Peaceful Meditation",  duration: "Playlist", tag: "Spotify" },
      { type: "youtube-playlist",  id: "PLui6Eyny-UzzG5qB0LNxyVh3Mu6GjYJC_", title: "Yoga With Adriene — Guided Meditations", duration: "Playlist", tag: "Mixed" },
      { type: "youtube-playlist",  id: "PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC", title: "Goodful — Meditation",                   duration: "Playlist", tag: "Mixed" },
      { type: "youtube-playlist",  id: "PLCQACBUblTbXFXY0YzA8KVWDNvZMBJodP", title: "Goodful — Relaxation & Stress Relief",   duration: "Playlist", tag: "Mixed" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  MOVEMENT — Gentle yoga and stretching that's friendly for bodies
  //  that spend the day sitting on the floor with little ones.
  // ──────────────────────────────────────────────────────────────────
  movement: {
    title: "Movement",
    subtitle: "Gentle yoga and stretching for tired backs, knees, and shoulders.",
    icon: "🧘",
    items: [
      { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga",            duration: "5 min",  tag: "Morning" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix — 5 Minutes",     duration: "5 min",  tag: "Stress" },
      { type: "youtube", id: "UEEsdXn8oG8", title: "Wake Up Yoga — 11 Minute Flow",    duration: "11 min", tag: "Morning" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  FOCUS MUSIC — For lesson planning, paperwork, parent emails, or
  //  any time you need to actually finish that thing on your list.
  // ──────────────────────────────────────────────────────────────────
  focusMusic: {
    title: "Focus Music",
    subtitle: "Background music for lesson planning, reports, and deep work.",
    icon: "🎧",
    items: [
      { type: "spotify-playlist", id: "37i9dQZF1DWZeKCadgRdKQ", title: "Deep Focus",              duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWXLeA8Omikj7", title: "Brain Food",              duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWWQRwui0ExPn", title: "Lofi Beats",              duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX8Uebhn9wzrS", title: "Chill Lofi Study Beats",  duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWVqfgj8NZEp1", title: "Coffee Table Jazz",       duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY", title: "Ambient Relaxation",      duration: "Playlist", tag: "Spotify" },
      { type: "youtube",          id: "jfKfPfyJRdk",            title: "Lofi Girl — Beats to Relax/Study", duration: "24/7 stream", tag: "YouTube" },
      { type: "youtube",          id: "HuFYqnbVbzY",            title: "Jazz Lofi Radio",         duration: "24/7 stream", tag: "YouTube" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  WIND DOWN — End-of-day or pre-sleep listening.
  // ──────────────────────────────────────────────────────────────────
  windDown: {
    title: "Wind Down",
    subtitle: "End-of-day audio to help you put the workday down.",
    icon: "🌙",
    items: [
      { type: "spotify-playlist", id: "37i9dQZF1DX2PQDq3PdrHQ", title: "Lofi Sleep",                duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX4PP3DA4J0N8", title: "Nature Sounds",             duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY", title: "Ambient Relaxation",        duration: "Playlist", tag: "Spotify" },
      { type: "youtube",          id: "MIr3RsUWrdo",            title: "20-Min Wind-Down Meditation", duration: "20 min", tag: "Meditation" },
      { type: "youtube",          id: "d4S4twjeWTs",            title: "Meditation for Inner Peace",  duration: "13 min", tag: "Meditation" },
    ],
  },
};

// Export so app.js can read this. Don't rename CONTENT.
window.CONTENT = CONTENT;
