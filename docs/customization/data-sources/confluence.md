---
sidebar_label: Confluence
sidebar_position: 7
description: Connect a Confluence Cloud space to Biel.ai as a data source.
---

# Confluence as a data source

Connect a Confluence Cloud space to Biel.ai to index your team's pages and make them searchable through the chatbot.

## Prerequisites

- A [Biel.ai account](https://app.biel.ai/accounts/signup/).
- A [project](../../quickstart.md#2-create-a-project) with indexed content.
- Admin access to your Confluence space (required to generate API tokens).
- Confluence Cloud (Server is not supported).

## 1. Generate a Confluence API token

1. In Confluence, click your avatar in the bottom left.
2. Select **API info**.
3. Click **Create key** and enter a name.
4. Copy the token — you won't be able to view it again.

See [Create and manage API keys](https://support.atlassian.com/statuspage/docs/create-and-manage-api-keys/) for details.

## 2. Connect Confluence to Biel.ai

1. In the [Biel.ai dashboard](https://app.biel.ai), select your project.
2. Go to **Settings** > **Sources** > **Confluence**.
3. Enter:
   - **Space URL**: e.g., `https://yourcompany.atlassian.net/wiki/spaces/DOCS`
   - **Email**: Your Atlassian account email.
   - **API Token**: The token from step 1.
4. Click **Save**.

:::tip[Finding your space URL]
Navigate to any page in your Confluence space and copy the URL up to `/spaces/SPACENAME`.
:::

Biel.ai starts indexing your pages automatically. Monitor progress in the **Sources** section.

## Troubleshooting

### Authentication failed

- Verify your email matches your Atlassian account.
- Check the API token is correct and hasn't expired.
- Ensure you have access to the specified space.

### Pages not indexing

- Check that pages are published (not drafts).
- Verify space permissions allow API access.
- Large spaces may take longer to process.

### Content quality issues

- Confluence macros may not render properly in AI responses.
- Consider excluding template or boilerplate pages with URL filters.

