---
sidebar_label: React
description: Add an AI chatbot or AI search widget to your React site with this step-by-step guide.
---

# Ask AI chatbot widget for React

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your React application using Biel.ai's React components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A React application** ready to install Biel.ai.
- **Node.js** installed.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install Biel.ai:

    ```console
    npm install biel-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add biel-react` instead of the npm command above.
    :::

2. In the main component where you wish to place the chatbot (often `src/App.js`), embed the Biel.ai button:

    ```tsx
    import React, { useEffect } from 'react';

    import { BielButton } from 'biel-react';
    import { defineCustomElements } from 'biel-search/loader';
    import 'biel-search/dist/biel-search/biel-search.css';

    function App() {

        useEffect(() => {
            if (typeof window !== 'undefined') {
            defineCustomElements(window);
            }
        }, []);

        return (
            <div className="App">
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

    export default App;
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Start your React app by running `npm start` or `yarn start` in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
