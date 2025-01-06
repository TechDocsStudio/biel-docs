---
sidebar_label: Antora
description: Learn how to add an AI chatbot to your Antora documentation project with this easy step-by-step guide.
---

# AI chatbot for Antora

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.
By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai in your Antora project.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **An Antora documentation site** ready to install Biel.ai.  

## Installation

The Biel.ai widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.ai widget into your Docusaurus site:

1. Modify the UI bundle:

    * If you're using a custom UI bundle for your Antora project, navigate to the UI bundle's directory.
    * Otherwise, clone Antora's default UI bundle with the following command:

        ```bash
        git clone https://gitlab.com/antora/antora-ui-default.git
        ```

1. Locate the `head.hbs` file, which is usually under `src/partials`, and insert the following code to initialize the Biel.ai widget:

    ```html
    <!-- Initialize the Biel.ai widget -->
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

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).