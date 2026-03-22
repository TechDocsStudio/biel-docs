---
sidebar_position: 6
title: OpenAPI
description: Add OpenAPI/Swagger specs to your Biel.ai project for accurate API documentation indexing.
---

# OpenAPI documents

Add OpenAPI specs to index API documentation. Structured YAML/JSON is parsed more accurately than crawling API docs websites — all endpoints, parameters, and schemas are captured.

:::tip
File content remains private. Your chatbot won't expose file links as sources to users.
:::

## Requirements

- Valid OpenAPI/Swagger syntax (versions 2.0, 3.0.x, 3.1.x).
- JSON (`.json`) or YAML (`.yaml`, `.yml`) format.
- Publicly accessible URL.

## Add an OpenAPI document

1. In the [Biel.ai dashboard](https://app.biel.ai), select your project.
2. Go to **Settings** > **Sources** > **OpenAPI**.
3. Enter the document URL.
4. Click **Add OpenAPI URL**.

Example URLs:

```text
https://api.example.com/openapi.json
https://docs.example.com/swagger.yaml
https://api.example.com/v1/openapi.yml
```

## Troubleshooting

### Document not loading

- Check the URL is publicly accessible.
- Verify valid OpenAPI syntax.

### Validation errors

- Check logs for validation details.
- Fix syntax errors and click **Refresh sources**.
