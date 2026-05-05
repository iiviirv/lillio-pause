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
//  Adding a hosted audio item (direct MP3, no third party):
//    Recommended source: Pixabay Music. All tracks are royalty-free,
//    free for commercial use, no attribution required.
//    1. Find a track at https://pixabay.com/music/
//    2. View the page source. Search for "cdn.pixabay.com" and "audio_"
//       to find the MP3 URL.
//    3. Search for "og:image" in the same source to grab the cover URL.
//    4. Add an entry with:
//         type: "audio"
//         url:  "https://cdn.pixabay.com/download/audio/.../filename.mp3"
//         art:  "https://cdn.pixabay.com/audio/.../200x200.jpg"
//
//  Items render in the order listed. Keep titles short and friendly.
//  This file is automatically refreshed each Monday by a scheduled task.
//  Last updated: 2026-05-05
// =====================================================================

const CONTENT = {
  // UNDER 3 MINUTES: micro meditations and breath resets you can do
  // standing in the hallway. The shortest path back to a calm baseline.
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
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2025/08/12/audio_56c6ffbee9.mp3?filename=meditativetiger-meditation-bells-for-anxiety-relief-echoes-388624.mp3", art: "https://cdn.pixabay.com/audio/2025/08/12/14-17-30-697_200x200.png", title: "Meditation Bells for Anxiety Relief", duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/02/16/audio_e0e73cd7eb.mp3?filename=the_mountain-breathing-calm-139520.mp3", art: "https://cdn.pixabay.com/audio/2023/02/16/20-16-26-558_200x200.jpg", title: "Breathing Calm", duration: "Track", tag: "Pixabay" },
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
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2025/06/04/audio_064e539995.mp3?filename=leberch-relaxation-morning-354986.mp3", art: "https://cdn.pixabay.com/audio/2025/06/04/17-15-50-309_200x200.jpg", title: "Relaxation Morning (solo piano)", duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2025/07/23/audio_b0cf6052c9.mp3?filename=nastelbom-good-morning-379069.mp3",        art: "https://cdn.pixabay.com/audio/2025/07/23/13-13-33-814_200x200.jpg", title: "Good Morning",                 duration: "Track", tag: "Pixabay" },
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
    subtitle: "Mid-day, between activities, after a hard parent conversation. A few minutes of doing nothing on purpose.",
    icon: "🌿",
    moods: ["stressed"],
    items: [
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/27/audio_29438b848e.mp3?filename=leberch-calm-509708.mp3",                  art: "https://cdn.pixabay.com/audio/2026/03/31/14-05-49-848_200x200.jpg", title: "Calm",                      duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2022/11/11/audio_84306ee149.mp3?filename=music_for_video-please-calm-my-mind-125566.mp3", art: "https://cdn.pixabay.com/gradients/93d9cd-dd8b56_200x200.png", title: "Please Calm My Mind",     duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/05/audio_28d1f64b84.mp3?filename=prettyjohn1-calm-495675.mp3",              art: "https://cdn.pixabay.com/audio/2026/03/05/10-19-39-434_200x200.jpeg", title: "Calm (ambient)",          duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2025/08/12/audio_c88f5be9d0.mp3?filename=meditativetiger-mindful-breathing-bowl-guidance-388628.mp3", art: "https://cdn.pixabay.com/audio/2025/08/12/14-18-13-452_200x200.png", title: "Mindful Breathing Bowl Guidance", duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/31/audio_73e67207be.mp3?filename=meditativetiger-deep-mindful-breathing-waves-511815.mp3", art: "https://cdn.pixabay.com/audio/2026/03/31/12-29-20-278_200x200.png", title: "Deep Mindful Breathing Waves", duration: "Track", tag: "Pixabay" },
      { type: "youtube", id: "tEmt1Znux58", title: "Box Breathing for Stress Relief",     duration: "4 min",  tag: "Breath" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix, 5 Minutes",         duration: "5 min",  tag: "Stress" },
      { type: "youtube", id: "DaHH--jJBtg", title: "5-Minute Reset",                      duration: "5 min",  tag: "Reset" },
      { type: "youtube", id: "DP3BE1ezThE", title: "Resolve to Evolve, 10-Minute Reset",  duration: "10 min", tag: "Reset" },
      { type: "youtube", id: "O-6f5wQXSu8", title: "10-Minute Meditation for Anxiety",    duration: "10 min", tag: "Anxiety" },
    ],
  },

  // GUIDED MEDITATIONS: longer sit-down sessions for breaks, before the
  // workday, or to wind down at home. Voice-led, not just music.
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
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2024/11/11/audio_5185f3b518.mp3?filename=leberch-relaxing-sleep-263067.mp3",         art: "https://cdn.pixabay.com/audio/2024/11/11/11-21-45-89_200x200.jpg", title: "Relaxing Sleep",        duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2024/10/24/audio_6fee608f36.mp3?filename=leberch-sleep-meditation-254767.mp3",       art: "https://cdn.pixabay.com/audio/2024/10/24/23-03-31-247_200x200.jpg", title: "Sleep Meditation",      duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2024/11/11/audio_6af72a9085.mp3?filename=leberch-sleep-262907.mp3",                  art: "https://cdn.pixabay.com/audio/2024/11/11/00-10-26-411_200x200.jpg", title: "Sleep (electronic)",    duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/03/20/audio_e7070220f5.mp3?filename=the_mountain-baby-sleep-143300.mp3",        art: "https://cdn.pixabay.com/audio/2023/03/20/06-05-35-204_200x200.jpg", title: "Baby Sleep (modern classical)", duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2024/10/16/audio_e0d3f6ac2a.mp3?filename=leberch-peaceful-meditation-251475.mp3",    art: "https://cdn.pixabay.com/audio/2024/10/16/08-34-01-259_200x200.jpg", title: "Peaceful Meditation",   duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/30/audio_44ff1724c0.mp3?filename=everything_is_dead-peaceful-511241.mp3",    art: "https://cdn.pixabay.com/audio/2026/03/30/14-39-55-32_200x200.jpg",  title: "Peaceful (ambient)",    duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/05/audio_83beb192b3.mp3?filename=quietphase-peaceful-ambient-492359.mp3",    art: "https://cdn.pixabay.com/audio/2026/02/27/09-01-04-195_200x200.png", title: "Peaceful Ambient",      duration: "Track", tag: "Pixabay" },
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
  // anyone who finds guided meditation too talky.
  soundscapes: {
    title: "Soundscapes",
    subtitle: "Just sound, no narration. Hosted directly or streamed from creators we trust.",
    icon: "🌧️",
    moods: ["tired", "focus", "stressed"],
    items: [
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/15/audio_1b8d731335.mp3?filename=jonasblakewood-background-music-519872.mp3", art: "https://cdn.pixabay.com/audio/2026/04/15/12-05-53-712_200x200.png", title: "Background (ambient)",          duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/05/01/audio_ff8edc19a6.mp3?filename=jonasblakewood-nature-519884.mp3",          art: "https://cdn.pixabay.com/audio/2026/04/15/12-33-54-218_200x200.jpg", title: "Nature (synthwave ambient)",    duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_b730755dfb.mp3?filename=leberch-cosmos-516618.mp3",                 art: "https://cdn.pixabay.com/audio/2026/04/09/08-01-49-854_200x200.jpg", title: "Cosmos (ambient)",              duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/18/audio_3eb96b86d8.mp3?filename=jonasblakewood-inspiring-517928.mp3",       art: "https://cdn.pixabay.com/audio/2026/04/11/08-31-34-762_200x200.png", title: "Inspiring (ambient)",           duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/28/audio_d9c302b745.mp3?filename=atlasaudio-calm-nature-510279.mp3",         art: "https://cdn.pixabay.com/audio/2026/04/09/19-53-04-854_200x200.jpg", title: "Calm Nature (solo piano)",      duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_93d9e7ab7b.mp3?filename=leberch-documentary-nature-516419.mp3",     art: "https://cdn.pixabay.com/audio/2026/04/08/18-22-48-120_200x200.jpg", title: "Documentary Nature",            duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_a53bfc4928.mp3?filename=atlasaudio-nature-519434.mp3",              art: "https://cdn.pixabay.com/audio/2026/04/14/12-34-05-450_200x200.jpg", title: "Nature (modern classical)",     duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/04/27/audio_a164e28cb7.mp3?filename=the_mountain-peaceful-147904.mp3",          art: "https://cdn.pixabay.com/audio/2023/04/27/16-38-45-680_200x200.png", title: "Peaceful (modern classical)",   duration: "Track", tag: "Pixabay" },
      { type: "soundcloud",       url: "https://soundcloud.com/spaspace-music/sets/ambient-lofi-and-nature-sounds", title: "Ambient Lofi & Nature Sounds (Spa Space)", duration: "Set", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/soothingrelaxation/deep-relaxing-music-vol-1-ambient-music-for-sleep-meditation-focus-relaxation", title: "Deep Relaxing Music Vol. 1", duration: "Track", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/lofi_girl/sets/synthwave-ambient-chill-music",      title: "Lofi Girl: Synth Ambient", duration: "Set", tag: "SoundCloud" },
      { type: "soundcloud",       url: "https://soundcloud.com/noiseofdreamsnetwork/sets/lofi-ambient",            title: "Lofi Ambient (Noise of Dreams)", duration: "Set", tag: "SoundCloud" },
      { type: "youtube",          id: "jfKfPfyJRdk",                                                               title: "Lofi Girl, beats radio (24/7)",  duration: "Live", tag: "YouTube" },
      { type: "spotify-playlist", id: "37i9dQZF1DX4PP3DA4J0N8",                                                    title: "Nature Sounds (Spotify, login for full)", duration: "Playlist", tag: "Spotify" },
      { type: "spotify-playlist", id: "37i9dQZF1DX3Ogo9pFvBkY",                                                    title: "Ambient Relaxation (Spotify, login for full)", duration: "Playlist", tag: "Spotify" },
    ],
  },

  // MOVEMENT: gentle yoga and stretching for bodies that spend the day
  // sitting on the floor with little ones.
  movement: {
    title: "Movement",
    subtitle: "Gentle yoga and stretching for tired backs, knees, and shoulders. Soft music for your own home practice.",
    icon: "🧘",
    moods: ["stressed"],
    items: [
      { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga",         duration: "5 min",  tag: "Morning" },
      { type: "youtube", id: "jOfshreyu4w", title: "Quick Stress Fix, 5 Minutes",   duration: "5 min",  tag: "Stress" },
      { type: "youtube", id: "UEEsdXn8oG8", title: "Wake Up Yoga, 11 Minute Flow",  duration: "11 min", tag: "Morning" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/26/audio_a6cbfd02c9.mp3?filename=leberch-yoga-509070.mp3", art: "https://cdn.pixabay.com/audio/2026/04/01/12-19-29-872_200x200.jpg", title: "Yoga (ambient)",        duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/27/audio_a7b94094ca.mp3?filename=leberch-yoga-509709.mp3", art: "https://cdn.pixabay.com/audio/2026/03/31/13-35-54-412_200x200.jpg", title: "Yoga (meditation)",     duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/03/29/audio_e87d91bf16.mp3?filename=leberch-yoga-510555.mp3", art: "https://cdn.pixabay.com/audio/2026/04/02/21-05-39-643_200x200.jpg", title: "Yoga Flow",             duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2025/12/12/audio_6f62cfbacf.mp3?filename=nastelbom-yoga-446548.mp3", art: "https://cdn.pixabay.com/audio/2025/12/02/23-24-12-113_200x200.png", title: "Yoga (slow)",           duration: "Track", tag: "Pixabay" },
    ],
  },

  // FOCUS MUSIC: for lesson planning, paperwork, parent emails, or any
  // time you need to actually finish that thing on your list.
  focusMusic: {
    title: "Focus Music",
    subtitle: "Background music for lesson planning, reports, and deep work. Press play and don't think about it.",
    icon: "🎧",
    moods: ["focus"],
    items: [
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2024/11/26/audio_24ad329374.mp3?filename=lofcosmos-focus-lofi-269097.mp3", art: "https://cdn.pixabay.com/audio/2024/11/26/17-15-12-189_200x200.jpg", title: "Focus Lofi",                 duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2024/11/26/audio_dd17a363fa.mp3?filename=lofcosmos-focus-glow-lofi-269098.mp3", art: "https://cdn.pixabay.com/audio/2024/11/26/17-14-13-985_200x200.jpg", title: "Focus Glow (lofi)",      duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_f7944347cd.mp3?filename=fassounds-reviews-lofi-chill-focus-beat-516080.mp3", art: "https://cdn.pixabay.com/audio/2026/04/08/04-51-13-925_200x200.jpg", title: "Reviews (lofi chill focus beat)", duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/01/28/audio_31be9edfbf.mp3?filename=the_mountain-inspiring-focus-137045.mp3", art: "https://cdn.pixabay.com/audio/2023/01/28/16-58-37-442_200x200.jpg", title: "Inspiring Focus (modern classical)", duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/02/24/audio_5b1df4684b.mp3?filename=the_mountain-focus-pop-140470.mp3", art: "https://cdn.pixabay.com/audio/2023/02/24/16-14-26-318_200x200.jpg", title: "Focus Pop",                  duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_170768f02d.mp3?filename=pulsebox-lofi-production-522875.mp3", art: "https://cdn.pixabay.com/audio/2026/04/21/12-41-41-688_200x200.png", title: "Lofi Production",           duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_aa8e1e099b.mp3?filename=pulsebox-lofi-vlog-522887.mp3", art: "https://cdn.pixabay.com/audio/2026/04/21/12-41-06-274_200x200.png", title: "Lofi Vlog",                  duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_b2f30c12e1.mp3?filename=pulsebox-lofi-night-522890.mp3", art: "https://cdn.pixabay.com/audio/2026/04/21/12-40-59-_200x200.png", title: "Lofi Night",                 duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_9de3e424c6.mp3?filename=pulsebox-lofi-cinematic-522892.mp3", art: "https://cdn.pixabay.com/audio/2026/04/21/12-40-51-841_200x200.png", title: "Lofi Cinematic",         duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/21/audio_cfbf0c5f00.mp3?filename=pulsebox-lofi-retro-522893.mp3", art: "https://cdn.pixabay.com/audio/2026/04/21/12-40-46-687_200x200.png", title: "Lofi Retro",                 duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2026/04/02/audio_bd62ee26cb.mp3?filename=the_mountain-study-513400.mp3",                 art: "https://cdn.pixabay.com/audio/2026/04/03/16-15-03-732_200x200.jpg", title: "Study (beats)",              duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/03/20/audio_6dbd737342.mp3?filename=the_mountain-cosmic-study-143288.mp3",          art: "https://cdn.pixabay.com/audio/2023/03/20/06-16-37-607_200x200.png", title: "Cosmic Study (ambient)",     duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/03/04/audio_2b914d9a86.mp3?filename=the_mountain-natural-study-141476.mp3",         art: "https://cdn.pixabay.com/audio/2023/03/04/10-11-37-332_200x200.jpg", title: "Natural Study",              duration: "Track", tag: "Pixabay" },
      { type: "audio", url: "https://cdn.pixabay.com/download/audio/2023/04/19/audio_fc0596ff1e.mp3?filename=the_mountain-space-study-146969.mp3",           art: "https://cdn.pixabay.com/audio/2023/04/19/17-49-44-168_200x200.jpg", title: "Space Study",                duration: "Track", tag: "Pixabay" },
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
