import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '181'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fec'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/chat-assistant',
            component: ComponentCreator('/tags/chat-assistant', '29e'),
            exact: true
          },
          {
            path: '/tags/data-analyzer',
            component: ComponentCreator('/tags/data-analyzer', '042'),
            exact: true
          },
          {
            path: '/tags/example',
            component: ComponentCreator('/tags/example', 'b3e'),
            exact: true
          },
          {
            path: '/tags/idea-forge',
            component: ComponentCreator('/tags/idea-forge', '89c'),
            exact: true
          },
          {
            path: '/tags/idea-forge-v-0-2',
            component: ComponentCreator('/tags/idea-forge-v-0-2', '366'),
            exact: true
          },
          {
            path: '/tags/schema',
            component: ComponentCreator('/tags/schema', 'fbe'),
            exact: true
          },
          {
            path: '/tags/v-0-1-0',
            component: ComponentCreator('/tags/v-0-1-0', 'ca0'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', 'f79'),
            routes: [
              {
                path: '/category/examples',
                component: ComponentCreator('/category/examples', '981'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/category/schemas',
                component: ComponentCreator('/category/schemas', '011'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/changelog',
                component: ComponentCreator('/changelog', 'c85'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/diff-reports',
                component: ComponentCreator('/diff-reports', 'aef'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/diff-reports/idea-forge-0-1-0-to-0-2-0',
                component: ComponentCreator('/diff-reports/idea-forge-0-1-0-to-0-2-0', 'a86'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/examples',
                component: ComponentCreator('/examples', 'dcb'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/examples/chat-assistant',
                component: ComponentCreator('/examples/chat-assistant', '120'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/examples/data-analyzer',
                component: ComponentCreator('/examples/data-analyzer', 'f5a'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/examples/idea-forge',
                component: ComponentCreator('/examples/idea-forge', '841'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/examples/idea-forge-v0-2',
                component: ComponentCreator('/examples/idea-forge-v0-2', '204'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', 'e89'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas',
                component: ComponentCreator('/schemas', 'f64'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/agent',
                component: ComponentCreator('/schemas/agent', '672'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/api-routes',
                component: ComponentCreator('/schemas/api-routes', 'e01'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/architecture',
                component: ComponentCreator('/schemas/architecture', '7c3'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/data-model',
                component: ComponentCreator('/schemas/data-model', '48a'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/deployment',
                component: ComponentCreator('/schemas/deployment', '4b4'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/manifest',
                component: ComponentCreator('/schemas/manifest', '778'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/project',
                component: ComponentCreator('/schemas/project', '666'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/ui-components',
                component: ComponentCreator('/schemas/ui-components', '422'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/schemas/workflow',
                component: ComponentCreator('/schemas/workflow', 'e88'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/tools',
                component: ComponentCreator('/tools', '1bb'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
