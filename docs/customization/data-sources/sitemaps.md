---
sidebar_position: 3
title: Sitemaps
description: Add entire websites using XML sitemap files
---

# Sitemaps

Add entire websites using XML sitemap files. Sitemaps efficiently index large amounts of content from a single domain.

:::tip
Sitemaps automatically discover all pages listed in the XML file.
:::

## When to use sitemaps

Use sitemaps to:
- Add complete documentation sites or blogs
- Index hundreds or thousands of pages efficiently
- Automatically discover new pages as they're added
- Handle structured website content

## Requirements

Sitemaps must:
- End with `.xml`
- Be publicly accessible
- Follow the [XML Sitemap Protocol](https://www.sitemaps.org/)

Supported types:
- Standard sitemaps (single XML files)
- Sitemap indexes (reference multiple sitemaps)
- Nested sitemaps (linked sitemaps)

## Add sitemaps

1. Go to [app.biel.ai](https://app.biel.ai)
2. Select **Projects** > your project > **Settings** > **Sources**
3. Select **Sitemaps**
4. Enter the sitemap URL (must end in `.xml`)
5. Click **Save**

Example sitemap URLs:
```
https://docs.example.com/sitemap.xml
https://blog.example.com/sitemap.xml
https://help.example.com/sitemap_index.xml
```

## Find sitemaps

Common locations:
```
https://yoursite.com/sitemap.xml
https://yoursite.com/sitemap_index.xml
https://yoursite.com/sitemaps/sitemap.xml
```

Platform-specific patterns:

**Docusaurus**
```
https://yoursite.com/sitemap.xml
```

**GitBook**
```
https://yourorg.gitbook.io/sitemap.xml
```

**WordPress**
```
https://yoursite.com/wp-sitemap.xml
```

**Custom sites**

Check `robots.txt` at `https://yoursite.com/robots.txt` for sitemap declarations.

## Filter sitemap content

Control which pages get indexed from the sitemap:

1. Go to **Projects** > your project > **Settings** > **Sources** > **Restrictions** > **Filter URLs**
2. Add patterns:
   - **Include**: `**/docs/**` (documentation only)
   - **Exclude**: `**/api/**` (skip API reference)
   - **Exclude**: `**/deprecated/**` (skip old content)

For multi-language sites:
- **Include**: `**/en/**`, `**/fr/**` (specific languages)
- **Exclude**: `**/es/**`, `**/de/**` (unwanted languages)

## Sitemap index files

Large sites often use index files that reference multiple sitemaps:

```xml
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/docs-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://example.com/blog-sitemap.xml</loc>
  </sitemap>
</sitemapindex>
```

Biel.ai automatically follows sitemap indexes and processes all referenced sitemaps.

 
## Best practices

- Verify sitemap accessibility before adding
- Start with smaller sitemaps (under 1000 pages)
- Use URL filtering to exclude irrelevant content
- Test indexing with a few key pages first

## Troubleshooting

**Sitemap not found**
- Check URL format (must end with `.xml`)
- Try common sitemap locations
- Check robots.txt for sitemap declarations

**Partial indexing**
- Check if pages in sitemap are publicly accessible
- Review URL filters for over-exclusion
- Large sitemaps may have processing limits

**Content quality issues**
- Some pages may have minimal text content
- JavaScript-heavy pages may not index properly

**Need help?** Contact support at [support@biel.ai](mailto:support@biel.ai) if you experience issues with content processing or indexing takes too long.

