---
sidebar_label: Nextra
description: Add an AI chatbot or AI search widget to your Nextra site with Biel.ai.
---

# Ask AI chatbot widget for Nextra

Add a Biel.ai [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Nextra documentation using the `biel-react` package.

:::info
This guide covers **Nextra v2** (Pages Router). If your project uses Nextra v3 (App Router with `app/layout.tsx`), see the [Next.js installation guide](./nextjs.md) instead.
:::

## Prerequisites

- A [Biel.ai account](https://app.biel.ai/accounts/signup/).
- A [project](../quickstart.md#2-create-a-project) with indexed content.
- A Nextra v2 site.
- Node.js installed.

## Add the chatbot widget

The `BielButton` React component adds a floating chat button to your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install the package:

    ```console
    npm install biel-react
    ```

2. Create or update `pages/_app.tsx`:

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

3. Run `npm run dev` and verify the chatbot appears on your site.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.

