# INCEPTYON LABS — BRAND & DESIGN SYSTEM

*Version 0.2 / Working Reference*

> Inceptyon Labs is not a product brand.
> It is the cataloging system for a body of work.

---

## CHANGELOG — v0.1 → v0.2

### Added

- **Semantic CSS token layer** (Appendix A). Raw palette tokens stay; components consume semantic tokens (`--text-primary`, `--surface-panel`, `--border-subtle`, `--action-primary-border`, etc.).
- **`--slate` token** (`#A8ADB5`) for secondary text on dark surfaces — passes WCAG AA at normal text size.
- **Favicon / minimum mark specification** (Appendix C) — amber registration dot inside a thin square frame.
- **Open Graph templates** for studio and dossier shares (Appendix C).
- **`prefers-reduced-motion` rule** baked into Appendix A.
- **Mystery rule:** *"The brand may withhold narrative. It must not withhold meaning."* (§1.5)
- **Optional dossier metadata fields:** `maturity`, `visibility`, `repository`, `latest_release`, `canonical_surface`, `origin` (§6.1).
- **Type wrapping & long-name rules** (§4.4) — for project names like *Sequentyol*, *Gargantua*, *Inceptyon*.

### Changed

- **CTA framework** (§7.3) refactored: brand verbs (`INSPECT`, `TRANSMIT`) reserved for *exploration*; plain verbs (`SIGN IN`, `DOWNLOAD`, `INSTALL`) for *utility*. `INITIATE`/`OBSERVE` removed as defaults; usable only where the metaphor is clear.
- **Primary button hierarchy** (§5.4) — bordered Signal is now the default on dark; filled Signal reserved for high-emphasis actions.
- **Steel** demoted from "secondary text" to "tertiary / disabled / structural." Was overstated in v0.1 contrast claims (Steel on Ink ≈ 3.9:1, below AA Normal). New `--text-secondary` is `--slate`.
- **Footer copyright line** — preserves legal language alongside the brand phrase: `© 2024–2026 INCEPTYON LABS LLC. ALL RIGHTS RESERVED. / ALL SYSTEMS OBSERVED.`
- **Banned vocabulary** renamed **Avoid as persuasion** (§1.3). The words aren't forbidden in technical contexts; they're forbidden as marketing claims.
- **`y`-drift rule tightened** (Appendix B): minority of active projects only.
- **INCEPTYON game disambiguated** as `INCEPTYON: JOVIAN SYSTEM` to resolve the studio/project name collision. (Alternate consideration: `INCEPTYON: JOVIAN ECOLOGIES` — more on-thesis given the game's ecosystem focus.)

### Considered and Rejected

These were proposed in second-round feedback and deliberately not adopted:

- **Replacing the tagline with *"Systems for problems without categories."*** — Rejected. *"Systems for impossible ideas"* carries the studio's voice in a way the more literal phrasing doesn't. The literal version already lives in the positioning sentence (§1.1) and works there. Two registers, two jobs.
- **Adding *"the independent software studio of [founder name]"* to the hero.** — Rejected. Frontstaging the founder name is the move that makes a studio site read as personal portfolio. Founder reference stays in About (§7.5), where it belongs.
- **Splitting "Featured Dossiers" and "Full Catalog" into separate homepage sections.** — Rejected. Adds redundancy on a single page. Current flow (3–4 featured + link to all) is correct until the catalog hits 25+ projects.
- **Project-specific visual cues as a *requirement* in dossier cards.** — Rejected as default. The shared frame is the cataloging argument; per-project artifacts are a *permitted exception*, not a rule.

---

## 0. THESIS

Inceptyon Labs is an independent software studio that treats each project as a *system* — a working apparatus for an idea that doesn't quite fit an existing software category. The brand presents the studio's work the way a research lab presents its instruments: precisely, soberly, with technical specificity.

It is cinematic in the way mission control is cinematic — through restraint, classification, and the quiet authority of measured language. Not through theatrics, not through spectacle.

The studio's signature is its naming: single-word project marks, often with a deliberate orthographic drift (the **`y`** swap — *Inceptyon, Sequentyol, Unwyned, Alyqon*). This drift is the brand's fingerprint. It signals that the project belongs to the lab catalog.

> **Working tagline:** *Systems for impossible ideas.*
> **Positioning sentence:** *Systems for problems without categories.*

---

## 1. BRAND STRATEGY

### 1.1 Core Positioning

Inceptyon Labs is not an agency, not a startup, not a "creative studio." It is best described as an **independent software lab**. Each project is a small, self-contained thesis about what software can do in a domain that has been overlooked, mis-served, or considered too strange to ship.

**Positioning statement:**
*An independent software lab building systems for problems without categories.*

### 1.2 Personality

| Trait | What it means | What it doesn't mean |
|---|---|---|
| Precise | Specific language, exact numbers, named subsystems | Pedantic, joyless |
| Quietly ambitious | Big targets stated plainly | Hype, "revolutionary," manifestos |
| Technically credible | Real stacks, real artifacts, public code | Showing off, hostile to non-engineers |
| Mysterious | Says less than it could; lets the work speak | Mystical, esoteric, vague |
| Cinematic | Deliberate pacing, sober palette, classified surfaces | Theatrical, sci-fi cosplay |
| Serious | Treats the work as work | Humorless, corporate |

### 1.3 Voice & Tone

**Voice principles:**
- Declarative over persuasive. *"Tracks Amazon return windows."* not *"Never miss a return again!"*
- Technical specificity earns trust. Name the stack, name the version, name the constraint.
- Sparing with adjectives. Adjectives are signal; spend them carefully.
- Comfortable with negative space in copy. A short paragraph can be a complete thought.
- Slightly archival, slightly sober. Like a museum label or a JPL mission page.

**Tone shifts:**
- **Marketing surface (homepage, dossier intros):** Compressed, cinematic. Short sentences. Periods do work.
- **Documentation:** Plain, instructional, generous. Drop the cinema.
- **In-app/dashboard:** Functional, terse. Mono caps for status. No friendly chatbot phrasing.
- **Errors:** Treat as system reports, not apologies. Code reference + one-line plain English.

**Avoid as persuasion** *(not banned in technical contexts — banned as marketing claims):* *magical, delightful, revolutionary, innovative, seamless, journey, leverage, unlock, empower, AI-powered, supercharge, game-changing, next-gen, beautiful, elegant.* Let the work be these things; don't claim them.

### 1.4 Naming Conventions

**Project names** follow a recognizable but un-stated grammar:

1. **Single word.** Two words only if the second word is a classifier. Prefer one.
2. **Often technical, scientific, or architectural in origin.** Lensing, Tenet, Tesseract, Insomnia, Gargantua, PASIV, Xenodex.
3. **Orthographic drift on a minority subset.** The signature `y` swap: *Inception → Inceptyon, Sequential → Sequentyol, Unwind → Unwyned, Alicorn → Alyqon*. Drift is reserved for marks that benefit from looking *off* by one letter. **Rule: no more than a minority of active projects use the drift at any time.** If everything is drifted, the signature stops signaling.
4. **No suffixes.** No *-ly*, *-ify*, *-able*, *-io*, *-ai*.
5. **Capitalization in body text:** Title case (*Sequentyol*). In metadata strips and tags: ALL CAPS MONO (`SEQUENTYOL`).

**Studio / project name collision rule.** When a project mark and the studio mark share or near-share a root word, the project must carry a disambiguating subtitle in the catalog. Active example:

| Studio | Project | Catalog form |
|---|---|---|
| `INCEPTYON LABS` | `INCEPTYON` (the game) | **`INCEPTYON: JOVIAN SYSTEM`** |

Use the full disambiguated form in dossier metadata strips, footers, and any context that lists the studio mark nearby. The bare `INCEPTYON` may appear inside the game's own product surfaces.

**Section / surface names** across the studio:

| Use | Word |
|---|---|
| Projects index | DOSSIERS |
| Blog / writing | TRANSMISSIONS or FIELD NOTES |
| Tools / utilities | APPARATUS |
| Changelog | LOG |
| Contact | COORDINATES |
| About | LAB NOTES or simply ABOUT |
| Status page | TELEMETRY |
| Press / media | RECORD |

### 1.5 The Mystery Calibration

The brand should feel mysterious *because of restraint*, not because of obfuscation. Specifically:

- **Show metadata, hide narrative.** Surface version numbers, build dates, project codes. Don't surface "our story."
- **Classification language over marketing language.** *"DOMAIN: enology / STATUS: deployed / INSTANCES: iOS, Android, Web"* says more than "the wine app you've been waiting for."
- **Let the catalog do the work.** A studio with 12 projects, each with a single-line signal, is more compelling than 12 case studies with hero shots.
- **Avoid mythology.** No "founder origin story" theatrics.

> **Hard rule:** *The brand may withhold narrative. It must not withhold meaning.*

Withholding narrative looks like: leaving out the founder's bio from a project card. Withholding meaning looks like: writing *"Classified systems from the edge of the unknown."* The first is restraint. The second is fake secrecy. Always show real metadata, real stacks, real release dates, real status.

---

## 2. VISUAL LANGUAGE

### 2.1 Moodboard Direction (in words)

- An Apollo-era flight director console at 2 a.m., one screen on, the rest dark.
- A natural history specimen drawer: each card identical, classification-first, the object centered.
- A 1970s Olivetti technical manual.
- The corner of a Bauhaus exhibition wall: caption on one side, object on the other, nothing in the middle.
- A patent diagram, slightly enlarged.
- A SCADA monitoring panel before any data comes in.
- The endpapers of a Stripe Press hardback.
- The back of a circuit board, photographed straight-on.
- A weather station shed at dawn.

**What this is not:** a server room, a hacker desk, a sci-fi film still, a "futuristic" UI mockup, a glowing data center, an astronaut floating in space, a glass skyscraper at dusk.

### 2.2 Materials, Textures, Surfaces

- **Concrete** (matte, very subtle grain at 2–4% opacity overlay if used at all)
- **Brushed steel / anodized aluminum** (only as photographic reference, not literal texture)
- **Paper** — bone, slightly warm, with no gloss
- **Hairlines** (1px rules, the most-used texture in the system)
- **Halftone** at very low intensity, only for atmosphere on hero surfaces if needed
- **Film grain** at 3–5% opacity on dark surfaces — optional

**Forbidden surfaces:** glass, frosted glass, glow, neon haze, gradient blobs, 3D mesh shapes, "liquid" anything.

### 2.3 Shape Language

- **Rectilinear.** 90° corners on primary surfaces. Buttons, cards, badges, inputs: zero radius.
- **One exception:** a 2px radius is permissible only on small interactive elements where 0px reads as a bug. Default to 0.
- **Brackets, registration marks, crosshairs, tick marks.** Decorative *only when functional* — used to mark coordinates, alignments, focal points.
- **Frames.** Heavy use of single-rule frames around content blocks; treat each frame like an exhibition vitrine.
- **Numbered modules.** Sections labeled `01 / DOSSIERS`, `02 / APPARATUS`.

### 2.4 Layout Principles

- **Grid:** 12-column, used asymmetrically. Strong left alignment is the default.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px.
- **Baseline grid:** body text on a 4px or 8px baseline.
- **Margins:** generous on desktop (≥96px gutters at large breakpoints).
- **Metadata strips** appear on major surfaces only — page hero, dossier card, dossier detail, footer, schematic plate, field note header. Do not stamp them on every minor element; the rarity is part of what gives them weight.
- **Footers as instrument panels:** dense, multi-column, a small amount of system telemetry.
- **Hairlines do the heavy lifting.** 1px rules separate, frame, and connect. No drop shadows.

### 2.5 Iconography

- **Monoline.** 1.5px stroke at 24px size. 2px at 32px. Scale stroke with size.
- **Geometric, schematic.** Engineering-diagram feel.
- **No filled shapes** except where the icon represents a filled object.
- **No "AI sparkle," no rounded outline cuteness.**
- **Recommended starting set:** [Lucide](https://lucide.dev) (Regular weight) or [Geist Icons](https://vercel.com/geist/icons). If using Lucide, customize: square line caps, consistent stroke, removed unnecessary curves, schematic over expressive.

### 2.6 Diagram & Schematic Language

This is a brand-defining surface. Inceptyon Labs visualizes its projects as **schematics**, not as illustrations.

- **Plan/elevation views**, never isometric "3D."
- **Annotated** with thin leader lines and numbered components.
- **Coordinate grids** visible at low opacity.
- **Color-coded** only where signal demands it; otherwise monochrome on bone or ink.
- Use schematics for: project architecture diagrams, hero illustrations on dossiers, empty-state graphics, blog post headers.

Use sparingly on the landing page: at most one hero schematic, plus small schematic glyphs in dossier cards if needed. Decoration via crosshair and grid is functional, never atmospheric.

### 2.7 Motion Principles

- **Slow.** 300–500ms is the default. 200ms only for state toggles.
- **Mechanical easing.** `cubic-bezier(0.2, 0.0, 0.2, 1)` — feels like a precision instrument, not a bouncy app.
- **Type resolves into place.** Letter-by-letter or character-shuffle reveal on hero copy, **once per page load only**. Reference: terminal output, departure boards.
- **No springs, no bounces, no "wow" entrances.**
- **Hover states are subtle.** Color shift or 1px border thicken. No scale-up, no shadow lift.
- **Crosshairs and reticles can track the cursor** on hero sections — studio site only, not on app surfaces.
- **Reduced motion respected.** All non-essential motion disabled when `prefers-reduced-motion: reduce` (see Appendix A).

### 2.8 What to Avoid (Visual)

- Glassmorphism, frosted backgrounds, blur-behind
- Gradients on primary brand surfaces (signal accents excepted, sparingly)
- Purple-blue cyberpunk palette
- Neon glow, drop shadows with color, "ambient light"
- Rounded corners on primary components
- Stock photography
- 3D blob illustrations or "isometric" floating shapes
- Floating cards on grey backgrounds (the SaaS dashboard look)
- Centered hero with subtitle + dual buttons (the AI-startup template)
- Emoji in marketing copy

---

## 3. COLOR SYSTEM

The palette is **two surfaces, a grey scale, one signal accent, and two functional indicators.** Color is signal, not decoration. Most surfaces use no color at all.

### 3.1 Raw Palette

| Token | Hex | OKLCH | Use |
|---|---|---|---|
| **Ink** | `#0F1115` | `oklch(0.16 0.012 250)` | Canonical dark surface. |
| **Carbon** | `#1A1D24` | `oklch(0.22 0.012 250)` | Elevated surface in dark mode. |
| **Graphite** | `#3A3F47` | `oklch(0.40 0.010 250)` | **Structure only.** Hairlines, frames, decorative grid. Not text. |
| **Steel** | `#6B737E` | `oklch(0.55 0.012 250)` | Tertiary text, disabled states. **AA Large only on Ink.** |
| **Slate** | `#A8ADB5` | `oklch(0.74 0.010 250)` | **NEW v0.2.** Secondary readable text on Ink/Carbon. AA Normal. |
| **Mist** | `#C2C5CB` | `oklch(0.80 0.008 250)` | Borders on light, subtle UI separators. |
| **Bone** | `#EBE6D7` | `oklch(0.93 0.014 80)` | Canonical light surface. Slightly warm, not white. |
| **Paper** | `#F7F4EA` | `oklch(0.96 0.010 80)` | Elevated surface in light mode. |

### 3.2 Signal Accent (Singular)

| Token | Hex | OKLCH | Use |
|---|---|---|---|
| **Signal** | `#D26A2A` | `oklch(0.65 0.17 55)` | The studio's only brand accent. Mission-control amber. **Never used as a fill across large areas.** |

This single accent is what gives the studio its identity. Industrial signal-orange — references aviation warning lights, SNCF rail signage, Apollo-era console panels. Not the saturated orange of a fast-food brand, not the trendy "burnt orange" of every recent design system.

**Approved Signal uses:** primary CTA borders (with hover-fill), key metadata flags, focus states, registration marks, schematic emphasis.
**Forbidden Signal uses:** large hero backgrounds, decorative gradients, big filled panels, repeated graphic ornament. The less it appears, the more it works.

### 3.3 Functional Indicators (Status Only)

| Token | Hex | OKLCH | Use |
|---|---|---|---|
| **Phosphor** | `#7BC07A` | `oklch(0.78 0.13 145)` | Live / Active / Deployed status only. Faintly desaturated — oscilloscope phosphor, not "success green." |
| **Caution** | `#C03A35` | `oklch(0.55 0.18 25)` | Errors, decommissioned status, destructive actions. Used sparsely; never co-occurs with Signal in the same surface region. |

### 3.4 Light / Dark Strategy

- **Dark is canonical** for the studio site and project dossiers.
- **Light is for documentation and long-form reading.**
- **Both modes use the same Signal accent.**
- Each project may pick *one* mode as canonical; the studio site supports both.

### 3.5 Accessibility (Recomputed)

| Pair | Contrast | Verdict |
|---|---|---|
| Bone on Ink | ≈ 13.6 : 1 | ✅ AAA |
| Slate on Ink | ≈ 8.3 : 1 | ✅ AAA — primary secondary text |
| Steel on Ink | ≈ 3.9 : 1 | ⚠️ AA Large only — tertiary/disabled |
| Graphite on Ink | ≈ 2.0 : 1 | ❌ Structure only — no text |
| Signal on Ink | ≈ 5.1 : 1 | ✅ AA Normal — CTA labels, links |
| Phosphor on Ink | ≈ 9.1 : 1 | ✅ AAA |
| Caution on Ink | ≈ 4.5 : 1 | ⚠️ AA Normal but pair with icon/label |
| Ink on Bone | ≈ 13.0 : 1 | ✅ AAA |

**Rules of thumb:**
- Body text on dark ≥ Slate. Never use Steel for paragraph text.
- Mono caps at 11px require letter-spacing ≥ 0.05em and Slate or brighter.
- Status colors (Phosphor, Caution) never communicate alone — always paired with text or icon.

---

## 4. TYPOGRAPHY

### 4.1 The Stack

#### Direction A — Engineering-Forward (recommended default)

| Role | Font | Notes |
|---|---|---|
| Display & UI | **Söhne** (paid) — *or* **Geist Sans** (free) | Neo-grotesque. Söhne has more character; Geist is excellent free fallback. |
| Body | Same as display | One family, multiple weights. |
| Mono | **Berkeley Mono** (paid) — *or* **JetBrains Mono** (free) — *or* **Geist Mono** (free) | The mono is doing serious work. |

#### Direction B — Cinematic-Forward (optional accent only)

| Role | Font | Notes |
|---|---|---|
| Display moments (taglines, hero) | **PP Editorial New** italic, Light | Use very sparingly. Not for navigation or UI. |
| UI / body | Söhne or Geist Sans | Same as A. |
| Mono | Berkeley Mono / JetBrains Mono | |

> **Recommendation:** Start with Direction A using **Geist Sans + JetBrains Mono**. Upgrade to Söhne + Berkeley Mono once worth licensing. Direction B is a stylistic accent, not a default.

### 4.2 Type Scale

Mobile (base 16px):

| Role | Size / Line | Weight | Tracking |
|---|---|---|---|
| Display 1 | 64 / 64 | Medium | -0.02em |
| Display 2 | 44 / 48 | Medium | -0.015em |
| H1 | 32 / 36 | Medium | -0.01em |
| H2 | 24 / 28 | Medium | 0 |
| H3 | 18 / 24 | Medium | 0 |
| Body | 16 / 24 | Regular | 0 |
| Small | 14 / 20 | Regular | 0 |
| Caption | 12 / 16 | Regular | 0 |
| Mono caps | 11 / 16 | Regular | +0.08em UPPERCASE |

Desktop scales up: Display 1 → 96/96, Display 2 → 64/68, H1 → 40/48.

### 4.3 Typographic Behaviors

- **Mono caps tracked** is the studio's signature. Use for: metadata strips, navigation, status badges, CTAs, dossier classification fields, footer telemetry.
- **Body text in sans, set generously.** 16/24 minimum. 18/28 on long-form documentation.
- **One weight contrast per surface.** Regular and Medium. Skip Light, skip Bold (unless display).
- **No italic in UI.** Italic reserved for cinematic display moments (Direction B) or Latin scientific terms.
- **Numerals tabular** wherever they appear in tables, telemetry, version numbers, dossier metadata, footer coordinates. Use `font-variant-numeric: tabular-nums`.
- **Tight tracking on display sizes** (-0.01em to -0.02em); positive tracking only on mono caps.

### 4.4 Wrapping & Long Names (NEW v0.2)

Project names like *Sequentyol*, *Gargantua*, *Inceptyon* and tagline phrases like *Systems for impossible ideas* need defined wrapping behavior.

- **Hero display:** `max-width: 18ch` desktop, `13ch` mobile. `text-wrap: balance` on all H1/Display headlines.
- **Body:** `text-wrap: pretty` for orphan/widow control where supported.
- **No mid-word hyphenation.** `hyphens: none`. We want clean line breaks at spaces only.
- **Don't break a project name across lines.** Set project-name elements to `white-space: nowrap` and let them scale down rather than wrap. *Inceptyon* should never appear as *Incep-* / *tyon*.
- **Orphans in hero copy.** A single short word on its own line ("ideas." alone) is acceptable on Display 1 only when the wrap is intentional (and `text-wrap: balance` will usually fix it). Otherwise rewrite the line.

### 4.5 Surface-Specific Typography

- **Landing pages:** Display sizes lead. One Display 1 hero, then everything else stays small.
- **Dashboards (GigaBrain, Lensing, Tenet):** mono-forward, dense, small type sizes (12–14px) with tabular numerals dominant. Sans for prose only.
- **App surfaces (Unwyned, Mise):** sans-forward, body type generous, mono only for metadata.
- **Documentation:** light mode, body 18/28, mono for code, generous left rail with numbered sections.

---

## 5. COMPONENT KIT

### 5.1 Navigation

- **Top bar:** 64–72px tall, full-width, 1px bottom border in `--border-subtle`.
- **Left:** wordmark `INCEPTYON LABS` in mono caps, +0.08em tracking, Medium weight. The favicon mark (Appendix C) sits beside it only at narrow viewports where the wordmark would otherwise wrap.
- **Center or right:** nav items in mono caps small, tracked. Items: `DOSSIERS / APPARATUS / TRANSMISSIONS / ABOUT`.
- **Far right:** a single bracketed CTA: `[ TRANSMIT ]`. Square brackets render literally.
- **Mobile:** collapse to a `MENU` text link in mono caps. The hamburger icon is everywhere; this isn't.

### 5.2 Hero Sections

- Full-bleed Ink background.
- Top metadata strip in mono caps small: `INCEPTYON LABS / EST. 2024 / TAMPA, FL / SYSTEMS LAB`.
- Display 1 left-aligned, max-width ~14ch–18ch, `text-wrap: balance`.
- Below the headline: a single-paragraph signal copy (40–60 words max), Body size, Slate color.
- Below that: a thin rule, then a metadata strip with 3 fields.
- **No imagery** in the default hero. If imagery is used, it's a single schematic SVG diagram with thin lines, parked to the right of the text.
- One CTA. Bordered Signal, mono caps, square-bracketed. (See §5.4 button hierarchy.)

### 5.3 Project Dossiers (cards & detail pages)

See §6 for full template. Card preview:

```
┌────────────────────────────────────────────┐
│ PROJECT 04 / DOMAIN: ENOLOGY / DEPLOYED    │
│                                            │
│ Unwyned                                    │
│ A wine discovery system.                   │
│ Taste, mapped.                             │
│                                            │
│ ─────                                      │
│ INSTANCES   iOS · ANDROID · WEB            │
│ STACK       FLUTTER · SUPABASE             │
│                                            │
│ [ INSPECT DOSSIER ]                        │
└────────────────────────────────────────────┘
```

- 1px `--border-subtle` on `--surface-panel` background.
- 24px internal padding.
- Hover: border color shifts to `--border-accent` (Signal). No scale, no shadow.
- **Per-project visual artifact (optional, not required):** a single small element may live inside the frame — a tiny schematic glyph in the metadata strip, a one-color line mark beside the title, or a small framed plate. **One element per card.** Frame, type, and color tokens stay shared.

### 5.4 Buttons (revised v0.2)

The button hierarchy on dark surfaces leans bordered, not filled. Filled Signal is loud against Ink; bordered Signal with hover-fill reads more premium and preserves Signal's "instrument light" character.

| Type | Default state | Hover | Use |
|---|---|---|---|
| **Primary brand CTA** | 1px Signal border, Signal text, transparent fill | Signal fill, Ink text | Most landing-page CTAs. `[ INSPECT DOSSIER ]`, `[ READ FIELD NOTES ]`. |
| **High-emphasis action** | Signal fill, Ink text | Slight darken | Reserved for terminal actions: form submits, single-shot actions. Use sparingly. |
| **Secondary** | 1px Bone border, Bone text, transparent | Border thicken or fill to Bone with Ink text | Adjacent to primary. |
| **Tertiary** | Mono caps text link, no border | Underline reveals from left | In-line, footer, navigation. |
| **Destructive** | 1px Caution border, Caution text | Caution fill, Bone text | App contexts only — never on landing/marketing. |

- 0px radius. 14px vertical / 24px horizontal padding minimum. 48px tap target on mobile.
- Mono caps label, Medium weight, +0.08em tracking.
- Square-bracket affectation: primary and secondary buttons render literal brackets in the label: `[ INSPECT ]`. This is the studio's button signature.

### 5.5 Badges & Status Labels

| State | Color | Format |
|---|---|---|
| `DEPLOYED` | Phosphor text on Ink, 1px Phosphor border | Mono caps, +0.1em tracking |
| `ACTIVE` | Signal text on Ink, 1px Signal border | Mono caps |
| `IN-DEVELOPMENT` | Bone text on Ink, 1px Steel border | Mono caps |
| `CONCEPT` | Steel text on Ink, 1px Graphite border | Mono caps, slight opacity |
| `ARCHIVED` | Steel text, 1px dashed Graphite border | Mono caps, opacity 0.7 |
| `DECOMMISSIONED` | Caution text on Ink, 1px Caution border | Mono caps |

Badges always bordered, never filled. Filled status pills feel SaaS; bordered ones feel archival.

### 5.6 Forms & Contact

- **Inputs:** no full border. Bottom rule only — `--border-subtle`, thickening to `--border-accent` on focus. No box, no fill.
- **Labels:** above input, mono caps small, tracked. `TRANSMISSION`, `ORIGIN`, `PAYLOAD`.
- **Help text:** below input, Slate color, sans small.
- **Submit button:** primary button style, label `[ TRANSMIT ]` *only* if the form metaphor is clear (contact, send-message). Otherwise, plain verb: `[ SUBMIT ]`, `[ SAVE ]`.
- **Contact page:** form on a Carbon card. Address/coordinates in a metadata strip beside it.

### 5.7 Footer

```
INCEPTYON LABS / SYSTEMS LAB / EST. 2024
27.9506° N, 82.4572° W / TAMPA, FL / UTC-05

DOSSIERS         APPARATUS        TRANSMISSIONS    LAB
Unwyned          TARS             Field Notes      About
INCEPTYON:       PASIV            Log              Coordinates
  JOVIAN SYSTEM  Tenet            Telemetry        Record
Sequentyol       [+ 2 more]
[+ 9 more]

────────────────────────────────────────────
© 2024–2026 INCEPTYON LABS LLC. ALL RIGHTS RESERVED. / ALL SYSTEMS OBSERVED.
```

The legal copyright stays alongside the brand phrase. Don't trade legal clarity for a brand tic.

### 5.8 Documentation Pages

- **Light mode default** (Paper background).
- **Three-column layout:** left rail (numbered section nav), center content (max 72ch), right rail (on-page TOC in mono caps).
- **Body type:** sans 18/28.
- **Code blocks:** mono on Ink (a small dark surface in light mode is allowed *only* for code), with a metadata strip above each: `// LANG: typescript / FILE: agent.ts`.
- **Headings:** numbered (`1.1 / Installation`).
- **Callouts:** 1px bordered, mono caps title (`NOTE`, `CAUTION`, `OPERATIONAL`).

### 5.9 App / Dashboard Surfaces

For Lensing, Tenet, GigaBrain, Insomnia, TARS:

- **Default to Ink background, Carbon panels.**
- **Top toolbar:** 48px tall, mono caps tab labels, Signal underline on the active tab.
- **Side rail:** 280px max, mono caps section headers, sans item labels.
- **Panels:** 1px `--border-subtle` borders, header strip with title (Sans Medium) on left and metadata (mono caps) on right.
- **Numerical readouts:** tabular mono, sized larger than surrounding text. `42.7%` should *feel* like an instrument readout.
- **Status indicators:** small Phosphor or Signal squares (8×8px) with mono caps label adjacent.
- **No floating cards. No drop shadows.**

### 5.10 Empty States

- **Schematic illustration** in 1px Graphite lines. Not a friendly mascot.
- **Headline:** mono caps, `NO DATA RECEIVED` / `EMPTY DOSSIER` / `AWAITING TRANSMISSION`.
- **Subhead:** one sentence, sans, Slate color.
- **CTA:** secondary button if any.

### 5.11 Error States

- **Code reference** in mono: `ERR–0427`, `ERR–LENS–14`.
- **Title:** plain technical, sans Medium. *"Connection refused"* not *"Oops!"*
- **Body:** one paragraph, sans, Slate. Describe the technical condition.
- **Actions:** primary `[ RETRY ]`, secondary `[ INSPECT LOG ]` if applicable.

---

## 6. PROJECT DOSSIER SYSTEM

Every Inceptyon Labs project is presented as a **dossier**. The dossier *is* the brand's primary content unit. The studio site is, fundamentally, a catalog of dossiers.

### 6.1 Dossier Metadata Schema

```yaml
# Required
project_number: 04
project_name: Unwyned
project_type: Consumer mobile + web app
domain: Enology / Wine discovery
status: DEPLOYED
established: 2024
operational: 2024–
instances: [iOS, Android, Web]
stack: [Flutter, Supabase, Postgres, Cloudflare]
signal: "Taste, mapped."
description_short: A wine discovery system that builds a flavor topology from your sensory thresholds.
description_long: …
links:
  app_store: …
  play_store: …
  web: …
  github: …
related: [Sequentyol, Mise]

# Optional (NEW v0.2) — use when they add catalog clarity
maturity: production       # prototype | beta | production | archived
visibility: public         # public | private | internal | open-source
repository: public         # public | private | unavailable
latest_release: 2026.04.25
canonical_surface: ios     # web | ios | android | cli | game | dashboard
origin: lab                # personal | lab | client | experiment | internal-tool
```

**Use optional fields where they distinguish the project, not as default ornament.** A concept project benefits from `maturity: prototype` and `visibility: private`. A shipped app may not need either.

### 6.2 Dossier Card (Index View)

See §5.3. Required: project number, domain, status, name, signal copy, instances, stack (compressed), CTA. Optional per-project visual artifact (one element max).

### 6.3 Dossier Detail Page

```
[METADATA STRIP]
PROJECT 04 / DOMAIN: ENOLOGY / STATUS: DEPLOYED / 2024–

[HEADER]
Unwyned                           ← Display 1
A wine discovery system.          ← Display 2, Slate

[PRIMARY METADATA TABLE — 2 columns]
TYPE              Consumer mobile + web app
INSTANCES         iOS · Android · Web · TestFlight
STACK             Flutter · Supabase · Postgres
ARCHITECTURE      Edge-deployed; sensory-threshold model
ESTABLISHED       2024
LATEST RELEASE    2026.04.25
STATUS            DEPLOYED · v.2.4

[SIGNAL]
"Taste, mapped."                  ← pull-quote

[DESCRIPTION]
2–4 paragraphs of plain prose.

[SCHEMATIC]
1px-line architectural diagram. Labeled components.

[CAPTURES]
2–4 screenshots as plates. Caption format:
PLATE 01 / TASTE VECTOR SURFACE

[ACCESS]
[ APP STORE ]    [ GOOGLE PLAY ]    [ WEB ]    [ SOURCE ]

[FIELD NOTES]
Optional. Related blog posts.

[RELATED DOSSIERS]
Three related project cards.

[FOOTER METADATA]
Same project metadata as header.
```

### 6.4 Captures / Plates Rules

Project screenshots are **evidence, not advertising**. Rules:

- Schematic-style thumbnails by default; product screenshots inside framed plates only.
- No glossy device mockups.
- No full-bleed colorful app art on the catalog grid.
- Straight-on screenshots, diagrams, or cropped UI details preferred.
- Caption every plate: `PLATE 01 / TASTE VECTOR SURFACE` (mono caps).

### 6.5 Logo / Mark Usage Within Dossiers

- Project wordmarks follow studio rules: monoline, single weight, no decorative elements.
- The `INCEPTYON LABS` mark does *not* sit alongside project marks on dossier pages — it lives only in the global navigation and footer.
- Where a project mark appears on the dossier, it's at the top of the schematic block.

### 6.6 Status Lifecycle

`CONCEPT → IN-DEVELOPMENT → DEPLOYED → ACTIVE / OPERATIONAL → ARCHIVED → DECOMMISSIONED`

Display the status visibly. Archived projects stay in the catalog with reduced opacity — the studio's record is part of its credibility.

---

## 7. BRAND COPY

### 7.1 Tagline & Positioning

- **Tagline (cinematic):** *Systems for impossible ideas.*
- **Positioning sentence (literal):** *Systems for problems without categories.*

These do different jobs. The tagline carries the studio's voice. The positioning sentence answers *"what is this place?"* in plain English. Use both on the homepage — tagline as the Display 1; positioning sentence as the explanatory line below.

**Other approved variants** (for social bios, campaign moments, alternate contexts):
- *An apparatus for unlikely software.*
- *Engineering for the implausible.*
- *Improbable systems, shipped.*
- *Independent software for adjacent problems.*
- *Quiet studio. Loud ambitions.* (informal only)
- *We make instruments.* (very compressed)

### 7.2 Section Headings

- `01 / DOSSIERS — Active and archived projects.`
- `02 / APPARATUS — Tools we build for ourselves and ship anyway.`
- `03 / TRANSMISSIONS — Field notes, build logs, longer thinking.`
- `04 / RECORD — Where the studio has been written about.`
- `05 / COORDINATES — How to reach the lab.`

### 7.3 CTA Framework (revised v0.2)

**Brand verbs for exploration. Plain verbs for action.**

| Context | CTA |
|---|---|
| Viewing a project | `[ INSPECT DOSSIER ]` |
| Browsing the catalog | `[ VIEW ALL DOSSIERS ]` |
| Reading writing | `[ READ FIELD NOTES ]` |
| Contact / send message | `[ TRANSMIT ]` |
| Downloading a file | `[ DOWNLOAD ]` |
| Installing software | `[ INSTALL ]` *or* `[ DEPLOY ]` (if literal deployment) |
| Submitting a form | `[ TRANSMIT ]` *only if message metaphor is clear*; else `[ SUBMIT ]` |
| Signing into a product | `[ SIGN IN ]` |
| Creating an account | `[ CREATE ACCOUNT ]` |
| Beginning a flow | `[ BEGIN ]` *or* the specific verb |

`[ INITIATE ]` and `[ OBSERVE ]` are no longer defaults — they're available only where the metaphor genuinely fits (e.g., starting a long-running agent run = `[ INITIATE ]`, opening a read-only telemetry view = `[ OBSERVE ]`). Otherwise, plain.

### 7.4 Homepage Copy

```
[METADATA]
INCEPTYON LABS / EST. 2024 / TAMPA, FL / INDEPENDENT SOFTWARE LAB

[HERO — Display 1]
Systems for
impossible ideas.

[POSITIONING — Body, Slate]
Inceptyon Labs is an independent software studio building apps,
games, agents, dashboards, and experimental tools across consumer
software, infrastructure, and generative systems.

Each project is treated as a system. Each system is cataloged
as a dossier.

[ INSPECT DOSSIERS ]

────

01 / DOSSIERS

[Three featured project cards]

[ VIEW ALL 12 DOSSIERS ]

────

02 / FROM THE LAB

[Three transmissions — title, date, one-line summary]

[ READ FIELD NOTES ]

────

03 / COORDINATES

The lab operates from Tampa, Florida.
Most work is shipped publicly. Quiet correspondence is welcome.

[ TRANSMIT ]
```

### 7.5 About Copy

```
INCEPTYON LABS is an independent software studio operating from
Tampa, Florida. The lab builds apps, agents, dashboards, and
experimental tools across consumer software, infrastructure, and
generative systems.

The studio's working method is simple: small teams, fast iteration,
public artifacts. Each project is a self-contained thesis about
what a piece of software can do in a domain we find under-served
or interestingly strange. Some are commercial. Some are research.
Some are operational tools we built for ourselves and decided
to ship.

We don't have a roadmap. We have a catalog.

The studio is run by [name], an AWS architect with a background
in cloud resiliency, engineering enablement, and a long-running
suspicion that more software should look like instruments and
less like apps.
```

### 7.6 Project Card Copy Style

Two-line cap. The first line is a category statement; the second is the *signal*.

- Unwyned — *A wine discovery system. / Taste, mapped.*
- INCEPTYON: JOVIAN SYSTEM — *A speculative biology game. / Tend the moons of an alien Jupiter.*
- Sequentyol — *A sequence exploration surface. / Numbers, plotted patiently.*
- GigaBrain — *Game automation control. / Run dungeons while you sleep.*
- Insomnia — *Agent monitoring. / The watch that doesn't.*
- Mise — *Culinary mise en place, software. / Kitchen-ready, before the kitchen.*
- TARS — *Claude Code configuration manager. / One profile, many projects.*
- Lensing — *Plugin-driven information dashboard. / Information, refracted.*
- Gargantua — *macOS system cleaner. / Quiet machines.*
- PASIV — *Idea-to-implementation extractor for AI agents. / Write the system, ship the system.*
- Xenodex — *Generative lore on-chain. / A field guide to nothing real.*
- Tenet — *Application health auditing for AI agents. / Trust, but inspect.*

### 7.7 Social Bio Options

Twitter/X (160 chars):
> Inceptyon Labs · independent software studio · systems for impossible ideas · 12 dossiers, more pending · Tampa, FL · inceptyonlabs.com

GitHub:
> Independent software studio. Systems for impossible ideas. inceptyonlabs.com

LinkedIn (one-liner):
> Inceptyon Labs is an independent software studio building apps, agents, and instruments for problems without a category. Tampa, FL.

### 7.8 GitHub README Intro Template

```markdown
# [PROJECT NAME]

> [Signal line — 4–8 words.]

[Project name] is a [classification] for [domain].
A project of [Inceptyon Labs](https://inceptyonlabs.com).

```
PROJECT       [number]
DOMAIN        [domain]
STATUS        [DEPLOYED | IN-DEVELOPMENT | CONCEPT | ARCHIVED]
INSTANCES     [iOS · Android · Web · CLI · Docker]
STACK         [language · framework · primary services]
ESTABLISHED   [year]
```

## What it does
[2–3 paragraphs. Plain technical English. No marketing.]

## Architecture
[Schematic diagram or terse component list.]

## Operating
[Install / run instructions. Mono-heavy.]

## Field notes
- [Link to blog post]
- [Link to related dossier]
```

---

## 8. INSPIRATION SOURCES

Look here. Don't copy. Pull principles, not pixels.

- **Aerospace / Mission Control:** Apollo Mission Control, JPL Deep Space Network, ESA mission ops, SpaceX Dragon flight UI, NASA worm-logo era documentation.
- **Archival & Museum:** Smithsonian specimen labels, The Met classification, Library of Congress catalog typography, Stripe Press book design.
- **Technical Manuals:** Bell Labs Technical Journal, 1960s–70s Olivetti documentation, Braun manuals (Rams period), HP scientific calculator manuals, USGS topo maps.
- **Scientific Diagrams:** Tufte, Haeckel (public domain), USPTO patent drawings, Hubble/JWST scientific releases.
- **Brutalist / Industrial Interfaces:** Bloomberg terminals, SCADA panels, Honeywell/Allen-Bradley control panel design, NYC subway and London Underground signage systems.
- **Cinematic Production Design:** mid-budget speculative-film practical interfaces, pre-glossy 1970s sci-fi aesthetic, documentary cinematography for atmosphere.
- **Experimental Software Studios:** Linear, Vercel/Geist, Anthropic, Stripe Press, Dynamicland, Are.na.
- **What not to look at:** generic SaaS landing pages, AI startups with purple-blue gradients, Web3 marketplaces, awwwards-trophy 90%-animation sites, anything with "-morphism" in its name.

---

## 9. DELIVERABLES SUMMARY

### 9.1 Brand Thesis

> Inceptyon Labs is not a product brand. It is the cataloging system for a body of work. The brand presents the studio's projects the way a research lab presents its instruments: precisely, soberly, classified by domain and status. Cinematic in the way mission control is cinematic — through restraint, measured language, and an authority that comes from showing the seams. The catalog *is* the argument.

### 9.2 Design Principles

1. **Treat every artifact as a specimen.** Classification first, content second.
2. **Restraint is the brand.** Decoration is borrowed time.
3. **Color is signal.** Most surfaces have none.
4. **Mono caps for the machine. Sans for the human.**
5. **The grid is the law.** Asymmetric within it; never break it.
6. **Sharp before soft.** No rounded corners on primary surfaces.
7. **Schematic before illustrated.**
8. **Show the seams.** Version numbers, build dates, coordinates are design elements.
9. **Slow before sudden.** Motion is mechanical, never bouncy.
10. **The catalog speaks.** A clean list of dossiers beats one hero illustration.
11. **The brand may withhold narrative. It must not withhold meaning.**

### 9.3 Do This / Avoid This

| **DO** | **AVOID** |
|---|---|
| Mono caps for metadata, nav, status, codes | Lowercase nav with emoji |
| 1px hairline rules everywhere | Drop shadows |
| Sharp 0px corners on cards/buttons | Rounded everything |
| Number your projects (`PROJECT 04`) | "Our work" with no order |
| Show version numbers, build dates, coords | Hide all telemetry |
| Schematic illustrations (1px line work) | Stock 3D shapes / blob illos |
| Two surfaces (Ink/Bone) + one accent | Five-color palettes with gradients |
| Square-bracket button labels: `[ INSPECT ]` | Pill-shaped CTAs |
| Bordered status badges | Filled status pills |
| Bordered Signal CTA on dark, hover-fill | Solid Signal blocks across the page |
| Dark canonical, light for docs | Light-only or dark-only forced |
| Slow, mechanical motion (300–500ms) | Springy bouncy entrances |
| Body type 16/24 minimum, generous space | Tight 14px UI everywhere |
| One signal accent (mission-amber) | Purple-blue gradients |
| Plain technical English | "Magical," "delightful," "revolutionary" |
| Catalog of dossiers as homepage | Hero + dual-CTA SaaS template |
| Footer as instrument panel | Three-column "Resources / Company / Legal" |
| `text-wrap: balance` on display | Mid-word hyphenation in display |
| `prefers-reduced-motion` honored | Forced animation regardless |
| Real metadata as the source of mystery | Pretend secrecy ("Classified systems...") |

---

## APPENDIX A — CSS TOKEN LAYER (revised v0.2)

```css
:root {
  /* ─────────────────────────────────────
     RAW PALETTE — do not consume directly
     in components. Use semantic tokens.
     ───────────────────────────────────── */
  --ink: #0F1115;
  --carbon: #1A1D24;
  --graphite: #3A3F47;
  --steel: #6B737E;
  --slate: #A8ADB5;          /* NEW v0.2 */
  --mist: #C2C5CB;
  --bone: #EBE6D7;
  --paper: #F7F4EA;

  --signal: #D26A2A;
  --signal-hover: #BC5C20;
  --phosphor: #7BC07A;
  --caution: #C03A35;

  /* ─────────────────────────────────────
     SEMANTIC TOKENS — components use these
     ───────────────────────────────────── */

  /* Surfaces */
  --surface-page: var(--ink);
  --surface-panel: var(--carbon);
  --surface-elevated: var(--carbon);

  /* Text */
  --text-primary: var(--bone);
  --text-secondary: var(--slate);     /* AA Normal on Ink */
  --text-tertiary: var(--steel);      /* AA Large only — disabled, captions */
  --text-disabled: var(--graphite);
  --text-on-signal: var(--ink);

  /* Borders */
  --border-subtle: var(--graphite);   /* structure, hairlines, frames */
  --border-visible: #505762;          /* visible separators */
  --border-strong: var(--mist);
  --border-accent: var(--signal);     /* CTAs, focus, brand frames */

  /* Actions */
  --action-primary-border: var(--signal);
  --action-primary-text: var(--signal);
  --action-primary-fill-hover: var(--signal);
  --action-primary-text-hover: var(--ink);
  --action-secondary-border: var(--bone);
  --action-secondary-text: var(--bone);
  --action-destructive-border: var(--caution);
  --action-destructive-text: var(--caution);

  /* Status */
  --status-active: var(--signal);
  --status-deployed: var(--phosphor);
  --status-in-dev: var(--steel);
  --status-archived: var(--steel);
  --status-decommissioned: var(--caution);

  /* Focus */
  --focus-ring: var(--signal);
  --focus-ring-offset: 2px;

  /* Type */
  --font-sans: "Geist", "Söhne", -apple-system, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Berkeley Mono", ui-monospace, monospace;

  /* Spacing */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --space-32: 128px;

  /* Motion */
  --ease-instrument: cubic-bezier(0.2, 0.0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-base: 320ms;
  --duration-slow: 480ms;
}

/* ─────────────────────────────────────
   LIGHT SURFACE OVERRIDE
   Apply via [data-surface="light"] or
   [data-theme="light"] on any element
   that needs the inverted token map.
   ───────────────────────────────────── */
[data-surface="light"],
[data-theme="light"] {
  --surface-page: var(--paper);
  --surface-panel: var(--bone);
  --surface-elevated: var(--paper);

  --text-primary: var(--ink);
  --text-secondary: var(--graphite);
  --text-tertiary: var(--steel);
  --text-disabled: var(--mist);
  --text-on-signal: var(--ink);

  --border-subtle: var(--mist);
  --border-visible: #B8BCC4;
  --border-strong: var(--graphite);

  --action-secondary-border: var(--ink);
  --action-secondary-text: var(--ink);
}

/* ─────────────────────────────────────
   REDUCED MOTION
   ───────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ─────────────────────────────────────
   UTILITIES
   ───────────────────────────────────── */

/* The studio's signature mono-caps treatment */
.mono-caps {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
}

/* Tabular numerals — for metadata, telemetry, version strings */
.tabular {
  font-variant-numeric: tabular-nums;
}

/* Bracketed CTA labels */
.btn-bracket::before { content: "[ "; }
.btn-bracket::after  { content: " ]"; }

/* Display headlines */
.display {
  text-wrap: balance;
  hyphens: none;
  letter-spacing: -0.015em;
}

/* Body prose */
.prose {
  text-wrap: pretty;
  hyphens: none;
}

/* Project name elements should never break across lines */
.project-name {
  white-space: nowrap;
}

/* Focus ring — use on all interactive elements */
.focus-ring:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}
```

---

## APPENDIX B — NAMING DRIFT CHEAT SHEET

The orthographic drift is the studio's fingerprint. Use it sparingly — only when:

1. The unmodified word is too common to own as a mark.
2. The drifted spelling reads correctly aloud.
3. The new spelling looks intentional, not like a typo.
4. **No more than a minority of active projects use the drift at any time.** If everything is drifted, the signature stops working.

| Pattern | Examples |
|---|---|
| `i → y` mid-word | Inceptyon, Sequentyol, Alyqon, Unwyned |
| Vowel doubling avoided | Drift one letter only — never "Inceptioon" |

**Names that should *not* be drifted** — they earn authority from being real words: Tenet, Lensing, Insomnia, PASIV, Tesseract, Gargantua, Xenodex, TARS, Mise.

**Studio / project name collision:** when a project mark and the studio mark share a root, the project carries a disambiguating subtitle in the catalog.

| Studio | Project | Catalog form |
|---|---|---|
| `INCEPTYON LABS` | `INCEPTYON` (the game) | **`INCEPTYON: JOVIAN SYSTEM`** |

The game's own product surfaces (app store listing, in-game UI) may use bare `INCEPTYON`. The studio catalog always uses the disambiguated form.

---

## APPENDIX C — MARK & SOCIAL ASSETS (NEW v0.2)

### C.1 Minimum Mark / Favicon

The studio's primary identity is the wordmark `INCEPTYON LABS`. Where a wordmark cannot fit (favicon, GitHub avatar, social avatar, browser pinned tab, mobile collapsed header, watermark on diagrams, loading state), use the **registration mark**:

> **A solid Signal-amber dot, centered inside a thin square frame.**

Construction:

```
┌─────────────────┐    Frame:  1px stroke
│                 │            Square (1:1 aspect)
│       ●         │            Corner: 0px radius
│                 │
└─────────────────┘    Dot:    Solid fill, Signal (#D26A2A)
                                Diameter ≈ 24% of frame side
                                Centered (geometric, not optical)
```

**Color rules:**
- On dark surfaces (Ink, Carbon): frame in **Bone**, dot in **Signal**.
- On light surfaces (Bone, Paper): frame in **Ink**, dot in **Signal**.
- On Signal itself: do not place the mark on its own brand color.

**Sizes & exports:**

| Size | Use | Notes |
|---|---|---|
| 16×16 | Browser tab favicon | Frame stroke may need to be rasterized at 1px equivalent |
| 32×32 | Standard favicon | |
| 48×48 | Windows / older platforms | |
| 180×180 | Apple touch icon | |
| 192×192, 512×512 | Android / PWA | |
| 1024×1024 | App store icon (when needed) | Frame stroke proportional, not absolute |
| Vector (.svg) | All scalable contexts | Source of truth |

**Why this mark works:**
- Abstract but not mystical.
- Reads as a catalog marker (like a registration tick on archival material).
- Carries the Signal accent into small surfaces without using color elsewhere.
- Scales to 16px without becoming illegible.
- Doesn't compete with project marks.
- Avoids sci-fi logo clichés (no orbital rings, no abstract triangles, no monogram).

**Variants for special contexts:**

- **Loading state:** the dot pulses (0.6 → 1.0 opacity, 1200ms cycle, eased).
- **Diagram watermark:** the mark appears at 20% opacity in the lower-right corner of schematic plates, sized to ~24×24px.

### C.2 Open Graph / Social Share Templates

**Studio template** (homepage, about, generic shares):

```
┌──────────────────────────────────────────────┐
│ INCEPTYON LABS / EST. 2024 / TAMPA, FL       │   ← top metadata strip, mono caps
│ ──────────────────────────────────────────── │
│                                              │
│   Systems for                                │   ← Display, left-aligned
│   impossible ideas.                          │
│                                              │
│   Systems for problems without categories.   │   ← positioning, Slate
│                                              │
│ ──────────────────────────────────────────── │
│ DOSSIERS: 12 / STATUS: ACTIVE       [ ● ]    │   ← bottom strip + registration mark
└──────────────────────────────────────────────┘
   Ink background. Bone type. Signal dot.
```

Specs:
- Dimensions: 1200×630 (OG standard) and 1200×600 (Twitter/X large card).
- Background: Ink (`#0F1115`).
- Frame: 1px Bone border, inset 24px from edges.
- Type: Display ~96px, positioning ~28px, mono caps strips ~16px.
- Registration mark in lower right.
- No imagery, no gradient, no schematic.

**Project dossier template** (per-project shares):

```
┌──────────────────────────────────────────────┐
│ INCEPTYON LABS / DOSSIER                     │
│ ──────────────────────────────────────────── │
│                                              │
│   PROJECT 04 / ENOLOGY / DEPLOYED            │   ← project metadata strip
│                                              │
│   Unwyned                                    │   ← project name, Display
│   A wine discovery system.                   │   ← classification
│   "Taste, mapped."                           │   ← signal copy
│                                              │
│ ──────────────────────────────────────────── │
│ STACK: FLUTTER · SUPABASE         [ ● ]      │
└──────────────────────────────────────────────┘
```

Same dimensions and color treatment as studio template. The project's own visuals — schematics, screenshots — never appear in the OG card. The dossier metadata *is* the share.

**Generation:** OG images can be generated programmatically (Vercel OG, Satori, or Cloudinary) using these specs as a layout template, with project metadata interpolated per page.

---

*End of v0.2 working reference. Iterate freely.*
