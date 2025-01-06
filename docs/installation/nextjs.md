---
sidebar_label: Next.js
description: Learn how to add an AI chatbot to your Next.js site with this step-by-step guide.
---

# AI chatbot for Next.js

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.
By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai in your Next.js project using NPM.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Next.js application** ready to install Biel.ai.  
- **Node.js** installed.

## Installation

The Biel.ai widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.ai widget into your Next.js site:

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

    This will download and install the Biel.ai package into your project.


1. Create a wrapper for the chatbot by creating a file under the path `components/biel-search.tsx` and paste the following code:

    ```ts
    import React, { useEffect } from 'react';
    import { BielButton } from 'biel-react';
    import { JSX, defineCustomElements } from 'biel-search/loader';
    import { StyleReactProps } from 'biel-react/dist/types/react-component-lib/interfaces';
    import 'biel-search/dist/biel-search/biel-search.css';

    const DynamicBielButtonComponent = (props: React.JSX.IntrinsicAttributes & JSX.BielButton & Omit<React.HTMLAttributes<HTMLBielButtonElement>, "style"> & StyleReactProps & React.RefAttributes<HTMLBielButtonElement>) => {
    useEffect(() => {
        defineCustomElements(windowF);
    }, []);

    return <BielButton {...props} />;
    };

    export default DynamicBielButtonComponent;
    ```

1. In the component where you wish to display the chatbot (often `_pages/app.tsx` or `app/layout.tsx`), include it shown below:

    ```js
    'use client'
    import dynamic from 'next/dynamic';

    export default function Banner() {

    const DynamicBielButton = dynamic(() => import('@/components/utils/biel-search'), {
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
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Start your Next.js app by running `npm start` or `yarn start` in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).