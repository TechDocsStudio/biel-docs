---
sidebar_label: Vue.js
description: Learn how to add an AI chatbot to your Vue.js documentation site with this step-by-step guide.
---

# AI chatbot for Vue.js

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.
By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai in your Vue.js project using NPM.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Vue.js application** ready to install Biel.ai.  
- **Node.js** installed.

## Installation

The Biel.ai widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.ai widget into your Vue.js site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. With your terminal still open, run the following command to install Biel.ai:

    ```console
    npm install biel-search
    ```

1. Open your main Vue component or the desired Vue component where you want the chatbot to appear. Then, incorporate the Biel.ai styles and scripts:

    ```js
    <script>
    // Incorporate Biel.ai styles
    import 'biel-search/dist/biel-search/biel-search.css';

    // Initialize the Biel.ai widget
    import 'biel-search/dist/biel-search/biel-search.esm.js';
    </script>
    ```

1. In the template section of your Vue component, add the following snippet:

    ```html
    <template>
        <!-- Rest of your component's template -->

        <biel-button 
            project="<YOUR_PROJECT_ID>"
            header-title="Biel.ai chatbot" 
            button-position="bottom-right" 
            modal-position="bottom-right" 
            button-style="dark">
            Ask AI
        </biel-button>
    </template>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. After making these changes, navigate back to your Vue.js project root and run:

    ```console
    npm run serve
    ```

1. Open the website in a web browser to verify that the chatbot  appears and works correctly.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).