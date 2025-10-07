// website/docusaurus.config.ts
import type {Config} from '@docusaurus/types';
import type {Preset, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VibeSpec',
  tagline: 'An open standard for AI-driven software generation',
  url: 'https://vibespec.vibecodeunited.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VibeCode United',
  projectName: 'vibespec',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [],
  plugins: [require.resolve('@easyops-cn/docusaurus-search-local')],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/andrew-goetz-com/vibespec/edit/main/website',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'VibeSpec',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/getting-started', label: 'Getting Started', position: 'left' },
        { to: '/schemas', label: 'Schemas', position: 'left' },
        { to: '/examples', label: 'Examples', position: 'left' },
        { to: '/changelog', label: 'Changelog', position: 'left' },
        { to: '/diff-reports', label: 'Diff Reports', position: 'left' },
        { to: '/tools', label: 'Tools', position: 'left' },
        { href: 'https://github.com/andrew-goetz-com/vibespec', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/getting-started' },
            { label: 'Schemas', to: '/schemas' },
            { label: 'Examples', to: '/examples' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Changelog', to: '/changelog' },
            { label: 'Diff Reports', to: '/diff-reports' },
            { label: 'GitHub', href: 'https://github.com/andrew-goetz-com/vibespec' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} VibeCode United • VibeSpec`,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  } satisfies ThemeConfig,
};

export default config;