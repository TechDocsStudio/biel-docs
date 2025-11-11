---
sidebar_label: Confluence
description: Add an AI chatbot to your Confluence pages with this step-by-step guide.
---

# AI chat widget for Confluence

Add an AI chatbot to your Confluence pages using Biel.ai's web components. The integration works with Confluence Cloud and can be added through custom HTML macros on your pages or spaces.

This guide shows you how to add the chat widget to your Confluence pages in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Confluence Cloud instance** with permissions to edit pages.
- **Admin access** (recommended) to add the widget site-wide, or page edit permissions for specific pages.

:::tip
Looking to connect Confluence as a data source instead? See [Confluence as a data source](../customization/data-sources/confluence.md) to index your Confluence pages for AI answers.
:::

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

### Option 1: Add to specific pages

To add the Biel.ai chatbot to specific Confluence pages:

1. Navigate to the Confluence page where you want to add the chatbot.

2. Click **Edit** to enter edit mode.

3. Type `/html` to insert an HTML macro, or click the **+** button and search for **HTML**.

4. In the HTML macro, paste the following code:

    ```html
    <!-- Initialize the Biel.AI chat widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>

    <biel-button project="<YOUR_PROJECT_ID>" 
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

5. Click **Save** to publish the page.

6. View the page to verify the chatbot appears and works correctly.

### Option 2: Add to all pages (Space-wide)

To add the chatbot to all pages in a Confluence space, you can use a custom theme or header/footer:

:::info
This method requires Confluence admin permissions and may vary based on your Confluence version and configuration.
:::

1. Navigate to **Space settings** for your Confluence space.

2. Click **Look and Feel** in the sidebar.

3. Select the **Custom HTML** tab.

4. In the **At end of HEAD** section, add:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

5. In the **At end of BODY** section, add:

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

6. Click **Save** to apply the changes to all pages in the space.

## Limitations

**Confluence Cloud restrictions**
- Custom HTML features may be limited based on your Confluence plan
- Some Confluence Cloud instances restrict script execution for security
- The HTML macro may not be available on all Confluence plans

**Alternative approach**
- If HTML macros are restricted, consider using the [Confluence data source integration](../customization/data-sources/confluence.md) and embedding the chatbot on an external documentation site that links to your Confluence content.

## Troubleshooting

**HTML macro not available**
- Verify your Confluence plan includes HTML macro support
- Contact your Confluence admin to enable HTML macros
- Some organizations disable HTML macros for security reasons

**Chatbot not appearing**
- Check that both the CSS and JavaScript links are properly added
- Verify your project ID is correct
- Check browser console for any error messages

**Styling issues**
- Confluence's default styling may conflict with the widget
- Try adjusting the `button-position` attribute (e.g., `center-right`, `bottom-left`)
- See the [customization section](../customization/layout.mdx) for style overrides

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).
