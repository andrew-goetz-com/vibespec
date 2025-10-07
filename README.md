# VibeSpec (Draft 0.1.0)

**VibeSpec** is a spec-first standard for building agentic software. It defines agents, workflows, data models, APIs, UI, and deployment in machine-readable JSON.

- 🌐 Spec site: https://vibespec.vibecodeunited.com
- 📂 Schemas: `./schemas`
- 🧪 Examples: `./examples`
- 🧰 Validator: `npm run validate`

## Validate
```bash
npm install
npm run validate
```

## Structure
```
schemas/     # canonical JSON Schemas
examples/    # example projects that validate against the schemas
tools/       # validator, generators, etc.
reference/   # human-friendly docs
docs/        # static site (deploy to GitHub Pages / Vercel)
AGENTS.md    # entrypoint for coding agents
```
