# INCEPTYON LABS — BRAND & DESIGN SYSTEM

*Version 0.3 / Working Reference*

> Inceptyon Labs is not a product brand.
> It is the cataloging system for a body of work.
>
> *Time is the subject. Nesting is the structure.*

---

## CHANGELOG — v0.2 → v0.3

This is a substantial direction shift, not a refinement. v0.3 commits to **two primary cinematic signatures**: *time as a visible design element* and *nested structure*. Everything in the system — palette, typography, components, copy — is reworked to serve these two ideas.

### Strategic shift

- **Brand thesis updated:** time and nesting are now named as the studio's two visual obsessions. The brand is no longer a generic premium-technical studio aesthetic; it is specifically about systems that exist *in time* and *within other systems*.
- **Tagline preserved.** *Systems for impossible ideas.* still works, perhaps better — the cinematic load is now carried by the visuals, not the words.

### Added

- **§2.9 — The Time Layer.** New section. Defines what time means as a brand element: live clocks, mission-elapsed-time formatting, durations over date ranges, build/render telemetry, T-minus countdowns where real.
- **§2.10 — The Nesting Layer.** New section. Three-depth nesting rule (`STUDIO → DOSSIER → SECTION`), nested metadata strips, coordinate-style breadcrumbs, frame-in-frame architecture.
- **`Halogen` color token** (`#E8EAEC`) — cold near-white with faint cyan cast. The third color in the Hoytema-inspired trichromatic.
- **`Filament` accent revision.** Warm tungsten-amber replacing industrial signal-orange. Reads as filament light, not warning light.
- **Project number notation:** dossiers display as `04 / 12` (this project of total). Sections within dossiers display as `04.2 / 12`. Numbers carry hierarchy and totality.
- **Mission Elapsed Time (MET) format** for operational durations: `T+847.2D`, `T-14D`, `OPERATIONAL: 847 DAYS`.
- **Nesting-aware breadcrumb specification** (§5.12).
- **Chronograph component** (§5.13) — the live clock chrome that runs in the studio nav.

### Changed

- **`Ink` shifts cooler.** From `oklch(0.16 0.012 250)` to `oklch(0.15 0.022 245)`. Slightly bluer, slightly deeper. Reads as Hoytema night, not neutral charcoal.
- **`Signal` retired. `Filament` introduced.** From industrial `#D26A2A` to tungsten `#E1925A` (`oklch(0.74 0.12 55)`). Softer, warmer, more lamp-at-3am.
- **Display weight gets heavier.** New display token (Geist Black / Söhne Breit Halbfett upgrade) for occasional architectural moments. Body and UI stay Medium; the heavy weight is reserved.
- **Hero direction reversed.** v0.2 said "no imagery in the default hero." v0.3 says: **the hero is a single live time element + Display 1**. The clock *is* the hero image.
- **Project numbering scheme.** Reverse-chronological: most recent active project = highest number. Oldest = lowest. Time runs forward through the catalog.
- **Date format standardized:** `YYYY.MM.DD` everywhere (`2026.04.25`). Never `Apr 25, 2026`. Never `4/25/26`.
- **Hero type-reveal motion removed.** Letter-by-letter cinematic reveal on load is now too on-the-nose given the rest of the system. The cinema is in the persistent live elements, not a one-time entrance.

### Considered and Rejected

- **Diagrammatic-blackboard hero.** Strong candidate, but you didn't pick it, and stacking three Nolan moves (time + nesting + diagrams) past parody into territory.
- **Heavy brutalist rules everywhere.** Tempting, but the system already pushed too brutalist would fight the time-as-glowing-element direction. Held.
- **Reverse time animations** (counters that count *down* across the page on scroll, palette inversion on certain pages). Too gimmicky. Time is a *measurement*, not a parlor trick.
- **Renaming the catalog system** to something time-themed (`CHRONOGRAPH`, `RECORD`, `LOG`). The dossier system is too valuable to rebrand. Time and nesting *act on* the catalog; they don't replace it.

---

## 0. THESIS

Inceptyon Labs is an independent software studio that treats each project as a *system in time* — a working apparatus with a build date, an operational duration, a place in a larger catalog. The brand presents the studio's work the way a mission control presents its instruments: precisely, soberly, and with time visibly running.

**Two visual signatures define the studio:**

1. **Time is shown.** Live clocks, mission-elapsed-time, durations, countdowns. Time is the studio's subject — the brand surfaces it constantly.
2. **Structure is nested.** Three depths, always: studio contains dossiers contains sections. Frames within frames. You can always see where you are in the system.

The studio's signature is its naming: single-word project marks, often with a deliberate orthographic drift (the **`y`** swap — *Inceptyon, Sequentyol, Unwyned, Alyqon*). This drift is the brand's fingerprint. It signals that the project belongs to the lab catalog.

> **Tagline:** *Systems for impossible ideas.*
> **Positioning sentence:** *Systems for problems without categories.*

---

## 1. BRAND STRATEGY

### 1.1 Core Positioning

Inceptyon Labs is best described as an **independent software lab**. Each project is a small, self-contained thesis about what software can do in a domain that has been overlooked, mis-served, or considered too strange to ship.

**Positioning statement:**
*An independent software lab building systems for problems without categories.*

### 1.2 Personality

| Trait | What it means | What it doesn't mean |
|---|---|---|
| Precise | Specific language, exact numbers, named subsystems | Pedantic, joyless |
| Quietly ambitious | Big targets stated plainly | Hype, "revolutionary," manifestos |
| Technically credible | Real stacks, real artifacts, public code | Showing off, hostile to non-engineers |
| Time-aware | Surfaces durations, build dates, operational time | Nostalgic, retro |
| Nested | Shows where you are in the system | Disorienting, infinitely recursive |
| Cinematic | Deliberate pacing, sober palette, classified surfaces | Theatrical, sci-fi cosplay |

### 1.3 Voice & Tone

**Voice principles:**
- Declarative over persuasive.
- Technical specificity earns trust. Name the stack, name the version, name the constraint.
- Sparing with adjectives.
- Comfortable with negative space in copy.
- Slightly archival, slightly sober. Like a mission log.

**Tone shifts:**
- **Marketing surface:** Compressed, cinematic. Periods do work.
- **Documentation:** Plain, instructional, generous. Drop the cinema.
- **In-app/dashboard:** Functional, terse. Mono caps for status.
- **Errors:** Treat as system reports, not apologies. Code reference + one-line plain English.

**Avoid as persuasion** *(banned as marketing claims, not in technical contexts):* *magical, delightful, revolutionary, innovative, seamless, journey, leverage, unlock, empower, AI-powered, supercharge, game-changing, next-gen, beautiful, elegant.*

### 1.4 Naming Conventions

**Project names** follow a recognizable but un-stated grammar:

1. **Single word.** Two words only if the second word is a classifier.
2. **Often technical, scientific, or architectural in origin.**
3. **Orthographic drift on a minority subset.** No more than a minority of active projects use the `y` drift.
4. **No suffixes.** No *-ly*, *-ify*, *-able*, *-io*, *-ai*.
5. **Capitalization:** Title case in body (*Sequentyol*); ALL CAPS MONO in metadata (`SEQUENTYOL`).

