---
sidebar_label: VuePress
description: Add an AI chatbot to your VuePress documentation with this step-by-step guide.
---

# Ask AI chatbot widget for VuePress

Add an AI chatbot to your VuePress documentation using Biel.ai's web components. The integration works with both VuePress 1.x and 2.x, adding conversational AI capabilities to your Vue-powered documentation site.

This guide shows you how to add the chat widget to your VuePress site in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A VuePress site** ready to install Biel.ai.
- **Node.js** installed.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

### For VuePress 2.x

To integrate the Biel.AI chat widget into your VuePress 2.x site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

2. Open your VuePress config file (`.vuepress/config.js` or `.vuepress/config.ts`).

3. Add the Biel.ai scripts to the `head` configuration:

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

4. Start your VuePress development server:

    ```console
    npm run docs:dev
    ```

5. Open your documentation site in a web browser to verify the chatbot appears and works correctly.

### For VuePress 1.x

If you're using VuePress 1.x, the configuration is slightly different:

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

## Alternative: Using custom theme layout

For more control over the widget placement, you can create a custom layout component:

1. Create a directory `.vuepress/components` if it doesn't exist.

2. Create a file `.vuepress/components/BielWidget.vue`:

    ```vue
    <template>
      <ClientOnly>
        <div ref="widgetContainer"></div>
      </ClientOnly>
    </template>

    <script>
    export default {
      name: 'BielWidget',
      mounted() {
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
      }
    }
    </script>
    ```

3. Then use the component in your custom layout or pages as needed:

    ```vue
    <BielWidget />
    ```

## Troubleshooting

**Widget not appearing**
- Verify your project ID is correct
- Check browser console for any error messages
- Ensure the scripts are loading (check the Network tab)

**Build errors with inline scripts**
- VuePress may show warnings about inline scripts (this is normal)
- The widget will still work correctly in the built output

**Conflicts with VuePress search**
- Biel.ai won't interfere with VuePress's built-in search
- If needed, adjust positioning with the `button-position` attribute

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

