---
sidebar_label: Antora
description: Add an AI chatbot or AI search widget to your Antora documentation site with this step-by-step guide.
---

# Ask AI chatbot widget for Antora

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Antora documentation using Biel.ai's web components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **An Antora documentation site** ready to install Biel.ai.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Modify the UI bundle:

    * If you're using a custom UI bundle for your Antora project, navigate to the UI bundle's directory.
    * Otherwise, clone Antora's default UI bundle with the following command:

        ```bash
        git clone https://gitlab.com/antora/antora-ui-default.git
        ```

1. Locate the `head.hbs` file, which is usually under `src/partials`, and insert the following code:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

1. Locate the `footer.hbs` or the specific file where you'd like the chatbot to appear. Just before the closing tags in that file, add the following snippet:

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

1. Build and verify your project:

    * Re-bundle your custom UI and run the Antora build command.
    * If using the default UI, you'd have to integrate it as a local UI and then run Antora with the `--ui-bundle-url` flag to point to your modified local UI bundle.
    * Once built, ensure the chatbot is functioning correctly on your site.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
