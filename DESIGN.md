---
name: Neil Bauman Neon Signal
description: A cyberpunk signal terminal for a cross-disciplinary builder.
colors:
  void-ink: "#080611"
  panel-ink: "#100B1F"
  plasma-magenta: "#FF2BD6"
  electric-cyan: "#00F0FF"
  ultraviolet: "#8B5CF6"
  acid-signal: "#D9FF3F"
  signal-white: "#F4F1FF"
  muted-lavender: "#B8ADD2"
typography:
  display:
    fontFamily: "Arial Black, Impact, sans-serif"
    fontSize: "48px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  signal:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  chip: "3px"
  panel: "12px"
spacing:
  compact: "8px"
  standard: "16px"
  section: "32px"
components:
  signal-chip:
    backgroundColor: "{colors.panel-ink}"
    textColor: "{colors.electric-cyan}"
    typography: "{typography.signal}"
    rounded: "{rounded.chip}"
    padding: "6px 10px"
  neon-panel:
    backgroundColor: "{colors.void-ink}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.panel}"
    padding: "16px"
---

# Design System: Neil Bauman Neon Signal

## Overview

**Creative North Star: "The Pirate Signal Terminal"**

The profile behaves like an intercepted builder broadcast: dense with real coordinates, project callsigns, and living telemetry, but composed with enough quiet space to remain readable. It rejects the generic GitHub-profile badge wall and the single-cyan-on-black developer cliché. The world instead draws from photocopied punk flyers, arcade diagnostics, PCB traces, and ultraviolet club lighting.

**Key Characteristics:**

- A four-signal palette: cyan for navigation, magenta for identity, violet for depth, acid yellow for live state.
- Hard-edged terminal labels paired with oversized, layered display lettering.
- Repository-owned SVG atmosphere: glow, scanlines, circuit paths, and reduced-motion fallbacks.
- Factual project indexes remain the backbone; effects frame them rather than obscure them.

## Colors

The palette is a full-spectrum neon system anchored in near-black violet ink.

### Primary

- **Plasma Magenta** (`#FF2BD6`): identity, major titles, and the hottest edge of the snake.
- **Electric Cyan** (`#00F0FF`): links, navigation signals, technical highlights, and the snake head.

### Secondary

- **Ultraviolet** (`#8B5CF6`): depth, secondary project channels, and gradient bridges.
- **Acid Signal** (`#D9FF3F`): active status, energy pellets, and rare high-priority accents.

### Neutral

- **Void Ink** (`#080611`): authored SVG backgrounds.
- **Panel Ink** (`#100B1F`): inner panels and quiet geometry.
- **Signal White** (`#F4F1FF`): high-contrast display text.
- **Muted Lavender** (`#B8ADD2`): supporting text inside authored assets.

**The Four-Signal Rule.** A composed asset must use at least two neon roles, but acid yellow stays rare enough to mean live energy.

## Typography

**Display Font:** Arial Black with Impact fallback inside SVG assets.  
**Body Font:** GitHub's native system sans stack.  
**Label/Mono Font:** GitHub-compatible UI monospace stack.

Display lettering is compressed, loud, and layered like a gig-poster headline. Functional labels are uppercase monospace with tracking, while long-form content stays in GitHub's native body type for effortless reading.

**The Native Body Rule.** Never turn paragraphs into decorative monospace; the terminal voice belongs to labels, coordinates, and short status lines.

## Layout

The README follows a strong vertical transmission: identity broadcast, system profile, account channels, projects, toolchain, telemetry, and arcade sign-off. Sections use numbered signal labels and a 32px conceptual rhythm. Wide assets cap at GitHub's content width and provide their own responsive `viewBox`; tables retain plain semantic structure on narrow screens.

## Elevation & Depth

Depth comes from luminous edge halos, doubled chromatic text, scanline texture, and overlapping circuit traces inside SVG assets. Markdown content itself stays flat. Glow is reserved for authored images so GitHub light mode never makes body text unreadable.

**The Contained Glow Rule.** Every bloom effect must live inside an SVG boundary; never depend on page-level CSS GitHub will strip.

## Shapes

Panels use 12px clipped corners or 3px hard chips. Circuit lines, square brackets, diamonds, and crosshair marks establish the geometry. Rounded pill badges are avoided; status labels use flat-square shields.

## Components

### Signal Chips

Flat-square badges use Void or Ultraviolet fills, uppercase labels, and cyan, magenta, or acid emphasis. One row carries at most four signals.

### Neon Panels

Authored SVG panels use Void Ink, a thin gradient border, subtle scanlines, and one dominant visual event. They always include descriptive text alternatives and a reduced-motion state.

### Project Indexes

Tables remain semantic and compact. Project names act as callsigns; descriptions remain factual; technology names use inline code formatting rather than additional icon clutter.

### Procedural Snake

The snake is a daily arcade transmission, not a literal contribution graph. Energy nodes are seeded into different positions each day, and the snake route connects them with an orthogonal path. Its body spans cyan, violet, and magenta; pellets cycle across the full signal palette.

## Do's and Don'ts

### Do:

- **Do** use large authored SVG moments at the opening and closing of the page.
- **Do** preserve real repository links and plain-language descriptions.
- **Do** provide a non-animated state for motion-sensitive visitors.
- **Do** use acid yellow only for live or energized states.

### Don't:

- **Don't** return to monochrome cyan or a generic matrix-code aesthetic.
- **Don't** stack dozens of unrelated service cards and badges.
- **Don't** simulate accomplishments, activity, or contribution data.
- **Don't** let glow reduce text contrast or obscure the project index.
