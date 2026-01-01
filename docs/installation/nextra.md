---
sidebar_label: Nextra
description: Add an AI chatbot to your Nextra documentation with this step-by-step guide.
---

# Ask AI chatbot widget for Nextra

Add an AI chatbot to your Nextra documentation using Biel.ai's React components. The integration works seamlessly with Nextra's Next.js framework, adding both chat and search capabilities to your documentation site.

This guide shows you how to install and configure Biel.ai in your Nextra project using NPM in just a few minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Nextra site** ready to install Biel.ai.
- **Node.js** installed.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your Nextra site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

2. With your terminal still open, run the following command to install Biel.ai for React:

    ```console
    npm install biel-react
    ```

3. Create a custom `_app.jsx` or `_app.tsx` file in the `pages` directory (if you don't already have one):

    ```tsx
    import type { AppProps } from 'next/app';
    import { useEffect } from 'react';
    import { BielButton } from 'biel-react';
    import { defineCustomElements } from 'biel-search/loader';
    import 'biel-search/dist/biel-search/biel-search.css';

    export default function App({ Component, pageProps }: AppProps) {
      useEffect(() => {
        if (typeof window !== 'undefined') {
          defineCustomElements(window);
        }
      }, []);

      return (
        <>
          <Component {...pageProps} />
          <BielButton
            project="<YOUR_PROJECT_ID>"
            header-title="Biel.ai chatbot"
            button-position="bottom-right"
            modal-position="bottom-right"
            button-style="dark"
          >
            Ask AI
          </BielButton>
        </>
      );
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

4. Start your Nextra project by running `npm run dev` in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site.

## Advanced: Custom theme integration

If you're using a custom Nextra theme and want more control over the widget placement:

1. Create a custom layout component in your `theme.config.jsx` or `theme.config.tsx`:

    ```tsx
    import { useEffect } from 'react';
    import { BielButton } from 'biel-react';
    import { defineCustomElements } from 'biel-search/loader';
    import 'biel-search/dist/biel-search/biel-search.css';

    const config = {
      // ... your existing Nextra theme config
      footer: {
        component: () => {
          useEffect(() => {
            if (typeof window !== 'undefined') {
              defineCustomElements(window);
            }
          }, []);

          return (
            <>
              {/* Your existing footer */}
              <BielButton
                project="<YOUR_PROJECT_ID>"
                header-title="Biel.ai chatbot"
                button-position="bottom-right"
                modal-position="bottom-right"
                button-style="dark"
              >
                Ask AI
              </BielButton>
            </>
          );
        }
      }
    };

    export default config;
    ```

2. This approach gives you precise control over when and where the chatbot appears.

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

