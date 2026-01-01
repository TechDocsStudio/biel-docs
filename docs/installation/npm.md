---
sidebar_label: NPM
description: Add an AI chatbot to your site with this step-by-step guide.
---

# Ask AI chatbot widget for NPM projects

Add an AI chatbot to your JavaScript project using Biel.ai's NPM package. The integration works with any JavaScript framework or build system that supports NPM packages.

This guide shows you how to install the package via NPM and add the chat widget to your site in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **Node.js** installed.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

2. With your terminal still open, run the following command to install Biel.ai:

    ```console
    npm install pushfeedback
    ```

3. Make sure you embed the styles and scripts in your primary JS or entry file:

    ```js
    // Incorporate Biel.ai styles
    import 'pushfeedback/dist/biel-search/biel-search.css';

    // Initialize the Biel.AI chat widget
    import 'pushfeedback/dist/biel-search/biel-search.esm.js';
    ```

4. Just before the closing `</body>` tag of your website's HTML, add the following snippet:

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

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).