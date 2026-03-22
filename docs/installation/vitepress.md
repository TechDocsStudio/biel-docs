---
sidebar_label: VitePress
description: Add an AI chatbot or AI search widget to your VitePress documentation with this step-by-step guide.
---

# Ask AI chatbot widget for VitePress

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your VitePress documentation using Biel.ai's web components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A VitePress site** ready to install Biel.ai.
- **Node.js** installed.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Create a custom theme directory if you don't already have one:

    ```console
    mkdir -p .vitepress/theme
    ```

2. Create a file `.vitepress/theme/index.js` (or `.ts` if using TypeScript) with the following content:

    ```js
    import { h, onMounted } from 'vue'
    import DefaultTheme from 'vitepress/theme'
    import './custom.css'

    export default {
      extends: DefaultTheme,
      Layout() {
        return h(DefaultTheme.Layout, null, {
          'layout-bottom': () => h(BielWidget)
        })
      }
    }

    const BielWidget = {
      setup() {
        onMounted(() => {
          // Load CSS
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css'
          document.head.appendChild(link)

          // Load JS module
          const script = document.createElement('script')
          script.type = 'module'
          script.src = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js'
          document.head.appendChild(script)

          // Add chatbot button
          script.onload = () => {
            const button = document.createElement('biel-button')
            button.setAttribute('project', '<YOUR_PROJECT_ID>')
            button.setAttribute('header-title', 'Biel.ai chatbot')
            button.setAttribute('button-position', 'bottom-right')
            button.setAttribute('modal-position', 'bottom-right')
            button.setAttribute('button-style', 'dark')
            button.textContent = 'Ask AI'
            document.body.appendChild(button)
          }
        })
        return () => null
      }
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Create an empty CSS file `.vitepress/theme/custom.css` (you can add custom styles here later if needed):

    ```css
    /* Add your custom styles here */
    ```

4. Start your VitePress development server:

    ```console
    npm run docs:dev
    ```

5. Open your documentation site in a web browser to verify the chatbot appears and works correctly.

## Alternative: Using head configuration

If you prefer not to create a custom theme, you can add the widget using VitePress's head configuration.

1. Open your `.vitepress/config.js` (or `.ts`) file.

2. Add the following to your config:

    ```js
    import { defineConfig } from 'vitepress'

    export default defineConfig({
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
          `
        ]
      ]
    })
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Restart your development server to see the changes.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
