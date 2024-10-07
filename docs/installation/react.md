---
sidebar_label: React
---

# AI chatbot for React

Here's a step-by-step guide to help you install Biel.ai in your React project using NPM.

![Chatbot wiget for docs](./images/biel-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A Biel.ai account. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A React application and Node.js installed.

## Installation

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. With your terminal still open, run the following command to install Biel.ai:

    ```console
    npm install pushfeedback-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add biel-react` instead of the npm command above.
    :::

1. In the main component where you wish to place the chatbot (often `src/App.js`), embed the Biel.ai button:

    ```ts
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
                <BielButton project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Ask AI</BielButton>
            </div>
        );
    }

    export default App;
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Start your React app by running `npm start` or `yarn start` in your terminal. Once it compiles successfully, verify that the chatbot  appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).