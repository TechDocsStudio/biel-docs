---
sidebar_label: ReadMe
slug: /installation/readmeio
description: Add an AI chatbot to your ReadMe documentation with this step-by-step guide.
---

# AI chat widget for ReadMe

Add an AI chatbot to your ReadMe documentation using Biel.ai's web components. The integration works with ReadMe's custom JavaScript feature, available on paid plans, adding conversational AI capabilities to your API documentation.

This guide shows you how to add the chat widget to your ReadMe project in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A ReadMe project** with a paid plan that allows custom JavaScript.
- **Admin access** to your ReadMe project.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To embed the Biel.AI chat widget into your ReadMe documentation:

1. Log in to your ReadMe dashboard and navigate to your project.

2. Access appearance settings:

    * Click on **Settings** in the left sidebar.
    * Select **Appearance** from the settings menu.
    * Scroll down to the **Custom JavaScript & CSS** section.

    :::tip
    If you don't see the Custom JavaScript & CSS option, verify that your ReadMe plan includes this feature.
    :::

3. Add the Biel.ai initialization code in the Custom JavaScript field:

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

4. Click **Save** to apply the changes.

5. Visit your ReadMe documentation in a web browser to verify the chatbot appears and works correctly.

## Troubleshooting

**Custom JavaScript not available**
- Custom JavaScript requires a ReadMe Business or Enterprise plan
- Contact your ReadMe admin to upgrade if needed

**Chatbot not appearing**
- Check your browser console for any error messages
- Ensure the script has loaded properly (look in the Network tab)
- Verify your project ID is correct

**Conflicts with ReadMe's chat widget**
- If you're using ReadMe's built-in Intercom or other chat widgets, you may want to adjust positioning
- Use the `button-position` attribute to move the Biel.ai widget (e.g., `bottom-left`, `center-right`)

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

