---
sidebar_label: Next.js
description: Add an AI chatbot or AI search widget to your Next.js site with this step-by-step guide.
---

# Ask AI chatbot widget for Next.js

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Next.js site.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Next.js application** ready to install Biel.ai.
- **Node.js** installed.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install the Biel.ai package:

    ```console
    npm install biel-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add biel-react` instead of the npm command above.
    :::

1. Create a wrapper for the chatbot by creating a file at `components/biel-search.tsx`:

    ```ts
    import React, { useEffect } from 'react';
    import { BielButton } from 'biel-react';
    import { JSX, defineCustomElements } from 'biel-search/loader';
    import { StyleReactProps } from 'biel-react/dist/types/react-component-lib/interfaces';
    import 'biel-search/dist/biel-search/biel-search.css';

    const DynamicBielButtonComponent = (props: React.JSX.IntrinsicAttributes & JSX.BielButton & Omit<React.HTMLAttributes<HTMLBielButtonElement>, "style"> & StyleReactProps & React.RefAttributes<HTMLBielButtonElement>) => {
    useEffect(() => {
        defineCustomElements(window);
    }, []);

    return <BielButton {...props} />;
    };

    export default DynamicBielButtonComponent;
    ```

1. In the component where you wish to display the chatbot (often `pages/_app.tsx` or `app/layout.tsx`), include it as shown below:

    ```js
    'use client'
    import dynamic from 'next/dynamic';

    export default function Banner() {

    const DynamicBielButton = dynamic(() => import('@/components/biel-search'), {
        ssr: false,
    });

    return (
    <div className="App">
    {/* Other components and content */}
        <DynamicBielButton
            project="<YOUR_PROJECT_ID>"
            header-title="Biel.ai chatbot"
            button-position="bottom-right"
            modal-position="bottom-right"
            button-style="dark">
            Ask AI
        </DynamicBielButton>
    </div>
    );
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Start your Next.js app by running `npm start` or `yarn start` in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
