---
sidebar_label: Vue.js
description: Add an AI chatbot or AI search widget to your Vue.js site with this step-by-step guide.
---

# Ask AI chatbot widget for Vue.js

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Vue.js application using Biel.ai's Vue components. The integration works with both Vue 2 and Vue 3, and is compatible with Vue CLI, Vite, and other common Vue setups.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Vue.js application** ready to install Biel.ai.
- **Node.js** installed.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install Biel.ai:

    ```console
    npm install biel-search
    ```

2. Open your main Vue component or the desired Vue component where you want the chatbot to appear. Then, incorporate the Biel.ai styles and scripts:

    ```js
    <script>
    import 'biel-search/dist/biel-search/biel-search.css';
    import 'biel-search/dist/biel-search/biel-search.esm.js';
    </script>
    ```

3. In the template section of your Vue component, add the following snippet:

    ```html
    <template>
        <!-- Rest of your component's template -->

        <biel-button
            project="<YOUR_PROJECT_ID>"
            header-title="Biel.ai chatbot"
            button-position="bottom-right"
            modal-position="bottom-right"
            button-style="dark">
            Ask AI
        </biel-button>
    </template>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

4. Run `npm run serve` and verify the chatbot appears on your site.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
