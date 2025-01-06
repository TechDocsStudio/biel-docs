---
sidebar_label: Gatsby
description: Learn how to add an AI chatbot to your Gatsby site with this step-by-step guide.
---

# AI chatbot for Gatsby

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.
By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai in your Gatsby project using NPM.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Gatsby application** ready to install Biel.ai.  
- **Node.js** installed.  

## Installation

The Biel.ai widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.ai widget into your Gatsby site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. With your terminal still open, run the following command to install Biel.ai:

    ```console
    npm install biel-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add biel-react` instead of the npm command above.
    :::

1. In the main component where you wish to place the chatbot (often `src/pages/index.js`), embed the Biel.ai button:

    ```ts
    import React, { useEffect } from 'react';

    import { BielButton } from 'biel-react';
    import { defineCustomElements } from 'biel-search/loader';
    import 'biel-search/dist/biel-search/biel-search.css';

    const IndexPage = () => {
        
        useEffect(() => {
            if (typeof window !== 'undefined') {
                defineCustomElements(window);
            }
        }, []);

        return (
            <div className="page-layout">
                {/* Other components and content */}
                <BielButton project="<YOUR_PROJECT_ID>" 
                    header-title="Biel.ai chatbot"
                    button-position="bottom-right"
                    modal-position="bottom-right"
                    button-style="dark">Ask AI
                </BielButton>
            </div>
        );
    }

    export default IndexPage;
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Start your Gatsby app by running `gatsby develop` in your terminal. Once it compiles successfully, verify that the chatbot  appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).