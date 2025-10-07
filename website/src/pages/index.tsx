/// <reference types="@docusaurus/module-type-aliases" />
// website/src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

const heroSignals = [
  'Generative UI scaffolds',
  'Workflow blueprints',
  'Edge-ready deployments',
];

const heroStats = [
  { value: '+120', label: 'Schema fields', hint: 'Nightly validation in CI' },
  { value: 'Zero-drift', label: 'Builder loops', hint: 'Diff tooling baked in' },
  { value: 'Realtime', label: 'Spec search', hint: 'Semantic explorer on deck' },
];

const signalPillars = [
  {
    title: 'Spec DNA',
    description:
      'Machine-verifiable JSON Schemas keep agents, UI, and data contracts synchronized across every release channel.',
    highlights: ['Deterministic', 'Versioned', 'Composable'],
  },
  {
    title: 'Autonomous Workflows',
    description:
      'Describe planners, evaluators, and safeguards once—then propagate them to staging, prod, and future models without drift.',
    highlights: ['Fail-safe orchestration', 'Model agnostic', 'Adaptive triggers'],
  },
  {
    title: 'Developer Console',
    description:
      'CLI tooling turns spec updates into auditable artifacts with diff reports, changelog automation, and feature gating.',
    highlights: ['CI-native', 'Type safe', 'Extensible'],
  },
  {
    title: 'Experience Layer',
    description:
      'UI briefs and component maps guarantee interface parity between generated prototypes and hardened production surfaces.',
    highlights: ['Design tokens', 'State aware', 'Multimodal ready'],
  },
];

const timelineBeats = [
  {
    era: 'Now Shipping',
    title: 'Truth lives in JSON Schema',
    description:
      'Every artifact in the repo is generated from canonical machine-readable definitions. No more doc drift or stale slide decks.',
  },
  {
    era: 'Next Quarter',
    title: 'Neural diff intelligence',
    description:
      'Automated upgrade reports surface breaking changes, migration scripts, and visual diffs long before you commit code.',
  },
  {
    era: '2026 Horizon',
    title: 'Adaptive builder loops',
    description:
      'Live schema search, SDK scaffolds, and guardrailed agent executors merge into a continuous deployment mesh.',
  },
];

const moduleLinks = [
  {
    title: 'Schemas',
    description: 'Browse canonical contracts with metadata, version history, and raw JSON download links.',
    href: '/schemas',
    accent: 'primary',
    meta: 'Canonical • Open source',
  },
  {
    title: 'Examples',
    description: 'Fork production-grade references like IdeaForge, Data Analyzer, and Chat Assistant in seconds.',
    href: '/examples',
    accent: 'secondary',
    meta: 'End-to-end blueprints',
  },
  {
    title: 'Diff Reports',
    description: 'Audit how the spec evolves with human-readable change logs and actionable migration prompts.',
    href: '/diff-reports',
    accent: 'neutral',
    meta: 'Automated intelligence',
  },
  {
    title: 'Tooling',
    description: 'Install validator scripts today. CLI + SDK previews unlock semantic schema search and scaffolds next.',
    href: '/tools',
    accent: 'neutral',
    meta: 'CI-ready',
  },
  {
    title: 'GitHub',
    description: 'Star the repo, track the roadmap, and contribute adapters that extend the VibeSpec ecosystem.',
    href: 'https://github.com/andrew-goetz-com/vibespec',
    accent: 'secondary',
    meta: 'Community powered',
    external: true,
  },
];

const marqueeItems = [
  'Zero-drift builders',
  'Realtime schema diffing',
  'Composable agent flows',
  'Quantum-safe changelogs',
  'UI ↔ Data parity',
  'Autonomous validation loops',
];

const metaTitle = 'VibeSpec • Spec-first OS for agentic software';
const metaDescription =
  'A 2060-grade, spec-first platform for designing and shipping autonomous systems with zero schema drift.';