**Studio / project name collision:** when a project mark and the studio mark share a root, the project carries a disambiguating subtitle in the catalog.

| Studio | Project | Catalog form |
|---|---|---|
| `INCEPTYON LABS` | `INCEPTYON` (the game) | **`INCEPTYON: JOVIAN SYSTEM`** |

**Section / surface names:**

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

### 1.5 Mystery Calibration

The brand feels mysterious *because of restraint*, not because of obfuscation.

- **Show metadata, hide narrative.**
- **Classification language over marketing language.**
- **Let the catalog do the work.**
- **Avoid mythology.** No founder origin theatrics.

> **Hard rule:** *The brand may withhold narrative. It must not withhold meaning.*

---

## 2. VISUAL LANGUAGE

### 2.1 Moodboard Direction

- A flight director console at 3 a.m. — a single cluster of warm lamps in a cold room, MET clock ticking.
- A specimen drawer, but each label has a date stamp and a duration count.
- The endpapers of a Stripe Press hardback bound inside a vault door.
- A patent diagram of another patent diagram.
- A SCADA panel where the only thing moving is the clock.
- The interior of a deep-sea research station — cold blue walls, tungsten reading lamps, a wall of timers.
- A library card catalog where every card lists a *year acquired* and a *days held*.

**What this is not:** a server room, a hacker desk, a sci-fi film still, a "futuristic" UI mockup, a glowing data center, a glass skyscraper at dusk.

### 2.2 Materials, Textures, Surfaces

- **Concrete** at very low opacity — heavier surface texture than v0.2 permitted.
- **Brushed steel / anodized aluminum** as photographic reference only.
- **Paper** — bone, slightly warm, no gloss.
- **Hairlines** for delicate structure (1px).
- **Heavy rules** for major divisions (3–4px). The contrast between thread-thin and architectural-heavy is part of the system.
- **Film grain** at 3–5% on dark surfaces — optional.

**Forbidden:** glass, frosted glass, glow halos, gradient blobs, 3D mesh shapes, "liquid" anything.

### 2.3 Shape Language

- **Rectilinear.** 90° corners on primary surfaces. 0px radius default.
- **Brackets, registration marks, crosshairs, tick marks, time-axis ticks.** Functional decoration only.
- **Frames within frames.** Up to three nested depths (see §2.10).
- **Numbered modules** with totality notation: `01 / 05 — DOSSIERS`.

### 2.4 Layout Principles

- **Grid:** 12-column, asymmetric. Strong left alignment.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px.
- **Margins:** generous on desktop (≥96px gutters at large breakpoints).
- **Metadata strips on every nested frame.** This is required, not optional, in v0.3 — the strip *is* what tells you which depth you're at.
- **Time visible in the chrome.** Persistent, in nav and footer.
- **Hairlines + heavy rules.** 1px for delicate structure, 3px for major divisions.

### 2.5 Iconography

- **Monoline.** 1.5px stroke at 24px, 2px at 32px.
- **Geometric, schematic.** Engineering-diagram feel.
- **No "AI sparkle."** Lucide or Geist Icons, customized: square line caps, schematic over expressive.
- **Time-related icons get more attention.** Clock, timer, hourglass, calendar, duration arc — these appear often; treat them as a sub-family with consistent construction.

### 2.6 Diagram & Schematic Language

Inceptyon Labs visualizes its projects as **schematics**, not as illustrations.

- **Plan/elevation views**, never isometric.
- **Annotated** with thin leader lines and numbered components.
- **Coordinate grids** at low opacity.
- **Color-coded** only where signal demands it.

Use sparingly on the landing page. Schematics shine on dossier detail pages.

### 2.7 Motion Principles

- **Live elements move continuously.** Clocks tick. Counters increment. Durations roll smoothly. **This is the dominant motion in the system** — not page entrances, not hover effects.
- **Page transitions are slow and architectural.** 400–600ms. `cubic-bezier(0.2, 0.0, 0.2, 1)`.
- **Nested frames slide in *over* their parent**, not *replace* it. Drawer/sheet behavior, not navigation.
- **No springs, no bounces.**
- **Hover states are subtle** — color shift or 1px border thicken.
- **Type rolls for changing numbers.** Tabular mono numerals transition between values — smoothly, never jittery.
- **Reduced motion respected.** All non-essential motion disabled when `prefers-reduced-motion: reduce`. Live clocks become static (last-snapshot-with-timestamp-label).

### 2.8 What to Avoid (Visual)

- Glassmorphism, frosted backgrounds
- Gradients on primary brand surfaces
- Purple-blue cyberpunk
- Neon glow, colored drop shadows
- Rounded corners on primary components
- Stock photography
- 3D blob illustrations
- Floating cards on grey backgrounds
- Centered hero with subtitle + dual buttons (the AI-startup template)
- Emoji in marketing copy
- **Static-only chrome.** A clock that doesn't move is dead in this system.
- **Recursion past three depths.** Four-deep nesting becomes parody.

### 2.9 The Time Layer (NEW v0.3)

Time is the studio's subject. The brand surfaces it constantly. **Every page, every component, every state is annotated with time** in some form.

#### 2.9.1 Time Element Types

| Element | Format | Where it appears |
|---|---|---|
| **UTC clock** | `14:23:07 UTC` (live, ticking) | Studio nav (always), dossier headers |
| **Local clock** | `09:23:07 EST` (live, ticking) | Footer telemetry, nav (secondary) |
| **Build date** | `BUILD 2026.04.25` | Page-level metadata, README headers |
| **Render telemetry** | `RENDERED IN 0.847s` | Footer chrome |
| **Project established** | `EST. 2024.03.12` | Dossier metadata |
| **Operational duration (MET)** | `T+847.2D` *or* `OPERATIONAL: 847 DAYS` | Dossier metadata, status badges |
| **Latest release** | `LAST DEPLOY: 2026.04.25 / T-3D AGO` | Dossier metadata |
| **Release countdown** | `T-14D TO RELEASE` | Concept and in-development dossiers |
| **Time since commit** | `LAST COMMIT: T-2H AGO` | Dossier with active development |
| **Catalog age** | `LAB AGE: 781 DAYS` | Footer telemetry |

#### 2.9.2 Mission Elapsed Time (MET) Notation

Borrowed from spaceflight operations. `T` is a reference event; positive offset is *after*, negative is *before*.

- `T+847.2D` — 847.2 days after operational start.
- `T-14D` — 14 days before scheduled release.
- `T+0` — happening now.
- Decimal precision (`.2D`) for active operational durations; whole units for past events.

Use MET only where there's a meaningful reference event:
- Project operational status → reference is `EST` (established date).
- Release countdown → reference is the scheduled release.
- Last commit / last deploy → reference is now (always negative).

#### 2.9.3 Date Format

