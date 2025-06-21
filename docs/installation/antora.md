---
sidebar_label: Antora
description: Add an AI chatbot to your Antora documentation site with this step-by-step guide.
---

# AI chat widget for Antora

Add an AI chatbot to your Antora documentation using Biel.ai's web components. The integration works with any Antora UI bundle and requires only adding a few lines to your templates.

This guide shows you how to add the chat widget to your Antora site in minutes using UI bundle modifications.

## Prerequisites

Before starting, ensure you have:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **An Antora documentation site** ready to install Biel.ai.  

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your Docusaurus site:

1. Modify the UI bundle:

    * If you're using a custom UI bundle for your Antora project, navigate to the UI bundle's directory.
    * Otherwise, clone Antora's default UI bundle with the following command:

        ```bash
        git clone https://gitlab.com/antora/antora-ui-default.git
        ```

1. Locate the `head.hbs` file, which is usually under `src/partials`, and insert the following code to initialize the Biel.AI chat widget:

    ```html
    <!-- Initialize the Biel.AI chat widget -->
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

1. Once built, ensure the chatbot is functioning correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).