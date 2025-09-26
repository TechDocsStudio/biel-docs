---
sidebar_label: GitHub workflow
description: Automatically sync your Biel.ai project when documentation changes using GitHub Actions.
sidebar_position: 2
---

# GitHub workflow integation

Use GitHub Actions to automatically update your Biel.ai project when you push documentation changes. This keeps your AI assistant synchronized with your latest content.

## Before you begin

Ensure you have the following:

- A Biel.ai Business or Enterprise plan (required for API access)
- An API key from your team settings with these permissions:
  - `project_sources_create` (to upload site files)
  - `project_sync` (to trigger content crawls)
- Your project slug from your Biel.ai dashboard

## Choose your automation approach

You can automate two types of updates:

| Action | Purpose | When to use |
|--------|---------|-------------|
| **Content sync** | Trigger a crawl of existing sources | Sources already configured in dashboard; content has changed |
| **Site deployment** | Upload and index a built static site | Site is private (behind VPN, private GitHub Pages) |

:::tip Recommended approach
Configure URL sources in your Biel.ai dashboard, then use content sync to trigger crawls.

Use **site deployment** only for private sites that Biel.ai cannot access directly.
:::

## Set up content sync (recommended)

Use this workflow when your sources are already configured in your Biel.ai dashboard.

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
          echo "Syncing Biel.ai project..."
          if ! curl -f -X POST \
            -H "Authorization: Api-Key ${{ secrets.BIEL_API_TOKEN }}" \
            -H "Content-Type: application/json" \
            https://app.biel.ai/api/v1/projects/${{ secrets.BIEL_PROJECT_SLUG }}/sources/sync/; then
            echo "❌ Failed to sync Biel.ai project"
            exit 1
          fi
          echo "✅ Project synced successfully"
```

### 2. Configure GitHub secrets

1. In your GitHub repository, go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret** and add:
   - **Name**: `BIEL_API_TOKEN`
   - **Secret**: Your Biel.ai API key

For more information, see the GitHub documentation on [Using secrets in GitHub Actions](https://docs.github.com/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).

### 3. Customize the trigger paths

Update the `paths` section to match your documentation structure:

```yaml
paths: 
  - 'docs/**'           # Trigger when docs folder changes
  - 'content/**'        # Or your content folder
  - 'README.md'         # Or specific files
  - '**/*.md'           # Or all markdown files
```

## Set up site deployment (for private sites)

Use this workflow only when your site is not publicly accessible.

:::note
Site uploads are limited to 250MB. [Contact us](https://biel.ai/contact) for higher limits.
:::

### 1. Create the deployment workflow

Create `.github/workflows/deploy-biel.yml` in your repository:

```yaml
name: Deploy to Biel.ai

on:
  push:
    branches: [main]
    paths: 
      - 'docs/**'
      - '*.md'
  workflow_dispatch:

env:
  BIEL_API_BASE_URL: 'https://app.biel.ai'
  BIEL_PROJECT_SLUG: 'your-project-slug'
  BIEL_SITE_NAME: 'wiki'  # Lowercase identifier for your site
  BIEL_BASE_URL: 'https://your-site.com'
  BUILD_OUTPUT_DIR: 'site'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      # Add your site build steps here
      # Example:
      # - name: Build site
      #   run: |
      #     npm install
      #     npm run build

      - name: Deploy to Biel AI
        if: github.ref == 'refs/heads/main'
        run: |
          cd $BUILD_OUTPUT_DIR && zip -r ../docs-site.zip . && cd ..
          
          echo "Uploading site to Biel AI..."
          if ! curl -f -X POST \
            -H "Authorization: Api-Key ${{ secrets.BIEL_API_TOKEN }}" \
            -F "site_zip=@docs-site.zip" \
            -F "site_name=$BIEL_SITE_NAME" \
            -F "base_url=$BIEL_BASE_URL" \
            "$BIEL_API_BASE_URL/api/v1/projects/$BIEL_PROJECT_SLUG/sources/"; then
            echo "❌ Failed to deploy to Biel AI"
            exit 1
          fi
          echo "✅ Site uploaded successfully"
          
          echo "Syncing site on Biel AI..."
          if ! curl -f -X POST \
            -H "Authorization: Api-Key ${{ secrets.BIEL_API_TOKEN }}" \
            "$BIEL_API_BASE_URL/api/v1/projects/$BIEL_PROJECT_SLUG/sources/sync/"; then
            echo "❌ Failed to sync on Biel AI"
            exit 1
          fi
          echo "✅ Site synced successfully"
```

### 2. Update environment variables

Replace the placeholder values in the `env` section:
- `BIEL_PROJECT_SLUG`: Your project slug from the Biel.ai dashboard
- `BIEL_SITE_NAME`: A lowercase identifier for your site source (e.g., `wiki`, `docs`, `help`)
- `BIEL_BASE_URL`: Your site's public URL
- `BUILD_OUTPUT_DIR`: Your build output directory (e.g., `dist`, `build`, `public`)

### 3. Add your build steps

Replace the commented build steps with your actual site generation commands.

## Test your workflow

After setting up your workflow:

1. Push a change to your documentation
2. Go to the **Actions** tab in your GitHub repository
3. Verify that the workflow runs successfully

You can also trigger the workflow manually by clicking **Run workflow** in the Actions tab.

## Get help

If you need assistance, [contact our support team](https://biel.ai/contact). 