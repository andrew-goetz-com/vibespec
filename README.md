<div align="center">

# ✨ VibeSpec

### *The Open Standard for AI-Driven Software Generation*

[![Version](https://img.shields.io/badge/version-0.2.1-8f8aff?style=for-the-badge&logo=semver&logoColor=white)](https://github.com/andrew-goetz-com/vibespec/releases)
[![Spec Site](https://img.shields.io/badge/docs-vibespec.vibecodeunited.com-b6b3ff?style=for-the-badge&logo=readthedocs&logoColor=white)](https://vibespec.vibecodeunited.com)
[![CI](https://img.shields.io/badge/validation-passing-2dd4bf?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/andrew-goetz-com/vibespec/actions)

**Build deterministic, agentic systems with machine-readable JSON schemas.**  
No drift. No guesswork. Just pure spec DNA.

[Explore the Spec](https://vibespec.vibecodeunited.com) · [View Examples](./examples) · [Browse Schemas](./schemas) · [Join the Mission](#contributing)

</div>

---

## 🚀 What is VibeSpec?

VibeSpec is a **spec-first standard** that defines the complete architecture of agentic software in machine-readable JSON. Think of it as the DNA for AI-powered applications—every agent, workflow, data model, API endpoint, UI component, and deployment configuration is expressed as deterministic, versionable, and composable schemas.

### Why VibeSpec?

```
┌─────────────────────────────────────────────────────────────┐
│  Traditional Development      →    VibeSpec Way             │
├─────────────────────────────────────────────────────────────┤
│  ❌ Documentation drift       →    ✅ Schema as truth        │
│  ❌ Manual agent wiring       →    ✅ Declarative workflows  │
│  ❌ Siloed UI/API/Data        →    ✅ Unified spec model     │
│  ❌ Breaking changes hidden   →    ✅ Automated diff reports │
│  ❌ Runtime surprises         →    ✅ Validation in CI       │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 Perfect For

- 🤖 **AI Engineers** building multi-agent systems with guardrails
- 🏗️ **Architects** designing composable, version-controlled software specifications
- 🔧 **DevOps Teams** needing deterministic deployment definitions
- 💻 **Full-Stack Builders** who want UI, API, and data in perfect sync
- 🧪 **Platform Teams** creating scaffolding and validation tooling

---

## ⚡ Quick Start

### 1️⃣ Install & Validate

```bash
# Clone the repository
git clone https://github.com/andrew-goetz-com/vibespec.git
cd vibespec

# Install dependencies
npm install

# Validate all example projects against schemas
npm run validate
```

### 2️⃣ Explore the Ecosystem

```bash
# Browse canonical JSON schemas
ls schemas/
# → 18 schemas covering agents, workflows, UI, APIs, data, deployment, and more

# Check out production-ready examples
ls examples/
# → idea-forge, chat-assistant, data-analyzer, and more

# Generate documentation site
npm run docs:generate
```

### 3️⃣ Create Your First Spec

Every VibeSpec project starts with a `manifest.json`:

```json
{
  "$schema": "https://vibespec.vibecodeunited.com/schema/manifest.schema.json",
  "name": "my-agentic-app",
  "version": "1.0.0",
  "specVersion": "0.2.1",
  "files": {
    "project": "./project.json",
    "agents": ["./agents/planner.json"],
    "workflows": ["./workflows/main.json"]
  }
}
```

👉 **[Full Getting Started Guide](https://vibespec.vibecodeunited.com/getting-started)**

---

## 🧬 Core Schemas

VibeSpec defines **17 canonical schemas** that cover every layer of agentic software:

| Schema | Purpose | Key Features |
|--------|---------|-------------|
| 🗂️ **[manifest.schema.json](schemas/manifest.schema.json)** | Project metadata & configuration | Entry point, file paths, version |
| 📦 **[project.schema.json](schemas/project.schema.json)** | App-level description | Name, description, tags |
| 🧑‍💻 **[architecture.schema.json](schemas/architecture.schema.json)** | System architecture | Layers, dependencies, patterns |
| 🤖 **[agent.schema.json](schemas/agent.schema.json)** | Individual agent definitions | Role, inputs, outputs, model config |
| 🔄 **[workflow.schema.json](schemas/workflow.schema.json)** | Agent orchestration | Steps, triggers, error handling |
| 🗄️ **[data-model.schema.json](schemas/data-model.schema.json)** | Database schemas | Entities, fields, relationships |
| 🌐 **[api-routes.schema.json](schemas/api-routes.schema.json)** | Backend endpoints | Routes, methods, request/response |
| 🎨 **[ui-components.schema.json](schemas/ui-components.schema.json)** | Frontend components | Pages, layouts, props, state |
| 🎭 **[ui-brief.schema.json](schemas/ui-brief.schema.json)** | High-level UI guidance | Goals, innovation level, constraints |
| 🎯 **[ui-intent.schema.json](schemas/ui-intent.schema.json)** | Intent-based UI taxonomy | Purpose over widgets |
| 🎨 **[design-tokens.schema.json](schemas/design-tokens.schema.json)** | W3C design tokens | Colors, typography, spacing |
| 📐 **[layout.schema.json](schemas/layout.schema.json)** | Layout primitives | Stack, Grid, Cluster, constraints |
| ⚡ **[interaction.schema.json](schemas/interaction.schema.json)** | User interactions | Events, gestures, state machines |
| 🎬 **[motion.schema.json](schemas/motion.schema.json)** | Animations | Tweens, springs, choreography |
| ♿ **[accessibility.schema.json](schemas/accessibility.schema.json)** | A11y requirements | ARIA, keyboard, contrast |
| 🔌 **[adapters.schema.json](schemas/adapters.schema.json)** | Framework adapters | Stack-specific translations |
| 🚀 **[deployment.schema.json](schemas/deployment.schema.json)** | Deployment config | Environments, secrets, resources |

👉 **[Browse All Schemas](https://vibespec.vibecodeunited.com/schemas)**

---

## 📚 Example Projects

Learn by exploring production-grade reference implementations:

### 🔥 [IdeaForge v0.2](./examples/idea-forge-v0.2)
A full-stack productivity app with multi-agent planning, UI intent system, and deployment configs.

**Includes:** 6 agents • Workflow orchestration • Task data models • REST API • Glassmorphic UI

### 💬 [Chat Assistant](./examples/chat-assistant)
Conversational AI with prompt parsing and real-time messaging.

**Includes:** 2 agents • Message data models • WebSocket support

### 📊 [Data Analyzer](./examples/data-analyzer)
Backend-focused data processing pipeline with insight generation.

**Includes:** Upload parsing • Analytics workflows • Dataset models

👉 **[View All Examples](https://vibespec.vibecodeunited.com/examples)**

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        VibeSpec Ecosystem                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐  │
│  │   Schemas    │────▶│   Examples   │────▶│     Docs     │  │
│  │  (17 files)  │     │  (4 projects)│     │  (website)   │  │
│  └──────────────┘     └──────────────┘     └──────────────┘  │
│         │                     │                     │          │
│         │                     │                     │          │
│         ▼                     ▼                     ▼          │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │              Validation & Tooling Layer                  │ │
│  │  • npm run validate  • Diff reports  • Doc generator    │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Repository Structure

```
vibespec/
├── schemas/          # 🔒 Canonical JSON Schemas (source of truth)
├── examples/         # 🧪 Reference implementations that validate
├── tools/            # 🛠️ Validator, doc generator, scaffolding
├── reference/        # 📖 Human-friendly markdown docs
├── website/          # 🌐 Docusaurus site → vibespec.vibecodeunited.com
├── docs/             # 📦 Built static site (GitHub Pages)
├── reports/          # 📊 Automated diff reports
├── AGENTS.md         # 🤖 Entrypoint for AI coding agents
└── CHANGELOG.md      # 📝 Version history & roadmap
```

---

## 🛠️ Available Commands

```bash
# Validation & Quality
npm run validate              # Validate all examples against schemas

# Documentation
npm run docs:generate         # Generate schema documentation
npm run site:dev              # Start local Docusaurus dev server
npm run site:build            # Build production documentation site

# Scaffolding (coming soon)
npm run scaffold:carcrm       # Create new project from template
```

---

## 🌟 Key Features

### 🔐 **Schema-First Architecture**
Machine-verifiable JSON Schemas eliminate drift between documentation, implementation, and deployment.

### 🤖 **Deterministic Agent Workflows**
Define multi-agent systems with clear inputs, outputs, triggers, and error handling—no runtime surprises.

### 🎨 **Stack-Agnostic UI System**
Intent-based UI specs with design tokens, layout primitives, and accessibility baked in. Adapters translate to any framework.

### 📊 **Automated Diff Reports**
Version-controlled schemas generate human-readable changelogs and breaking change alerts automatically.

### 🧪 **CI-Native Validation**
Every commit validates examples against schemas. Catch errors before they reach production.

### 🔌 **Composable & Extensible**
Modular schema design lets you use only what you need. Community adapters extend functionality.

---

## 🗺️ Roadmap

### ✅ Released (v0.2.1)
- [x] 17 core schemas covering full stack
- [x] Intent-based UI system with design tokens
- [x] Layout primitives (Stack, Grid, Cluster, Frame)
- [x] Interaction & motion schemas
- [x] Accessibility specification
- [x] Framework adapters pattern
- [x] 4 production-grade examples
- [x] CLI validator with CI integration
- [x] Glassmorphic documentation site

### 🚧 Next Quarter
- [ ] Neural diff intelligence with migration scripts
- [ ] Semantic schema search with natural language
- [ ] TypeScript & Python SDKs
- [ ] CLI scaffolding tool for new projects
- [ ] Security schema (permissions, policies, compliance)
- [ ] Community marketplace for adapters

### 🔮 2026 Horizon
- [ ] Adaptive builder loops with live schema search
- [ ] Guardrailed agent executors
- [ ] Real-time telemetry replay for simulations
- [ ] Continuous deployment mesh integration

👉 **[Full Roadmap & Changelog](./CHANGELOG.md)**

---

## 🤝 Contributing

We welcome contributions from the community! VibeSpec is an open standard that grows stronger with diverse perspectives.

### Ways to Contribute

- 🐛 **Report Issues** → Found a bug or have a feature request? [Open an issue](https://github.com/andrew-goetz-com/vibespec/issues)
- 📖 **Improve Docs** → Help make the spec more accessible
- 🧪 **Add Examples** → Contribute reference implementations
- 🔌 **Build Adapters** → Create framework-specific translators
- ✨ **Extend Schemas** → Propose new schema patterns

### Contribution Workflow

1. Fork the repository
2. Update `schemas/` and corresponding `reference/` docs
3. Add or update `examples/` to reflect changes
4. Run `npm run validate` to ensure compliance
5. Submit a pull request with semantic versioning notes

👉 **[Contributing Guidelines](./CONTRIBUTING.md)**

---

## 📖 Documentation

- 🌐 **[Official Spec Site](https://vibespec.vibecodeunited.com)** – Interactive documentation with search
- 📘 **[Getting Started](https://vibespec.vibecodeunited.com/getting-started)** – Step-by-step onboarding
- 📂 **[Schema Reference](https://vibespec.vibecodeunited.com/schemas)** – Detailed schema documentation
- 🧪 **[Example Projects](https://vibespec.vibecodeunited.com/examples)** – Production-ready references
- 📊 **[Diff Reports](https://vibespec.vibecodeunited.com/diff-reports)** – Version evolution tracking
- 🤖 **[AGENTS.md](./AGENTS.md)** – Guide for AI coding agents

---

## 💬 Community & Support

- 💬 **[GitHub Discussions](https://github.com/andrew-goetz-com/vibespec/discussions)** – Ask questions, share ideas
- 🐛 **[Issue Tracker](https://github.com/andrew-goetz-com/vibespec/issues)** – Report bugs, request features
- ⭐ **[Star the Repo](https://github.com/andrew-goetz-com/vibespec)** – Show your support
- 🐦 **Stay Updated** – Watch releases for new schema versions

---

## 📜 License

VibeSpec is an open standard available for use. Check the repository for licensing details.

---

## 🎯 Quick Links

| Resource | Link |
|----------|------|
| 🌐 Official Site | https://vibespec.vibecodeunited.com |
| 📦 npm Package | Coming soon |
| 🐙 GitHub | https://github.com/andrew-goetz-com/vibespec |
| 📊 Latest Release | [v0.2.1](https://github.com/andrew-goetz-com/vibespec/releases/tag/v0.2.1) |
| 📝 Changelog | [CHANGELOG.md](./CHANGELOG.md) |
| 🤝 Contributing | [CONTRIBUTING.md](./CONTRIBUTING.md) |

---

<div align="center">

**Built with ❤️ by [VibeCode United](https://vibespec.vibecodeunited.com)**

*Making agentic software deterministic, composable, and delightful.*

[⬆ Back to Top](#-vibespec)

</div>
