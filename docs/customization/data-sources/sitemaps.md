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

## Filter URLs

Control which pages from the sitemap get indexed by adding URL filter rules. Each rule has a **glob pattern** and an **action** (include or exclude).

1. Go to **Projects** > your project > **Settings** > **Sources** > **Sitemaps**.
2. Add one or more filter rules under **Filter URLs**.

**How filtering works:**

- If no include rules exist, all URLs are included by default.
- If include rules exist, only URLs matching at least one include pattern are kept.
- Exclude rules are applied after include rules — any matching URL is skipped.

**Examples:**

| Pattern | Action | Effect |
|---|---|---|
| `**/docs/**` | Include | Only index pages under `/docs/` |
| `**/api/**` | Exclude | Skip API reference pages |
| `**/deprecated/**` | Exclude | Skip old content |
| `**/en/**` | Include | Only index English pages |
| `**/*.pdf` | Exclude | Skip PDF files |
| `**/[0-9]*.[0-9]*.[0-9]*/**` | Exclude | Skip versioned paths like `/1.2.3/` |

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

