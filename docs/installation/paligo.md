---
sidebar_label: Paligo
description: Add an AI chatbot to your Paligo documentation with this step-by-step guide.
---

# AI chat widget for Paligo

Add an AI chatbot to your Paligo documentation using Biel.ai's web components. The integration works with Paligo's custom JavaScript feature and adds conversational AI capabilities to your published HTML5 documentation.

This guide shows you how to add the chat widget to your Paligo HTML5 output in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A Paligo account** with HTML5 output capability.
- **Access to your Paligo publication settings** to add custom JavaScript.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your Paligo documentation:

1. Log in to your Paligo account and open your publication.

2. Navigate to the publication settings:

    * Select the publication you want to edit from the **Content Manager**.
    * Click on **Publication Settings** in the toolbar.
    * Select the **HTML5** output format from the list.

3. Add custom JavaScript to include Biel.ai:

    * Scroll down to the **Custom JavaScript** section in the HTML5 settings.
    * In the **Custom JavaScript** field, add the following code:

        ```javascript
        // Initialize the Biel.AI chat widget
        (function() {
          // Load CSS
          var link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css';
          document.head.appendChild(link);

          // Load JavaScript module
          var script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js';
          document.head.appendChild(script);

          // Add the chatbot button after page loads
          script.onload = function() {
            var button = document.createElement('biel-button');
            button.setAttribute('project', '<YOUR_PROJECT_ID>');
            button.setAttribute('header-title', 'Biel.ai chatbot');
            button.setAttribute('button-position', 'bottom-right');
            button.setAttribute('modal-position', 'bottom-right');
            button.setAttribute('button-style', 'dark');
            button.textContent = 'Ask AI';
            document.body.appendChild(button);
          };
        })();
        ```

        Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

4. Save and publish your documentation:

    * Click **Save** to apply the changes.
    * Publish your HTML5 output as usual.

5. Open your published documentation in a web browser to verify the chatbot appears and works correctly.

## Alternative: Using layout templates

If you prefer more control or need to customize the HTML structure:

1. Access your Paligo layout customization:

    * Navigate to **Layout Editor** in Paligo.
    * Select your HTML5 layout.

2. Add the initialization scripts to the `<head>` section of your layout template:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

3. Add the widget code before the closing `</body>` tag:

    ```html
    <biel-button project="<YOUR_PROJECT_ID>" 
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
    ```

4. Save the layout and republish your documentation.

## Troubleshooting

**Custom JavaScript not working**
- Verify your Paligo plan includes custom JavaScript features
- Check that the code is properly saved in the publication settings
- Review browser console for any JavaScript errors

**Chatbot not appearing**
- Ensure both the CSS and JavaScript modules are loading (check Network tab)
- Verify your project ID is correct
- Clear your browser cache and reload the page

**Styling conflicts with Paligo themes**
- Paligo's built-in themes may have conflicting styles
- Try adjusting the `button-position` attribute (e.g., `center-right`, `bottom-left`)
- See the [customization section](../customization/layout.mdx) for style overrides

**Chatbot appearing on some pages but not others**
- Ensure the custom JavaScript is added to the publication settings, not individual topics
- Verify all pages are being regenerated when you publish

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

