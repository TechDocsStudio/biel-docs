---
sidebar_label: Basic installation
description: Learn how to add an AI chatbot to your HTML site with this step-by-step guide.
sidebar_position: 1
---

# Basic installation

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation. By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai in your HTML site.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.

## Installation

The `<biel-button>` widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the widget into your website, follow these steps:

1. Insert the following code within the `<head>` section of your site's HTML:

    ```html
    <!-- Initialize the Biel.ai widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

2. Just before the closing `</body>` tag of your website's HTML, add the following snippet:

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

1. Open the website in a web browser to verify the chatbot is working correctly.

## Advanced: Install biel-search

The `<biel-search-button>` widget offers a search-based interaction that allows users to query documentation or other indexed content.

![Biel search](./images/biel-search-widget.png)

To integrate the widget into your website, follow these steps:

1. Insert the following code within the `<head>` section of your site's HTML:

    ```html
    <!-- Initialize the Biel.ai widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

2. Just before the closing `</body>` tag of your website's HTML, add the following snippet in the desired location on your site:

    ```html
    <biel-search-button project="<YOUR_PROJECT_ID>" button-style="rounded">Search</biel-search-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Open the website in a web browser to verify the search widget is working correctly.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).