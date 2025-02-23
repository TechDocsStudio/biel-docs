---
sidebar_label: WordPress
description: Add an AI chatbot to your WordPress site with this step-by-step guide.
---

# AI chat widget for WordPress

Add an AI chatbot to your WordPress site using Biel.ai's web components. The integration works with any WordPress theme and can be added through a plugin or by editing your theme files.

This guide shows you how to add the chat widget to your WordPress site in minutes using a header/footer plugin.

## Prerequisites

Before starting, ensure you have::

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A WordPress website** ready to install Biel.ai.  

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To embed the Biel.AI chat widget into your WordPress site:

1. Install a header/footer editor plugin:

    * Go to your WordPress admin dashboard.
    * Navigate to `Plugins > Add New`.
    * Search for "WPCode – Insert Headers and Footers" or another similar plugin.
    * Click **Install Now** and then **Activate**.

        :::tip
        If you prefer not to use a plugin, you can manually add the code snippets to your theme's `header.php` and `footer.php` files. See the [basic installation guide](./cdn.md) for instructions.
        :::

1. Add the Biel.ai styles and scripts:
    
    * Navigate to `Settings > Insert Headers and Footers` (or the relevant plugin settings page).
    
    * In the **Scripts in Header** section, add the following code:

        ```html
        <!-- Initialize the Biel.AI chat widget -->
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

1. Visit your WordPress website in a web browser to ensure the chatbot is visible and operational.

## Next steps

For more about customization and additional features exploration, check out the [customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).