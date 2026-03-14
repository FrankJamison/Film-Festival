\# Film Festival Website (QuickFlick Web Series Festival)

Static single-page festival site built with HTML + CSS and a small amount of vanilla JavaScript (no frameworks, no build step).

## Overview

This repository contains a cinematic landing page for the **QuickFlick Web Series Festival**. It’s designed to:

- explain how the festival works
- establish credibility (jury / awards)
- outline timeline + eligibility
- drive submissions to FilmFreeway

## Repository structure

```text
.
├── assets/            # Images, logos, backgrounds, OG image, prompts
├── index.html         # Main page (SEO/meta + content)
├── scripts.js         # Nav toggle + auto-year (dependency-free)
├── styles.css         # Site styling
├── robots.txt         # Crawler rules + sitemap reference
├── sitemap.xml        # Sitemap for indexing
└── .vscode/           # Optional editor settings
```

## Tech stack

- **HTML5** for semantic structure + SEO metadata
- **CSS3** for layout and visual styling
- **Vanilla JS** (dependency-free) for the mobile nav toggle and auto-year

## Local development

Option 1: open [index.html](index.html) directly in a browser.

Option 2 (recommended): run a tiny local server so asset paths behave consistently:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This site can be hosted on any static provider (GitHub Pages, Netlify, Cloudflare Pages, etc.).

Production URL:

- https://filmfestival.fcjamison.com/

## SEO

- `index.html` includes canonical URL, Open Graph, Twitter cards, and JSON-LD `Event`.
- [robots.txt](robots.txt) allows crawling and points to the sitemap.
- [sitemap.xml](sitemap.xml) lists the homepage for indexing.

## Accessibility

Implemented basics:

- semantic landmarks and headings
- skip-to-content link
- keyboard focus-visible styling
- descriptive `alt` text for images
- mobile navigation button uses `aria-controls` and `aria-expanded`

## Content maintenance

Common updates:

- Festival dates, timeline, copy: edit [index.html](index.html)
- Styling/layout tweaks: edit [styles.css](styles.css)
- Images/logos/OG image: replace files in `assets/`
- Submission URL: update FilmFreeway links in [index.html](index.html)

## Assets

Prompt pack (for regenerating placeholder art/images):

- [assets/image-prompts.md](assets/image-prompts.md)

This allows full indexing and points search engines to the sitemap.

sitemap.xml

The sitemap helps search engines discover the site structure quickly.

Accessibility

Accessibility is an important design consideration.

Best practices used:

semantic HTML structure

logical heading hierarchy

descriptive alt text for images

keyboard accessible navigation

readable color contrast

Recommended future improvements:

ARIA landmarks

skip navigation links

focus styling improvements

Performance

The site is optimized for fast loading.

Key techniques:

minimal CSS

no JavaScript framework

static hosting

optimized images

Recommended asset optimizations:

convert large images to WebP

compress hero backgrounds

lazy load non-critical images

Content Maintenance

Most updates occur in the following files.

Update festival content

Edit:

index.html
Replace images

Add or replace files in:

assets/
Update styling

Modify:

styles.css
Update SEO configuration

Edit:

robots.txt
sitemap.xml
Future Improvements

Possible enhancements for the project.

CSS Architecture

Refactor styles.css into structured sections:

base
layout
navigation
hero
cards
jury
timeline
sponsors
responsive
Design Tokens

Introduce CSS variables:

--color-background
--color-accent-gold
--spacing-unit
--container-width
Image Optimization

Convert assets to:

WebP
AVIF
Metadata

Improve social previews with:

OpenGraph tags

Twitter cards

favicon variants

Developer Workflow

Recommended development process:

1. Update copy in index.html
2. Add or optimize images in assets/
3. Adjust layout or styling in styles.css
4. Test mobile and desktop layouts
5. Validate anchor navigation
6. Verify external links
7. Deploy to static host
Author

Frank Jamison

GitHub
https://github.com/FrankJamison

Portfolio
https://fcjamison.com

Repository
https://github.com/FrankJamison/Film-Festival