---
sidebar_label: n8n
description: Use Biel.ai as a RAG source in n8n workflows for intelligent document retrieval and AI-powered automation.
sidebar_position: 3
---

# n8n integration for RAG workflows

Connect Biel.ai to n8n to query your indexed documentation from any workflow. Use it to build support chatbots, Slack bots, email automation, or any workflow that needs answers from your docs.

:::info
This integration requires a **Business** or **Enterprise** plan for API access.
:::

## Prerequisites

- A [Biel.ai account](https://app.biel.ai) with documentation indexed.
- A Business or Enterprise plan.
- An n8n instance (cloud or self-hosted).
- Your **project slug** from the Biel.ai dashboard.
- An **API key** from your team settings.

## Setup

### 1. Create a new workflow

Create a new workflow with the following nodes:

1. **Trigger node** (e.g., Webhook, Manual, Slack)
2. **HTTP Request node** to query Biel.ai
3. **Output node** to return results

### 2. Configure the HTTP Request node

Add an **HTTP Request** node with these settings:

**Method:** `POST`

**URL:** `https://app.biel.ai/api/v1/chats/`

**Headers:**
```json
{
  "Content-Type": "application/json",
  "Authorization": "Api-Key YOUR_API_KEY"
}
```

Replace `YOUR_API_KEY` with your API key from your Biel.ai team settings.

**Body (JSON):**
```json
{
  "message": "={{ $json.question }}",
  "project_slug": "YOUR_PROJECT_SLUG"
}
```

Replace `YOUR_PROJECT_SLUG` with your project slug from the Biel.ai dashboard.

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

### 4. Continue the conversation (optional)

To maintain context in multi-turn conversations, include the `chat_uuid`:

```json
{
  "message": "={{ $json.question }}",
  "project_slug": "YOUR_PROJECT_SLUG",
  "chat_uuid": "={{ $json.previousChatId }}"
}
```


