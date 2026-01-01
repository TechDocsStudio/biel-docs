---
sidebar_label: Read the Docs
description: Add an AI chatbot to your Read the Docs site with this step-by-step guide.
---

# Ask AI chatbot widget for Read the Docs

Add an AI chatbot to your Read the Docs documentation using Biel.ai's web components. The integration works with both Sphinx and MkDocs projects hosted on Read the Docs, adding conversational AI capabilities to your documentation.

This guide shows you how to add the chat widget to your Read the Docs project in minutes by modifying your documentation theme.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Read the Docs project** using Sphinx or MkDocs.
- **Access to your documentation repository** to modify theme files.

## Installation for Sphinx

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

### Using the Sphinx extension (Recommended)

If your Read the Docs project uses Sphinx, the easiest way to add Biel.ai is using the official Sphinx extension:

1. Install the Biel.ai extension via pip (add to your `requirements.txt`):

    ```txt
    sphinx-biel
    ```

2. Add the extension to your `conf.py`:

    ```python
    extensions = ['sphinx_biel']
    
    biel_project = '<YOUR_PROJECT_ID>'
    biel_header_title = 'Biel.ai chatbot'
    biel_button_style = 'dark'
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Commit and push your changes. Read the Docs will automatically rebuild your documentation with the Biel.ai widget.

For more details, see the [Sphinx installation guide](./sphinx.md).

### Using custom templates

Alternatively, you can add Biel.ai using custom Sphinx templates:

1. Create a `_templates` directory in your docs folder if it doesn't exist.

2. Create a file `_templates/layout.html` with the following content:

    ```html
    {% extends "!layout.html" %}

    {% block extrahead %}
      {{ super() }}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
      <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    {% endblock %}

    {% block footer %}
      {{ super() }}
      <biel-button project="<YOUR_PROJECT_ID>" 
          header-title="Biel.ai chatbot"
          button-position="bottom-right"
          modal-position="bottom-right"
          button-style="dark">
              Ask AI
      </biel-button>
    {% endblock %}
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Update your `conf.py` to use the templates directory:

    ```python
    templates_path = ['_templates']
    ```

4. Commit and push your changes.

## Installation for MkDocs

If your Read the Docs project uses MkDocs:

1. Create a directory called `overrides` in your docs folder.

2. Create a file `overrides/main.html` with the following content:

    ```html
    {% extends "base.html" %}

    {% block extrahead %}
      {{ super() }}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
      <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    {% endblock %}

    {% block content %}
      {{ super() }}
      <biel-button project="<YOUR_PROJECT_ID>" 
          header-title="Biel.ai chatbot"
          button-position="bottom-right"
          modal-position="bottom-right"
          button-style="dark">
              Ask AI
      </biel-button>
    {% endblock %}
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

3. Update your `mkdocs.yml` to use the custom theme directory:

    ```yaml
    theme:
      name: material  # or your chosen theme
      custom_dir: overrides
    ```

4. Commit and push your changes. Read the Docs will rebuild with the chatbot included.

## Troubleshooting

**Widget not appearing after rebuild**
- Check the build logs on Read the Docs for any errors
- Verify your template files are in the correct location
- Ensure your project ID is correct

**Build failures**
- For Sphinx extension issues, verify `sphinx-biel` is in your requirements file
- Check that your Python version is compatible
- Review the Read the Docs build log for specific error messages

**Styling conflicts**
- Different Read the Docs themes may have different styling
- Adjust the `button-position` and `modal-position` attributes if needed
- See the [customization section](/customization) for style overrides

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

