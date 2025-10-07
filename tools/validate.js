const fs = require('fs');
const path = require('path');
const Ajv = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const ROOT = path.resolve(__dirname, '..');
const SCHEMAS = path.join(ROOT, 'schemas');
const EXAMPLES = path.join(ROOT, 'examples');

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

function loadSchema(name) {
  const p = path.join(SCHEMAS, name);
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

const schemaMap = {
  manifest: loadSchema('manifest.schema.json'),
  project: loadSchema('project.schema.json'),
  architecture: loadSchema('architecture.schema.json'),
  agent: loadSchema('agent.schema.json'),
  workflow: loadSchema('workflow.schema.json'),
  dataModel: loadSchema('data-model.schema.json'),
  apiRoutes: loadSchema('api-routes.schema.json'),
  uiComponents: loadSchema('ui-components.schema.json'),
  deployment: loadSchema('deployment.schema.json'),
};
// Pre-register all schemas to enable cross-$ref resolution
Object.values(schemaMap).forEach((s) => ajv.addSchema(s));
// Some schemas reference additional definitions by absolute $id URLs; add them explicitly
try {
  const designTokens = loadSchema('design-tokens.schema.json');
  ajv.addSchema(designTokens); // $id: https://vibespec.vibecodeunited.com/schema/design-tokens.schema.json
} catch (e) {
  console.warn('[validate] Optional schema preload failed for design-tokens.schema.json:', e?.message || e);
}
<<<<<<< HEAD
try {
  const uiBrief = loadSchema('ui-brief.schema.json');
  ajv.addSchema(uiBrief); // $id: https://vibespec.vibecodeunited.com/schema/ui-brief.schema.json
} catch (e) {
  console.warn('[validate] Optional schema preload failed for ui-brief.schema.json:', e?.message || e);
}
try {
  const adapters = loadSchema('adapters.schema.json');
  ajv.addSchema(adapters); // $id: https://vibespec.vibecodeunited.com/schema/adapters.schema.json
} catch (e) {
  console.warn('[validate] Optional schema preload failed for adapters.schema.json:', e?.message || e);
}
=======
>>>>>>> 5fe31c4a71e3f13eaa4743466777813a3174009b

// Preload additional schemas referenced by absolute $id so cross-$ref resolution works
const optionalSchemas = [
  'layout.schema.json',
  'interaction.schema.json',
  'motion.schema.json',
  'accessibility.schema.json',
  'ui-intent.schema.json',
  'ui-brief.schema.json',
];

for (const schemaName of optionalSchemas) {
  try {
    const schema = loadSchema(schemaName);
    ajv.addSchema(schema);
  } catch (e) {
    console.warn(`[validate] Optional schema preload failed for ${schemaName}:`, e?.message || e);
  }
}

function validateFile(schema, filePath) {
  const obj = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const validate = ajv.compile(schema);
  const valid = validate(obj);
  if (!valid) {
    console.error(`❌ Invalid: ${filePath}`);
    console.error(validate.errors);
    process.exitCode = 1;
  } else {
    console.log(`✅ Valid: ${filePath}`);
  }
}

function validateExample(exampleDir) {
  const root = path.join(EXAMPLES, exampleDir);
  validateFile(schemaMap.manifest, path.join(root, 'manifest.json'));
  validateFile(schemaMap.project, path.join(root, 'project.json'));
  validateFile(schemaMap.architecture, path.join(root, 'architecture.json'));

  // agents
  const agentsDir = path.join(root, 'agents');
  if (fs.existsSync(agentsDir)) {
    for (const f of fs.readdirSync(agentsDir)) {
      if (f.endsWith('.json')) validateFile(schemaMap.agent, path.join(agentsDir, f));
    }
  }

  // workflows
  const workflowsDir = path.join(root, 'workflows');
  if (fs.existsSync(workflowsDir)) {
    for (const f of fs.readdirSync(workflowsDir)) {
      if (f.endsWith('.json')) validateFile(schemaMap.workflow, path.join(workflowsDir, f));
    }
  }

  // data-models
  const dataDir = path.join(root, 'data-models');
  if (fs.existsSync(dataDir)) {
    for (const f of fs.readdirSync(dataDir)) {
      if (f.endsWith('.json')) validateFile(schemaMap.dataModel, path.join(dataDir, f));
    }
  }

  // api
  const apiDir = path.join(root, 'api');
  if (fs.existsSync(apiDir)) {
    for (const f of fs.readdirSync(apiDir)) {
      if (f.endsWith('.json')) validateFile(schemaMap.apiRoutes, path.join(apiDir, f));
    }
  }

  // ui (optional)
  const uiDir = path.join(root, 'ui');
  if (fs.existsSync(uiDir)) {
    for (const f of fs.readdirSync(uiDir)) {
      if (f.endsWith('.json')) validateFile(schemaMap.uiComponents, path.join(uiDir, f));
    }
  }

  // deployment (optional)
  const depDir = path.join(root, 'deployment');
  if (fs.existsSync(depDir)) {
    for (const f of fs.readdirSync(depDir)) {
      if (f.endsWith('.json')) validateFile(schemaMap.deployment, path.join(depDir, f));
    }
  }
}

function main() {
  const list = fs.readdirSync(EXAMPLES).filter(d => fs.lstatSync(path.join(EXAMPLES, d)).isDirectory());
  for (const ex of list) validateExample(ex);
  if (process.exitCode) {
    console.error('❌ Validation finished with errors.');
    process.exit(process.exitCode);
  } else {
    console.log('✅ All examples validated.');
  }
}
main();
