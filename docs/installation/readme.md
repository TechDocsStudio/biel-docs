---
sidebar_label: ReadMe
slug: /installation/readmeio
description: Add an AI chatbot or AI search widget to your ReadMe documentation with this step-by-step guide.
---

# Ask AI chatbot widget for ReadMe

Add an [AI chatbot](https://biel.ai) or [AI search widget](https://biel.ai/ai-search-for-docs) to your ReadMe documentation using Biel.ai's web components.

## Prerequisites

- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **A ReadMe project** with a paid plan that allows custom JavaScript.
- **Admin access** to your ReadMe project.

## Add the chatbot widget

![Chatbot widget for docs](./images/biel-widget-docs.png)

1. Log in to your ReadMe dashboard and navigate to your project.

1. Access appearance settings:

    - Click on **Settings** in the left sidebar.
    - Select **Appearance** from the settings menu.
    - Scroll down to the **Custom JavaScript & CSS** section.

    :::tip
    If you don't see the Custom JavaScript & CSS option, verify that your ReadMe plan includes this feature.
    :::

1. Add the Biel.ai initialization code in the Custom JavaScript field:

    ```javascript
    (function() {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css';
      document.head.appendChild(link);

      var script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js';
      document.head.appendChild(script);

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

1. Click **Save** to apply the changes.

1. Visit your ReadMe documentation in a web browser to verify the chatbot appears and works correctly.

## Troubleshooting

### Custom JavaScript not available

- Custom JavaScript requires a ReadMe Business or Enterprise plan
- Contact your ReadMe admin to upgrade if needed

### Chatbot not appearing

- Check your browser console for any error messages
- Ensure the script has loaded properly (look in the Network tab)
- Verify your project ID is correct

### Conflicts with ReadMe's chat widget

- If you're using ReadMe's built-in Intercom or other chat widgets, you may want to adjust positioning
- Use the `button-position` attribute to move the Biel.ai widget (e.g., `bottom-left`, `center-right`)

## Next steps

- [Customize](/customization) the widget's appearance, behavior, and tone.
- [Connect integrations](/integrations) like GitHub Actions, MCP, or Zapier.
