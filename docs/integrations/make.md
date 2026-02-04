---
sidebar_label: Make
description: Use Biel.ai as a RAG source in Make (formerly Integromat) for intelligent document retrieval and AI-powered automation.
sidebar_position: 4
---

# Make integration for RAG workflows

Connect Biel.ai to your Make scenarios to add intelligent document retrieval and question-answering capabilities. Use your indexed documentation as a knowledge base for chatbots, support automation, and custom AI workflows.

This integration enables Retrieval-Augmented Generation (RAG) in Make, allowing your automations to search and cite your documentation when answering questions or processing requests.

## What you can build

Common use cases for Biel.ai in Make scenarios:

- **Support chatbots**: Answer customer questions using your documentation
- **Slack/Teams bots**: Provide instant answers from your knowledge base
- **Email automation**: Generate responses with context from your docs
- **Internal tools**: Build custom AI assistants for your team
- **Content generation**: Pull relevant documentation for blog posts or guides
- **API documentation bots**: Help developers find API information quickly

:::info API Access Required
This integration requires API access, which is available on **Business** and **Enterprise** plans. [Upgrade your plan](https://app.biel.ai) to get started.
:::

## Prerequisites

Before starting, ensure you have:

- **Biel.ai account** with documentation indexed ([create account](https://app.biel.ai))
- **Business or Enterprise plan** for API access
- **Make account** (free or paid)
- **Project slug** from your Biel.ai dashboard
- **API key** from your team settings

## Setup: Get AI-powered answers

This scenario uses Biel.ai's chat endpoint to get AI-generated answers with citations from your documentation.

### 1. Create a new scenario

In Make, create a new scenario and add the following modules:

1. **Trigger module** (e.g., Webhook, Custom webhook, Slack)
2. **HTTP module** to query Biel.ai
3. **Response module** to return results

### 2. Configure the HTTP module

Add an **HTTP > Make a request** module with these settings:

**URL:** `https://docs.biel.ai/api/v1/chats/`

**Method:** `POST`

**Headers:**

| Key | Value |
|-----|-------|
| `Content-Type` | `application/json` |
| `Authorization` | `Api-Key YOUR_API_KEY` |

Replace `YOUR_API_KEY` with your API key from your Biel.ai team settings.

**Body:**
```json
{
  "message": "{{1.question}}",
  "project_slug": "YOUR_PROJECT_SLUG"
}
```

Replace `{{1.question}}` with the appropriate variable from your trigger module. Replace `YOUR_PROJECT_SLUG` with your project slug from the Biel.ai dashboard.

For complete API documentation, see [Biel.ai REST API](/api/biel-ai-rest-api-beta).

### 3. Process the response

The chat API returns a structured response:

```json
{
  "user_message_id": "message-id",
  "ai_message": {
    "from": "ai",
    "message": "AI-generated answer based on your documentation...",
    "messageId": "ai-message-id",
    "isPartial": false,
    "timestamp": "2024-01-01T00:00:00Z",
    "sources": [
      {
        "title": "Source page title",
        "url": "https://docs.example.com/source"
      }
    ]
  },
  "chat_uuid": "unique-conversation-id"
}
```

Use the returned data in subsequent modules:
- `{{2.ai_message.message}}` - The AI-generated answer
- `{{2.ai_message.sources}}` - Array of source documents with citations
- `{{2.chat_uuid}}` - Conversation ID for multi-turn chats

### 4. Continue the conversation (optional)

To maintain context in multi-turn conversations, include the `chat_uuid` in your request body:

```json
{
  "message": "{{1.question}}",
  "project_slug": "YOUR_PROJECT_SLUG",
  "chat_uuid": "{{2.chat_uuid}}"
}
```

Need help? [Contact us](https://biel.ai/contact) to discuss your scenario.