**Always `YYYY.MM.DD`.** Never `Apr 25, 2026`, never `4/25/26`, never `April 25th`. The dot separator is the brand's date format. Reads as a coordinate.

In running prose where a stylized date would be awkward, write the year only: *"Established 2024."* Don't switch to natural-language dates.

#### 2.9.4 Time Display Rules

- **Live elements use tabular mono numerals.** `font-variant-numeric: tabular-nums; font-family: var(--font-mono);`
- **Seconds tick smoothly.** No jitter on the seconds place.
- **Counters that roll** (durations, MET) use a smooth digit-roll transition (200ms ease) on each update, not a hard swap.
- **Never blink.** Time elements that flash or pulse to indicate "live" are forbidden. The fact that the digits are *changing* is sufficient signal.
- **Time elements can be muted** (Slate/Steel) by default and *brighten to Halogen or Filament* on hover or focus.
- **Stale time becomes visibly stale.** A `LAST COMMIT: T-127D AGO` should be slightly desaturated relative to `LAST COMMIT: T-2H AGO`. The system *feels* how recent something is.

#### 2.9.5 What Not to Do With Time

- **Don't fake it.** Every time element must be real and updating. A static "14:23:07" rendered into the page once is dead.
- **Don't add countdowns to fake events.** `T-14D TO LAUNCH` for a launch that doesn't have a date is hype. Show a countdown only when a date exists.
- **Don't time the user.** No "you've been here 47 seconds" creepiness. Time the *systems*, not the visitor.
- **Don't animate decoratively.** A clock that does a pulse-glow effect every second is theater. The motion is the seconds advancing.

### 2.10 The Nesting Layer (NEW v0.3)

The studio's structural signature is **three-depth nesting**. The visual system makes hierarchy continuously visible.

#### 2.10.1 The Three Depths

| Depth | Frame | Always visible | Coordinate notation |
|---|---|---|---|
| **L1 — Studio** | Outer frame: page boundary, 1px Filament hairline at 32px inset | Studio metadata strip, live clock, footer | `INCEPTYON LABS` |
| **L2 — Section / Dossier** | Inner frame: 1px hairline, 24px inset from L1 | Section/dossier metadata strip | `DOSSIER 04 / 12` |
| **L3 — Subsection / Plate** | Innermost frame: 1px hairline, 16px inset from L2 | Subsection metadata strip | `04.2 / SCHEMATIC` |

**Rule: never more than three depths.** If content needs a fourth level of structure, restructure or use modal behavior instead.

#### 2.10.2 Nested Metadata Strips

Each frame depth has its own metadata strip at the top. Strips stack vertically when frames are nested. Each strip is shorter and more specific than its parent.

```
┌─ L1 ────────────────────────────────────────────┐
│ INCEPTYON LABS / 14:23:07 UTC / TAMPA, FL       │
│ ┌─ L2 ────────────────────────────────────────┐ │
│ │ DOSSIER 04 / 12 — UNWYNED / DEPLOYED         │ │
│ │ ┌─ L3 ────────────────────────────────────┐ │ │
│ │ │ 04.2 / SCHEMATIC / RENDERED IN 0.34s     │ │ │
│ │ │                                          │ │ │
│ │ │ [content]                                │ │ │
│ │ │                                          │ │ │
│ │ └──────────────────────────────────────────┘ │ │
│ └──────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

#### 2.10.3 Coordinate Breadcrumbs

Replace traditional breadcrumbs with **coordinate notation**:

```
INCEPTYON LABS / DOSSIERS / 04 — UNWYNED / 04.2 SCHEMATIC
```

Each coordinate is also the link to that depth. Mono caps, separated by ` / ` with hairline-thin separator dots optional.

#### 2.10.4 Project Number Notation

Numbers carry *position* and *totality*:

- `04 / 12` — this is project 4 of 12 in the active catalog.
- `04.2 / 12` — this is section 2 within project 4.
- `T04` — concept project 4 (T for "thesis," still in concept stage).

The total updates as the catalog grows. A new project pushes the total to 13: `04 / 13`.

**Reverse-chronological numbering:** the most recent active project gets the highest number; the oldest active project keeps `01`. Time runs forward through the catalog. (Decommissioned projects retain their original numbers and stay in the archive at lower opacity.)

#### 2.10.5 Modal/Drawer Behavior

When the user opens a deeper level (e.g., expands a dossier section), the new content **slides in over the parent**, not navigates to a new page. The parent frame stays visible, slightly dimmed, behind the new frame.

This makes the nesting *physical*. Closing the new frame returns you to the parent visibly intact. The user feels themselves moving deeper and back, not laterally between pages.

Implementation: drawer/sheet pattern with a backdrop that shows the parent at 30% opacity. Parent metadata strip remains readable through the backdrop.

#### 2.10.6 What Not to Do With Nesting

- **Don't go four deep.** Three depths only. Fourth-level content becomes a separate dossier or subsection.
- **Don't nest decoratively.** Each frame must carry real content and real metadata. Empty frames around content for "depth" feel are forbidden.
- **Don't break out of nesting.** Once a user is at L3, they should not jump directly to a different L3 without passing through L2 or L1 visibly.
- **Don't hide the parent on drill-down.** The whole point is that you can always see where you are.

---

## 3. COLOR SYSTEM

The palette is **a cold dark base, a tungsten warm accent, a cold near-white highlight, plus structural greys and two functional indicators.** The trichromatic — cold dark / warm filament / cold light — is the brand's color signature.

### 3.1 Raw Palette

| Token | Hex | OKLCH | Use |
|---|---|---|---|
| **Ink** | `#0E1218` | `oklch(0.15 0.022 245)` | Canonical dark surface. Cold blue-grey. |
| **Carbon** | `#181C24` | `oklch(0.21 0.020 245)` | Elevated surface in dark mode. |
| **Graphite** | `#363B45` | `oklch(0.39 0.014 245)` | **Structure only.** Hairlines, frames. Not text. |
| **Steel** | `#6A727E` | `oklch(0.55 0.014 245)` | Tertiary text, disabled, stale time elements. |
| **Slate** | `#A6ACB6` | `oklch(0.74 0.012 245)` | Secondary readable text on Ink/Carbon. |
| **Mist** | `#C0C4CB` | `oklch(0.80 0.008 245)` | Borders on light, subtle UI separators. |
| **Halogen** | `#E8EAEC` | `oklch(0.92 0.005 245)` | **NEW v0.3.** Cold near-white. Cockpit display glow. |
| **Bone** | `#EBE6D7` | `oklch(0.93 0.014 80)` | Light surface. Slightly warm. |
| **Paper** | `#F7F4EA` | `oklch(0.96 0.010 80)` | Elevated surface in light mode. |

### 3.2 Filament Accent (singular, replaces Signal)

| Token | Hex | OKLCH | Use |
|---|---|---|---|
| **Filament** | `#E1925A` | `oklch(0.74 0.12 55)` | **NEW v0.3.** Warm tungsten-amber. The studio's only brand accent. |

