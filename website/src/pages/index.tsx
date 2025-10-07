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
          <h1>VibeSpec</h1>
          <p className="lead">
            The spec-first standard for building agentic software. Machine-readable schemas, examples, and tooling for autonomous code generation.
          </p>
          <div className="vibespec-cta">
            <Link className="button button--primary" to="/getting-started">
              Getting Started
            </Link>
            <Link className="button button--secondary" to="/schemas">
              Browse Schemas
            </Link>
            <Link className="button button--secondary" to="/examples">
              View Examples
            </Link>
            <a className="button button--link" href="https://github.com/andrew-goetz-com/vibespec">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="vibespec-section">
          <div className="container">
            <div className="vibespec-grid">
              <div className="vibespec-card">
                <h3>What is VibeSpec?</h3>
                <p>
                  VibeSpec is a modular, JSON-based specification for defining agents, workflows, data models, APIs,
                  UI, and deployment. It is the single source of truth that agent-based builders consume to scaffold and
                  evolve complete applications.
                </p>
              </div>
              <div className="vibespec-card">
                <h3>Why it matters</h3>
                <ul>
                  <li>Deterministic, machine-validated inputs for builders</li>
                  <li>Composable agents and reusable workflows</li>
                  <li>CI validation and ecosystem interoperability</li>
                </ul>
              </div>
              <div className="vibespec-card">
                <h3>Who it’s for</h3>
                <ul>
                  <li>AI agents and tool builders</li>
                  <li>Developers and product teams</li>
                  <li>Infra and platform engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="vibespec-section">
          <div className="container">
            <div className="vibespec-grid">
              <div className="vibespec-card">
                <h3>Schemas</h3>
                <p>Explore canonical JSON Schemas with version metadata and raw links.</p>
                <Link className="button button--sm button--primary" to="/schemas">
                  Open Schemas
                </Link>
              </div>
              <div className="vibespec-card">
                <h3>Examples</h3>
                <p>See real, validated projects like IdeaForge and Chat Assistant.</p>
                <Link className="button button--sm button--primary" to="/examples">
                  Open Examples
                </Link>
              </div>
              <div className="vibespec-card">
                <h3>Changelog & Diff Reports</h3>
                <p>Track spec changes across versions and view detailed diffs.</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Link className="button button--sm button--secondary" to="/changelog">
                    Changelog
                  </Link>
                  <Link className="button button--sm button--secondary" to="/diff-reports">
                    Diff Reports
                  </Link>
                </div>
              </div>
              <div className="vibespec-card">
                <h3>Tools</h3>
                <p>Validator and planned CLI/SDKs. AI-powered schema search coming in Phase 2.</p>
                <Link className="button button--sm button--secondary" to="/tools">
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}