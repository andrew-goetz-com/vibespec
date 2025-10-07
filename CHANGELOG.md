\# Changelog



All notable changes to \*\*VibeSpec\*\* will be documented in this file.  

The format is based on \[Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and follows \[Semantic Versioning](https://semver.org/spec/v2.0.0/).



---



\## \[0.2.0] - 2025-10-07

\### ✨ Added

\- Created `examples/idea-forge-v0.2/` as the v0.2.0 iteration of IdeaForge.

\- Added **PlannerAgent** at `examples/idea-forge-v0.2/agents/planner.json` to break user goals into subtasks.

\- Added **NotificationsAgent** at `examples/idea-forge-v0.2/agents/notifications.json` to post updates to Slack via webhook.

\- Added **Task** data model at `examples/idea-forge-v0.2/data-models/task.json` with `id`, `title`, `status`, and `due_date` fields.

\### 🔄 Changed

\- Updated workflow at `examples/idea-forge-v0.2/workflows/main.json` to include `plan` and `notify` nodes.

\- Bumped IdeaForge v0.2 manifest `vibespec_version` to `0.2.0` and project `version` to `0.2.0`.



---



\## \[0.1.0] - 2025-10-06

\### 🎉 Initial Draft Release

\- Introduced \*\*VibeSpec\*\* as an open standard for AI-driven software generation.

\- Added core \*\*schemas\*\*:

&nbsp; - `manifest.schema.json` – Defines project metadata and core configuration.

&nbsp; - `agent.schema.json` – Describes individual agents, their roles, inputs, and outputs.

&nbsp; - `workflow.schema.json` – Specifies agent orchestration and execution flow.

&nbsp; - `data-model.schema.json` – Defines database schemas and data entities.

&nbsp; - `api-routes.schema.json` – Outlines backend endpoints and their contracts.

&nbsp; - `ui-components.schema.json` – Structures front-end components and props.

&nbsp; - `deployment.schema.json` – Handles deployment settings, environments, and secrets.

\- Added \*\*examples\*\*:

&nbsp; - `idea-forge/` – Full-stack productivity app example.

&nbsp; - `chat-assistant/` – Conversational AI project example.

&nbsp; - `data-analyzer/` – Backend-focused data processing example.

\- Added \*\*tools\*\*:

&nbsp; - `validate.js` – CLI validator for ensuring schema compliance.

\- Added \*\*docs site\*\* scaffold for `https://vibespec.vibecodeunited.com`

\- Added `AGENTS.md` to provide agent entrypoint and ecosystem guidance.

\- Added GitHub Actions workflow for validation on push/PR.



---



\## \[Unreleased]

\### 🚀 Planned

\- Add version negotiation support for multi-spec projects.

\- Provide TypeScript and Python SDKs for reading and validating specs.

\- Introduce a `security.schema.json` for permissions, access policies, and compliance rules.

\- Add a CLI tool for scaffolding new spec projects from templates.

\- Add a spec-to-`AGENTS.md` generator for legacy agent compatibility.

\- Create official marketplace of community-contributed spec extensions.



