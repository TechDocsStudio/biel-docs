// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Biel.ai docs',
  tagline: 'Ask AI chatbot for technical documentation',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://docs.biel.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // This moves your docs to the root domain
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      'docusaurus-biel',{
          project: 'dl1kps0old',
          headerTitle: 'Biel.ai chatbot'
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'biel',
        docsPluginId: "classic",
        config: {
          biel: {
            label: 'API Reference',
            specPath: 'openapi/schema.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        }
      },
    ],    
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/image.png',
      navbar: {
        logo: {
          alt: 'Biel.ai',
          src: 'img/logo-biel.png',
          srcDark: 'img/logo-biel-dark.png',
        },
      },
      colorMode: {
        defaultMode: 'light',
      },    
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Biel.ai.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    }),
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css'
        }
      },
      {
        tagName: 'script',
        attributes: {
          type: 'module',
          src: 'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js'
        }
      }
    ],
    scripts: [
      'https://www.googletagmanager.com/gtag/js?id=G-CWY6XSMG75',
      '/analytics.js'
    ],
  
  };

module.exports = config;
