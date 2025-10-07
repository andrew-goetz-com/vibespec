// tools/generate-docs.js
// Generates Docusaurus-ready docs from repository sources:
// - Schemas browser (schemas/*.schema.json)
// - Examples index pages (examples/*)
// - Diff Reports (reports/*)
// - Changelog (CHANGELOG.md)
// Also seeds category metadata and basic stubs (Getting Started, Tools).

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const GITHUB_REPO = process.env.GITHUB_REPO || 'andrew-goetz-com/vibespec';
const GH_BLOB = `https://github.com/${GITHUB_REPO}/blob/HEAD`;

const repoRoot = path.resolve(__dirname, '..');
const schemasDir = path.join(repoRoot, 'schemas');
const examplesDir = path.join(repoRoot, 'examples');
const reportsDir = path.join(repoRoot, 'reports');
const changelogPath = path.join(repoRoot, 'CHANGELOG.md');

const websiteDir = path.join(repoRoot, 'website');
const docsDir = path.join(websiteDir, 'docs');
const schemasOut = path.join(docsDir, 'schemas');
const examplesOut = path.join(docsDir, 'examples');
const reportsOut = path.join(docsDir, 'diff-reports');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function readFileSafe(p, def = '') {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return def;
  }
}

function listJson(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.json'));
}

function listMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => /\.mdx?$/i.test(f));
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
}

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function titleFromFilename(file) {
  return file
    .replace(/\.schema\.json$/i, '')
    .replace(/\.(json|mdx?)$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function yamlEscape(str) {
  if (!str) return '';
  // Simple YAML-safe escape
  return String(str).replace(/"/g, '\\"');
}

function frontmatter(obj) {
  const lines = ['---'];
  Object.entries(obj).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      lines.push(`${k}: [${v.map(x => `"${yamlEscape(x)}"`).join(', ')}]`);
    } else if (typeof v === 'object' && v !== null) {
      lines.push(`${k}:`);
      Object.entries(v).forEach(([kk, vv]) => lines.push(`  ${kk}: ${vv}`));
    } else if (typeof v === 'number' || typeof v === 'boolean') {
      lines.push(`${k}: ${v}`);
    } else if (v === undefined || v === null || v === '') {
      // skip empties
    } else {
      lines.push(`${k}: "${yamlEscape(v)}"`);
    }
  });
  lines.push('---', '');
  return lines.join('\n');
}

function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

function extractSchemaMeta(obj, filename) {
  const meta = {};
  meta.$id = obj && (obj.$id || obj['$id']) || '';
  meta.title = obj && (obj.title || obj['title']) || titleFromFilename(filename);
  meta.description = obj && (obj.description || obj['description']) || '';
  meta.vibespecVersion =
    (obj && (obj.vibespecVersion || obj.vibeSpecVersion || obj['x-vibespecVersion'])) || '';
  return meta;
}

function codeBlock(lang, content) {
  return `\n\`\`\`${lang}\n${content}\n\`\`\`\n`;
}

function linkToGithub(relativePath) {
  return `${GH_BLOB}/${relativePath.replace(/\\/g, '/')}`;
}

// Rewrite relative MD links (e.g., examples/foo.json) to GitHub blob links to avoid broken site-relative links
function rewriteMdLinks(markdown) {
  return markdown.replace(/\]\(([^)]+)\)/g, (m, p1) => {
    // ignore anchors, http(s), mailto, absolute site paths
    if (/^(https?:)?\/\//i.test(p1) || /^mailto:/i.test(p1) || /^\//.test(p1) || /^#/.test(p1)) {
      return m;
    }
    // Support repo-relative links that specify a line suffix like file.ext:123
    // Convert to GitHub line anchor: <blob-url>#L123
    const lineMatch = /^(.+):(\d+)$/.exec(p1);
    if (lineMatch) {
      const filePath = lineMatch[1];
      const lineNum = lineMatch[2];
      const ghWithLine = `${linkToGithub(filePath)}#L${lineNum}`;
      return `](${ghWithLine})`;
    }
    // turn repo-relative into GitHub blob links
    const gh = linkToGithub(p1);
    return `](${gh})`;
  });
}

function generateSchemas() {
  ensureDir(schemasOut);
  const files = fs.existsSync(schemasDir)
    ? fs.readdirSync(schemasDir).filter(f => f.toLowerCase().endsWith('.schema.json'))
    : [];
  let count = 0;
  const indexEntries = [];

  files.forEach((file) => {
    const abs = path.join(schemasDir, file);
    const raw = readFileSafe(abs);
    const json = tryParseJson(raw) || {};
    const meta = extractSchemaMeta(json, file);
    const id = slugify(meta.title);
    const outName = file.replace(/\.json$/i, '.mdx');
    const outPath = path.join(schemasOut, outName);

    const fm = frontmatter({
      id,
      title: meta.title,
      description: meta.description,
      slug: `/schemas/${id}`,
      tags: ['schema', ...(meta.vibespecVersion ? [`v${meta.vibespecVersion}`] : [])],
    });

    const metaTable = [
      '| Field | Value |',
      '| --- | --- |',
      `| $id | ${meta.$id ? `\`${meta.$id}\`` : '_none_'} |`,
      `| vibespecVersion | ${meta.vibespecVersion ? `\`${meta.vibespecVersion}\`` : '_none_'} |`,
      '',
    ].join('\n');

    const body = [
      fm,
      meta.description ? `${meta.description}\n` : '',
      metaTable,
      `[View raw schema on GitHub](${linkToGithub(`schemas/${file}`)})`,
      codeBlock('json', JSON.stringify(json, null, 2)),
    ].join('\n');

    writeFile(outPath, body);
    indexEntries.push({ id, title: meta.title });
    count += 1;
  });

  // Category file with generated index (kept for sidebar structure)
  writeFile(path.join(schemasOut, '_category_.json'), JSON.stringify({
    label: 'Schemas',
    position: 2,
    link: { type: 'generated-index', title: 'Schemas' },
  }, null, 2));

  // Explicit index page at /schemas to satisfy navbar link and avoid broken links
  const schemasIndexBody = [
    frontmatter({ id: 'schemas-index', title: 'Schemas', slug: '/schemas' }),
    'Browse canonical JSON Schemas with metadata and raw links.',
    '',
    ...indexEntries
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(e => `- [${e.title}](/schemas/${e.id})`),
    '',
  ].join('\n');
  writeFile(path.join(schemasOut, 'index.md'), schemasIndexBody);

  console.log(`Schemas: generated ${count} page(s).`);
}

function collectJsonLinks(baseDirRel, subDirName) {
  const dirAbs = path.join(repoRoot, baseDirRel, subDirName);
  if (!fs.existsSync(dirAbs)) return [];
  return listJson(dirAbs).map(f => ({
    name: f,
    gh: linkToGithub(path.join(baseDirRel, subDirName, f)),
  }));
}

function generateExamples() {
  ensureDir(examplesOut);
  const dirs = listDirs(examplesDir);
  let count = 0;
  const indexEntries = [];

  dirs.forEach((exName) => {
    const baseRel = path.join('examples', exName);
    const title = `Example: ${titleFromFilename(exName)}`;
    const id = slugify(exName);
    const outPath = path.join(examplesOut, `${exName}.mdx`);

    const fm = frontmatter({
      id,
      title,
      slug: `/examples/${id}`,
      description: `Documentation and raw files for example "${exName}".`,
      tags: ['example', exName],
    });

    // Root files
    const rootFiles = ['manifest.json', 'project.json', 'architecture.json']
      .filter(f => fs.existsSync(path.join(repoRoot, baseRel, f)))
      .map(f => `- [${f}](${linkToGithub(path.join(baseRel, f))})`).join('\n');

    // Common subfolders
    const sections = [
      { name: 'agents', label: 'Agents' },
      { name: 'workflows', label: 'Workflows' },
      { name: 'data-models', label: 'Data Models' },
      { name: 'api', label: 'API' },
      { name: 'ui', label: 'UI' },
      { name: 'deployment', label: 'Deployment' },
    ];

    const parts = [];
    if (rootFiles) {
      parts.push('### Core Files', rootFiles, '');
    }

    sections.forEach(({ name, label }) => {
      const links = collectJsonLinks('examples', path.join(exName, name));
      if (links.length) {
        parts.push(`### ${label}`);
        parts.push(...links.map(l => `- [${l.name}](${l.gh})`));
        parts.push('');
      }
    });

    // Friendly explanation for IdeaForge variants (optional)
    let intro = 'This example is validated against the VibeSpec schemas. Use it to understand how agents, workflows, data models, and deployment fit together.';
    if (/idea-forge-v0\.2/i.test(exName)) {
      intro = 'IdeaForge v0.2 introduces a Planner agent and Notifications agent, plus a Task data model. This page links to all related files.';
    } else if (/idea-forge$/i.test(exName)) {
      intro = 'IdeaForge showcases a full-stack agentic app with UI components and export capabilities.';
    }

    const body = [
      fm,
      `${intro}\n`,
      parts.join('\n') || '_No files found in this example._',
    ].join('\n');

    writeFile(outPath, body);
    indexEntries.push({ id, title: titleFromFilename(exName) });
    count += 1;
  });

  // Category with generated index (for sidebar)
  writeFile(path.join(examplesOut, '_category_.json'), JSON.stringify({
    label: 'Examples',
    position: 3,
    link: { type: 'generated-index', title: 'Examples' },
  }, null, 2));

  // Explicit index page at /examples to satisfy navbar link and avoid broken links
  const examplesIndexBody = [
    frontmatter({ id: 'examples-index', title: 'Examples', slug: '/examples' }),
    'Explore real projects that validate against the VibeSpec schemas.',
    '',
    ...indexEntries
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(e => `- [${e.title}](/examples/${e.id})`),
    '',
  ].join('\n');
  writeFile(path.join(examplesOut, 'index.md'), examplesIndexBody);

  console.log(`Examples: generated ${count} page(s).`);
}

