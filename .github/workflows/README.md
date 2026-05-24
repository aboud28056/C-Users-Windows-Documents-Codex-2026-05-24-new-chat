# NeighborMart

NeighborMart is a free, open-source neighborhood marketplace prototype. It runs as a Progressive Web App, so users can open it in a browser and install it on Android or iOS without app-store fees.

## Features

- Location-aware nearby listings through the browser Geolocation API
- Arabic, English, Spanish, and French interface
- Add, search, filter, and sort local listings
- Works offline after the first load through a service worker
- No paid services, no backend, and no external dependencies

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server.

For full PWA and geolocation behavior, use a local server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Free deployment options

- GitHub Pages
- Netlify free static hosting
- Cloudflare Pages free static hosting

## Deploy on GitHub Pages

1. Create a new public repository on GitHub.
2. Upload all files from this folder to the repository.
3. Open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Push or upload the files to the `main` branch.
7. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.
8. Open the published URL shown in the workflow or in **Settings > Pages**.

After the site is live, open the URL on Android Chrome or iPhone Safari and choose **Install app** / **Add to Home Screen**.

## Next steps for a real public app

- Add a free/open-source backend such as Supabase free tier, Appwrite, or PocketBase
- Add authentication and moderation
- Store listing photos
- Add privacy controls so exact user locations are never public
- Add reporting and blocking tools
