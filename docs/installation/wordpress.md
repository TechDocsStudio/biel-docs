---
sidebar_label: Wordpress
---

# AI chatbot for Wordpress

Here's a step-by-step guide to help you install Biel.ai in your Wordpress site.

![Feedback wiget for docs screenshot](./images/feedback-widget-docs.png)

## Prerequisites

- A Biel.ai account. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Wordpress website.

## Installation

To embed the Biel.ai widget into your WordPress site:

1. Access the admin dashboard of your WordPress website by navigating to `http://yourwebsite.com/wp-admin/`.
1. Add the Biel.ai styles and scripts:

    1. Navigate to **Appearance > Theme Editor**.
    2. From the right sidebar, select the `header.php` file to edit the `<head>` section.
    3. Insert the following code within the `<head>` section:

        ```html
        <!-- Initialize the Biel.ai widget -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">
        <script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"></script>
        ```

1. To insert the feedback button just before the `</body>` tag:

    1. While still in the **Theme Editor**, locate and click on the `footer.php` file from the right sidebar.
    2. Just before the `</body>` tag, paste the following snippet:

        ```html
        <biel-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">ASK AI</biel-button>
        ```

        Replace `<YOUR_PROJECT_ID>` with your project's ID from the [Biel.ai dashboard](../quickstart.md#2-create-a-project).

1. Once you've saved your changes, visit your WordPress website in a web browser. Confirm that the feedback button is visible and operational.

## Next steps

For more about customization and additional features exploration, check out the [Configuration](/category/configuration) section.

Need assistance? We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact).