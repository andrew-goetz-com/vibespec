// ... existing code ...
/**
 * Scaffold a VibeSpec example from a single JSON input into multi-file layout.
 *
 * Usage:
 *   node tools/scaffold-from-json.js [inputPath] [exampleName]
 *
 * Defaults:
 *   inputPath: ../../playground/vibespec.json (relative to vibespec/)
 *   exampleName: CarCRM
 *
 * Output:
 *   vibespec/examples/{exampleName}/manifest.json
 *   vibespec/examples/{exampleName}/project.json
 *   vibespec/examples/{exampleName}/architecture.json
 *   vibespec/examples/{exampleName}/api/routes.json
 *   vibespec/examples/{exampleName}/ui/components.json
 *   vibespec/examples/{exampleName}/deployment/environments.json
 *   vibespec/examples/{exampleName}/agents/*.json           (one file per agent)
 *   vibespec/examples/{exampleName}/workflows/*.json        (one file per workflow)
 *   vibespec/examples/{exampleName}/data-models/*.json      (one file per model)
 *
 * Notes:
 * - Each agent/workflow/data model is written to its own file; empty dirs are created if none exist.
 * - Manifest paths are normalized to local relative references.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EXAMPLES_DIR = path.join(ROOT, 'examples');

function readJson(p) {
  const abs = path.isAbsolute(p) ? p : path.resolve(ROOT, p);
  const raw = fs.readFileSync(abs, 'utf-8');
  return JSON.parse(raw);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function slugify(input, fallback) {
  const base = (input || fallback || 'item')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base || 'item';
}

function deriveExampleName(spec, fallback = 'ProjectSpec') {
  const title = (spec?.project?.name) || (spec?.project?.title) || fallback;
  return slugify(title, fallback.toLowerCase());
}

function writeJsonFile(filePath, obj) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(obj ?? {}, null, 2) + '\n', 'utf-8');
  console.log('✍️  Wrote', path.relative(ROOT, filePath));
}

function normalizeManifestPaths(manifest) {
  const m = { ...(manifest || {}) };
  m.project = './project.json';
  m.architecture = './architecture.json';
  m.paths = {
    agents: './agents',
    workflows: './workflows',
    data_models: './data-models',
    api: './api',
    ui: './ui',
    deployment: './deployment',
    schemas: '../../schemas',
    ...(manifest?.paths || {}),
  };
  return m;
}

function scaffoldFromObject(spec, exampleName) {
  const base = path.join(EXAMPLES_DIR, exampleName);

  // Top-level required files
  const manifest = normalizeManifestPaths(spec?.manifest || {});
  const project = spec?.project || {};
  const architecture = spec?.architecture || {};

  writeJsonFile(path.join(base, 'manifest.json'), manifest);
  writeJsonFile(path.join(base, 'project.json'), project);
  writeJsonFile(path.join(base, 'architecture.json'), architecture);

  // api
  const api = spec?.api || {};
  const apiRoutes = Array.isArray(api?.routes) ? { routes: api.routes } : api?.routes ? { routes: api.routes } : { routes: [] };
  writeJsonFile(path.join(base, 'api', 'routes.json'), apiRoutes);

  // ui
  const ui = spec?.ui || {};
  const uiComponents = Array.isArray(ui?.components) ? { components: ui.components } : ui?.components ? { components: ui.components } : { components: [] };
  writeJsonFile(path.join(base, 'ui', 'components.json'), uiComponents);

  // deployment
  const dep = spec?.deployment || {};
  const environments = Array.isArray(dep?.environments) ? { environments: dep.environments } : dep?.environments ? { environments: dep.environments } : { environments: [] };
  writeJsonFile(path.join(base, 'deployment', 'environments.json'), environments);

  // agents
  const agents = Array.isArray(spec?.agents) ? spec.agents : [];
  if (agents.length) {
    agents.forEach((agent, idx) => {
      const name = agent?.name || agent?.id || `agent-${idx + 1}`;
      const file = `${slugify(name, `agent-${idx + 1}`)}.json`;
      writeJsonFile(path.join(base, 'agents', file), agent);
    });
  } else {
    ensureDir(path.join(base, 'agents'));
  }

  // workflows
  const workflows = Array.isArray(spec?.workflows) ? spec.workflows : [];
  if (workflows.length) {
    workflows.forEach((wf, idx) => {
      const name = wf?.name || wf?.id || `workflow-${idx + 1}`;
      const file = `${slugify(name, `workflow-${idx + 1}`)}.json`;
      writeJsonFile(path.join(base, 'workflows', file), wf);
    });
  } else {
    ensureDir(path.join(base, 'workflows'));
  }

  // data models
  const dataModels = Array.isArray(spec?.data_models) ? spec.data_models : [];
  if (dataModels.length) {
    dataModels.forEach((dm, idx) => {
      const name = dm?.name || dm?.id || `model-${idx + 1}`;
      const file = `${slugify(name, `model-${idx + 1}`)}.json`;
      writeJsonFile(path.join(base, 'data-models', file), dm);
    });
  } else {
    ensureDir(path.join(base, 'data-models'));
  }

  console.log('✅ Scaffold complete at', path.relative(ROOT, base));
}

function main() {
  const inputArg = process.argv[2] || '../incoming/vibespec.json';
  const overrideName = process.argv[3] || null;

  let input;
  try {
    input = readJson(inputArg);
  } catch (e) {
    console.error('❌ Failed to read input JSON at', inputArg, '\n', e?.message || e);
    process.exit(1);
  }

  const spec = input?.manifest ? input : (input?.vibespec ? input.vibespec : null);
  if (!spec || typeof spec !== 'object') {
    console.error('❌ Input does not look like a VibeSpec object nor an envelope { "vibespec": { ... } }');
    process.exit(1);
  }

  const derivedName = deriveExampleName(spec, 'ProjectSpec');
  const exampleName = overrideName || derivedName;
  scaffoldFromObject(spec, exampleName);
}

if (require.main === module) {
  main();
}