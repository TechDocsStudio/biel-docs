---
sidebar_label: Confluence
description: Connect your Confluence space to Biel.ai as a data source.
---

# Confluence as a data source

Connect your Confluence space to Biel.ai to make your team's documentation searchable through AI. The chatbot can answer questions based on your Confluence pages and spaces, making your knowledge base more accessible.

This guide shows you how to connect your Confluence space to Biel.ai and configure it as a data source for your AI chatbot.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../../quickstart.md) to create one.
- **Admin access to your Confluence space** to generate API tokens. Only account owners can create API keys.
- **A Confluence Cloud instance** (Confluence Server support coming soon).

## Setup Confluence integration

The Confluence integration allows Biel.ai to index your Confluence pages and provide AI-powered answers based on your team's documentation.

### 1. Generate Confluence API token

First, you'll need to create an API token for Biel.ai to access your Confluence content:

1. In Confluence, select your avatar from the bottom left of the management screen.
1. Select API info from the menu that appears.
1. Select **Create key**.
1. Enter a key name.
1. Copy the generated token (you won't be able to see it again)

For detailed instructions, see the [Create and manage API keys](https://support.atlassian.com/statuspage/docs/create-and-manage-api-keys/) on managing API tokens.

### 2. Configure Confluence in Biel.ai

Now connect your Confluence space to your Biel.ai project:

1. Go to [app.biel.ai](https://app.biel.ai)
2. Select **Projects** > your project > **Settings** > **Sources**
3. Select **Confluence**
4. Fill in the required information:
   - **Space URL**: Your Confluence space URL (e.g., `https://yourcompany.atlassian.net/wiki/spaces/DOCS`)
   - **Email**: The email address associated with your Atlassian account
   - **API Token**: The token you generated in step 1
5. Click **Save**

:::tip
You can find your space URL by navigating to any page in your Confluence space and copying the URL up to `/spaces/SPACENAME`.
:::

### 3. Test the connection

After saving your configuration:

1. Biel.ai will automatically start indexing your Confluence pages
2. You can monitor the indexing progress in the **Sources** section
3. Once indexing completes, test the chatbot by asking questions about your Confluence content

## Troubleshooting

**Authentication failed**
- Verify your email address matches your Atlassian account
- Check that the API token is correct and hasn't expired
- Ensure you have access to the specified Confluence space

**Pages not indexing**
- Check if pages are published (not drafts)
- Verify space permissions allow API access
- Review URL filters for over-exclusion
- Large spaces may take time to process completely

**Content quality issues**
- Some pages may have minimal text content
- Confluence macros may not render properly in AI responses
- Consider excluding template or boilerplate pages

**Rate limiting**
- Contact support if indexing stalls for extended periods

## Need help?

We're here to help! Reach out to us at [Biel.ai Support](https://biel.ai/contact) if you need assistance with your Confluence integration.

