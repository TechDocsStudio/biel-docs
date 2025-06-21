---
sidebar_label: GitHub workflow
description: Automatically sync your Biel.ai project when documentation changes using GitHub Actions.
sidebar_position: 2
---

# GitHub workflow integration

Automatically sync your Biel.ai project whenever you push documentation changes to GitHub. This ensures your AI assistant always has access to the latest information.

## Prerequisites

- A **Biel.ai Business or Enterprise plan** (API access required)
- **An API key** with `project_sync` permission from your team settings
- **Your project slug** from your Biel.ai dashboard

## Setup

### 1. Create the workflow file

Create `.github/workflows/sync-biel.yml` in your repository:

```yaml
name: Sync Biel.ai

on:
  push:
    branches: [main]
    paths: 
      - 'docs/**'
      - '*.md'
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Sync Biel.ai Project
        run: |
          curl -X POST \
            -H "Authorization: Api-Key ${{ secrets.BIEL_API_KEY }}" \
            -H "Content-Type: application/json" \
            https://app.biel.ai/api/v1/projects/${{ secrets.BIEL_PROJECT_SLUG }}/sources/sync/
```

### 2. Add your secrets

1. Go to your GitHub repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add:
   - `BIEL_API_KEY`: Your Biel.ai API key
   - `BIEL_PROJECT_SLUG`: Your project slug

For more details, see [Uso de secretos en Acciones de GitHub
](https://docs.github.com/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).

### 3. Customize the trigger

Adjust the `paths` section to match your documentation structure:

```yaml
paths: 
  - 'docs/**'           # Sync when docs folder changes
  - 'content/**'        # Or your content folder
  - 'README.md'         # Or specific files
  - '**/*.md'           # Or all markdown files
```

## That's it!

Now whenever you push changes to your documentation, GitHub will automatically sync your Biel.ai project.

You can also trigger the sync manually from the **Actions** tab in your repository.

**Need help?** [Contact us](https://biel.ai/contact) 