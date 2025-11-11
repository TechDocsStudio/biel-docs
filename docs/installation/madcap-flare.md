---
sidebar_label: MadCap Flare
description: Add an AI chatbot to your MadCap Flare documentation with this step-by-step guide.
---

# AI chat widget for MadCap Flare

Add an AI chatbot to your MadCap Flare documentation using Biel.ai's web components. The integration works with Flare's master page system and adds conversational AI capabilities to your published HTML5 or Top Navigation output.

This guide shows you how to add the chat widget to your MadCap Flare project in minutes.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **MadCap Flare** installed on your computer.
- **A Flare project** ready to modify.

## Installation

The Biel.AI chat widget enables a conversational chat powered by AI in your site.

![Chatbot widget for docs](./images/biel-widget-docs.png)

To integrate the Biel.AI chat widget into your MadCap Flare documentation:

### Step 1: Modify the master page

1. Open your Flare project in MadCap Flare.

2. In the **Project Organizer**, navigate to `Content/Resources/MasterPages`.

3. Open the master page you're using (typically `Home.flmsp` or `Other Topics.flmsp`). If your project uses multiple master pages, repeat these steps for each one.

4. Switch to the **Text Editor** view (bottom-left button).

5. Add the Biel.ai initialization scripts in the `<head>` section:

    ```html
    <!-- Initialize the Biel.AI chat widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
    ```

6. Just before the closing `</body>` tag, add the chatbot widget:

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

7. Save the master page.

### Step 2: Build and test

1. Build your target:

    * Select **Project** > **Build Primary** from the menu (or press F6).
    * Alternatively, build a specific target from the **Project Organizer**.

2. Once the build completes, open the generated output in your default browser:

    * Select **View** > **Open Output Folder**.
    * Navigate to the HTML5 output folder.
    * Open `index.htm` or `Default.htm` in a web browser.

3. Verify that the chatbot appears and works correctly on your pages.

## Example master page snippet

Your master page `<head>` section should look something like this:

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
        <MadCap:variable name="System.Title" />
    </title>
    <link href="../Skins/Default/Stylesheets/Slideshow.css" rel="stylesheet" type="text/css" />
    <link href="../Skins/Default/Stylesheets/TextEffects.css" rel="stylesheet" type="text/css" />

    <!-- Biel.ai chatbot initialization -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
</head>
```

And before the closing `</body>` tag:

```html
    <!-- Biel.ai chatbot widget -->
    <biel-button project="<YOUR_PROJECT_ID>" 
        header-title="Biel.ai chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
            Ask AI
    </biel-button>
</body>
```

## Working with multiple targets

If your Flare project has multiple targets (HTML5, Top Navigation, etc.):

1. Ensure each target uses a master page with the Biel.ai code added.
2. You can use the same project ID across all targets.
3. Build and test each target separately to verify the chatbot appears correctly.

## Troubleshooting

**Chatbot not appearing after build**
- Verify the code was added to the correct master page
- Check that your topics are using the modified master page
- Clear your browser cache and reload the page
- View the page source to confirm the scripts are included

**Build warnings or errors**
- Flare may show warnings about external scripts (this is normal)
- The chatbot will still work correctly in the output
- You can safely ignore warnings about CDN-hosted scripts

**Chatbot conflicts with Flare's built-in search**
- Biel.ai uses different positioning and won't interfere with Flare's search
- If needed, adjust the `button-position` attribute (e.g., `bottom-left`, `center-right`)
- You can also customize the appearance through CSS

**Styling issues with Top Navigation output**
- Top Navigation skins may have different styling
- See the [customization section](../customization/styles.mdx) for CSS overrides
- Consider adjusting button positioning for better visual integration

## Next steps

For more about customization and additional features exploration, check out the [customization](/customization) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).

