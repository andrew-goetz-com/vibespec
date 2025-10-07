---
title: "IdeaForge 0.1.0 → 0.2.0 Diff Report"
slug: "/diff-reports/idea-forge-0-1-0-to-0-2-0"
---
# IdeaForge 0.1.0 → 0.2.0 Diff Report

Summary
- Created new versioned example directory: examples/idea-forge-v0.2
- Added Planner and Notifications agents
- Extended data models with Task entity
- Updated workflow to include planning and Slack notifications
- Bumped manifest vibespec_version and project version to 0.2.0
- Validation: All examples (including v0.2) pass schema validation

Changed Files
- Manifest
  - examples/idea-forge-v0.2/manifest.json
    - vibespec_version: 0.1.0 → 0.2.0
- Project
  - examples/idea-forge-v0.2/project.json
    - version: 0.1.0 → 0.2.0
    - env.optional: added SLACK_WEBHOOK_URL

New Files (Agents)
- examples/idea-forge-v0.2/agents/planner.json
  - name: PlannerAgent
  - version: 0.2.0
  - role: Break user goals into executable subtasks
  - inputs: goals (object, required)
  - outputs: tasks (array)
  - capabilities: llm.transform
  - tools: openai (model: gpt-4.1, temperature: 0.2)
  - state: stateless

- examples/idea-forge-v0.2/agents/notifications.json
  - name: NotificationsAgent
  - version: 0.2.0
  - role: Post workflow status updates to Slack
  - inputs: message (string, required)
  - outputs: result (object)
  - capabilities: http.request
  - tools: slack_webhook (POST, url from env: SLACK_WEBHOOK_URL)
  - state: stateless

Workflow Update
- examples/idea-forge-v0.2/workflows/main.json
  - version: 1.0.0 → 1.1.0
  - nodes added:
    - plan → agent: PlannerAgent
    - notify → agent: NotificationsAgent
  - edges updated:
    - parse → plan → generate → refine → copy → export → notify

New Files (Data Models)
- examples/idea-forge-v0.2/data-models/task.json
  - name: Task
  - version: 0.2.0
  - fields:
    - id: uuid, required
    - title: string, required
    - status: string, required
    - due_date: string

Unchanged (copied forward to v0.2)
- examples/idea-forge-v0.2/architecture.json (from v0.1)
- examples/idea-forge-v0.2/api/routes.json (from v0.1)
- examples/idea-forge-v0.2/data-models/idea.json (from v0.1)
- examples/idea-forge-v0.2/ui/components.json (from v0.1)
- examples/idea-forge-v0.2/agents/export.json, idea-generator.json, idea-refiner.json, prompt-parser.json, ux-copy.json (from v0.1)

Validation
- Command: npm run validate
- Result: All examples validated, including new v0.2 artifacts

Pointers
- Set SLACK_WEBHOOK_URL in environment for NotificationsAgent.
- PlannerAgent and NotificationsAgent are stateless; stateful persistence (e.g., tasks database) can be introduced in a future iteration.

File Index
- [examples/idea-forge-v0.2/manifest.json](https://github.com/andrew-goetz-com/vibespec/blob/HEAD/examples/idea-forge-v0.2/manifest.json)
- [examples/idea-forge-v0.2/project.json](https://github.com/andrew-goetz-com/vibespec/blob/HEAD/examples/idea-forge-v0.2/project.json)
- [examples/idea-forge-v0.2/workflows/main.json](https://github.com/andrew-goetz-com/vibespec/blob/HEAD/examples/idea-forge-v0.2/workflows/main.json)
- [examples/idea-forge-v0.2/agents/planner.json](https://github.com/andrew-goetz-com/vibespec/blob/HEAD/examples/idea-forge-v0.2/agents/planner.json)
- [examples/idea-forge-v0.2/agents/notifications.json](https://github.com/andrew-goetz-com/vibespec/blob/HEAD/examples/idea-forge-v0.2/agents/notifications.json)
- [examples/idea-forge-v0.2/data-models/task.json](https://github.com/andrew-goetz-com/vibespec/blob/HEAD/examples/idea-forge-v0.2/data-models/task.json)