The accent has shifted from industrial-amber (`#D26A2A`) to **tungsten-amber**. Reads as the warm light from a filament lamp at 3 a.m., not a warning beacon. Softer, slightly more saturated, more *light* than *signal*.

**Approved Filament uses:** primary CTA borders (with hover-fill), key time elements on hover, focus states, registration marks, schematic emphasis, the studio mark dot.
**Forbidden Filament uses:** large hero backgrounds, decorative gradients, big filled panels, repeated graphic ornament. The less it appears, the more it works.

### 3.3 Functional Indicators

| Token | Hex | OKLCH | Use |
|---|---|---|---|
| **Phosphor** | `#7BC07A` | `oklch(0.78 0.13 145)` | Live / Active / Deployed status only. |
| **Caution** | `#C03A35` | `oklch(0.55 0.18 25)` | Errors, decommissioned, destructive actions. |

### 3.4 Light / Dark Strategy

- **Dark is canonical** for the studio site and project dossiers.
- **Light is for documentation and long-form reading.**
- **Both modes use the same Filament accent.**
- Each project may pick *one* mode as canonical; the studio site supports both.

### 3.5 Accessibility

| Pair | Contrast | Verdict |
|---|---|---|
| Halogen on Ink | ≈ 14.8 : 1 | ✅ AAA — primary headline |
| Bone on Ink | ≈ 13.0 : 1 | ✅ AAA |
| Slate on Ink | ≈ 8.1 : 1 | ✅ AAA — secondary text |
| Steel on Ink | ≈ 3.9 : 1 | ⚠️ AA Large only — tertiary/disabled |
| Filament on Ink | ≈ 6.8 : 1 | ✅ AA — CTAs, links, time elements |
| Phosphor on Ink | ≈ 9.0 : 1 | ✅ AAA |
| Caution on Ink | ≈ 4.5 : 1 | ⚠️ AA Normal but pair with icon/label |

**Rules:**
- Body text on dark ≥ Slate. Never use Steel for paragraph text.
- Mono caps at 11px require letter-spacing ≥ 0.05em and Slate or brighter.
- Status colors never communicate alone — paired with text or icon.
- **Filament is the *one* place where color carries meaning by itself** (CTA, focus, brand mark) and even there, it pairs with bracket affectation or shape.

---

## 4. TYPOGRAPHY

### 4.1 The Stack

#### Direction A — Production Default (Free)

| Role | Font | Weights |
|---|---|---|
| Display | **Geist Sans** | Black, Medium |
| UI / Body | Geist Sans | Medium, Regular |
| Mono | **JetBrains Mono** | Bold, Medium, Regular |

#### Direction B — Cinematic Upgrade (Paid, recommended once worth licensing)

| Role | Font | Weights |
|---|---|---|
| Display | **Söhne Breit Halbfett** *or* **NB Architekt** | Heavy display weight |
| UI / Body | **Söhne** | Buch, Kräftig |
| Mono | **Berkeley Mono** | Bold, Medium, Regular |

The heavy display weight is what makes v0.3 work. Geist Black is adequate; Söhne Breit Halbfett or NB Architekt are properly architectural.

### 4.2 Type Scale

Mobile (base 16px):

| Role | Size / Line | Weight | Tracking |
|---|---|---|---|
| Display 1 | 64 / 64 | **Black / Halbfett** | -0.025em |
| Display 2 | 44 / 48 | Medium | -0.015em |
| H1 | 32 / 36 | Medium | -0.01em |
| H2 | 24 / 28 | Medium | 0 |
| H3 | 18 / 24 | Medium | 0 |
| Body | 16 / 24 | Regular | 0 |
| Small | 14 / 20 | Regular | 0 |
| Caption | 12 / 16 | Regular | 0 |
| Mono caps | 11 / 16 | Regular | +0.08em UPPERCASE |
| Mono telemetry | 14 / 20 | Medium | 0 (tabular nums) |

Desktop scales: Display 1 → 96/96, Display 2 → 64/68, H1 → 40/48.

### 4.3 Typographic Behaviors

- **Mono caps tracked** for metadata, navigation, status badges, CTAs, dossier classification.
- **Mono medium tabular** for live time elements. Distinct from mono caps — this is the *telemetry* face.
- **Body in sans, generous.** 16/24 minimum.
- **Display 1 carries weight.** Black/Halbfett. This is the brand's heavy moment — used sparingly (one per page).
- **No italic in UI.**
- **Numerals tabular** in tables, telemetry, version numbers, dossier metadata, footer coordinates, MET timestamps.

### 4.4 Wrapping & Long Names

- **Hero display:** `max-width: 18ch` desktop, `13ch` mobile. `text-wrap: balance` on all H1/Display.
- **Body:** `text-wrap: pretty`.
- **No mid-word hyphenation.** `hyphens: none`.
- **Project names never break.** `white-space: nowrap`.
- **Time elements never wrap.** A `T+847.2D` rendered across two lines is broken.

### 4.5 Surface-Specific Typography

- **Landing page:** Display 1 (heavy) hero. Mono telemetry chrome. Sans body.
- **Dashboards:** mono-forward, dense, tabular numerals.
- **App surfaces:** sans-forward, body type generous, mono only for metadata.
- **Documentation:** light mode, body 18/28, mono for code.

---

## 5. COMPONENT KIT

### 5.1 Navigation (revised v0.3)

The nav is the studio's chronograph. It carries the live clock, the studio mark, and the section links.

```
┌──────────────────────────────────────────────────────────────────┐
│ [●] INCEPTYON LABS    DOSSIERS  APPARATUS  TRANSMISSIONS  ABOUT  │
│     14:23:07 UTC                                    [ TRANSMIT ] │
└──────────────────────────────────────────────────────────────────┘
```

- 80–96px tall to accommodate clock + nav row.
- Top row: registration mark + wordmark on left, nav items center/right.
- Bottom row: live clock in mono telemetry, Slate color, Filament on hover.
- 1px Graphite bottom border.
- **The clock ticks.** Always. Tabular numerals, smooth seconds.
- Mobile: clock collapses to top-right of header; nav becomes `MENU` text link.

### 5.2 Hero Sections (rebuilt v0.3)

**The hero is a Display 1 + a live time element. The clock is the hero image.**

