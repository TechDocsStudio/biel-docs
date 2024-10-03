---
sidebar_label: MkDocs
---

# AI chatbot for MkDocs

Here's a step-by-step guide to help you install Biel.ai in your MkDocs project.

![Feedback wiget for docs screenshot](./images/biel-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A Biel.ai account. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A MkDocs project.

## Installation

To integrate the Biel.ai widget into your MkDocs site:

1. Navigate to your docs folder and locate the `overrides` directory (create one if it doesn't exist).

1. Inside the overrides directory, create or edit the file named `base.html`.

    :::info
    The file names of the templates to override and the block names you need to override might be different, depending on your theme. This example is specifically for the Material for MkDocs theme. Always refer to your theme's documentation or source templates to ensure accurate customization.
    :::

1. In this `base.html`, extend the base template and override the necessary sections. Here's what you should add:

    ```html
    {% extends "base.html" %}

    {% block extrahead %}
    <!-- Biel.ai styles -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">

    <!-- Biel.ai script as ES6 module -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    {% endblock %}

    {% block content %}
    {{ super() }}

    ```html
    <biel-button project="<YOUR_PROJECT_ID>" 
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    ```

1. Ensure your `mkdocs.yml` points to the overrides directory:

    ```yaml
    theme:
        name: 'material'
        custom_dir: 'docs/overrides'
    ```

1. Build your MkDocs project:

    ```console
    mkdocs build
    ```

    Once it builds successfully, verify that the chatbot  appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).