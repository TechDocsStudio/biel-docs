---
sidebar_label: VitePress
description: Add an AI chatbot to your VitePress documentation with this step-by-step guide.
---

# AI chat widget for VitePress

Add an AI chatbot to your VitePress documentation using Biel.ai's web components. The integration works seamlessly with VitePress's Vue-powered framework, adding both chat and search capabilities to your documentation site.

This guide shows you how to add the chat widget to your VitePress site in minutes using the theme configuration.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A VitePress site** ready to install Biel.ai.
- **Node.js** installed.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your VitePress site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

2. Create a custom theme layout if you don't already have one. In your `.vitepress` directory, create the following structure:

    ```console
    mkdir -p .vitepress/theme
    ```

3. Create a file `.vitepress/theme/index.js` (or `.ts` if using TypeScript) with the following content:

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

4. Create an empty CSS file `.vitepress/theme/custom.css` (you can add custom styles here later if needed):

    ```css
    /* Add your custom styles here */
    ```

5. Start your VitePress development server:

    ```console
    npm run docs:dev
    ```

6. Open your documentation site in a web browser to verify the chatbot appears and works correctly.

## Alternative: Using head configuration

For a simpler approach without custom theme components, you can add the widget using VitePress's head configuration:

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

## TypeScript version

If you're using TypeScript, here's the `.vitepress/theme/index.ts` version:

```ts
import { h, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BielWidget)
    })
  }
} satisfies Theme

const BielWidget = {
  setup() {
    onMounted(() => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css'
      document.head.appendChild(link)

      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js'
      document.head.appendChild(script)

      script.onload = () => {
        const button = document.createElement('biel-button') as any
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

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

