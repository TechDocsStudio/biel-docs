---
sidebar_label: Webflow
description: Add an AI chatbot to your Webflow site with this step-by-step guide.
---

# AI chat widget for Webflow

Add an AI chatbot to your Webflow site using Biel.ai's web components. The integration works with any Webflow template and can be added through the custom code editor in your site settings.

This guide shows you how to add the chat widget to your Webflow site in minutes using the embedded code feature.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Webflow site** with a paid site plan (required for custom code features).

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To embed the Biel.AI chat widget into your Webflow site:

1. Log in to your Webflow dashboard and open the site you want to edit.

2. Navigate to your site settings:

    * Click the **Settings** icon (gear icon) in the left sidebar.
    * Select **Custom Code** from the menu.

3. Add the Biel.ai styles and scripts in the Head Code section:

    * In the **Head Code** field, paste the following:

        ```html
        <!-- Initialize the Biel.AI chat widget -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
        <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
        ```

4. Add the chatbot widget in the Footer Code section:

    * Scroll down to the **Footer Code** field.
    * Paste the following snippet:

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

5. Click **Save Changes** at the top right.

6. Publish your site:

    * Click the **Publish** button in the top right corner of the Webflow Designer.
    * Select the domain(s) you want to publish to.
    * Click **Publish to selected domains**.

7. Visit your published Webflow site in a web browser to verify the chatbot appears and works correctly.

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

