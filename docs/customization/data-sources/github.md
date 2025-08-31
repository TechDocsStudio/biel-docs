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

## Add repositories

### Public repositories

1. Go to [app.biel.ai](https://app.biel.ai)
2. Select **Projects** > your project > **Settings** > **Sources**
3. Select **GitHub**
4. Enter the repository URL: `https://github.com/owner/repo`
5. Click **Save**

### Private repositories

For private repositories, create a GitHub personal access token:

1. **Generate token**:
   - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Click **Generate new token (classic)**
   - Add description: "Biel.ai Documentation"
   - Select `repo` scope
   - Click **Generate token** and copy it

2. **Add to Biel.ai**:
   - Go to [app.biel.ai](https://app.biel.ai)
   - Select **Projects** > your project > **Settings** > **Sources**
   - Select **GitHub**
   - Enter the repository URL: `https://github.com/owner/repo`
   - Expand **Advanced options**
   - Paste token in **GitHub Token** field
   - Click **Save**

## Filter files

Control which repository files get indexed.

**Include patterns** - Only index matching files:
```
*.md              # Markdown files
docs/             # Files in docs folder
README.md         # README files
*.rst             # reStructuredText files
```

**Exclude patterns** - Skip matching files:
```
*.log             # Log files
node_modules/     # Dependencies
.git/             # Git metadata
*.test.js         # Test files
build/            # Build artifacts
```

**Example configuration**:
- Include: `*.md, docs/, README.md, *.rst`
- Exclude: `node_modules/, .git/, build/, *.test.*, coverage/`

## Advanced options

* **Multiple repositories**: Add different repositories as separate sources
* **Branch selection**: Default branch is indexed (usually `main` or `master`)
* **Submodules**: Not automatically indexed—add as separate sources

## Best practices

**Repository organization**:
- Use clear, descriptive file names
- Group related documentation in folders
- Maintain README files at each level
- Use consistent formatting (Markdown or reStructuredText)

**Security**:
- Use minimal token permissions (`repo` scope only)
- Rotate tokens every 6-12 months
- Monitor token usage in GitHub settings

## Troubleshooting

**Repository not found**
- Check URL format: `https://github.com/owner/repo`
- Verify repository is accessible with your token

**Files not indexing**
- Check include patterns match file paths
- Review exclude patterns for over-exclusion
- Verify files are in supported formats (Markdown, plain text)

**Token issues**
- Verify `repo` scope for private repositories
- Check token hasn't expired
- Confirm repository permissions haven't changed

**Need help?** Contact support at [support@biel.ai](mailto:support@biel.ai) if you experience issues with content processing or indexing takes too long.

 