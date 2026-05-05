// =====================================================================
//  Lillio Pause: content library
//  ---------------------------------------------------------------------
//  This is the only file you need to edit when adding, removing, or
//  swapping items.
//
//  Adding a YouTube video:
//    1. Open the video on YouTube.
//    2. Copy the ID from the URL (the part after "v=").
//         e.g. https://www.youtube.com/watch?v=4C-gxOE0j7s   ->   4C-gxOE0j7s
//       For a playlist, copy the part after "list=".
//    3. Add a new entry to the relevant category. Set:
//         type: "youtube"            (or "youtube-playlist")
//         id:   "the_id_you_copied"
//
//  Adding a Spotify item:
//    1. In Spotify, click the (...) menu on a playlist, album, or track,
//       then Share, then Copy link. The ID is the long string that
//       follows "/playlist/", e.g. 37i9dQZF1DWZqd5JICZI0u
//    2. Add an entry with:
//         type: "spotify-playlist"   (or "spotify-album" / "spotify-track")
//         id:   "the_id_you_copied"
//
//  Items render in the order listed. Keep titles short and friendly.
//  This file is automatically refreshed each Monday by a scheduled task.
//  Last updated: 2026-05-05
// =====================================================================

const CONTENT = {
  // QUICK RESETS: 1 to 5 minute breathers for between activities, during
  // nap time, or before a tough conversation with a parent.
  quickResets: {
    title: "Quick Resets",
    subtitle: "1 to 5 minutes. Use between activities or whenever you need a beat.",
    icon: "🌿",
    moods: ["stressed", "anxious"],
    items: [
      { type: "youtube", id: "wWNaQr6RF8E", title: "4-7-8 Breathing, 1 Minute",      duration: "1 min", tag: "Breath" },
      { type: "youtube", id: "n6RbW2LtdFs", title: "Box Breathing, 1 Minute",         duration: "1 min", tag: "Breath" },
      { type: "youtube", id: "tEmt1Znux58", title: "Box Breathing for Stress Relief", duration: "4 min", tag: "Breath" },
      { type: "youtube", id: "cEqZthCaMpo", title: "Mini Meditation: Breathe",        duration: "1 min", tag: "Reset" },
      { type: "youtube", id: "k0PSUDvLi8E", title: "7-Minute Meditation to Start the Day", duration: "7 min", tag: "Morning" },
      { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga",           duration: "5 min", tag: "Movement" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix, 5 Minutes",     duration: "5 min", tag: "Movement" },
    ],
  },

  // GUIDED MEDITATIONS: longer sit-down sessions for breaks, before the
  // workday, or to wind down at home.
  guidedMeditations: {
    title: "Guided Meditations",
    subtitle: "10 to 20 minutes. Sit, settle, and let someone walk you through it.",
    icon: "🌼",
    moods: ["anxious", "stressed"],
    items: [
      { type: "youtube", id: "DP3BE1ezThE", title: "Resolve to Evolve, 10-Minute Meditation", duration: "10 min", tag: "Reset" },
      { type: "youtube", id: "O-6f5wQXSu8", title: "10-Minute Meditation for Anxiety",        duration: "10 min", tag: "Anxiety" },
      { type: "youtube", id: "d4S4twjeWTs", title: "Meditation for Inner Peace",              duration: "13 min", tag: "Calm" },
      { type: "youtube", id: "4pLUleLdwY4", title: "Meditation for Anxiety",                  duration: "15 min", tag: "Anxiety" },
      { type: "youtube", id: "CscxGprl1yw", title: "Stillness for Stress Relief",             duration: "15 min", tag: "Stress" },
      { type: "youtube", id: "MIr3RsUWrdo", title: "20-Minute Meditation: Clear the Clutter", duration: "20 min", tag: "Stress" },
      { type: "spotify-playlist",  id: "37i9dQZF1DWZqd5JICZI0u", title: "Peaceful Meditation",                   duration: "Playlist", tag: "Spotify" },
      { type: "youtube-playlist",  id: "PLui6Eyny-UzzG5qB0LNxyVh3Mu6GjYJC_", title: "Yoga With Adriene Meditations", duration: "Playlist", tag: "Mixed" },
      { type: "youtube-playlist",  id: "PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC", title: "Goodful Meditations",            duration: "Playlist", tag: "Mixed" },
      { type: "youtube-playlist",  id: "PLCQACBUblTbXFXY0YzA8KVWDNvZMBJodP", title: "Goodful Stress Relief",          duration: "Playlist", tag: "Mixed" },
    ],
  },

  // SLEEP & WIND DOWN: end-of-day audio, sleep stories, and pre-sleep
  // meditations.
  sleepWindDown: {
    title: "Sleep & Wind Down",
    subtitle: "Put the workday down. Sleep meditations, soft audio, and the gentle voice of someone who isn't asking you for anything.",
    icon: "🌙",
    moods: ["tired"],
    items: [
      { type: "youtube",          id: "N4qCFFBrrgk",            title: "Floating Amongst the Stars (sleep meditation)", duration: "30 min",   tag: "Sleep" },
      { type: "youtube",          id: "MIr3RsUWrdo",            title: "20-Minute Wind-Down Meditation",                duration: "20 min",   tag: "Meditation" },
      { type: "youtube",          id: "d4S4twjeWTs",            title: "Meditation for Inner Peace",                    duration: "13 min",   tag: "Meditation" },
      { type: "youtube-playlist", id: "PLwRp13WDIrMPzLqtyvvPrs7sMR_lvZ8Bf", title: "Jason Stephenson Sleep Meditations", duration: "Playlist", tag: "Sleep" },
      { type: "spotify-playlist", id: "37i9dQZF1DX2PQDq3PdrHQ", title: "Lofi Sleep",                                    duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX4PP3DA4J0N8", title: "Nature Sounds for Sleep",                       duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY", title: "Ambient Relaxation",                            duration: "Playlist", tag: "Spotify" },
    ],
  },

  // SOUNDSCAPES: ambient audio, no narration. For naptime, focus, or
  // anyone who finds guided meditation too talky.
  soundscapes: {
    title: "Soundscapes",
    subtitle: "Just sound, no narration. Rain on a window, a forest at dusk, a fireplace.",
    icon: "🌧️",
    moods: ["tired", "focus", "stressed"],
    items: [
      { type: "spotify-playlist", id: "37i9dQZF1DX4PP3DA4J0N8", title: "Nature Sounds",          duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY", title: "Ambient Relaxation",     duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWZeKCadgRdKQ", title: "Deep Focus (Ambient)",   duration: "Playlist", tag: "Spotify" },
      { type: "youtube",          id: "jfKfPfyJRdk",            title: "Lofi Girl, beats radio", duration: "Live",     tag: "YouTube" },
    ],
  },

  // MOVEMENT: gentle yoga and stretching for bodies that spend the day
  // sitting on the floor with little ones.
  movement: {
    title: "Movement",
    subtitle: "Gentle yoga and stretching for tired backs, knees, and shoulders.",
    icon: "🧘",
    moods: ["stressed"],
    items: [
      { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga",         duration: "5 min",  tag: "Morning" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix, 5 Minutes",   duration: "5 min",  tag: "Stress" },
      { type: "youtube", id: "UEEsdXn8oG8", title: "Wake Up Yoga, 11 Minute Flow",  duration: "11 min", tag: "Morning" },
    ],
  },

  // FOCUS MUSIC: for lesson planning, paperwork, parent emails, or any
  // time you need to actually finish that thing on your list.
  focusMusic: {
    title: "Focus Music",
    subtitle: "Background music for lesson planning, reports, and deep work.",
    icon: "🎧",
    moods: ["focus"],
    items: [
      { type: "spotify-playlist", id: "37i9dQZF1DWZeKCadgRdKQ", title: "Deep Focus",              duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWXLeA8Omikj7", title: "Brain Food",              duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWWQRwui0ExPn", title: "Lofi Beats",              duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX8Uebhn9wzrS", title: "Chill Lofi Study Beats",  duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWVqfgj8NZEp1", title: "Coffee Table Jazz",       duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY", title: "Ambient Relaxation",      duration: "Playlist", tag: "Spotify" },
      { type: "youtube",          id: "jfKfPfyJRdk",            title: "Lofi Girl, beats radio",  duration: "Live",     tag: "YouTube" },
      { type: "youtube",          id: "HuFYqnbVbzY",            title: "Jazz Lofi Radio",         duration: "Live",     tag: "YouTube" },
    ],
  },

  // FOR THE CLASSROOM: meditations and movement breaks designed for
  // educators to do *with* their kids, not just for themselves.
  classroom: {
    title: "For the Classroom",
    subtitle: "Use these with the kids. Brain breaks, calm-down moments, and silly-but-grounding movement.",
    icon: "👧",
    moods: [],
    items: [
      { type: "youtube",          id: "wf5K3pP2IUQ",            title: "Be the Pond (Cosmic Kids Zen Den)",          duration: "5 min",    tag: "Kids" },
      { type: "youtube",          id: "ixeuFRqzlNk",            title: "Swirling, meditation for kids (GoNoodle)",   duration: "4 min",    tag: "Kids" },
      { type: "youtube",          id: "bRkILioT_NA",            title: "Learn to Bring Down Stress (GoNoodle)",      duration: "4 min",    tag: "Kids" },
      { type: "youtube",          id: "jp7B7CEqRYk",            title: "Let's Unwind, Flow meditation (GoNoodle)",   duration: "5 min",    tag: "Kids" },
      { type: "youtube-playlist", id: "PL8snGkhBF7ngDp1oJtx5VcjwatxZn8xLK", title: "Cosmic Kids Zen Den (mindfulness)", duration: "Playlist", tag: "Kids" },
    ],
  },
};

// Export so app.js can read this. Don't rename CONTENT.
window.CONTENT = CONTENT;
