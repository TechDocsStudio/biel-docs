---
sidebar_label: Make
description: Use Biel.ai as a RAG source in Make (formerly Integromat) for intelligent document retrieval and AI-powered automation.
sidebar_position: 4
---

# Make integration for RAG workflows

Connect Biel.ai to Make (formerly Integromat) to query your indexed documentation from any scenario. Use it to build support chatbots, Slack bots, email automation, or any workflow that needs answers from your docs.

:::info
This integration requires a **Business** or **Enterprise** plan for API access.
:::

## Prerequisites

- A [Biel.ai account](https://app.biel.ai) with documentation indexed.
- A Business or Enterprise plan.
- A Make account.
- Your **project slug** from the Biel.ai dashboard.
- An **API key** from your team settings.

## Setup

### 1. Create a new scenario

Create a new scenario with the following modules:

1. **Trigger module** (e.g., Webhook, Custom webhook, Slack)
2. **HTTP module** to query Biel.ai
3. **Response module** to return results

### 2. Configure the HTTP module

Add an **HTTP > Make a request** module with these settings:

**URL:** `https://app.biel.ai/api/v1/chats/`

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

For the full API reference, see [Biel.ai REST API](/api).

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


