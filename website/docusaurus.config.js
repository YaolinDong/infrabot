// SPDX-License-Identifier: Apache-2.0
// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const owner = 'YaolinDong';
const repo = 'infrabot';
const github = `https://github.com/${owner}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InfraBot',
  tagline: 'Open-source seven-axis arm with an STM32H743 controller',
  favicon: 'img/favicon.svg',
  url: `https://${owner.toLowerCase()}.github.io`,
  baseUrl: process.env.BASE_URL ?? `/${repo}/`,
  organizationName: owner,
  projectName: repo,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  future: {v4: true},

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      'zh-Hans': {label: '简体中文', htmlLang: 'zh-Hans'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: `${github}/${repo}/edit/main/website/`,
          editLocalizedFiles: true,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/h7c.png',
      colorMode: {respectPrefersColorScheme: true},
      navbar: {
        title: 'InfraBot',
        logo: {alt: 'InfraBot', src: 'img/favicon.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs'},
          {to: '/docs/get-started/choose-your-path', label: 'Get started', position: 'left'},
          {to: '/docs/safety', label: 'Safety', position: 'left'},
          {type: 'localeDropdown', position: 'right'},
          {href: `${github}/${repo}`, label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Overview', to: '/docs/overview'},
              {label: 'Safety', to: '/docs/safety'},
              {label: 'Compatibility', to: '/docs/compatibility'},
            ],
          },
          {
            title: 'Repositories',
            items: [
              {label: 'infrabot-description', href: `${github}/infrabot-description`},
              {label: 'infrabot-pcb-4p3', href: `${github}/infrabot-pcb-4p3`},
              {label: 'infrabot-enclosure-4p3', href: `${github}/infrabot-enclosure-4p3`},
              {label: 'infrabot-hardware', href: `${github}/infrabot-hardware`},
              {label: 'infrabot-firmware', href: `${github}/infrabot-firmware`},
              {label: 'infrabot-sdk', href: `${github}/infrabot-sdk`},
            ],
          },
          {
            title: 'Project',
            items: [
              {label: 'GitHub', href: `${github}/${repo}`},
              {label: 'Issues', href: `${github}/${repo}/issues`},
            ],
          },
        ],
        copyright: `Copyright © 2026 YaolinDong (董耀琳). Documentation licensed under Apache-2.0.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'cmake'],
      },
    }),
};

export default config;
