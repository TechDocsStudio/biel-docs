---
sidebar_label: Basic installation
description: Add a Biel.ai chatbot or search widget to any HTML site using a CDN.
sidebar_position: 1
---

# Basic installation

Add a Biel.ai [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to any HTML site. This method uses CDN-hosted components — no build tools or package managers required.

## Prerequisites

- A [Biel.ai account](https://app.biel.ai/accounts/signup/).
- A [project](../quickstart.md#2-create-a-project) with indexed content.

## Add the chatbot widget

The `<biel-button>` component adds a floating chat button to your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Add the following inside the `<head>` tag of your HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

2. Add the following just before the closing `</body>` tag:

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

3. Open the page in a browser to verify the chatbot appears in the bottom-right corner.

## Add the search widget

The `<biel-search-button>` component adds an AI-powered search bar instead of (or alongside) the chatbot.

![Biel search](./images/biel-search-widget.png)

1. Add the following inside the `<head>` tag of your HTML:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

2. Add the following where you want the search button to appear:

    ```html
    <biel-search-button project="<YOUR_PROJECT_ID>" button-style="rounded">Search</biel-search-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Open the page in a browser to verify the search widget works.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.