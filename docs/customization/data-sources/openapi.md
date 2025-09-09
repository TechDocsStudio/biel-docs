---
sidebar_position: 5
title: OpenAPI
description: Add OpenAPI/Swagger documents for optimized API documentation
---

# OpenAPI documents

Add OpenAPI document files to include API documentation in your project.

:::tip
File content remains private. Your chatbot won't expose file links as sources to users.
:::

## Why use OpenAPI documents

OpenAPI documents provide structured data that's processed more accurately than crawling documentation websites:

- **Complete API coverage**: All endpoints, parameters, and schemas included automatically
- **Structured format**: YAML/JSON format enables precise parsing of API details
- **No missing content**: Unlike web crawling, nothing gets missed or incorrectly parsed
- **Better understanding**: Schema definitions and data types are fully captured

## Requirements

- Valid OpenAPI/Swagger syntax (versions 2.0, 3.0.x, 3.1.x)
- JSON (`.json`) or YAML (`.yaml`, `.yml`) format
- Publicly accessible URL

## Add OpenAPI documents

1. Go to [app.biel.ai](https://app.biel.ai)
2. Select **Projects** > your project > **Settings** > **Sources**
3. Select **OpenAPI**
4. Enter the document URL
5. Click **Add OpenAPI URL**

Example URLs:
```
https://api.example.com/openapi.json
https://docs.example.com/swagger.yaml
https://api.example.com/v1/openapi.yml
```

## Troubleshooting

**Document not loading**
- Check URL accessibility
- Verify valid OpenAPI syntax

**Validation errors**
- Check logs for validation issues
- Fix syntax errors and refresh sources

**Need help?** Contact support at [support@biel.ai](mailto:support@biel.ai) if you experience issues with content processing or indexing takes too long. 