```
┌──────────────────────────────────────────────────────────────────┐
│ INCEPTYON LABS / EST. 2024.03.12 / TAMPA, FL / LAB AGE: 781D     │
│                                                                  │
│                                                                  │
│  Systems for                                  T+781.0D           │
│  impossible                                   14:23:07 UTC       │
│  ideas.                                       09:23:07 EST       │
│                                                                  │
│                                               LAB OPERATIONAL    │
│                                               12 ACTIVE DOSSIERS │
│                                                                  │
│ Inceptyon Labs is an independent software studio building apps,  │
│ games, agents, dashboards, and experimental tools across         │
│ consumer software, infrastructure, and generative systems.       │
│                                                                  │
│ Each project is treated as a system. Each system is cataloged    │
│ as a dossier.                                                    │
│                                                                  │
│ [ INSPECT DOSSIERS ]                                             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

- Full-bleed Ink background.
- Top metadata strip: studio name, established date, location, **lab age in days** (live).
- Display 1, left, Halogen color, Black/Halbfett weight, max ~18ch.
- Right column: a **time block** — MET counter + UTC clock + local clock + status. All live, all mono telemetry, Slate color.
- Below: positioning sentence in Body Slate.
- Bordered Filament CTA.
- **No imagery.** The time block *is* the imagery.

### 5.3 Project Dossier Cards

```
┌─ DOSSIER 04 / 12 ─────────────────────────────┐
│ DOMAIN: ENOLOGY / DEPLOYED / T+847.2D         │
│                                               │
│ Unwyned                                       │
│ A wine discovery system.                      │
│ "Taste, mapped."                              │
│                                               │
│ ─────                                         │
│ INSTANCES   iOS · ANDROID · WEB               │
│ STACK       FLUTTER · SUPABASE                │
│ LAST DEPLOY 2026.04.25 / T-3D AGO             │
│                                               │
│ [ INSPECT DOSSIER ]                           │
└───────────────────────────────────────────────┘
```

- 1px Graphite border on Carbon background.
- 24px internal padding.
- Header strip shows project number + total + status + MET.
- Hover: border thickens to Filament. No scale, no shadow.
- Time elements remain live within cards — `T+847.2D` updates if the user lingers.

### 5.4 Buttons

| Type | Default | Hover | Use |
|---|---|---|---|
| **Primary brand CTA** | 1px Filament border, Filament text, transparent fill | Filament fill, Ink text | Most landing-page CTAs |
| **High-emphasis action** | Filament fill, Ink text | Slight darken | Form submits, terminal actions |
| **Secondary** | 1px Bone border, Bone text, transparent | Border thicken or fill | Adjacent to primary |
| **Tertiary** | Mono caps text link | Underline reveals from left | Inline, footer |
| **Destructive** | 1px Caution border, Caution text | Caution fill, Bone text | App contexts only |

- 0px radius, 14/24 padding, 48px tap target on mobile.
- Mono caps Medium, +0.08em tracking.
- Square brackets render literally: `[ INSPECT ]`.

### 5.5 Badges & Status Labels

Same as v0.2 but bordered, never filled.

| State | Color |
|---|---|
| `DEPLOYED` | Phosphor border + text |
| `ACTIVE` | Filament border + text |
| `IN-DEVELOPMENT` | Steel border, Bone text |
| `CONCEPT` | Graphite border, Steel text |
| `ARCHIVED` | Dashed Graphite border, Steel text, opacity 0.7 |
| `DECOMMISSIONED` | Caution border + text |

Status badges may include a MET suffix: `DEPLOYED · T+847D`.

### 5.6 Forms & Contact

- **Inputs:** bottom rule only, 1px Graphite, thickening to Filament on focus.
- **Labels:** above input, mono caps small, tracked.
- **Help text:** below input, Slate color.
- **Submit:** primary button, `[ TRANSMIT ]` if message metaphor fits, else `[ SUBMIT ]`.

### 5.7 Footer (revised v0.3)

The footer is the studio's full telemetry panel.

```
┌──────────────────────────────────────────────────────────────────┐
│ INCEPTYON LABS / SYSTEMS LAB / EST. 2024.03.12                   │
│ 27.9506° N, 82.4572° W / TAMPA, FL / UTC-05                      │
│ LAB OPERATIONAL T+781.0D / 14:23:07 UTC / 09:23:07 EST           │
│                                                                  │
│ DOSSIERS         APPARATUS        TRANSMISSIONS    LAB           │
│ Unwyned          TARS             Field Notes      About         │
│ INCEPTYON:       PASIV            Log              Coordinates   │
│   JOVIAN SYSTEM  Tenet            Telemetry        Record        │
│ Sequentyol       [+ 2 more]                                      │
│ [+ 9 more]                                                       │
│                                                                  │
│ ─────────────────────────────────────────────────────────────    │
│ © 2024–2026 INCEPTYON LABS LLC. ALL RIGHTS RESERVED.             │
│ ALL SYSTEMS OBSERVED. RENDERED IN 0.847s. BUILD 2026.04.25.      │
└──────────────────────────────────────────────────────────────────┘
```

The bottom strip becomes a build/render telemetry line. Every page render shows its time, build, and the brand phrase.

### 5.8 Documentation Pages

- Light mode (Paper).
- Three-column: numbered nav rail, max-72ch content, on-page TOC.
- Body sans 18/28.
- Code blocks: mono on Ink with `// LANG / FILE` strips above.
- Headings numbered (`1.1 / Installation`).
- **Page metadata at top includes `LAST REVISED: 2026.04.25 / T-3D AGO`.** Living documents show their staleness.

### 5.9 App / Dashboard Surfaces

- Ink background, Carbon panels.
- 48px top toolbar with mono caps tabs, Filament underline on active.
- 280px side rail max.
- Panels with 1px Graphite borders, header strip.
- **Numerical readouts dominant** — tabular mono, larger than surrounding text.
- Dashboards may include their own MET clock for the agent/process they monitor.

### 5.10 Empty States

- Schematic illustration in 1px Graphite lines.
- Headline mono caps: `NO DATA RECEIVED` / `EMPTY DOSSIER` / `AWAITING TRANSMISSION`.
- Subhead one sentence, Slate.
- **Time stamp on the empty state:** `LAST CHECK: 2026.04.25 14:23 UTC`. Empty doesn't mean unmeasured.

### 5.11 Error States

- Code reference in mono: `ERR–0427`.
- Title plain technical: *"Connection refused."*
- Body one paragraph, Slate.
- Actions: `[ RETRY ]`, `[ INSPECT LOG ]`.
- **Timestamp included:** `OBSERVED 14:23:07 UTC`.

### 5.12 Coordinate Breadcrumb (NEW v0.3)

Replaces traditional breadcrumbs. Mono caps, ` / ` separator.

```
INCEPTYON LABS / DOSSIERS / 04 — UNWYNED / 04.2 SCHEMATIC
```

- Each segment is a link to that depth.
- Current depth is rendered in Halogen; parents in Slate.
- Lives just below L1 metadata strip on all dossier and section pages.
- On mobile, truncates from the left with an ellipsis: `… / 04 — UNWYNED / 04.2 SCHEMATIC`.

### 5.13 Chronograph (NEW v0.3)

The live clock chrome that runs in the studio nav. May also appear standalone as a hero element.

**Anatomy:**

```
┌───────────────────────┐
│ T+781.0D              │  ← MET to lab establishment
│ 14:23:07 UTC          │  ← primary clock
│ 09:23:07 EST          │  ← local clock
│ ─────                 │
│ LAB OPERATIONAL       │  ← status
└───────────────────────┘
```