function generateReports() {
  ensureDir(reportsOut);
  const files = fs.existsSync(reportsDir) ? fs.readdirSync(reportsDir).filter(f => /\.md$/i.test(f)) : [];
  let count = 0;

  const indexItems = [];

  files.forEach((file) => {
    const abs = path.join(reportsDir, file);
    let content = readFileSafe(abs, '');
    // rewrite relative links to GitHub blob URLs to avoid broken links within site
    content = rewriteMdLinks(content);
    const lines = content.split(/\r?\n/);
    // Try to derive a title from the first heading
    let titleLine = lines.find(l => /^#\s+/.test(l)) || '';
    const title = titleLine.replace(/^#\s+/, '') || titleFromFilename(file);

    const fm = frontmatter({
      title,
      slug: `/diff-reports/${slugify(file.replace(/\.md$/i, ''))}`,
    });

    const outPath = path.join(reportsOut, file.replace(/\.md$/i, '.md'));
    writeFile(outPath, `${fm}${content}`);
    indexItems.push({ title, file: outPath });
    count += 1;
  });

  // Index page
  const indexBody = [
    frontmatter({
      id: 'diff-reports-index',
      title: 'Diff Reports',
      slug: '/diff-reports',
    }),
    'Browse changes between spec versions.',
    '',
    ...indexItems.map(it => `- [${path.basename(it.file).replace(/\.md$/i, '')}](/diff-reports/${slugify(path.basename(it.file).replace(/\.md$/i, ''))})`),
    '',
  ].join('\n');
  writeFile(path.join(reportsOut, 'index.md'), indexBody);

  writeFile(path.join(reportsOut, '_category_.json'), JSON.stringify({
    label: 'Diff Reports',
    position: 5,
    link: { type: 'doc', id: 'diff-reports-index' },
  }, null, 2));

  console.log(`Diff Reports: generated ${count} page(s) plus index.`);
}

function generateChangelog() {
  if (!fs.existsSync(changelogPath)) {
    console.warn('No CHANGELOG.md found, skipping.');
    return;
  }
  let content = readFileSafe(changelogPath, '');
  // Rewrite relative links in the changelog to GitHub blob links (including :line → #Lline)
  content = rewriteMdLinks(content);
  const outPath = path.join(docsDir, 'changelog.md');
  const fm = frontmatter({
    id: 'changelog',
    title: 'Changelog',
    slug: '/changelog',
  });
  writeFile(outPath, `${fm}${content}`);
  console.log('Changelog: generated.');
}

function seedStubs() {
  // Getting Started
  const gettingStartedPath = path.join(docsDir, 'getting-started.md');
  if (!fs.existsSync(gettingStartedPath)) {
    const body = [
      frontmatter({
        id: 'getting-started',
        title: 'Getting Started',
        slug: '/getting-started',
      }),
      '1) Install validator: `npm install`',
      '2) Validate examples: `npm run validate`',
      '3) Explore schemas in `/schemas` and examples in `/examples`',
      '4) Add your generator to produce a new example under `/examples/<your-app>`',
      '',
      'Core files:',
      '- `manifest.json` – project metadata and core configuration',
      '- `project.json` – app-level metadata and description',
      '- `agent.json` – describes agent roles, inputs, outputs',
      '- `workflow.json` – orchestrates agents and execution flow',
      '- `data-model.json` – defines entities and persistence schemas',
      '- `api-routes.json` – backend contracts',
      '- `ui-components.json` – UI pages/components/properties',
      '- `deployment.json` – environments and secrets',
      '',
    ].join('\n');
    writeFile(gettingStartedPath, body);
  }

  // Tools (Phase 2 placeholder for AI-powered features)
  const toolsPath = path.join(docsDir, 'tools.md');
  if (!fs.existsSync(toolsPath)) {
    const body = [
      frontmatter({
        id: 'tools',
        title: 'Tools',
        slug: '/tools',
      }),
      'Planned tooling:',
      '- `vibespec-cli` – validate, scaffold, and diff specs',
      '- SDKs (TypeScript, Python) – read/validate specs programmatically',
      '',
      'AI-powered schema search coming in Phase 2.',
      '',
    ].join('\n');
    writeFile(toolsPath, body);
  }
}

function main() {
  console.log('Generating docs into website/docs ...');
  ensureDir(docsDir);
  ensureDir(schemasOut);
  ensureDir(examplesOut);
  ensureDir(reportsOut);

  generateSchemas();
  generateExamples();
  generateReports();
  generateChangelog();
  seedStubs();

  console.log('Done.');
}

if (require.main === module) {
  main();
}