# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

GitHub visitors evaluating Neil Bauman's work, including developers, potential collaborators, and people arriving from a shared project link. This audience is inferred from the explicit request to make the public profile more discoverable and memorable.

## Product Purpose

The repository powers the public profile for `@NeilBaumanMax`. It should introduce Neil quickly, index representative projects, connect the alternate `@neilbauman666` account, and make technical breadth legible without forcing visitors to hunt through repositories.

## Positioning

The profile connects AI-agent products, full-stack delivery, and embedded intelligent systems in one identity. Its project index and alternate-account bridge are factual navigation, not decorative claims.

## Operating Context

The surface is rendered by GitHub from `README.md`. GitHub controls the page chrome, background theme, Markdown styling, responsive behavior, and HTML sanitization. Project-local SVG assets and GitHub Actions provide the expressive and animated layer.

## Capabilities and Constraints

- The root `README.md` is the visible profile surface.
- Dynamic statistics are generated as repository-owned SVG files by GitHub Actions.
- The arcade snake is generated daily and published from the `output` branch.
- The profile must work in GitHub light and dark themes and remain understandable if animation or third-party image services fail.
- Public links and descriptions must reflect real repositories; do not invent achievements, employers, metrics, or availability.

## Brand Commitments

- Name: Neil Bauman.
- Primary account: `@NeilBaumanMax`.
- Alternate account: `@neilbauman666`, publicly named Catnip.
- Visual direction explicitly requested by the user: punk/cyberpunk with strong neon-light effects, richer color, and a less predictable snake animation.
- Voice: technically confident, direct, builder-oriented, bilingual where useful.

## Evidence on Hand

- Public project links and technology descriptions in `README.md`.
- Public alternate-account identity and repositories from the GitHub API.
- Repository-owned generated statistics under `profile/`.
- The current contribution-snake screenshot supplied by the user as an anti-reference for sparse, monochrome motion.
- No testimonials, employment claims, awards, or performance benchmarks are available and none should be fabricated.

## Product Principles

- Make identity and technical focus understandable in the first viewport.
- Lead visitors toward real work and both GitHub accounts.
- Use expressive motion as a signature, not as a substitute for content.
- Keep every dynamic element resilient, accessible, and owned by the repository where practical.
- Prefer a few authored signals over a wall of generic badges.

## Accessibility & Inclusion

All embedded visuals require useful alternative text. Color may reinforce hierarchy but cannot carry meaning alone. Animated SVGs must expose a reduced-motion presentation, and text contrast must remain legible in both GitHub themes.
