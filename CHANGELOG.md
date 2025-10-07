# Changelog

All notable changes to **VibeSpec** will be documented in this file.  

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and follows [Semantic Versioning](https://semver.org/spec/v2.0.0/).

---

## [0.2.1] - 2025-10-07

### ✨ Added
- Introduced `adapters.schema.json` to describe framework adapters that translate Core semantics (brief, intent, tokens, layout, motion, a11y, interaction) into concrete stack outputs without constraining the spec.

### 🔧 Changed
- Preloaded `adapters.schema.json` into the validator for cross-$ref resolution in [validate.js](tools/validate.js:1).
- Bumped version to 0.2.1 in [VERSION.json](VERSION.json:1).

### 🧰 Docs
- Regenerated schema docs to include adapters at `website/docs/schemas/adapters.schema.mdx`.

### ✅ Validation
- All examples continue to validate with `npm run validate`.

## [0.2.0] - 2025-10-07

### ✨ Added
- Introduced stack-agnostic, intent-first UI/UX Core:
  - New schemas:
    - `design-tokens.schema.json` – W3C-style tokens with themes/modes/brands and aliasing.
    - `layout.schema.json` – Stack/Cluster/Grid/Frame primitives with constraints and responsive overrides.
    - `interaction.schema.json` – Events, guards, keyboard/gesture mappings, typed actions, optional state machine.
    - `motion.schema.json` – Tween/spring/keyframes, choreography, reduced-motion.
    - `accessibility.schema.json` – Roles, ARIA, landmarks, keyboard maps, focus management, contrast targets.
    - `ui-intent.schema.json` – UI intent taxonomy so authors specify purpose (e.g., Action.Primary, Selection.Multiple) instead of concrete widgets.
    - `ui-brief.schema.json` – High-level brief (goals, innovation level, freedoms, perf budgets) to keep spec simple and future-proof.
- Updated validator to preload cross-referenced schemas by $id:
  - [validate.js](tools/validate.js:18) preloads tokens/layout/interaction/motion/accessibility/ui-intent/ui-brief for cross-$ref resolution.
### 🔄 Changed
- Refactored [ui-components.schema.json](schemas/ui-components.schema.json:1) to v0.2.0:
  - Added `brief` (references `ui-brief.schema.json`) for high-level guidance.
  - Added `intent` on Page/Section/ComponentInstance (references `ui-intent.schema.json`) so components can be intent-only; `ComponentInstance` now validates with oneOf (`type` or `intent`).
  - Externalized `layout`, `interactions`, `motion`, and `a11y` via schema references.
  - Kept legacy `theme` for backward compatibility; prefer `tokens`.

### 🧰 Docs
- Regenerated schema docs via [generate-docs.js](tools/generate-docs.js:140) to reflect new/updated schemas and metadata.

### ✅ Validation
- All examples validate against the updated schemas via `npm run validate`.

---

## [0.1.0] - 2025-10-06

### 🎉 Initial Draft Release

- Introduced **VibeSpec** as an open standard for AI-driven software generation.

- Added core **schemas**:

&nbsp; - `manifest.schema.json` – Defines project metadata and core configuration.

&nbsp; - `agent.schema.json` – Describes individual agents, their roles, inputs, and outputs.

&nbsp; - `workflow.schema.json` – Specifies agent orchestration and execution flow.

&nbsp; - `data-model.schema.json` – Defines database schemas and data entities.

&nbsp; - `api-routes.schema.json` – Outlines backend endpoints and their contracts.

&nbsp; - `ui-components.schema.json` – Structures front-end components and props.

&nbsp; - `deployment.schema.json` – Handles deployment settings, environments, and secrets.

- Added **examples**:

&nbsp; - `idea-forge/` – Full-stack productivity app example.

&nbsp; - `chat-assistant/` – Conversational AI project example.

&nbsp; - `data-analyzer/` – Backend-focused data processing example.

- Added **tools**:

&nbsp; - `validate.js` – CLI validator for ensuring schema compliance.

- Added **docs site** scaffold for `https://vibespec.vibecodeunited.com`

- Added `AGENTS.md` to provide agent entrypoint and ecosystem guidance.

- Added GitHub Actions workflow for validation on push/PR.

---

## [Unreleased]

### 🚀 Planned

- Add version negotiation support for multi-spec projects.

- Provide TypeScript and Python SDKs for reading and validating specs.

- Introduce a `security.schema.json` for permissions, access policies, and compliance rules.

- Add a CLI tool for scaffolding new spec projects from templates.

- Add a spec-to-`AGENTS.md` generator for legacy agent compatibility.

- Create official marketplace of community-contributed spec extensions.
