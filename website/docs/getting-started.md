---
id: "getting-started"
title: "Getting Started"
slug: "/getting-started"
---

1) Install validator: `npm install`
2) Validate examples: `npm run validate`
3) Explore schemas in `/schemas` and examples in `/examples`
4) Add your generator to produce a new example under `/examples/<your-app>`

Core files:
- `manifest.json` – project metadata and core configuration
- `project.json` – app-level metadata and description
- `agent.json` – describes agent roles, inputs, outputs
- `workflow.json` – orchestrates agents and execution flow
- `data-model.json` – defines entities and persistence schemas
- `api-routes.json` – backend contracts
- `ui-components.json` – UI pages/components/properties
- `deployment.json` – environments and secrets
