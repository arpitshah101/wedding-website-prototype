# Arpit & Rushita Wedding Website

Wedding website for Arpit and Rushita, built with Astro and Tailwind CSS.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the local development server       |
| `npm run build`   | Type-check, build, and minify the output |
| `npm run preview` | Preview the production build locally     |

## Deployment

The site supports a configurable base path through `PUBLIC_BASE_PATH`. Set it
when hosting under a subpath:

```sh
PUBLIC_BASE_PATH=/wedding-website-prototype npm run build
```

Leave it unset to use the default GitHub Pages subpath, or set it to `/` when
hosting at the domain root.
