---
sidebar_position: 3
title: Sitemaps
description: Add entire websites using XML sitemap files
---

# Sitemaps

Add entire websites using XML sitemap files. Sitemaps efficiently index large amounts of content from a single domain.

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

1. In the [Biel.ai dashboard](https://app.biel.ai), select your project.
2. Go to **Settings** > **Sources** > **Sitemaps**.
3. Enter the sitemap URL (must end in `.xml`).
4. Click **Save**.

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

| Platform | Sitemap URL |
|----------|-------------|
| Docusaurus | `https://yoursite.com/sitemap.xml` |
| GitBook | `https://yourorg.gitbook.io/sitemap.xml` |
| WordPress | `https://yoursite.com/wp-sitemap.xml` |

For other platforms, check `robots.txt` at `https://yoursite.com/robots.txt` for sitemap declarations.

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

## Troubleshooting

### Sitemap not found

- Check URL format (must end with `.xml`).
- Try common sitemap locations listed in [Find sitemaps](#find-sitemaps).
- Check `robots.txt` for sitemap declarations.

### Partial indexing

- Verify pages in the sitemap are publicly accessible.
- Review URL filters for over-exclusion.
- JavaScript-heavy pages may not index properly.

