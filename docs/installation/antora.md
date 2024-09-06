---
sidebar_label: Antora
---

# AI chatbot for Antora

Here's a step-by-step guide to help you install Biel.ai in your Antora project.

![Feedback wiget for docs screenshot](./images/feedback-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A Biel.ai account. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- An Antora project.

## Installation

To integrate the Biel.ai widget into your Antora site:

1. Modify the UI bundle:

    * If you're using a custom UI bundle for your Antora project, navigate to the UI bundle's directory.
    * If not, you'll first need to clone Antora's default UI bundle.

        ```bash
        git clone https://gitlab.com/antora/antora-ui-default.git
        ```

1. Locate the `head.hbs` file, which is usually under `src/partials`, and insert the following code:

    ```html
    <!-- Initialize the Biel.ai widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

1. Locate the `footer.hbs` or the specific file where you'd like the chatbot to appear. Just before the closing tags in that file, add the following snippet:

    ```html
    <biel-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Ask AI</biel-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Build the project:

    * If you're using a custom UI, make sure to re-bundle it and then run the Antora command to build your project.
    * If you cloned the default UI, you'd have to integrate it as a local UI and then run Antora with the `--ui-bundle-url` flag to point to your modified local UI bundle.

    Once it builds successfully, verify that the chatbot  appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [Configuration](/category/configuration) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).