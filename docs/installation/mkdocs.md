---
sidebar_label: MkDocs
description: Add an AI chatbot or AI search widget to your MkDocs site with Biel.ai.
---

# Ask AI chatbot widget for MkDocs

Add a Biel.ai [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your MkDocs site using template overrides. Works with any MkDocs theme, including Material for MkDocs.

## Prerequisites

- A [Biel.ai account](https://app.biel.ai/accounts/signup/).
- A [project](../quickstart.md#2-create-a-project) with indexed content.
- A MkDocs site.

## Add the chatbot widget

The `<biel-button>` component adds a floating chat button to your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Create a custom template directory:

    ```console
    mkdir -p docs/overrides
    ```

2. Create `docs/overrides/main.html` with the following content:

    ```html
    {% extends "base.html" %}

    {% block extrahead %}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    {% endblock %}

    {% block content %}
    {{ super() }}

    <biel-button project="<YOUR_PROJECT_ID>"
        header-title="Documentation AI"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    {% endblock %}
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Point `mkdocs.yml` to the overrides directory:

    ```yaml
    theme:
      name: material  # or your preferred theme
      custom_dir: 'docs/overrides'
    ```

4. Run `mkdocs serve` and verify the chat button appears in the bottom-right corner.

## Material for MkDocs keyboard shortcuts

Material for MkDocs registers keyboard shortcuts (`f`, `s`, `/` for search; `p`, `n` for navigation) that can conflict with Biel.ai's input handling. To disable them:

1. Create `docs/javascripts/disable-search-autofocus.js`:

    ```javascript
    document.addEventListener('keydown', (e) => {
      const blockedKeys = ['f', 's', '/', 'p', 'n', ',', '.'];
      if (blockedKeys.includes(e.key.toLowerCase())) {
        e.stopPropagation();
      }
    });
    ```

2. Add the script to `mkdocs.yml`:

    ```yaml
    extra_javascript:
      - javascripts/disable-search-autofocus.js
    ```

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.