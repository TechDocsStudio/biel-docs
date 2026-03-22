---
sidebar_label: WordPress
description: Add an AI chatbot or AI search widget to your WordPress site with this step-by-step guide.
---

# Ask AI chatbot widget for WordPress

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your WordPress site using Biel.ai's web components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A WordPress website** ready to install Biel.ai.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Install a header/footer editor plugin:

    * Go to your WordPress admin dashboard.
    * Navigate to `Plugins > Add New`.
    * Search for "WPCode – Insert Headers and Footers" or another similar plugin.
    * Click **Install Now** and then **Activate**.

        :::tip
        If you prefer not to use a plugin, you can manually add the code snippets to your theme's `header.php` and `footer.php` files. See the [basic installation guide](./cdn.md) for instructions.
        :::

2. Add the Biel.ai styles and scripts:

    * Navigate to `Settings > Insert Headers and Footers` (or the relevant plugin settings page).

    * In the **Scripts in Header** section, add the following code:

        ```html
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
        <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
        ```
    * Click the **Save** button to apply the changes.

3. Insert the chatbot before the closing body tag:

    * In the same plugin settings, locate the **Scripts in Footer** section.
    * Add the following snippet:

        ```html
        <biel-button project="<YOUR_PROJECT_ID>"
            header-title="Biel.ai chatbot"
            button-position="bottom-right"
            modal-position="bottom-right"
            button-style="dark">
                Ask AI
        </biel-button>
        ```

        Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).
    * Click the **Save** button to apply the changes.

4. Visit your WordPress website in a web browser to ensure the chatbot is visible and operational.

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
