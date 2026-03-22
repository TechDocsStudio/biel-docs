// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Biel.ai docs',
  tagline: 'Ask AI chatbot for technical documentation',
  favicon: 'img/favicon.svg',
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

  markdown: {
    mermaid: true,
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/customization/think-mode',
            to: '/customization/reasoning-modes',
          },
        ],
      },
    ],
    'docusaurus-plugin-image-zoom',
    [
      'docusaurus-biel',{
          project: 'dl1kps0old',
          headerTitle: 'Biel.ai chatbot'
      },
    ],
    [
      '@scalar/docusaurus',
      {
        label: 'API Reference',
        route: '/api',
        showNavLink: false,
        configuration: {
          url: '/openapi/schema.yaml',
          hideTestRequestButton: true,
          hideClientButton: true,
          withDefaultFonts: false,
          agent: {
            disabled: true,
          },
          showDeveloperTools: "never",
          mcp: {
            disabled: true,
          },
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
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
        items: [
          // Left side
          {
            to: '/',
            label: 'Documentation',
            position: 'left',
            activeBaseRegex: '^/(?!support$|api$)',
          },
          {
            to: '/api',
            label: 'REST API',
            position: 'left',
            activeBaseRegex: '^/api$',
          },
          {
            to: '/support',
            label: 'Support',
            position: 'left',
            activeBaseRegex: '^/support$',
          },
          // Right side
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://biel.ai/demo',
            label: 'Book a demo',
            position: 'right',
            'aria-label': 'Book a demo',
          },
          {
            href: 'https://app.biel.ai/accounts/signup/',
            label: 'Sign up',
            position: 'right',
            className: 'navbar__item--signup',
            'aria-label': 'Sign up',
          },
        ],
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
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/img/favicon-96x96.png',
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/img/favicon.svg',
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'shortcut icon',
          href: '/img/favicon.ico',
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/apple-touch-icon.png',
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'manifest',
          href: '/site.webmanifest',
        }
      },
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
      'https://www.googletagmanager.com/gtag/js?id=G-WXGQ5EZHVC',
      '/analytics.js'
    ],
  
  };

module.exports = config;
