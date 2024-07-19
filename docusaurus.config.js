// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const math = require("remark-math");
const katex = require("rehype-katex");

import {themes as prismThemes} from 'prism-react-renderer';






// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'My Site',
//   tagline: 'Dinosaurs are cool',
//   favicon: 'img/favicon.ico',

//   // Set the production url of your site here
//   url: 'https://1685585993.github.io',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: 'Math-analysis',

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: '1685585993', // Usually your GitHub org/user name.
//   projectName:  'Math-analysis', // Usually your repo name.


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '数学小课堂',
  tagline: '卫东辉',
  favicon: 'img/favicon.ico',
  url: 'https://Math413.github.io',
  baseUrl: '/Mathallsitdown',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Math413', // Usually your GitHub org/user name.
  projectName:  'Mathallsitdown', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // remarkPlugins: [math],
          // rehypePlugins: [katex],

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [[require('rehype-katex'), { strict: false }]],

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '数学小课堂',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "MathematicalAnalysisSidebar",
            label: "数学分析",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "MathematicalAnalysisSkillSidebar",
            label: "数学分析技巧",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "AdvancedAlgebraSidebar",
            label: "高等代数",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "AdvancedAlgebraskillSidebar",
            label: "高等代数技巧",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,

      },
      
    }),
};

export default config;



