# Resul Çalışkan — Personal Site & Blog

Personal portfolio and writing site for [Resul Çalışkan](https://resul-caliskan.github.io/).

**Live:** [https://resul-caliskan.github.io/](https://resul-caliskan.github.io/)

## Stack

- React 19 (Create React App)
- React Router
- Markdown posts (`gray-matter` + `react-markdown`)
- Deployed with `gh-pages` to GitHub Pages

## Project layout

```
resulcaliskan.github.io/
└── resulcaliskan/          ← app root (run npm here)
    ├── public/
    ├── src/
    │   ├── components/     ← UI sections, nav, blog list
    │   ├── pages/          ← Home, Blog, Post, Projects
    │   ├── posts/          ← Markdown articles (*.md)
    │   ├── hooks/
    │   └── style.css
    └── package.json
```

## Getting started

```bash
cd resulcaliskan
npm install
npm start
```

App runs at [http://localhost:3000](http://localhost:3000).

## Writing a new post

1. Add a file under `src/posts/`, e.g. `src/posts/my-post.md`
2. Use a URL-safe filename (lowercase, hyphens, no spaces): `kavramsal-tasarim.md` → `/blog/kavramsal-tasarim`
3. Start with frontmatter:

```md
---
title: 'Post title'
date: '2026-08-03'
author: 'Resul Çalışkan'
description: 'One-line summary shown in the list and under the title.'
---

Your content starts here. Do not repeat the title as `# Heading` —
the page already renders it from frontmatter.

## Section

Paragraphs, lists, **bold**, and blockquotes work:

> Key idea goes here.
```

Posts are discovered automatically via `require.context`. No manual index entry needed.

Markdown is **bundled into the JS build** (not fetched as `.md` files). GitHub Pages does not serve raw `.md` assets, which previously caused “Post not found”.

## Deploy

From `resulcaliskan/`:

```bash
npm run deploy
```

This will:

1. Production build
2. Copy `index.html` → `404.html` (SPA deep-link support)
3. Publish `build/` to the `gh-pages` branch (including `.nojekyll`)

Site updates usually appear within 1–2 minutes.

## Useful scripts

| Command | What it does |
|---|---|
| `npm start` | Local development |
| `npm run build` | Production build + SPA `404.html` |
| `npm run deploy` | Build and publish to GitHub Pages |
| `npm test` | Run tests |

## Notes

- Homepage field in `package.json` is `https://resul-caliskan.github.io/`
- Prefer not editing `src/components/hover.css` unless you need Earth/stars animation changes; landing overrides live in `style.css`
- Avoid spaces and Turkish characters in post filenames
