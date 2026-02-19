---
sidebar_position: 10
---

# Search filters

Search filters let users narrow down results by category when using the search widget. Each filter maps to a URL pattern, so only matching pages appear when a filter is selected.

![Search filters shown in the search widget](./images/biel-search-widget.png)

## How search filters work

When a user types a query and selects a filter, the search widget sends the filter title to the API. The API looks up the corresponding URL pattern and limits the returned results to pages whose URL, title, description, or keywords match that pattern.

An **All** button is always displayed first. Selecting it removes any active filter and returns the full result set.

Filters only appear when:
- The project has at least one active search filter configured.
- The `hide-filters` property on the widget is set to `false`.
- The search input contains text (filters are hidden when the query is empty).

## Configure filters in project settings

:::important
Only users with the **Administrator** or **Maintainer** role can configure project settings. For more details, see [Manage roles](../administration/roles.md).
:::

1. Navigate to your project page.
2. Click the **Settings** button.
3. Scroll to the **Search filters** section.
4. Add one or more filters. Each filter requires:
   - **Title**: The label shown in the widget (for example, `API`, `Guides`, `Blog`).
   - **Pattern**: A regex pattern used to match page URLs. For example, `/docs/api/` matches all pages under that path.
5. Click **Save**.

:::tip
You can use a glob-style wildcard at the start of a pattern. For example, `*.example.com` is automatically converted to `.*\.example\.com`. For more advanced matching, use standard regular expressions such as `docs\.acme\.com/api`.
:::

## Enable filters in the widget

By default, filters are hidden in the search widget even if they are configured in the project. To show them, set `hide-filters` to `false`:

```html
<biel-search-button
  project="YOUR_PROJECT_ID"
  hide-filters="false"
>Search</biel-search-button>
```

The filters bar appears automatically below the search input once the user starts typing, as long as the project has active filters configured.

## Customize filter appearance

You can style the filter buttons using CSS custom properties:

```css
:root {
  /* Default (unselected) filter button */
  --biel-search-filter-color: #191919;
  --biel-search-filter-bg-color: #fff;
  --biel-search-filter-border-color: #eee;
  --biel-search-filter-hover-color: #eee;

  /* Selected filter button */
  --biel-search-filter-selected-color: #fff;
  --biel-search-filter-selected-bg-color: #191919;
  --biel-search-filter-selected-border-color: #eee;
}
```

For a full list of available CSS custom properties, see [Styles](./styles.mdx).

You can also use CSS parts for fine-grained control:

```css
/* Style the filters container */
biel-search::part(biel-search-filters-container) {
  gap: 4px;
  padding: 8px 0;
}

/* Style individual filter buttons */
biel-search::part(biel-search-filters-filter-button) {
  border-radius: 20px;
  font-size: 13px;
}
```

## Pattern matching reference

Patterns are evaluated as case-insensitive regular expressions against the following fields of each search result:

- URL
- Title
- Page title
- Description
- Keywords
- Fragment
- Domain

| Pattern example         | What it matches                              |
|-------------------------|----------------------------------------------|
| `docs\.acme\.com/api`   | Pages under `docs.acme.com/api`              |
| `/guides/`              | Any URL containing `/guides/`                |
| `*.acme.com`            | Any subdomain of `acme.com` (glob converted) |
| `release-notes`         | Pages containing "release-notes" anywhere    |

## Limitations

- Filters are only available for the search widget (`<biel-search-button>`). They are not available in the chat widget (`<biel-button>`).
- Each filter title must be unique within a project.
- Filters are applied server-side after the semantic search runs, so they do not affect the relevance ranking.