- Mono telemetry, Slate by default, Filament on hover or focus.
- Smooth seconds. Tabular numerals.
- Updates every 1000ms. The MET decimal (`.0D`) ticks every ~150ms (so it visibly *moves*).
- Variant: compact one-line for nav (`T+781.0D · 14:23:07 UTC`).
- Reduced-motion variant: static snapshot with `AS OF 14:23:07 UTC` label below.

---

## 6. PROJECT DOSSIER SYSTEM

### 6.1 Dossier Metadata Schema (revised v0.3)

```yaml
# Required
project_number: 04
project_total: 12                # for "04 / 12" display
project_name: Unwyned
project_type: Consumer mobile + web app
domain: Enology / Wine discovery
status: DEPLOYED
established: 2024.03.12          # YYYY.MM.DD always
operational: true
operational_since: 2024.05.01
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

# Time elements (NEW v0.3)
latest_release: 2026.04.25
latest_commit: 2026.04.23
release_countdown: null          # YYYY.MM.DD if scheduled

# Optional
maturity: production
visibility: public
repository: public
canonical_surface: ios
origin: lab
```

The system computes derived time fields at render:
- `T+ days` from `operational_since`
- `T- days` to `release_countdown` if set
- `LAST DEPLOY: T-Xd AGO` from `latest_release`
- `LAST COMMIT: T-Xh/d AGO` from `latest_commit`

### 6.2 Dossier Card

See §5.3.

### 6.3 Dossier Detail Page (revised v0.3 — fully nested)

```
┌─ L1: STUDIO ────────────────────────────────────────────────┐
│ INCEPTYON LABS / 14:23:07 UTC / TAMPA, FL                   │
│ INCEPTYON LABS / DOSSIERS / 04 — UNWYNED                    │  ← coordinate breadcrumb
│                                                             │
│ ┌─ L2: DOSSIER ─────────────────────────────────────────┐   │
│ │ DOSSIER 04 / 12 / DOMAIN: ENOLOGY / DEPLOYED          │   │
│ │ EST. 2024.03.12 / OPERATIONAL T+781D                  │   │
│ │                                                       │   │
│ │   Unwyned                              ← Display 1    │   │
│ │   A wine discovery system.             ← Display 2    │   │
│ │                                                       │   │
│ │   ┌─ L3.1: METADATA ─────────────────────────────┐    │   │
│ │   │ TYPE              Consumer mobile + web app   │    │   │
│ │   │ INSTANCES         iOS · Android · Web         │    │   │
│ │   │ STACK             Flutter · Supabase · PG     │    │   │
│ │   │ ESTABLISHED       2024.03.12                  │    │   │
│ │   │ LATEST RELEASE    2026.04.25 / T-3D AGO       │    │   │
│ │   │ LATEST COMMIT     2026.04.23 / T-5D AGO       │    │   │
│ │   │ STATUS            DEPLOYED · v.2.4            │    │   │
│ │   └───────────────────────────────────────────────┘    │   │
│ │                                                       │   │
│ │   "Taste, mapped."                                    │   │
│ │                                                       │   │
│ │   [Description — 2–4 paragraphs]                      │   │
│ │                                                       │   │
│ │   ┌─ L3.2: SCHEMATIC ────────────────────────────┐    │   │
│ │   │ 04.2 / SCHEMATIC / RENDERED IN 0.34s          │    │   │
│ │   │ [1px-line architectural diagram]              │    │   │
│ │   └───────────────────────────────────────────────┘    │   │
│ │                                                       │   │
│ │   ┌─ L3.3: PLATES ───────────────────────────────┐    │   │
│ │   │ 04.3 / CAPTURES                               │    │   │
│ │   │ PLATE 01 / TASTE VECTOR SURFACE               │    │   │
│ │   │ PLATE 02 / RECOMMENDATION GRAPH               │    │   │
│ │   │ [screenshots in framed plates]                │    │   │
│ │   └───────────────────────────────────────────────┘    │   │
│ │                                                       │   │
│ │   ┌─ L3.4: ACCESS ───────────────────────────────┐    │   │
│ │   │ 04.4 / ACCESS                                 │    │   │
│ │   │ [ APP STORE ] [ GOOGLE PLAY ] [ WEB ] [ SRC ] │    │   │
│ │   └───────────────────────────────────────────────┘    │   │
│ │                                                       │   │
│ └───────────────────────────────────────────────────────┘   │
│                                                             │
│ [Footer telemetry]                                          │
└─────────────────────────────────────────────────────────────┘
```

Three depths visible. Coordinate breadcrumb traces position. Time elements at every level.

### 6.4 Captures / Plates

Project screenshots are **evidence, not advertising**.

- Schematic-style thumbnails by default.
- Product screenshots inside framed plates only.
- No glossy device mockups, no full-bleed colorful art.
- Caption every plate: `PLATE 01 / TASTE VECTOR SURFACE`.

### 6.5 Status Lifecycle

`CONCEPT → IN-DEVELOPMENT → DEPLOYED → ACTIVE / OPERATIONAL → ARCHIVED → DECOMMISSIONED`

Status badges may include MET. Decommissioned projects retain their original number but show in archive at lower opacity, with `T+Xd UNTIL DECOMMISSION` history visible.

---

## 7. BRAND COPY

### 7.1 Tagline & Positioning

- **Tagline (cinematic):** *Systems for impossible ideas.*
- **Positioning sentence (literal):** *Systems for problems without categories.*

### 7.2 Section Headings

- `01 / 05 — DOSSIERS — Active and archived projects.`
- `02 / 05 — APPARATUS — Tools we build for ourselves.`
- `03 / 05 — TRANSMISSIONS — Field notes and build logs.`
- `04 / 05 — RECORD — Where the studio has been written about.`
- `05 / 05 — COORDINATES — How to reach the lab.`

### 7.3 CTA Framework

**Brand verbs for exploration. Plain verbs for action.**

| Context | CTA |
|---|---|
| Viewing a project | `[ INSPECT DOSSIER ]` |
| Browsing the catalog | `[ VIEW ALL DOSSIERS ]` |
| Reading writing | `[ READ FIELD NOTES ]` |
| Contact / send | `[ TRANSMIT ]` |
| Downloading | `[ DOWNLOAD ]` |
| Installing | `[ INSTALL ]` *or* `[ DEPLOY ]` if literal |
| Submitting (non-message) | `[ SUBMIT ]` |
| Signing in | `[ SIGN IN ]` |
| Creating account | `[ CREATE ACCOUNT ]` |

### 7.4 Homepage Copy

```
[L1 METADATA STRIP — live]
INCEPTYON LABS / 14:23:07 UTC / TAMPA, FL / LAB AGE: 781D

[HERO — Display 1, Halogen, Black weight]
Systems for
impossible ideas.

[TIME BLOCK — right column, mono telemetry, live]
T+781.0D
14:23:07 UTC
09:23:07 EST
─────
LAB OPERATIONAL
12 ACTIVE DOSSIERS

[POSITIONING — Body, Slate]
Inceptyon Labs is an independent software studio building apps,
games, agents, dashboards, and experimental tools across consumer
software, infrastructure, and generative systems.

Each project is treated as a system. Each system is cataloged
as a dossier.

[ INSPECT DOSSIERS ]

────

01 / 05 — DOSSIERS

[Three featured project cards, each with live MET]

[ VIEW ALL 12 DOSSIERS ]

────

02 / 05 — FROM THE LAB

[Three transmissions — title, date, T-Xd ago, one-line summary]

[ READ FIELD NOTES ]

────

03 / 05 — COORDINATES

The lab operates from Tampa, Florida.
Most work is shipped publicly. Quiet correspondence is welcome.

[ TRANSMIT ]
```