export default function Home(): JSX.Element {
  const marqueeTrack = [...marqueeItems, ...marqueeItems];

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Head>
      <header className="vibespec-hero">
        <div className="container hero-shell">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-aurora hero-aurora--one" aria-hidden="true" />
          <div className="hero-aurora hero-aurora--two" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />

          <div className="hero-copy">
            <span className="hero-badge">Spec-first control for autonomous teams</span>
            <h1>
              Design, validate, and deploy agentic software that feels handcrafted by the future—without losing control of
              the present.
            </h1>
            <p className="hero-lead">
              VibeSpec synchronizes schemas, workflows, UI, and deployment metadata so your AI platforms evolve with intention.
              Ship upgrades as confidently as you dream them up.
            </p>

            <div className="hero-signals">
              {heroSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>

            <div className="hero-cta">
              <Link className="button button--primary button--lg" to="/getting-started">
                Launch Control Room
              </Link>
              <Link className="button button--secondary button--lg" to="/schemas">
                Visualize Schemas
              </Link>
              <a className="button button--link button--lg" href="https://github.com/andrew-goetz-com/vibespec">
                Orbit on GitHub ↗
              </a>
            </div>

            <ul className="hero-stat-grid">
              {heroStats.map((stat) => (
                <li key={stat.label}>
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                  <span className="hint">{stat.hint}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-console" aria-label="Spec console preview">
            <div className="console-overlay" aria-hidden="true" />
            <header className="console-header">
              <span className="console-dot console-dot--pink" />
              <span className="console-dot console-dot--amber" />
              <span className="console-dot console-dot--mint" />
              <span className="console-title">vibespec validate --report</span>
            </header>
            <div className="console-body">
              <pre>
{`{
  "project": "idea-forge",
  "status": "pass",
  "checks": [
    "schemas: synced ✅",
    "ui-brief: parity ✨",
    "workflows: deterministic 🔁"
  ],
  "upgrade_ready": true,
  "next_actions": [
    "deploy:edge",
    "seed:playbooks"
  ]
}`}
              </pre>
            </div>
            <footer className="console-footer">
              <span>Realtime validation • Quantum diff engine</span>
              <span>Last sync: &lt; 60s ago</span>
            </footer>
          </aside>
        </div>
      </header>

      <main>
        <section className="vibespec-marquee" aria-label="Spec capabilities">
          <div className="marquee-surface">
            <div className="marquee-track">
              {marqueeTrack.map((item, index) => (
                <span className="marquee-item" key={`${item}-${index}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-spectrum">
          <div className="container">
            <div className="section-headline">
              <span className="section-badge">Why builders choose VibeSpec</span>
              <h2>Spec DNA powering agents, interfaces, and infrastructure in tandem.</h2>
              <p>
                Each surface is rendered in glass, tuned for high contrast, and wired with motion. Underneath, deterministic
                JSON schemas make the magic composable.
              </p>
            </div>

            <div className="spectrum-grid">
              {signalPillars.map((pillar) => (
                <article className="spectrum-card" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <div className="spectrum-card__meta">
                    {pillar.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-holomap">
          <div className="container holomap-grid">
            <div className="holomap-intro">
              <span className="section-badge">Trajectory</span>
              <h2>The roadmap bends toward autonomous correctness.</h2>
              <p>
                VibeSpec evolves alongside foundation models. Your schema contracts stay conservative, while your builder
                loops accelerate with every release.
              </p>
            </div>

            <div className="holomap-timeline">
              {timelineBeats.map((beat) => (
                <article className="timeline-row" key={beat.title}>
                  <div className="timeline-era">{beat.era}</div>
                  <div className="timeline-node" aria-hidden="true">
                    <span className="timeline-pulse" />
                    <span className="timeline-line" />
                  </div>
                  <div className="timeline-content">
                    <h3>{beat.title}</h3>
                    <p>{beat.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-modules">
          <div className="container">
            <div className="section-headline">
              <span className="section-badge">Portal</span>
              <h2>Dive into the modules that keep your stack luminous.</h2>
              <p>
                Everything in the spec is clickable, versioned, and ready to automate. Explore the modules powering the
                ecosystem.
              </p>
            </div>

            <div className="modules-grid">
              {moduleLinks.map((module) => {
                const cardClass = `module-card module-card--${module.accent ?? 'neutral'}`;

                return (
                  <article className={cardClass} key={module.title}>
                    <div className="module-card__header">
                      <span className="module-card__badge">{module.meta}</span>
                      <h3>{module.title}</h3>
                    </div>
                    <p>{module.description}</p>
                    <div className="module-card__actions">
                      {module.external ? (
                        <a
                          className="button button--sm button--primary"
                          href={module.href}
                          target="_blank"
                          rel="noreferrer">
                          Open ↗
                        </a>
                      ) : (
                        <Link className="button button--sm button--primary" to={module.href}>
                          Open
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="vibespec-section vibespec-cta">
          <div className="container">
            <div className="cta-shell">
              <div className="cta-glow" aria-hidden="true" />
              <div className="cta-content">
                <span className="section-badge">Ready to ship like it&apos;s 2060?</span>
                <h2>Lock your agents to a living specification—and watch the future materialize safely.</h2>
                <p>
                  Install the tooling, wire it into CI, and let automated diff reports become your guardian rails. From
                  there, teams co-create with models while the spec keeps everything aligned.
                </p>
                <div className="cta-actions">
                  <Link className="button button--primary button--lg" to="/getting-started">
                    Activate VibeSpec
                  </Link>
                  <a className="button button--secondary button--lg" href="https://github.com/andrew-goetz-com/vibespec">
                    Join the Mission
                  </a>
                </div>
              </div>
              <aside className="cta-aside">
                <div className="cta-aside__card">
                  <h3>Upcoming drops</h3>
                  <ul>
                    <li>Semantic schema search with natural language prompts</li>
                    <li>SDK scaffolds for popular agent runtimes</li>
                    <li>Live telemetry replay for workflow simulations</li>
                  </ul>
                </div>
                <div className="cta-aside__chips">
                  <span className="tag-chip">Glassmorphic UI</span>
                  <span className="tag-chip">Edge orchestration</span>
                  <span className="tag-chip">Deterministic agents</span>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}