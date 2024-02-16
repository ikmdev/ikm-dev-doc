// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Integrated Knowledge Management',
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
            type: 'dropdown',
            label: 'About',
            position: 'left',
            items: [
              {label: 'Integrated Knowledge Management', to: '/about/ikm'},
             {label: 'Komet Tool', to: '/about/komet'}
            ],
          },
          
          {
            type: 'dropdown',
            label: 'Install',
            position: 'left',
            items: [
              // {
              //   label: 'Install Komet',
              //   to: '/install/app', 
              // },
              {
                label: 'Komet User Guide',
                to: '/install/guide', 
              },
            ]
            
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Get Started',
                to: '/community/getstarted',
              },
              {
                label: 'Developers',
                to: '/community/developers', 
              },
              {
                label: 'Informaticists',
                to: '/community/informaticists', 
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resource Library',
            position: 'left',
            items: [
              {
                label: 'Volumes',
                to: '/docs/volumes',
              },
              {
                label: 'Additional Documents',
                to: '/docs/additional', 
              },
            ],
          },
          {
            to: '/contact',
            label: 'Contact Us',
            position: 'right',
          },
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
            title: 'About',
            items: [
              {
                label: 'Integrated Knowledge Management',
                to: '/about/ikm', 
              },
              {
                label: 'Komet Tool',
                to: '/about/komet', 
              },
            ],
          },
          {
            title: 'Install',
            items: [
              // {
              //   label: 'Install Komet',
              //   to: '/install/app', 
              // },
              {
                label: 'Komet User Guide',
                to: '/install/guide', 
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Get Started',
                to: '/community/getstarted', // Update this with the correct path
              },
              {
                label: 'Developers',
                to: '/community/developers', // Update this with the correct path
              },
              {
                label: 'Informaticists', // Replace with actual label
                to: '/community/informaticists', // Update this with the correct path
              },
              
            ],
          },
          
          {
            title: 'Resource Library',
            items: [
              {
                label: 'Volumes',
                to: '/docs/volumes', // Update this with the correct path
              },
              {
                label: 'Additional Documents',
                to: '/docs/additional', // Update this with the correct path
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Contact Form',
                to: '/contact', // Update this with the correct path
              },
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
