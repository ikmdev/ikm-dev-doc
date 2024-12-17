// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
  organizationName: 'FDA', // Usually your GitHub org/user name.
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
      // algolia: {
      //   // Replace with your actual Algolia application ID
      //   appId: '1YGVGN70K0',
      //   apiKey: '2d097ea5ed82ed5c6c4e246a59b2f984',
      //   // Replace with your actual index name from Algolia
      //   indexName: 'ikm',
      // },
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
              {
                label: 'Code of Conduct',
                to: '/codeofconduct',
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
              {
                label: 'FAQ',
                to: '/faq',
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
              {
                label: 'Code of Conduct',
                to: '/codeofconduct',
              },

            ],
          },

          {
            title: 'Resource Library',
            items: [
              {
                label: 'Volumes',
                to: '/docs/volumes',
              },
              {
                label: 'Additional Documents',
                to: '/docs/additional',
              },
              {
                label: 'FAQ',
                to: '/faq',
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
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),

    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // Search Local Options
          // Please see https://github.com/easyops-cn/docusaurus-search-local for changes

          // Whether to index docs.
          indexDocs: false,

          // Whether to index blog.
          indexBlog: false,

          // Whether to index pages.
          indexPages: true,

          // Base route path(s) of docs. Slash at beginning is not required. Note: for docs-only mode, this needs to
          // be the same as routeBasePath in your @docusaurus/preset-classic config e.g., "/".
          docsRouteBasePath: "/docs",

          // Base route path(s) of blog. Slash at beginning is not required.
          blogRouteBasePath: "/blog",

          // All lunr-languages supported languages, + zh
          language: "en",

          // Whether to add a hashed query when fetching index (based on the content hash of all indexed *.md
          // in docsDir and blogDir if applicable). Setting to "filename" will save hash in filename instead of query.
          hashed: true,

          // The dir(s) of docs to get the content hash, it's relative to the dir of your project.
          docsDir: "docs",

          // Just like the docsDir but applied to blog.
          blogDir: "blog",

          // Sometimes people want to keep the stop words as indexed, since they maybe are relevant in
          // programming docs.
          removeDefaultStopWordFilter: false,

          // Enable this if you want to be able to search for any partial word at the cost of search performance.
          removeDefaultStemmer: false,

          // Highlight search terms on target page.
          highlightSearchTermsOnTargetPage: false,

          // Limit the search results.
          searchResultLimits: 8,

          // Set the max length of characters of each search result to show.
          searchResultContextMaxLength: 50,

          // Whether an explicit path to a heading should be presented on a suggestion template.
          explicitSearchResultPath: false,

          // Set the match rules to ignore some routes. Put a string if you want an exact match, or put a regex if
          // you want a partial match. Note: without the website base url.
          ignoreFiles: [],

          // A list of css selectors to ignore when indexing each page.
          ignoreCssSelectors: [],

          // Whether to enable keyboard shortcut to focus in search bar.
          searchBarShortcut: false,

          // Whether to show keyboard shortcut hint in search bar. Disable it if you need to hide the hint
          // while shortcut is still enabled.
          searchBarShortcutHint: false,

          // The side of the navbar the search bar should appear on. By default, it will try to autodetect based on
          // your docusaurus config according to the docs.
          searchBarPosition: "auto",

          // When you're using multi-instance of docs, set the docs plugin id which you'd like to check the preferred
          // version with, for the search index.
          //docsPluginIdForPreferredVersion: "",

          // Provide your custom dict for language of zh, see here
          //zhUserDict: "",

          // Provide the file path to your custom dict for language of zh, E.g.: path.resolve("./src/zh-dict.txt")
          //zhUserDictPath: "",

          // Provide an list of sub-paths as separate search context, E.g.: ["docs", "community", "legacy/resources"].
          // It will create multiple search indexes by these paths.
          searchContextByPaths: [],

          // Whether to hide the search bar when no search context was matched. By default, if searchContextByPaths
          // is set, pages which are not matched with it will be considered as with a search context of ROOT. By
          // setting hideSearchBarWithNoSearchContext: true, these pages will be considered as with NO search context,
          // and the search bar will be hidden.
          hideSearchBarWithNoSearchContext: false,

          // Whether to show results from all the contexts if no context is provided. This option should not be
          // used with hideSearchBarWithNoSearchContext: true as this would show results when there is no search
          // context. This will duplicate indexes and might have a performance cost depending on the index sizes.
          useAllContextsWithNoSearchContext: false,

          // Force enable search index even if noIndex: true is set, this also affects unlisted articles.
          forceIgnoreNoIndex: false,

        },
      ],
    ],
};

module.exports = config;