### 7.5 About Copy

```
INCEPTYON LABS is an independent software studio operating from
Tampa, Florida. Established 2024.03.12. Lab age: 781 days.

The lab builds apps, agents, dashboards, and experimental tools
across consumer software, infrastructure, and generative systems.

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

### 7.7 Social Bios

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
PROJECT       04 / 12
DOMAIN        [domain]
STATUS        DEPLOYED · T+847D
INSTANCES     iOS · Android · Web
STACK         [language · framework · primary services]
ESTABLISHED   2024.03.12
LATEST        2026.04.25 (T-3D)
```

## What it does
[2–3 paragraphs. Plain technical English.]

## Architecture
[Schematic diagram or terse component list.]

## Operating
[Install / run instructions. Mono-heavy.]

## Field notes
- [Link to blog post]
```

---

## 8. INSPIRATION SOURCES

- **Aerospace / Mission Control:** Apollo Mission Control consoles, JPL Deep Space Network, ESA mission ops, NASA worm-logo era documentation.
- **Archival & Museum:** Smithsonian specimen labels with date stamps, library card catalogs with acquisition dates, Stripe Press book design.
- **Technical Manuals:** Bell Labs Technical Journal, Olivetti documentation, Braun manuals, HP scientific calculator manuals, USGS topo maps.
- **Scientific Diagrams:** Tufte, Haeckel, USPTO patent drawings, Hubble/JWST mission timelines.
- **Brutalist / Industrial Interfaces:** Bloomberg terminals (those clocks), SCADA panels, Honeywell/Allen-Bradley control panels, NYC subway and London Underground signage with their countdown timers.
- **Cinematic Production Design:** mid-budget speculative-film practical interfaces, pre-glossy 1970s sci-fi, films that obsess over time.
- **Experimental Software Studios:** Linear, Vercel/Geist, Anthropic, Stripe Press, Dynamicland, Are.na.

**What not to look at:** generic SaaS landing pages, AI startup gradients, Web3 marketplaces, awwwards-trophy sites, anything with "-morphism."

---

## 9. DELIVERABLES SUMMARY

### 9.1 Brand Thesis

> Inceptyon Labs is not a product brand. It is the cataloging system for a body of work — a system that exists *in time* and presents its projects *within other systems*. Time is shown. Structure is nested. Three depths, no more. The clock is the hero. The catalog *is* the argument.

### 9.2 Design Principles

1. **Time is shown, not described.** Every page surfaces real time elements.
2. **Three depths, no more.** Studio contains dossiers contains sections.
3. **Treat every artifact as a specimen with a date.**
4. **Restraint is the brand.** Decoration is borrowed time.
5. **One accent: tungsten.** Filament-amber, not warning-orange.
6. **Mono caps for the machine. Mono telemetry for the clock. Sans for the human.**
7. **Sharp before soft.** No rounded corners.
8. **Schematic before illustrated.**
9. **Live elements move continuously. Other elements barely move.**
10. **The catalog speaks.**
11. **The brand may withhold narrative. It must not withhold meaning.**

### 9.3 Do This / Avoid This

| **DO** | **AVOID** |
|---|---|
| Show live UTC + local clocks in chrome | Static "14:23:07" rendered once into the page |
| Use MET notation (`T+847D`) where reference event is real | `T-14D TO LAUNCH` for unscheduled events |
| `YYYY.MM.DD` everywhere | `Apr 25, 2026`; `4/25/26` |
| Three nested frame depths max | Four+ depths or recursive nesting for vibe |
| Project numbers with totality (`04 / 12`) | Numbers without context |
| Reverse-chronological catalog ordering | Alphabetical or arbitrary |
| Coordinate breadcrumbs (`STUDIO / DOSSIER / SECTION`) | Traditional `Home > X > Y` breadcrumbs |
| Tungsten Filament accent | Industrial signal-orange |
| Cold-blue Ink base | Neutral charcoal |
| Halogen highlights for headlines | Pure white |
| Heavy display weight (Black/Halbfett) sparingly | Heavy weight everywhere |
| Mono caps for metadata | Lowercase nav with emoji |
| 1px hairlines + 3px architectural rules | Drop shadows |
| Sharp 0px corners | Rounded everything |
| Smooth tabular numeral rolls | Jittery time updates |
| Real schematics (1px line work) | Stock 3D shapes |
| Two surfaces (Ink/Bone) + one Filament accent + Halogen | Five-color palettes |
| Square-bracket button labels | Pill-shaped CTAs |
| Bordered Filament CTAs (hover-fill) | Solid Filament blocks across the page |
| `text-wrap: balance` on display | Mid-word hyphenation in display |
| `prefers-reduced-motion` honored (clocks become snapshots) | Forced animation regardless |
| Real metadata as the source of mystery | Pretend secrecy |
| Catalog of dossiers as homepage | Hero + dual-CTA SaaS template |

---

## APPENDIX A — CSS TOKEN LAYER

```css
:root {
  /* ─────────────────────────────────────
     RAW PALETTE
     ───────────────────────────────────── */
  --ink: #0E1218;
  --carbon: #181C24;
  --graphite: #363B45;
  --steel: #6A727E;
  --slate: #A6ACB6;
  --mist: #C0C4CB;
  --halogen: #E8EAEC;          /* NEW v0.3 */
  --bone: #EBE6D7;
  --paper: #F7F4EA;

  --filament: #E1925A;          /* NEW v0.3 — replaces Signal */
  --filament-hover: #C97D48;
  --phosphor: #7BC07A;
  --caution: #C03A35;

  /* ─────────────────────────────────────
     SEMANTIC TOKENS
     ───────────────────────────────────── */

  /* Surfaces */
  --surface-page: var(--ink);
  --surface-panel: var(--carbon);
  --surface-elevated: var(--carbon);

  /* Text */
  --text-display: var(--halogen);     /* hero headlines */
  --text-primary: var(--bone);
  --text-secondary: var(--slate);
  --text-tertiary: var(--steel);
  --text-disabled: var(--graphite);
  --text-on-filament: var(--ink);
  --text-time-default: var(--slate);  /* time elements at rest */
  --text-time-active: var(--filament);/* time elements on hover/focus */
  --text-time-stale: var(--steel);    /* old timestamps */

  /* Borders */
  --border-subtle: var(--graphite);
  --border-visible: #4D525C;
  --border-strong: var(--mist);
  --border-accent: var(--filament);
  --border-frame-l1: var(--graphite); /* outermost nesting frame */
  --border-frame-l2: var(--graphite);
  --border-frame-l3: var(--graphite);
  --border-heavy: 3px;                 /* architectural rule weight */

  /* Actions */
  --action-primary-border: var(--filament);
  --action-primary-text: var(--filament);
  --action-primary-fill-hover: var(--filament);
  --action-primary-text-hover: var(--ink);
  --action-secondary-border: var(--bone);
  --action-secondary-text: var(--bone);
  --action-destructive-border: var(--caution);
  --action-destructive-text: var(--caution);

  /* Status */
  --status-active: var(--filament);
  --status-deployed: var(--phosphor);
  --status-in-dev: var(--steel);
  --status-archived: var(--steel);
  --status-decommissioned: var(--caution);

  /* Focus */
  --focus-ring: var(--filament);
  --focus-ring-offset: 2px;

  /* Type */
  --font-sans: "Geist", "Söhne", -apple-system, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Berkeley Mono", ui-monospace, monospace;
  --font-display: "Geist", "Söhne Breit", "NB Architekt", sans-serif;
  --weight-display: 900;        /* Black / Halbfett */
  --weight-medium: 500;
  --weight-regular: 400;

  /* Spacing */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --space-32: 128px;

  /* Nesting */
  --nest-l1-inset: 32px;
  --nest-l2-inset: 24px;
  --nest-l3-inset: 16px;

  /* Motion */
  --ease-instrument: cubic-bezier(0.2, 0.0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-base: 320ms;
  --duration-slow: 480ms;
  --duration-architectural: 600ms;
  --duration-tick: 1000ms;       /* clock update interval */
  --duration-met-tick: 150ms;    /* MET decimal update interval */
}

/* ─────────────────────────────────────
   LIGHT SURFACE OVERRIDE
   ───────────────────────────────────── */
[data-surface="light"],
[data-theme="light"] {
  --surface-page: var(--paper);
  --surface-panel: var(--bone);
  --surface-elevated: var(--paper);

  --text-display: var(--ink);
  --text-primary: var(--ink);
  --text-secondary: var(--graphite);
  --text-tertiary: var(--steel);
  --text-disabled: var(--mist);
  --text-on-filament: var(--ink);
  --text-time-default: var(--graphite);
  --text-time-stale: var(--steel);

  --border-subtle: var(--mist);
  --border-visible: #B8BCC4;
  --border-strong: var(--graphite);

  --action-secondary-border: var(--ink);
  --action-secondary-text: var(--ink);
}

/* ─────────────────────────────────────
   REDUCED MOTION
   Live clocks become snapshots.
   ───────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .chronograph,
  .live-time,
  .met-counter {
    /* JS should detect this and stop ticking;
       a static "AS OF" label appears below */
  }
}

