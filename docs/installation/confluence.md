---
sidebar_label: Confluence
description: Add an AI chatbot to your Confluence pages with this step-by-step guide.
---

# AI chat widget for Confluence

Add an AI chatbot to your Confluence space using Biel.ai's web components. The integration works with Confluence Cloud and can be added space-wide using custom HTML configuration.

This guide shows you how to add the chat widget to all pages in your Confluence space.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Confluence Cloud instance**.
- **Admin access** to your Confluence space to configure custom HTML.

:::tip
Looking to connect Confluence as a data source instead? See [Confluence as a data source](../customization/data-sources/confluence.md) to index your Confluence pages for AI answers.
:::

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To add the chatbot to all pages in a Confluence space:

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

**Alternative approach**
- If custom HTML is restricted, consider using the [Confluence data source integration](../customization/data-sources/confluence.md) and embedding the chatbot on an external documentation site that links to your Confluence content.

## Troubleshooting

**Custom HTML not available**
- Verify your Confluence plan includes custom HTML support
- Contact your Confluence admin to enable custom HTML features
- Some organizations disable custom HTML for security reasons

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
