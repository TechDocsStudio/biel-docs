---
sidebar_label: NPM
description: Add an AI chatbot or AI search widget to your site with this step-by-step guide.
---

# Ask AI chatbot widget for NPM projects

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your JavaScript project using Biel.ai's NPM package.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **Node.js** installed.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install Biel.ai:

    ```console
    npm install biel-search
    ```

2. Make sure you embed the styles and scripts in your primary JS or entry file:

    ```js
    import 'biel-search/dist/biel-search/biel-search.css';
    import 'biel-search/dist/biel-search/biel-search.esm.js';
    ```

3. Just before the closing `</body>` tag of your website's HTML, add the following snippet:

    ```html
    <biel-button project="<YOUR_PROJECT_ID>"
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

4. Open the website in a web browser to verify the chatbot appears and works correctly.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
