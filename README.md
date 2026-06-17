# Personal website

Static site (plain HTML + CSS) for **Miryana Vinka Dayanti**, hosted on GitHub Pages.
No build step, no dependencies.

## Structure
- `index.html` — Home (photo, bio, links)
- `research.html` — research interests, working papers, publications
- `cv.html` — short highlights + link to `assets/cv.pdf`
- `contact.html` — email, office, social links
- `css/style.css` — all styling and the color/font tokens (edit the `:root` block to retune)
- `assets/` — `profile.jpg` (headshot) and `cv.pdf`

## Edit & preview locally
```bash
cd miryanavinka.github.io
python3 -m http.server
# open http://localhost:8000
```

## Things to fill in (search for `TODO`)
1. Add your headshot at `assets/profile.jpg`
2. Add your CV at `assets/cv.pdf`
3. Replace the `#` placeholder links (Google Scholar, LinkedIn, X) on the Home and Contact pages
4. Add your real papers in `research.html`

## Publish (first time)
1. Create a **public** repo on GitHub named exactly `<your-username>.github.io`
2. Push this folder to its `main` branch
3. GitHub Pages turns on automatically; site is live at `https://<your-username>.github.io`

## Recolor / retune the look
All colors and fonts live in the `:root` block at the top of `css/style.css`.
For example, swap the accent from clay to sage: set `--accent: #8c907e;`.
