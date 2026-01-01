---
sidebar_label: Hugo
description: Add an AI chatbot to your Hugo site with this step-by-step guide.
---

# Ask AI chatbot widget for Hugo

Add an AI chatbot to your Hugo site using Biel.ai's web components. The integration works with any Hugo theme and requires only adding a few lines to your templates.

This guide shows you how to add the chat widget to your Hugo site in minutes using HTML partials.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **An Hugo application** ready to install Biel.ai.  

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your Hugo site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd your-hugo-site/themes/your-theme-name/
    ```

    Replace `your-hugo-site` with the path to your Hugo site and `your-theme-name` with the name of the theme you're using.

1. Find the head partial, which is often located under `layouts/partials/`. Add the following code to this file:

    ```html
    <!-- Initialize the Biel.AI chat widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

1. Next, find the footer partial (or wherever you'd like the chatbot to be placed) and add the following code just before the closing tags:

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

1. After making these changes, navigate back to your Hugo project root and run:

    ```console
    hugo server
    ```

    Once it builds successfully, verify that the chatbot  appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).