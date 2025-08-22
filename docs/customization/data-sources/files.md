---
sidebar_position: 5
title: Files
description: Upload documents in PDF, Word, Excel, and other formats
---

# Files

Upload documents directly to your project in PDF, Word, Excel, and other formats.

:::tip
Uploaded files remain private—your chatbot won't expose file links as sources to users.
:::

## When to use file uploads

Use file uploads for:
- Internal documents (handbooks, policies, procedures)
- Offline content not published on the web
- Legacy formats (PDF manuals, Word documents, spreadsheets)
- Confidential content that needs to stay private

## Supported formats

| Format | Extensions | Description |
|--------|------------|-------------|
| PDF | `.pdf` | Portable Document Format files |
| Markdown | `.md`, `.markdown` | Markdown text files |
| Text | `.txt` | Plain text files |
| Word | `.docx`, `.doc` | Microsoft Word documents |
| Excel | `.xlsx`, `.xls` | Microsoft Excel spreadsheets |
| CSV | `.csv` | Comma-separated values files |

## Requirements

- Maximum file size: 10 MB per file
- Files must contain searchable text (not just images)
- Use descriptive file names

## Upload files

1. Go to [app.biel.ai](https://app.biel.ai)
2. Select **Projects** > your project > **Settings** > **Sources**
3. Select **Files**
4. Choose upload method:
   - Drag files into the upload area
   - Click to browse and select files
5. Wait for upload to complete
6. Click **Save**

You can upload multiple files at once (up to 20 files simultaneously).

## Manage uploaded files

**View files**:

Go to **Projects** > your project > **Settings** > **Sources** > **Files**

**Update files**:
1. Delete the old file (optional but recommended)
2. Upload new version with same name
3. Content gets re-indexed automatically

**Remove files**:
1. Go to **Projects** > your project > **Settings** > **Sources** > **Files**
2. Click delete button
3. Confirm removal

## Best practices

- Use descriptive file names: `employee-handbook-2024.pdf`
- Include version numbers: `policy-v2.1.pdf`
- Ensure documents have searchable text (not scanned images)
- Use simple formatting for better text extraction
- Remove passwords before uploading

### File type notes

* **PDF files**: Text-based PDFs work best; scanned PDFs have limited searchability
* **Word documents**: `.docx` files work better than legacy `.doc` files
* **Excel spreadsheets**: Each sheet is processed separately
* **CSV files**: Include clear column headers


## Troubleshooting

**Upload failures**
- Check file size (under 10 MB)
- Verify file format is supported
- Try smaller batches (fewer files at once)

**Content not indexing**
- Wait 5-10 minutes for processing
- Ensure files contain searchable text
- Check file isn't corrupted

**Poor results**
- Use descriptive file names
- Ensure files have clear, readable text

**Need help?** Contact support at [support@biel.ai](mailto:support@biel.ai) if you experience issues with content processing or indexing takes too long.

 