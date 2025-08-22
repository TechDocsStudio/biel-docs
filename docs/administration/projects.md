---
sidebar_position: 3
title: Manage projects
---

# Manage projects

Projects are the core organizational unit in Biel.ai where you configure your chatbot's behavior, data sources, and security settings. This guide explains how to view, configure, and manage your projects.


## View all projects

From the **Projects** dashboard, you can:

- View all your projects at a glance
- Access individual project settings
- Monitor project activity and analytics

Within a specific project, you can:

- View chat entries and conversation history
- Filter conversations by sentiment
- Delete chat entries when needed
- Access detailed project analytics

## Configure project settings

:::important  
Only users with the **Administrator** or **Maintainer** role can configure project settings. For more details, see [Manage roles](roles.md).  
:::  

### Project details

Configure basic project information:

- **Name**: Change the project display name.
- **Private project**: Mark the project as private to require API key authentication for access. This feature is available for Business and Enterprise plans only.
- **Demo page**: Enable or disable the demo page for testing your chatbot.

### Sources

Select and configure data sources for your project. Sources determine what information your chatbot can access to answer questions.

Available source types:
- **URLs**: Index specific web pages.
- **Sitemaps**: Index entire websites using XML sitemaps.  
- **GitHub**: Index GitHub repositories directly.
- **Files**: Upload documents (PDF, CSV, Excel, Word, TXT, MD).

For detailed configuration instructions, see [Sources](../customization/data-sources/overview.md).

### Restrictions

Control which domains and URLs can access your chatbot:

- **Allowed domains**: Only domains from this list will be able to use your chatbot widget.
- **Filter URLs**: Use regex patterns to include or exclude specific URLs from indexing.

For more details on URL filtering and domain restrictions, see [URLs](../customization/data-sources/urls.md).

### UI settings

Customize the user interface and initial user experience:

- **Initial message**: Set a custom greeting message displayed when users first open the chat. For more details, see [Initial message](../customization/initial-message.mdx).
- **Suggested questions**: Configure predefined questions to guide user interactions. For more details, see [Suggested questions](../customization/suggested-questions.mdx).


### LLM settings

Configure the AI model and behavior:

- **Select model**: Choose from GPT or Claude models based on your needs and subscription plan. For more details, see [Models](../customization/models.md).
- **Define prompt**: Extend the default AI Assistant or create a custom prompt for specialized behavior. For more details, see [Custom prompt](../customization/custom-prompt.md).


### Data privacy

Enhance user privacy and comply with regulations:

- **Remove PII**: Automatically detect and remove personally identifiable information (names, emails, phone numbers) from conversations.
- **Disable IP collection**: Stop collecting IP addresses to enhance privacy (affects some analytics features).

For comprehensive privacy configuration, see [Data privacy](../customization/data-privacy.mdx).
