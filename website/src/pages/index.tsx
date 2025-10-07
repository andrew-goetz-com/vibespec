// website/src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="VibeSpec • Open Standard for Agentic Software"
      description="An open standard for AI-driven software generation — machine-readable schemas, real examples, and tooling.">
      <header className="vibespec-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-pill">Open Agentic Specification</span>
              <h1>Design, validate, and ship autonomous systems at production speed.</h1>
              <p className="hero-lead">
                VibeSpec gives you machine-readable schemas, executable examples, and zero-drift tooling so your
                agents, workflows, and UI stay in sync from prototype to production.
              </p>
              <div className="hero-actions">
                <Link className="button button--primary button--lg" to="/getting-started">
                  Launch the Builder Flow
                </Link>
                <Link className="button button--secondary button--lg" to="/schemas">
                  Inspect the Schemas
                </Link>
                <a className="button button--link button--lg" href="https://github.com/andrew-goetz-com/vibespec">
                  Star on GitHub →
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>+120</strong>
                  <span>Schema fields validated nightly</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>E2E reference projects ready-to-run</span>
                </div>
                <div>
                  <strong>CI-first</strong>
                  <span>Validation &amp; diff tooling baked in</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orb" aria-hidden="true" />
              <div className="hero-window">
                <header>
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                  <span className="window-title">manifest.schema.json</span>
                </header>
                <pre>
{`{
  "id": "chat-engine",
  "agents": [
    {
      "name": "Planner",
      "model": "gpt-4.1",
      "inputs": ["message"],
      "outputs": ["plan"]
    }
  ],
  "workflows": ["main"]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="vibespec-ribbon" aria-label="Highlights">
          <div className="container">
            <div className="ribbon-track">
              <span>Schema-first</span>
              <span>Deterministic Builders</span>
              <span>Composable Agents</span>
              <span>CI Validation</span>
              <span>Production Playbooks</span>
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-panels">
          <div className="container">
            <div className="panel-grid">
              <article className="panel">
                <h3>Machine-readable source of truth</h3>
                <p>
                  Every spec element ships as canonical JSON Schema with strict versioning and examples, enabling your
                  builders to auto-generate reliable scaffolds.
                </p>
              </article>
              <article className="panel">
                <h3>Composable agent workflows</h3>
                <p>
                  Define planners, tools, evaluators, and UI flows that stitch together seamlessly. Reuse the same
                  blueprint across exploration, staging, and prod.
                </p>
              </article>
              <article className="panel">
                <h3>Developer-centric tooling</h3>
                <p>
                  Run <code>npm run validate</code> to verify spec conformance, diff versions, and ship confident PRs
                  with automated checks.
                </p>
              </article>
              <article className="panel">
                <h3>Reference implementations</h3>
                <p>
                  Jumpstart builds with richly annotated examples like IdeaForge, Data Analyzer, and Chat Assistant —
                  complete with agents, UI, and deployment configs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-stack">
          <div className="container">
            <div className="stack-headline">
              <h2>The VibeSpec stack at-a-glance</h2>
              <p>
                Capture the entire lifecycle of an agentic product — from schema definition to diffable releases — in a
                single, interoperable spec.
              </p>
            </div>
            <div className="stack-grid">
              <div className="stack-column">
                <h3>Blueprints</h3>
                <ul>
                  <li>Agent contracts with capabilities &amp; guardrails</li>
                  <li>Workflow orchestration with triggers and fallbacks</li>
                  <li>Rich data modeling and storage semantics</li>
                </ul>
              </div>
              <div className="stack-column">
                <h3>Execution</h3>
                <ul>
                  <li>Validated CLI tooling &amp; schema diff reports</li>
                  <li>Runtime-ready UI component mappings</li>
                  <li>Deployment descriptors with IaC alignment</li>
                </ul>
              </div>
              <div className="stack-column">
                <h3>Lifecycle</h3>
                <ul>
                  <li>Version pinning and automated changelog generation</li>
                  <li>CI/CD hooks for validating agent upgrades</li>
                  <li>Upcoming: Semantic schema search &amp; SDK</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-showcase">
          <div className="container">
            <h2>Navigate the spec in minutes</h2>
            <div className="showcase-grid">
              <div className="showcase-card">
                <h3>Schemas</h3>
                <p>Richly typed JSON Schemas with direct download links and version metadata.</p>
                <Link className="button button--sm button--primary" to="/schemas">
                  Open Schemas
                </Link>
              </div>
              <div className="showcase-card">
                <h3>Examples</h3>
                <p>Production-grade blueprints like IdeaForge and Chat Assistant to fork instantly.</p>
                <Link className="button button--sm button--primary" to="/examples">
                  Open Examples
                </Link>
              </div>
              <div className="showcase-card">
                <h3>Changelog &amp; Diffs</h3>
                <p>Track how the spec evolves and inspect migration-ready diff reports.</p>
                <div className="showcase-actions">
                  <Link className="button button--sm button--secondary" to="/changelog">
                    Changelog
                  </Link>
                  <Link className="button button--sm button--secondary" to="/diff-reports">
                    Diff Reports
                  </Link>
                </div>
              </div>
              <div className="showcase-card">
                <h3>Tools</h3>
                <p>Validator scripts with planned CLI/SDKs and AI-assisted schema search on the roadmap.</p>
                <Link className="button button--sm button--secondary" to="/tools">
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-cta">
          <div className="container">
            <div className="cta-card">
              <div>
                <h2>Ready to enforce spec-first shipping?</h2>
                <p>
                  Install the tooling, run validation in CI, and let your agent platform evolve without drift. The spec
                  is open, versioned, and designed for teams shipping serious AI.
                </p>
              </div>
              <div className="cta-actions">
                <Link className="button button--primary button--lg" to="/getting-started">
                  Get Started
                </Link>
                <a className="button button--secondary button--lg" href="https://github.com/andrew-goetz-com/vibespec">
                  Contribute on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}