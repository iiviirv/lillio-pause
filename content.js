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
//  Adding a Spotify item (note: 30-sec previews unless logged in):
//    1. In Spotify, click the (...) menu on a playlist, album, or track,
//       then Share, then Copy link. The ID is the long string that
//       follows "/playlist/", e.g. 37i9dQZF1DWZqd5JICZI0u
//    2. Add an entry with:
//         type: "spotify-playlist"   (or "spotify-album" / "spotify-track")
//         id:   "the_id_you_copied"
//
//  Adding a SoundCloud item (full playback, no login required):
//    1. Open the track or playlist on SoundCloud.
//    2. Copy the full URL from the address bar.
//    3. Add an entry with:
//         type: "soundcloud"
//         url:  "https://soundcloud.com/USERNAME/sets/SET_NAME"
//
//  Items render in the order listed. Keep titles short and friendly.
//  This file is automatically refreshed each Monday by a scheduled task.
//  Last updated: 2026-05-05
// =====================================================================

const CONTENT = {
  // UNDER 3 MINUTES: micro meditations and breath resets you can do
  // standing in the hallway. The shortest path back to a calm baseline.
  // Audio-only by default: tap play, listen, you don't need to look.
  under3: {
    title: "Under 3 Minutes",
    subtitle: "When you've got 60 seconds and a doorway. Breath resets, mini meditations, no commitment. Tap play and look back at the kids.",
    icon: "⚡",
    moods: ["stressed", "anxious"],
    items: [
      { type: "youtube", id: "wWNaQr6RF8E", title: "4-7-8 Breathing, 1 Minute",                  duration: "1 min",  tag: "Breath" },
      { type: "youtube", id: "n6RbW2LtdFs", title: "Box Breathing, 1 Minute",                     duration: "1 min",  tag: "Breath" },
      { type: "youtube", id: "cEqZthCaMpo", title: "Mini Meditation: Breathe",                    duration: "1 min",  tag: "Reset" },
      { type: "youtube", id: "vLhOGEnEedk", title: "2-Minute Guided Meditation to Release Stress", duration: "2 min", tag: "Stress" },
      { type: "youtube", id: "Xz224hIqwHM", title: "3-Minute Meditation for Stress Relief",       duration: "3 min", tag: "Stress" },
      { type: "youtube", id: "8Ffhv3-8Sjw", title: "3-Minute Breathing for Anxiety",              duration: "3 min", tag: "Anxiety" },
      { type: "youtube", id: "VzVpckjnOco", title: "3-Minute Relax and Relief",                   duration: "3 min", tag: "Calm" },
      { type: "youtube", id: "ACYZXD3Ap1M", title: "3-Minute Mindful Reset",                      duration: "3 min", tag: "Reset" },
      { type: "youtube", id: "tEmt1Znux58", title: "Box Breathing, Stress Relief (audio-friendly)", duration: "4 min", tag: "Breath" },
      { type: "spotify-playlist",  id: "37i9dQZF1DWZqd5JICZI0u", title: "Peaceful Meditation, sample any track", duration: "Audio playlist", tag: "Spotify" },
    ],
  },

  // MORNING: wake up and intention setting. The way you start the day
  // is the way the day starts back.
  morning: {
    title: "Morning",
    subtitle: "Start the day with a soft landing. Wake-up meditations, intention setting, and gentle morning movement.",
    icon: "🌅",
    moods: ["focus"],
    items: [
      { type: "youtube", id: "DaHH--jJBtg", title: "5-Minute Morning Energy (SELF)",          duration: "5 min",  tag: "Morning" },
      { type: "youtube", id: "wNgaaKM1FYA", title: "A Morning with Purpose & Intention",      duration: "5 min",  tag: "Intention" },
      { type: "youtube", id: "IuqLsYd-rQs", title: "5-Minute Guided Morning Meditation",      duration: "5 min",  tag: "Energy" },
      { type: "youtube", id: "k0PSUDvLi8E", title: "7-Minute Meditation to Start the Day",    duration: "7 min",  tag: "Morning" },
      { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga",                   duration: "5 min",  tag: "Movement" },
      { type: "youtube", id: "UEEsdXn8oG8", title: "Wake Up Yoga, 11-Minute Flow",            duration: "11 min", tag: "Movement" },
    ],
  },

  // QUICK BREAK: 5 to 7 minute mid-day breaks. Long enough to actually
  // shift gears, short enough to fit between activities.
  quickBreak: {
    title: "Quick Break",
    subtitle: "Mid-day, between activities, after a hard parent conversation. Five to seven minutes of doing nothing on purpose.",
    icon: "🌿",
    moods: ["stressed"],
    items: [
      { type: "youtube", id: "tEmt1Znux58", title: "Box Breathing for Stress Relief",     duration: "4 min",  tag: "Breath" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix, 5 Minutes",         duration: "5 min",  tag: "Stress" },
      { type: "youtube", id: "DaHH--jJBtg", title: "5-Minute Reset",                      duration: "5 min",  tag: "Reset" },
      { type: "youtube", id: "DP3BE1ezThE", title: "Resolve to Evolve, 10-Minute Reset",  duration: "10 min", tag: "Reset" },
      { type: "youtube", id: "O-6f5wQXSu8", title: "10-Minute Meditation for Anxiety",    duration: "10 min", tag: "Anxiety" },
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
      { type: "soundcloud",       url: "https://soundcloud.com/lofi_girl/sets/synthwave-ambient-chill-music",   title: "Lofi Girl: Chill Music to Sleep To", duration: "Set",     tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/spaspace-music/sets/ambient-lofi-and-nature-sounds", title: "Ambient & Nature Sounds (Spa Space)", duration: "Set",  tag: "SoundCloud" },
      { type: "spotify-playlist", id: "37i9dQZF1DX2PQDq3PdrHQ", title: "Lofi Sleep (Spotify, login for full)",          duration: "Playlist", tag: "Spotify" },
    ],
  },

  // SOUNDSCAPES: ambient audio, no narration. For naptime, focus, or
  // anyone who finds guided meditation too talky. SoundCloud and YouTube
  // play in full for everyone; Spotify is preview-only without login.
  soundscapes: {
    title: "Soundscapes",
    subtitle: "Just sound, no narration. Rain on a window, a forest at dusk, a fireplace.",
    icon: "🌧️",
    moods: ["tired", "focus", "stressed"],
    items: [
      { type: "soundcloud",       url: "https://soundcloud.com/spaspace-music/sets/ambient-lofi-and-nature-sounds", title: "Ambient Lofi & Nature Sounds (Spa Space)", duration: "Set", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/soothingrelaxation/deep-relaxing-music-vol-1-ambient-music-for-sleep-meditation-focus-relaxation", title: "Deep Relaxing Music Vol. 1 (Soothing Relaxation)", duration: "Track", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/lofi_girl/sets/synthwave-ambient-chill-music", title: "Lofi Girl: Synth Ambient", duration: "Set", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/noiseofdreamsnetwork/sets/lofi-ambient", title: "Lofi Ambient (Noise of Dreams)", duration: "Set", tag: "SoundCloud" },
      { type: "youtube",          id: "jfKfPfyJRdk",                                                title: "Lofi Girl, beats radio (24/7)",  duration: "Live", tag: "YouTube" },
      { type: "spotify-playlist", id: "37i9dQZF1DX4PP3DA4J0N8",                                     title: "Nature Sounds (Spotify, login for full)", duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY",                                     title: "Ambient Relaxation (Spotify, login for full)", duration: "Playlist", tag: "Spotify" },
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
  // time you need to actually finish that thing on your list. YouTube
  // and SoundCloud play in full for everyone, no login required.
  focusMusic: {
    title: "Focus Music",
    subtitle: "Background music for lesson planning, reports, and deep work. Press play and don't think about it.",
    icon: "🎧",
    moods: ["focus"],
    items: [
      { type: "youtube",          id: "jfKfPfyJRdk",            title: "Lofi Girl, beats radio (24/7)",  duration: "Live",     tag: "YouTube" },
      { type: "youtube",          id: "HuFYqnbVbzY",            title: "Jazz Lofi Radio (24/7)",          duration: "Live",     tag: "YouTube" },
      { type: "soundcloud",       url: "https://soundcloud.com/dawning-lofi/sets/lofi-focus-music-for-work", title: "Lofi Focus Music for Work (Dawning Lofi)", duration: "Set", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/klangspot/sets/lofi-music-for-work",          title: "Lofi for Work Productivity (Klangspot)",   duration: "Set", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/ujesh/sets/lo-fi-deep-focus-work-study",      title: "Lo-Fi Deep Focus Work & Study",            duration: "Set", tag: "SoundCloud" },
      { type: "spotify-playlist", id: "37i9dQZF1DWZeKCadgRdKQ", title: "Deep Focus (Spotify, login for full)",     duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWXLeA8Omikj7", title: "Brain Food (Spotify, login for full)",      duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DWVqfgj8NZEp1", title: "Coffee Table Jazz (Spotify, login for full)", duration: "Playlist", tag: "Spotify" },
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
