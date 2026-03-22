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

- Maximum file size: 10 MB per file.
- Files must contain searchable text (not scanned images).
- Up to 20 files per upload.

## Upload files

1. In the [Biel.ai dashboard](https://app.biel.ai), select your project.
2. Go to **Settings** > **Sources** > **Files**.
3. Drag files into the upload area, or click to browse.
4. Click **Save**.

## Manage files

To update a file, delete the old version and upload the new one. Content is re-indexed automatically.

To remove a file, click the delete button next to it in **Settings** > **Sources** > **Files**.

## File type notes

| Format | Notes |
|--------|-------|
| PDF | Text-based PDFs work best. Scanned PDFs have limited searchability. |
| Word | `.docx` works better than legacy `.doc`. |
| Excel | Each sheet is processed separately. |
| CSV | Include clear column headers. |

## Troubleshooting

### Upload failures

- Check file size is under 10 MB.
- Verify the file format is [supported](#supported-formats).
- Try uploading fewer files at once.

### Content not indexing

- Wait 5-10 minutes for processing.
- Ensure files contain searchable text (not scanned images).
- Check the file isn't corrupted or password-protected.
