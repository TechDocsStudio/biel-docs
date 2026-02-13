---
sidebar_position: 7
---

# Prompt customization

A prompt is the instruction given to the chatbot that guides how it processes and responds to user input.

Biel.ai provides two modes for configuring your chatbot's behavior:

## AI Assistant

Use a pre-configured prompt optimized for technical documentation and support. Select from the available versions:

| Version | Release | Description |
|---------|---------|-------------|
| **v3 (Recommended)** | Feb 2026 | Best balance of accuracy and helpfulness. Indicates confidence levels, attributes sources, and asks clarifying questions before guessing. |
| v2 | Aug 2025 | Strict accuracy. Only responds when documentation clearly covers the question. Won't extrapolate from similar content. |
| v1 | Oct 2024 | Flexible responses. Extrapolates from available information and attempts answers even with limited context. Higher hallucination risk. |

You can extend any AI Assistant version by adding specific instructions, such as:
- Adding a signature to every response
- Including specific phrases in responses
- Modifying the tone or style

## Custom prompt

Define your own prompt for complete control over the chatbot's behavior.

:::warning
Custom prompts may disable some of the platform's built-in safeguards and advanced processing features.
:::

## Configure the prompt

:::important
Only users with the **Administrator** or **Maintainer** role can manage projects. For more details, see [Manage roles](../administration/roles.md).
:::

1. Log in to your Biel.ai account and navigate to your dashboard.
2. Select your project from the list of available projects.
3. Click **Settings**.
4. Under **LLM settings > Define prompt**:
   - Select an **AI Assistant** version and optionally add extensions, or
   - Select **Custom prompt** and define your complete prompt

5. Click **Save** to apply the changes.

### Examples

Extending an AI Assistant prompt:

```
Always start responses with "Hi!"
```

Custom prompt:

```
You are a customer support assistant for [Product Name]. Provide clear, accurate answers related to product features, troubleshooting, and usage. Keep responses professional and focused on the product. Only respond based on the information you can extract from CONTEXT and the conversation HISTORY.
```
