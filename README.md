# Lillio Pause

A free, no-login wellness page for Lillio educators. Embedded YouTube meditations, Spotify focus playlists, and a customizable Pomodoro timer — all in one quiet, on-brand spot.

Built as a static site. Four files, zero backend, zero database. You drop the folder anywhere that serves static HTML.

## What's in the box

- `index.html` — the page shell
- `styles.css` — Lillio-brand styling (Poppins + Inter, coral/gold/mint palette pulled from lillio.com)
- `app.js` — tab navigation, embed rendering, Pomodoro timer
- `content.js` — **the only file you'll edit regularly** — the curated list of videos and playlists

## Local preview

Just open `index.html` in a browser. Most things work, but YouTube and Spotify embeds prefer to be served over HTTP rather than `file://`. To get a faithful preview:

```bash
# from inside the lillio-pause folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Netlify (recommended, ~2 minutes)

1. Sign in at https://app.netlify.com.
2. Click **Add new site → Deploy manually**.
3. Drag the entire `lillio-pause` folder onto the upload area.
4. Done. Netlify gives you a URL like `https://lillio-pause-xyz.netlify.app`. You can attach a custom domain (e.g. `pause.lillio.com`) under Site settings → Domain management.

To redeploy after editing `content.js`, drag the folder again — or connect the folder to a GitHub repo for auto-deploys on push.

## Deploy to Vercel

1. Sign in at https://vercel.com.
2. Click **Add new → Project → Import** and point it at a GitHub repo containing this folder, **or** use the Vercel CLI: `npm i -g vercel && vercel` from inside the folder.
3. No build settings needed — it's a static site.

## Updating the content library

All content lives in `content.js`. The file is heavily commented and should feel approachable. Each category is just an array of items.

### Adding a YouTube video

1. Open the video on YouTube.
2. Copy the ID — the part after `v=` in the URL.
   - `https://www.youtube.com/watch?v=4C-gxOE0j7s` → `4C-gxOE0j7s`
3. Add an entry to the relevant category in `content.js`:

   ```js
   { type: "youtube", id: "4C-gxOE0j7s", title: "5-Minute Morning Yoga", duration: "5 min", tag: "Movement" },
   ```

### Adding a YouTube playlist

```js
{ type: "youtube-playlist", id: "PLCQACBUblTbXFXY0YzA8KVWDNvZMBJodP", title: "Goodful: Stress Relief", duration: "Playlist", tag: "Mixed" },
```

### Adding a Spotify playlist

1. In Spotify (web or desktop), click `•••` next to the playlist → **Share → Copy link to playlist**.
2. The ID is the long string after `/playlist/`.
   - `https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ` → `37i9dQZF1DWZeKCadgRdKQ`
3. Add an entry:

   ```js
   { type: "spotify-playlist", id: "37i9dQZF1DWZeKCadgRdKQ", title: "Deep Focus", duration: "Playlist", tag: "Spotify" },
   ```

   `type` can also be `spotify-album` or `spotify-track`.

### Adding a new category

Add a new top-level key to the `CONTENT` object in `content.js`. It needs `title`, `subtitle`, optional `icon`, and an `items` array. The tab and section will appear automatically.

```js
breathwork: {
  title: "Breathwork",
  subtitle: "Just the breath, nothing else.",
  icon: "🌬️",
  items: [
    { type: "youtube", id: "wWNaQr6RF8E", title: "4-7-8 Breathing", duration: "1 min", tag: "Breath" },
  ],
},
```

## A note on the embeds

- **YouTube** is embedded via `youtube-nocookie.com` (the privacy-enhanced domain) and is permitted on websites under YouTube's standard embed terms. Don't run paid ads on the page itself and you're fine.
- **Spotify** embeds are free and don't require a Spotify login. Users without Spotify accounts get 30-second previews of each track; users with free accounts get full playback.
- We never collect any data about who's watching or listening — there's no analytics on this page.

## Customizing the brand

Colors and typography all live in CSS variables at the top of `styles.css`. Change them once, the whole page updates.

```css
:root {
  --coral: #f76363;
  --gold:  #bc8d16;
  --mint:  #75d1a3;
  /* ... */
}
```

The header logo mark is just an "L" in a coral square — replace the `.brand-mark` div in `index.html` with an `<img>` if you want to drop in a real logo file.

## Pomodoro timer behavior

- Default: 25 min focus / 5 min short break, with a 15 min long break every 4th cycle.
- All four intervals are user-configurable in the Timer tab.
- Settings persist in the user's browser (localStorage) — each visitor's preferences stick.
- A gentle chime plays at the end of each interval (toggleable).
- Auto-start the next interval is off by default.

## License & credits

All meditation videos belong to their YouTube creators (Yoga With Adriene, Goodful, The Mindfulness Teacher, Lofi Girl, etc.) and all music belongs to the artists on Spotify. This page just embeds; we don't host or rehost any media.