/* ─────────────────────────────────────
   UTILITIES
   ───────────────────────────────────── */
.mono-caps {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--weight-regular);
}

.mono-telemetry {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-weight: var(--weight-medium);
  font-feature-settings: "ss01" on; /* if mono supports stylistic alternates */
}

.tabular {
  font-variant-numeric: tabular-nums;
}

.btn-bracket::before { content: "[ "; }
.btn-bracket::after  { content: " ]"; }

.display {
  font-family: var(--font-display);
  font-weight: var(--weight-display);
  text-wrap: balance;
  hyphens: none;
  letter-spacing: -0.025em;
  color: var(--text-display);
}

.prose {
  text-wrap: pretty;
  hyphens: none;
}

.project-name { white-space: nowrap; }
.time-element { white-space: nowrap; font-variant-numeric: tabular-nums; }

.focus-ring:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

/* Nested frames */
.frame-l1 {
  border: 1px solid var(--border-frame-l1);
  margin: var(--nest-l1-inset);
  padding: var(--nest-l1-inset);
}
.frame-l2 {
  border: 1px solid var(--border-frame-l2);
  margin-top: var(--nest-l2-inset);
  padding: var(--nest-l2-inset);
}
.frame-l3 {
  border: 1px solid var(--border-frame-l3);
  margin-top: var(--nest-l3-inset);
  padding: var(--nest-l3-inset);
}
```

---

## APPENDIX B — NAMING DRIFT CHEAT SHEET

Use the `y` drift sparingly. **No more than a minority of active projects use the drift at any time.**

| Pattern | Examples |
|---|---|
| `i → y` mid-word | Inceptyon, Sequentyol, Alyqon, Unwyned |

Names that should *not* be drifted: Tenet, Lensing, Insomnia, PASIV, Tesseract, Gargantua, Xenodex, TARS, Mise.

**Studio / project name collision:**

| Studio | Project | Catalog form |
|---|---|---|
| `INCEPTYON LABS` | `INCEPTYON` (the game) | **`INCEPTYON: JOVIAN SYSTEM`** |

---

## APPENDIX C — MARK & SOCIAL ASSETS

### C.1 Minimum Mark / Favicon

A solid Filament dot, centered inside a thin square frame.

```
┌─────────────────┐    Frame:  1px stroke
│                 │            Square (1:1)
│       ●         │            0px radius
│                 │
└─────────────────┘    Dot:    Filament fill
                                Diameter ≈ 24% of frame side
```

**Color rules:**
- On dark surfaces: frame in Bone, dot in Filament.
- On light surfaces: frame in Ink, dot in Filament.
- Never on Filament itself.

**Sizes:** 16, 32, 48, 180 (Apple touch), 192, 512, 1024 (app store), plus SVG source.

**Loading-state variant:** the dot pulses 0.6 → 1.0 opacity, 1200ms cycle, eased.
**Diagram watermark:** mark at 20% opacity, ~24px, lower-right of plates.

### C.2 Open Graph Templates

**Studio template** (1200×630):

```
┌─────────────────────────────────────────────┐
│ INCEPTYON LABS / EST. 2024.03.12 / TAMPA    │
│ ─────                                       │
│                                             │
│   Systems for                               │
│   impossible ideas.                         │
│                                             │
│   T+781.0D · LAB OPERATIONAL                │
│                                             │
│ ─────                                       │
│ DOSSIERS: 12 / STATUS: ACTIVE      [ ● ]    │
└─────────────────────────────────────────────┘
   Ink background. Halogen display. Filament dot.
```

**Project dossier template:**

```
┌─────────────────────────────────────────────┐
│ INCEPTYON LABS / DOSSIER 04 / 12            │
│ ─────                                       │
│                                             │
│   PROJECT 04 / ENOLOGY / DEPLOYED · T+847D  │
│                                             │
│   Unwyned                                   │
│   A wine discovery system.                  │
│   "Taste, mapped."                          │
│                                             │
│ ─────                                       │
│ STACK: FLUTTER · SUPABASE          [ ● ]    │
└─────────────────────────────────────────────┘
```

OG image generation should snapshot the time fields at render time and include them as plain text in the image. (OG images don't animate; the frozen time element is a small artifact that, like a published mission patch, captures *when* the share was minted.)

---

*End of v0.3 working reference. Iterate freely.*
