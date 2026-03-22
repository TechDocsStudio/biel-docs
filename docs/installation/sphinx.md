---
sidebar_label: Sphinx
description: Add an AI chatbot or AI search widget to your Sphinx site with Biel.ai.
---

# Ask AI chatbot widget for Sphinx

Add a Biel.ai [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your Sphinx documentation using the `sphinx-biel` package. Works with any Sphinx theme, including Read the Docs.

## Prerequisites

- A [Biel.ai account](https://app.biel.ai/accounts/signup/).
- A [project](../quickstart.md#2-create-a-project) with indexed content.
- A Sphinx project.

## Add the chatbot widget

The `sphinx-biel` extension adds a floating chat button to your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install the package:

    ```console
    pip install sphinx-biel
    ```

2. Add the extension to your `conf.py`:

    ```python
    extensions = ['sphinx_biel']
    ```

3. Configure your project ID in `conf.py`:

    ```python
    biel_project = '<YOUR_PROJECT_ID>'
    biel_header_title = 'Biel.ai chatbot'
    biel_version = 'latest'
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

4. Build and verify:

    ```console
    make html
    ```

    Open the built documentation in a browser and verify the chatbot appears.

## Customization

Pass [layout options](../customization/layout.mdx) in `conf.py` with these naming conventions:

- Prefix each option with `biel_` (e.g., `project` → `biel_project`).
- Replace hyphens with underscores (e.g., `button-position` → `biel_button_position`).

```python
biel_button_style = "light"
biel_button_position = "center-right"
```

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
