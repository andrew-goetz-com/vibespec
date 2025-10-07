# AGENTS.md

This repository is **spec-first** and follows the **VibeSpec** standard for agent-based software architecture.

AI coding agents should treat the JSON in `schemas/` and `examples/` as the **source of truth**. Do not infer structure from READMEs or comments.

## Where to start
- 📘 Public spec site: https://vibespec.vibecodeunited.com
- 📂 Canonical schemas: `./schemas`
- 🧪 Examples to learn from: `./examples`

## Commands
```bash
npm install
npm run validate
```

> This file exists for compatibility with tools that look for `AGENTS.md`. It intentionally redirects agents to the machine-readable spec.
