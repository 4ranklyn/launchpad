# Minimalist Personal Portfolio — Jasson Franklyn Wang

A classic, ultra-distilled personal portfolio website embodying raw web purity: pure black text on a crisp white screen, rendered in Google Sans Flex, featuring fluid sliding inverse highlight hyperlinks.

### User Review & Critical Decisions

> [!IMPORTANT]
> The design direction has been refined based on your clarifying answers:
> - **Visual Layout**: Pure black text on a clean white viewport (`#000000` text on `#FFFFFF` background), honoring the timeless simplicity of early web typography without clutter or faux frames.
> - **Typography**: Exclusively **Google Sans Flex**, loaded with complete variable weight ranges (`wght@100..900`).
> - **Hyperlink Motion**: Fluid sliding inverse highlight—when hovered, a solid black fill sweeps smoothly across the link while text dynamically inverts to crisp white without glow or blur.
> - **Copy Fidelity**: The exact personal narrative is preserved with deliberate typographic pacing, natural line breaks, and responsive reading measure ($60\text{--}70\text{ch}$).

---

### 1. Overview & Core Concept

- **What It Does**: Presents Jasson Franklyn Wang's candid introduction, intern schedule reality (8-6-5), Google Ambassador background, and direct interactive links to his Google search footprint, Instagram profile, and LinkedIn profile.
- **Target Audience / Persona**: Recruiters, peers, collaborators, and visitors seeking a direct, honest, and high-craft glimpse into Jasson's profile.
- **Key Value**: Extreme typographic discipline, zero bloat, instant zero-latency loading, and delightful tactile hyperlink feedback that feels artisanal.

---

### 2. User Experience & Visual Design

- **Layout & Spatial Composition**:
  - Full viewport presence centered with generous breathing margins (`max-w-2xl mx-auto px-6 py-20 md:py-32`).
  - Strict black-and-white contrast ratio of $21:1$ (exceeding WCAG AAA).
  - Editorial spacing between paragraphs, giving each sentence room to resonate.
- **Typography & Scale**:
  - Font: `Google Sans Flex`, loaded via Google Fonts CDN with variable axis support.
  - Heading / Salutation: `text-3xl md:text-4xl font-normal tracking-tight text-black`.
  - Body Copy: `text-lg md:text-xl font-normal leading-relaxed text-black/90` with comfortable letter spacing.
  - Interactive Links: Seamless inline interactive elements styled with a dedicated sliding inverse highlight effect.
- **Hyperlink Motion Mechanics**:
  - Resting State: Subtle black baseline underline (`text-decoration-thickness: 1.5px; text-underline-offset: 4px;`).
  - Active / Hover State: A sliding pseudo-element fills the link background from left to right (`cubic-bezier(0.16, 1, 0.3, 1)`) within $180\text{ms}$, smoothly inverting text color to white with zero jitter.
  - Keyboard Focus: High-visibility rectangular outline offset for accessibility (`focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4`).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Pure HTML/CSS Purity vs. Framework Complexity**:
  - *Chosen Approach*: Lightweight React component structure rendered with standard semantic HTML (`<main>`, `<article>`, `<p>`, `<a>`) and pure Tailwind/CSS transitions.
  - *Why*: Delivers lightning-fast hydration, zero unnecessary runtime script overhead, and matches the user's explicit request for classic HTML & CSS behavior.
- **Decision 2: Sliding Inverse Highlight Implementation**:
  - *Chosen Approach*: CSS background gradient sweep (`linear-gradient` transition with background-size and background-clip/text color inversion) or inline `relative` element with an expanding child surface.
  - *Why*: Ensures multi-line link wrapping works reliably on mobile screens without clipping or awkward line jumps.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      index.html                        │
│  - Google Sans Flex font import (opsz, wght@100..900)  │
│  - Metadata: Jasson Franklyn Wang - Personal Portfolio │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                       App.tsx                          │
│  - Semantic <main> container (max-w-2xl)               │
│  - Exact requested text narrative                      │
│  - Hyperlink components with sliding inverse animation │
│    ├── Google Search (Jasson Franklyn Wang)            │
│    ├── Instagram (@franklynical)                       │
│    └── LinkedIn (@franklynical)                        │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                      index.css                         │
│  - @import "tailwindcss"                               │
│  - .sliding-inverse-link animation utility             │
│  - Font family definition: 'Google Sans Flex'          │
└────────────────────────────────────────────────────────┘
```

- **Interactive Verification**:
  - Clickable external links with `target="_blank"` and `rel="noopener noreferrer"`.
  - Seamless responsive scaling from 320px mobile screens to 4K displays.
  - Verification via `compile_applet`.
