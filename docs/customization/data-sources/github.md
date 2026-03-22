---
sidebar_position: 4
title: GitHub repositories
description: Add GitHub repositories and their documentation
---

# GitHub repositories

Add GitHub repositories to include documentation, README files, and code comments in your chatbot's knowledge base.

:::tip
File content remains private. Your chatbot won't expose file links as sources to users.
:::

## When to use GitHub repositories

Use GitHub repositories for:
- Documentation stored with code (README files, docs folders)
- Private internal documentation
- API documentation and code examples
- Developer guides and technical content

## Add a repository

1. In the [Biel.ai dashboard](https://app.biel.ai), select your project.
2. Go to **Settings** > **Sources** > **GitHub**.
3. Enter the repository URL (e.g., `https://github.com/owner/repo`).
4. Click **Save**.

### Private repositories

Private repos require a GitHub personal access token:

1. Go to [GitHub Settings > Personal access tokens](https://github.com/settings/tokens).
2. Click **Generate new token (classic)**.
3. Select the `repo` scope and click **Generate token**.
4. Copy the token.
5. In Biel.ai, expand **Advanced options** on the GitHub source and paste the token in the **GitHub Token** field.

## Filter files

Control which files get indexed using include and exclude patterns.

| Pattern | Action | Effect |
|---------|--------|--------|
| `*.md` | Include | Only Markdown files |
| `docs/` | Include | Only files in docs folder |
| `*.rst` | Include | Only reStructuredText files |
| `node_modules/` | Exclude | Skip dependencies |
| `.git/` | Exclude | Skip Git metadata |
| `*.test.*` | Exclude | Skip test files |
| `build/` | Exclude | Skip build artifacts |

## Advanced options

* **Multiple repositories**: Add different repositories as separate sources
* **Branch selection**: Default branch is indexed (usually `main` or `master`)
* **Submodules**: Not automatically indexed—add as separate sources

## Troubleshooting

### Repository not found

- Check URL format: `https://github.com/owner/repo`.
- For private repos, verify the token has `repo` scope and hasn't expired.

### Files not indexing

- Check that include patterns match your file paths.
- Review exclude patterns for over-exclusion.
- Verify files are in supported formats (Markdown, plain text, reStructuredText).

### Token issues

- Confirm the token has `repo` scope.
- Regenerate the token if it has expired.
- Check that repository permissions haven't changed.
