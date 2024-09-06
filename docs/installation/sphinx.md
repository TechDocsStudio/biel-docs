---
sidebar_label: Sphinx
---

# Feedback widget for Sphinx

Here's a step-by-step guide to help you install Biel.ai in your Sphinx project.

![Feedback wiget for docs screenshot](./images/feedback-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A Biel.ai account. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Sphinx project.

## Installation

To integrate the Biel.ai widget into your Sphinx site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

2. With your terminal still open, run the following command to install Biel.ai via PIP:

    ```console
    pip install sphinx-pushfeedback
    ```

2. Add the extension to your Sphinx project's `conf.py` file:

    ```python
    extensions ['sphinx_pushfeedback']
    ```
3. Configure your project ID in the `conf.py` file:

    ```python
    pushfeedback_project = '<YOUR_PROJECT_ID>'
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

4. Build the documentation:

    ```console
    make html
    ```

    Once built, open your documentation in a web browser. Verify that the feedback button appears and works correctly on your site.

    ![Sphinx Feedback widget](./images/sphinx.png)

## Next steps

You can customize the Biel.ai widget to suit your needs. For example, you can change the widget's position, color, and more.

To do so, you can add any of the following [configuration](../configuration/layout.mdx)  options to your `conf.py` file, with the following modifications:

1. Prefix configuration options with `pushfeedback_`. For instance, `project` would be `pushfeedback_project`.

2. Use underscores instead of hyphens as words separator. For example, `button-position` becomes `pushfeedback_button_position`.

Here's an example:

```python
pushfeedback_button_style = "light"
```
