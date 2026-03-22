---
sidebar_label: Astro
description: Add an AI chatbot or AI search widget to your Astro site with this step-by-step guide.
---

# Ask AI chatbot widget for Astro

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Astro site.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **An Astro site** ready to install Biel.ai.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Locate the `src/layouts/Layout.astro` file (or any layout file that wraps your pages) and insert the following code within the `<head>` section:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

1. Just before the closing `</body>` tag of your layout file, add the following snippet:

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

1. Open the website in a web browser to verify the chatbot appears and works correctly.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
