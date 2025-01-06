---
sidebar_label: Starlight
description: Learn how to add an AI chatbot to your Starlight documentation site with this step-by-step guide.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI chatbot for Starlight

Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.
By leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks.

Here's a step-by-step guide to help you install Biel.ai chatbot in your Starlight (Astro) project.

## Prerequisites

Before starting, ensure you have the following:

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Starlight site** ready to install Biel.ai.  

## Installation

The Biel.ai widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the PushFeedback widget into your Starlight site:

1. Go to `src/components`. If `components` does not exist, create the directory.
1. Create a new file `CustomFooter.astro` under your docs project `src/components` directory with the following content:

    ```astro
    ---
    import type { Props } from '@astrojs/starlight/props';

    import EditLink from 'virtual:starlight/components/EditLink';
    import LastUpdated from 'virtual:starlight/components/LastUpdated';
    import Pagination from 'virtual:starlight/components/Pagination';
    import config from 'virtual:starlight/user-config';
    ---

    <footer class="sl-flex">
        <biel-button project="<YOUR_PROJECT_ID>" 
            header-title="Biel.ai chatbot"
            button-position="bottom-right"
            modal-position="bottom-right"
            button-style="dark">
                Ask AI
        </biel-button>

        <div class="meta sl-flex">
            <EditLink {...Astro.props} />
            <LastUpdated {...Astro.props} />
        </div>
        <Pagination {...Astro.props} />

        {
            config.credits && (
                <a class="kudos sl-flex" href="https://starlight.astro.build">
                    <Icon name={'starlight'} /> {Astro.locals.t('builtWithStarlight.label')}
                </a>
            )
        }
    </footer>

    <style is:global>
        .right-sidebar-container{
            z-index: -1;
        } 
    </style>

    <style>
        footer {
            flex-direction: column;
            gap: 1.5rem;
        }
        .meta {
            gap: 0.75rem 3rem;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: var(--sl-text-sm);
            color: var(--sl-color-gray-3);
        }
        .meta > :global(p:only-child) {
            margin-inline-start: auto;
        }

        .kudos {
            align-items: center;
            gap: 0.5em;
            margin: 1.5rem auto;
            font-size: var(--sl-text-xs);
            text-decoration: none;
            color: var(--sl-color-gray-3);
        }
        .kudos :global(svg) {
            color: var(--sl-color-orange);
        }
        .kudos:hover {
            color: var(--sl-color-white);
        }
    </style>
    ```
    
    This code snippet shows how to integrate the PushFeedback widget. Pay special attention to the lines:

    ```astro
    <biel-button project="<YOUR_PROJECT_ID>" 
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

    And the global style:

    ```astro
    <style is:global>
        .right-sidebar-container{
            z-index: -1;
        } 
    </style>
    ```

    This is required to make sure the button is placed on top of the right sidebar.
    
1. Load the dependencies in your Astro configuration file (`astro.config.mjs`):

    ```js
    import starlight from '@astrojs/starlight'
    import { defineConfig } from 'astro/config'

    export default defineConfig({
      integrations: [
        starlight({
          head: [
            {
              tag: 'link',
              attrs: {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css',
              },
            },
            {
              tag: 'script',
              attrs: {
                type: 'module',
                src: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js',
              },
            },
          ],
          (...)
        }),
      ],
    })
    ```

1. Load the custom component you've created by overriding the default footer with `CustomFooter.astro`:

    ```js
    import starlight from '@astrojs/starlight'
    import { defineConfig } from 'astro/config'

    export default defineConfig({
      integrations: [
        starlight({
          (...)
          components: {
            Footer: './src/components/CustomFooter.astro',
          },
          (...)
        }),
      ],
    })
    ```

1. Start your Starlight project by running `npm run dev` in your terminal. Once it compiles successfully, verify that the chatbot widget appears and functions correctly on your site.