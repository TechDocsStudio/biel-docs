---
sidebar_position: 1
sidebar_label: Overview
slug: /customization/sources
---

# Sources overview

Configure content sources that your chatbot uses to answer questions. Sources determine what information is available to users.

:::important  
Only Administrator and Maintainer roles can manage sources. See [Manage roles](../../administration/roles.md).  
:::

## Source types

Choose from these source types:

### [URLs](urls.md)
Add individual web pages.
- Use for: Specific pages, testing, mixed content from different sites

### [Sitemaps](sitemaps.md) 
Add entire websites using XML sitemaps.
- Use for: Complete sites, documentation platforms, blogs

### [GitHub repositories](github.md)
Add code repositories and their documentation.
- Use for: Developer docs, README files, code-adjacent content

### [File uploads](files.md)
Upload documents in PDF, Word, Excel, and other formats.
- Use for: Internal docs, offline content, legacy documents

### [OpenAPI specifications](openapi.md)
Add OpenAPI/Swagger specifications for API documentation.
- Use for: API endpoints, schemas, parameters

## Add a source

1. Go to [app.biel.ai](https://app.biel.ai)
2. Select **Projects** > your project > **Settings** > **Sources**
3. Choose a source type and configure it
4. Click **Save**

Content indexing starts automatically and takes a few minutes. Test your chatbot after indexing completes.

**Need help?** Contact support at [support@biel.ai](mailto:support@biel.ai) if you experience issues with content processing or indexing takes too long.
