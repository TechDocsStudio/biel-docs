---
sidebar_position: 7
description: Configure how the Biel.ai chatbot responds using AI Assistant versions or a custom prompt.
---

# Prompt customization

Biel.ai offers two modes for controlling how the chatbot responds: **AI Assistant** (pre-configured prompts) and **Custom prompt** (full control).

## AI Assistant

Pre-configured prompts optimized for technical documentation. Select a version:

| Version | Release | Description |
|---------|---------|-------------|
| v3 (Next) | Feb 2026 | Best balance of accuracy and helpfulness. Indicates confidence levels, attributes sources, and asks clarifying questions before guessing. |
| **v2 (Recommended)** | Aug 2025 | Strict accuracy. Only responds when documentation clearly covers the question. Won't extrapolate from similar content. |
| v1 | Oct 2024 | Flexible responses. Extrapolates from available information and attempts answers even with limited context. Higher hallucination risk. |

You can extend any version by adding instructions — for example, adding a signature to responses or modifying the tone.

## Custom prompt

Write your own prompt for full control over the chatbot's behavior.

:::warning
Custom prompts may disable built-in safeguards and advanced processing features.
:::

## Configure the prompt

:::important
Only **Administrator** or **Maintainer** roles can manage projects. See [Manage roles](../administration/roles.md).
:::

1. In the Biel.ai dashboard, select your project.
2. Click **Settings**.
3. Under **LLM settings > Define prompt**:
   - Select an **AI Assistant** version and optionally add extensions, or
   - Select **Custom prompt** and write your own prompt.
4. Click **Save**.

### Examples

**Extending an AI Assistant prompt:**

```
Always start responses with "Hi!"
```

**Custom prompt:**

```
You are a customer support assistant for [Product Name]. Provide clear, accurate answers related to product features, troubleshooting, and usage. Keep responses professional and focused on the product. Only respond based on the information you can extract from CONTEXT and the conversation HISTORY.
```
