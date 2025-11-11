---
sidebar_label: GitBook
description: Add an AI chatbot to your GitBook documentation with this step-by-step guide.
---

# AI chat widget for GitBook

Add an AI chatbot to your GitBook documentation using Biel.ai's web components. The integration works with GitBook's custom script feature, available on paid plans, and adds conversational AI capabilities to your documentation.

This guide shows you how to add the chat widget to your GitBook space in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A GitBook space** with a paid plan (Pro or Enterprise) that allows custom scripts.
- **Admin access** to your GitBook space.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To embed the Biel.AI chat widget into your GitBook space:

1. Log in to your GitBook account and open the space where you want to add the chatbot.

2. Navigate to space customization settings:

    * Click on the **Customize** button in the top navigation bar.
    * Select **Custom scripts** from the left sidebar menu.

    :::tip
    If you don't see the Custom scripts option, verify that your GitBook plan includes this feature.
    :::

3. Add the Biel.ai initialization scripts:

    * In the **Script injection** section, select **Head** from the dropdown.
    * Paste the following code:

        ```html
        <!-- Initialize the Biel.AI chat widget -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
        <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
        ```

    * Click **Save**.

4. Add the chatbot widget:

    * In the **Script injection** section, select **Body** from the dropdown.
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

    * Click **Save**.

5. Publish your changes:

    * Click the **Publish** button in the top right.
    * Your changes will be live once the space is published.

6. Visit your GitBook space in a web browser to verify the chatbot appears and works correctly.

## Troubleshooting

**Custom scripts option not available**
- Custom scripts require a GitBook Pro or Enterprise plan
- Contact your GitBook admin to upgrade your plan if needed

**Chatbot not appearing**
- Verify both the head and body scripts are properly saved
- Check your browser console for any error messages
- Ensure your project ID is correct

**Styling conflicts**
- GitBook's styling may occasionally conflict with the widget
- Refer to the [customization section](/customization) for style overrides

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

