---
sidebar_label: Mintlify
description: Add an AI chatbot or AI search widget to your Mintlify docs with this step-by-step guide.
---

# Ask AI chatbot widget for Mintlify

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Mintlify documentation using Biel.ai's web components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Mintlify documentation site** ready to install Biel.ai.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Add the Biel.ai scripts and button injection to your `mint.json` configuration file:

    ```json
    {
      "name": "Your Docs",
      "head": [
        {
          "tag": "link",
          "attributes": {
            "rel": "stylesheet",
            "href": "https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css"
          }
        },
        {
          "tag": "script",
          "attributes": {
            "type": "module",
            "src": "https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"
          }
        }
      ],
      "scripts": [
        {
          "content": "window.addEventListener('DOMContentLoaded', function() { var button = document.createElement('biel-button'); button.setAttribute('project', '<YOUR_PROJECT_ID>'); button.setAttribute('header-title', 'Biel.ai chatbot'); button.setAttribute('button-position', 'bottom-right'); button.setAttribute('modal-position', 'bottom-right'); button.setAttribute('button-style', 'dark'); button.textContent = 'Ask AI'; document.body.appendChild(button); });"
        }
      ]
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Save the file and run your Mintlify development server:

    ```console
    mintlify dev
    ```

1. Open your documentation site in a web browser to verify the chatbot appears and works correctly.

## Alternative: Using MDX components

If you prefer more control over where the chatbot appears, you can create a custom MDX component:

1. Create a new file `components/BielChat.mdx` in your Mintlify project:

    ```html
    <biel-button project="<YOUR_PROJECT_ID>"
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    ```

1. Import and use this component in any MDX page where you want the chatbot to appear.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
