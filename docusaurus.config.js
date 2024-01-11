// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Komet',
  tagline: 'Bringing Integrated Knowledge Management to Life',
  url: 'https://fantastic-giggle-e60e5e9a.pages.github.io', //TODO: Replace with appropriate URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/komet_logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Deloitte', // Usually your GitHub org/user name.
  projectName: 'ikm-dev-doc', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch to deploy to

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // Replace with your actual Algolia application ID
        appId: '1YGVGN70K0',
        apiKey: '2d097ea5ed82ed5c6c4e246a59b2f984',
        // Replace with your actual index name from Algolia
        indexName: 'ikm',
      },
      navbar: {
        title: 'IKM',
        logo: {
          alt: 'Komet Logo',
          src: 'img/komet_logo.svg',
        },
        items: [
          {
            to: '/about',
            label: 'About',
            position: 'left'
          },
          
          {
            to: '/install',
            label: 'Install',
            position: 'left'
          },
          {
            to: '/community',
            label: 'Community',
            position: 'left'
          },
          {
            to: '/docs',
            label: 'Resource Library',
            position: 'left'
          },
          // {
          //   to: '/contact',
          //   label: 'Contact Us',
          //   position: 'left'
          // },
          
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                label: 'About',
                to: '/about'
              },
              {
                label: 'Install',
                to: '/install',
              },
              {
                label: 'Community',
                to: '/community',
              },
              {
                label: 'Resource Library',
                to: '/docs',
              },

              
              // {
              //   to: '/contact',
              //   label: 'Contact Us',
              //   position: 'left'
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
