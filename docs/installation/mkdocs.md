---
sidebar_label: MkDocs
description: Add an AI chatbot to your MkDocs documentation site with this step-by-step guide.
---

# AI chat widget for MkDocs

Add an AI chatbot to your MkDocs site using Biel.ai's web components. The integration works with any MkDocs theme, including Material for MkDocs, and requires only adding a few lines to your templates.

This guide shows you how to add the chat widget to your MkDocs site in minutes using template overrides.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A MkDocs site** ready to install Biel.ai.  

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your MkDocs site:

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

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).