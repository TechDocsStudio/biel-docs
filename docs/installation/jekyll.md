---
sidebar_label: Jekyll
description: Add an AI chatbot to your Jekyll site with this step-by-step guide.
---

# Ask AI chatbot widget for Jekyll

Add an AI chatbot to your Jekyll site using Biel.ai's web components. The integration works with any Jekyll theme, including GitHub Pages, and requires only adding a few lines to your includes.

This guide shows you how to add the chat widget to your Jekyll site in minutes using HTML includes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Jekyll application** ready to install Biel.ai.  

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your Jekyll site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. Open the `_includes/head.html` file (or the equivalent file that contains the `<head>` section in your Jekyll theme). Append the following code:

    ```html
    <!-- Initialize the Biel.AI chat widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

1. Open `_includes/footer.html` or the specific file where you'd like the chatbot to appear. Add the following snippet just before its closing tags:

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

1. After making these changes, navigate back to your Jekyll project root and run:

    ```console
    jekyll build
    ```

    Once it builds successfully, verify that the chatbot  appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).