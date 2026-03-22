---
sidebar_label: VuePress
description: Add an AI chatbot or AI search widget to your VuePress documentation with this step-by-step guide.
---

# Ask AI chatbot widget for VuePress

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your VuePress documentation using Biel.ai's web components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A VuePress site** ready to install Biel.ai.
- **Node.js** installed.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

### For VuePress 2.x

1. Open your VuePress config file (`.vuepress/config.js` or `.vuepress/config.ts`).

2. Add the Biel.ai scripts to the `head` configuration:

    ```js
    import { defineUserConfig } from 'vuepress'

    export default defineUserConfig({
      // ... your other config
      head: [
        [
          'link',
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css' }
        ],
        [
          'script',
          { type: 'module', src: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js' }
        ],
        [
          'script',
          {},
          `
          if (typeof window !== 'undefined') {
            window.addEventListener('DOMContentLoaded', () => {
              const button = document.createElement('biel-button');
              button.setAttribute('project', '<YOUR_PROJECT_ID>');
              button.setAttribute('header-title', 'Biel.ai chatbot');
              button.setAttribute('button-position', 'bottom-right');
              button.setAttribute('modal-position', 'bottom-right');
              button.setAttribute('button-style', 'dark');
              button.textContent = 'Ask AI';
              document.body.appendChild(button);
            });
          }
          `
        ]
      ]
    })
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Start your VuePress development server:

    ```console
    npm run docs:dev
    ```

4. Open your documentation site in a web browser to verify the chatbot appears and works correctly.

### For VuePress 1.x

1. Open your VuePress config file (`.vuepress/config.js`).

2. Add the following to your config:

    ```js
    module.exports = {
      // ... your other config
      head: [
        [
          'link',
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css' }
        ],
        [
          'script',
          { type: 'module', src: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js' }
        ],
        [
          'script',
          {},
          `
          window.addEventListener('DOMContentLoaded', function() {
            var button = document.createElement('biel-button');
            button.setAttribute('project', '<YOUR_PROJECT_ID>');
            button.setAttribute('header-title', 'Biel.ai chatbot');
            button.setAttribute('button-position', 'bottom-right');
            button.setAttribute('modal-position', 'bottom-right');
            button.setAttribute('button-style', 'dark');
            button.textContent = 'Ask AI';
            document.body.appendChild(button);
          });
          `
        ]
      ]
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Start your VuePress development server:

    ```console
    npm run docs:dev
    ```

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
