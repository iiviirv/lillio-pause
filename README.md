# Lillio Pause

A free, no-login wellness page for the Lillio team. Embedded YouTube meditations and sleep stories, Spotify focus playlists and soundscapes, classroom-friendly mindfulness, and a customizable Pomodoro timer.

Live at https://lillio-pause.netlify.app, deployed automatically from the `main` branch of this repo.

## What's in the box

- `index.html` — the page shell
- `styles.css` — Lillio brand styling (Poppins + Inter, coral / gold / mint palette pulled from lillio.com)
- `app.js` — sidebar navigation, search, mood filter, favorites, content rendering, Pomodoro timer
- `content.js` — **the only file you'll edit regularly**, the curated list of videos and playlists

## Local preview

```bash
# from inside the lillio-pause folder
python3 -m http.server 8000
# then open http://localhost:8000
```

YouTube and Spotify embeds prefer to be served over HTTP rather than `file://`, so use the local server above instead of opening `index.html` directly.

## How deploys work

`main` is connected to Netlify for continuous deployment. Push a commit, Netlify rebuilds within ~30 seconds.

A scheduled task (Claude / Cowork) runs every Monday at 9 AM. It clones this repo, researches new high-quality content from trusted creators, appends 3 to 5 fresh items to `content.js`, commits, and pushes. Netlify auto-deploys the result. No manual steps from anyone.

## Editing content

All content lives in `content.js`. Each top-level key is a category. The category object has:

```js
{
  title: "Quick Resets",
  subtitle: "Short, friendly description.",
  icon: "🌿",
  moods: ["stressed", "anxious"],   // optional, used by the mood filter on Today's Picks
  items: [ ... ]
}
```

### Adding a YouTube video

1. Open the video on YouTube.
2. Copy the ID from the URL (the part after `v=`).
   - `https://www.youtube.com/watch?v=4C-gxOE0j7s` becomes `4C-gxOE0j7s`
3. Add an entry:

   ```js
   { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga", duration: "5 min", tag: "Movement" },
   ```

### Adding a YouTube playlist

```js
{ type: "youtube-playlist", id: "PLCQACBUblTbXFXY0YzA8KVWDNvZMBJodP", title: "Goodful Stress Relief", duration: "Playlist", tag: "Mixed" },
```

### Adding a Spotify playlist

1. In Spotify, click the `…` menu next to a playlist, then Share, then Copy link.
2. The ID is the long string after `/playlist/`.
3. Add an entry:

   ```js
   { type: "spotify-playlist", id: "37i9dQZF1DWZeKCadgRdKQ", title: "Deep Focus", duration: "Playlist", tag: "Spotify" },
   ```

   `type` can also be `spotify-album` or `spotify-track`.

### Adding a new category

Add a new top-level key to the `CONTENT` object. Required fields are `title`, `subtitle`, `icon`, `items`. Optional `moods` array maps the category to mood-filter chips on the Today's Picks tab.

You'll also want to add a sidebar entry in `index.html` and a corresponding emoji. Search for `<button class="nav-item" data-target=` and follow the existing pattern.

## A note on the embeds

YouTube content is embedded via `youtube-nocookie.com` (the privacy-enhanced domain) and is permitted on websites under YouTube's standard embed terms. Don't run paid ads on the page itself and you're fine.

Spotify embeds are free and don't require a Spotify login. Listeners without Spotify accounts get 30-second previews of each track. Listeners with free or paid Spotify accounts get full playback.

We never collect any data about who's watching or listening. There's no analytics on this page.

## Customizing the brand

Colors and typography all live in CSS variables at the top of `styles.css`. Change them once, the whole page updates.

```css
:root {
  --coral: #f76363;
  --gold:  #bc8d16;
  --mint:  #5dba8d;
  /* ... */
}
```

The header logo is the actual Lillio wordmark from the lillio.com Contentful CDN. To swap it for a different file, edit the `<img>` at the top of `index.html`.

## Pomodoro timer behavior

- Default: 25 min focus, 5 min short break, 15 min long break every 4th cycle.
- All four intervals are user-configurable.
- Settings persist in the user's browser (localStorage).
- A gentle chime plays at the end of each interval (toggleable).
- Auto-start the next interval is off by default.

## Slack DM link

The "DM Vahid in Slack" button at the bottom of the sidebar links to a Slack URL defined as `SLACK_DM_URL` near the top of `app.js`. Update that constant if Vahid's Slack ID or workspace changes.

## License & credits

All meditation videos belong to their YouTube creators (Yoga With Adriene, Goodful, The Mindfulness Teacher, Lofi Girl, Cosmic Kids, GoNoodle, Jason Stephenson, etc.) and all music belongs to the artists on Spotify. This page just embeds, we don't host or rehost any media.
