---
sidebar_label: NPM
description: Learn how to add an AI chatbot to your site with this step-by-step guide.
---

# AI chatbot for NPM projects

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.
By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai in your project using NPM.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **Node.js** installed.

## Installation

The Biel.ai widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.ai widget into your site:

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

    // Initialize the Biel.ai widget
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

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).