---
sidebar_label: Fumadocs
description: Add an AI chatbot to your Fumadocs site with this step-by-step guide.
---

# AI chat widget for Fumadocs

Add an AI chatbot to your Fumadocs site using Biel.ai's React components. The integration works seamlessly with Fumadocs, the Next.js-powered documentation framework, adding both chat and search capabilities to your documentation.

This guide shows you how to install and configure Biel.ai in your Fumadocs project using NPM in just a few minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Fumadocs site** ready to install Biel.ai.
- **Node.js** installed.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your Fumadocs site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```

    Replace `path/to/your/project` with your project's actual directory path.

2. With your terminal still open, run the following command to install Biel.ai for React:

    ```console
    npm install biel-react
    ```

3. Open your root layout file (typically `app/layout.tsx` or `app/layout.jsx`) and import the Biel.ai components:

    ```tsx
    import { BielButton } from 'biel-react';
    import { defineCustomElements } from 'biel-search/loader';
    import 'biel-search/dist/biel-search/biel-search.css';
    ```

4. Initialize the Biel.ai web components by adding this code inside your layout component:

    ```tsx
    if (typeof window !== 'undefined') {
      defineCustomElements(window);
    }
    ```

5. Add the Biel.ai button component before the closing body tag in your layout:

    ```tsx
    <BielButton
      project="<YOUR_PROJECT_ID>"
      header-title="Biel.ai chatbot"
      button-position="bottom-right"
      modal-position="bottom-right"
      button-style="dark"
    >
      Ask AI
    </BielButton>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

6. Your complete layout file should look similar to this:

    ```tsx
    import './global.css';
    import { RootProvider } from 'fumadocs-ui/provider';
    import { Inter } from 'next/font/google';
    import type { ReactNode } from 'react';
    import { BielButton } from 'biel-react';
    import { defineCustomElements } from 'biel-search/loader';
    import 'biel-search/dist/biel-search/biel-search.css';

    const inter = Inter({
      subsets: ['latin'],
    });

    if (typeof window !== 'undefined') {
      defineCustomElements(window);
    }

    export default function Layout({ children }: { children: ReactNode }) {
      return (
        <html lang="en" className={inter.className}>
          <body>
            <RootProvider>{children}</RootProvider>
            <BielButton
              project="<YOUR_PROJECT_ID>"
              header-title="Biel.ai chatbot"
              button-position="bottom-right"
              modal-position="bottom-right"
              button-style="dark"
            >
              Ask AI
            </BielButton>
          </body>
        </html>
      );
    }
    ```

7. Start your Fumadocs project by running `npm run dev` in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

