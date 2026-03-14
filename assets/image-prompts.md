# QuickFlick Web Series Festival — Image Prompts (ChatGPT)

These prompts are designed to produce a cohesive, premium “dark + gold, cinematic” set of placeholder images.

## House style (append to every prompt)
- **Style**: premium cinematic, dark charcoal/near-black palette, subtle film grain, tasteful warm-gold accents, soft bokeh, high-end editorial lighting
- **Hard rules**: no text, no letters, no watermarks, no logos, no brand marks, no QR codes
- **People rule (placeholders)**: if a person is shown, use a **fictional** person and avoid anything resembling a real celebrity

---

## 1) Hero background
**Filename**: `assets/hero-background.png`  
**Recommended size**: 2560×1200 (or any ~21:9 / ultra-wide)

Prompt:
> Create an ultra-wide cinematic hero background for a modern web series festival website. Deep midnight-black to charcoal gradient, faint projector light cone through haze, drifting gold dust particles, subtle film grain, soft bokeh highlights, gentle vignette, lots of clean negative space, premium modern look. No text, no logos, no people.

Variations (optional):
- “Add a very subtle film-strip pattern in the shadows (barely visible).”
- “Slightly brighter gold accent in the top-left corner.”

---

## 2) Hero ‘poster’ image (inside the right-hand card)
This replaces the `.poster` block if you decide to use a real image.

**Suggested filename**: `assets/hero-poster.png`  
**Recommended size**: 1200×800 (3:2-ish; it will crop)

Prompt:
> Create a cinematic festival poster-style image background (no typography). Dark gradient backdrop with spotlight bloom, subtle film grain, abstract film-reel / projector shapes suggested only through light and shadow (not literal icons), tasteful gold edge lighting, premium editorial composition, clean negative space. No text, no logos, no people.

---

## 3) Open Graph / social share image
Your HTML already includes Open Graph tags but no `og:image` yet; this is the share image you’ll add later.

**Suggested filename**: `assets/og-image.png`  
**Recommended size**: 1200×630 (1.91:1)

Prompt:
> Create a social share card background for a film festival website. Dark charcoal-to-black gradient, very subtle film-strip texture in the shadows, soft gold highlights, ample clean empty space for later title overlay (but generate with no text), premium modern look, crisp edges, subtle grain. No text, no logos, no people.

---

## 4) Favicon / app icons (simple mark)
If you want a real icon file instead of the CSS gradient mark.

**Suggested filenames**:
- `assets/favicon-32.png` (32×32)
- `assets/favicon-16.png` (16×16)
- `assets/apple-touch-icon.png` (180×180)

Prompt:
> Create a minimal abstract festival icon that suggests a “Q” using a film reel curve and a play-button negative space. Flat vector style, metallic gold on near-black background, centered, clean edges, no gradients, no text, no logos.

---

## 5) Jury headshots (3 placeholders)
If you replace the `.avatar` gradients with real portraits.

**Suggested filenames**:
- `assets/juror-01.png`
- `assets/juror-02.png`
- `assets/juror-03.png`

**Recommended size**: 600×600 (square; will crop to circle)

Prompt (use once per image, changing age/style):
> Create a professional headshot portrait of a fictional film festival juror. Cinematic low-key lighting with a soft warm rim light, dark neutral background, subtle film grain, natural skin tones, sharp focus on eyes, tasteful and modern wardrobe, friendly but serious expression. No text, no logos.

Variation ideas (pick one per juror):
- “Older juror, silver hair, confident expression.”
- “Young juror, modern streetwear-meets-editorial style.”
- “Middle-aged juror, glasses, creative director vibe.”

---

## 6) Sponsor / partner logos (4 placeholders)
If you replace the `.logo` blocks with real logo-like placeholders.

**Suggested filenames**:
- `assets/sponsor-01.png`
- `assets/sponsor-02.png`
- `assets/sponsor-03.png`
- `assets/sponsor-04.png`

**Recommended size**: 900×300 (3:1)

Prompt:
> Create a fictional sponsor logo placeholder suitable for a dark website. Minimal geometric brand mark + simple wordless emblem (no letters). Gold-on-transparent or gold-on-near-black, clean vector style, centered, with generous padding. No text, no watermarks, no real brands.

Alternative (if you prefer non-logo tiles):
> Create a sponsor tile background: dark textured panel with a thin gold border line and a subtle glow, lots of empty space, no logos, no text.

---

## 7) Optional: Section background texture (subtle)
Only if you want to add an actual texture image later.

**Suggested filename**: `assets/texture-grain.png`  
**Recommended size**: 2000×2000 (tileable)

Prompt:
> Create a seamless, tileable subtle film-grain texture on near-black. Very low contrast, fine grain, no visible seams, no patterns, no text.
