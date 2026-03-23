---
sidebar_label: Zapier
description: Use Biel.ai as a RAG source in Zapier for intelligent document retrieval and AI-powered automation.
sidebar_position: 5
---

# Zapier integration for RAG workflows

Connect Biel.ai to Zapier to query your indexed documentation from any Zap. Use it to build support chatbots, Slack bots, email automation, or any workflow that needs answers from your docs.

:::info
This integration requires a **Business** or **Enterprise** plan for API access.
:::

## Prerequisites

- A [Biel.ai account](https://app.biel.ai) with documentation indexed.
- A Business or Enterprise plan.
- A Zapier account.
- Your **project slug** from the Biel.ai dashboard.
- An **API key** from your team settings.

## Setup

### 1. Create a new Zap

Create a new Zap with the following steps:

1. **Trigger** (e.g., New Email, Slack Message, Form Submission)
2. **Webhooks by Zapier** action to query Biel.ai
3. **Action** to return or send results (e.g., Send Email, Post to Slack)

### 2. Configure the Webhooks action

Add a **Webhooks by Zapier > POST** action with these settings:

**URL:** `https://app.biel.ai/api/v1/chats/`

**Payload Type:** `json`

**Data:**

| Key | Value |
|-----|-------|
| `message` | `Question from step 1` |
| `project_slug` | `YOUR_PROJECT_SLUG` |

Replace `Question from step 1` with the field from your trigger that contains the user's question. Replace `YOUR_PROJECT_SLUG` with your project slug from the Biel.ai dashboard.

**Headers:**

| Key | Value |
|-----|-------|
| `Content-Type` | `application/json` |
| `Authorization` | `Api-Key YOUR_API_KEY` |

Replace `YOUR_API_KEY` with your API key from your Biel.ai team settings.

For the full API reference, see [Biel.ai REST API](/api/biel-ai-api).

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

Use the returned data in subsequent steps:
- `Ai Message Message` - The AI-generated answer
- `Ai Message Sources` - Array of source documents with citations
- `Chat Uuid` - Conversation ID for multi-turn chats

### 4. Continue the conversation (optional)

To maintain context in multi-turn conversations, store the `chat_uuid` using **Storage by Zapier** and include it in subsequent requests:

**Data:**

| Key | Value |
|-----|-------|
| `message` | `Question from step 1` |
| `project_slug` | `YOUR_PROJECT_SLUG` |
| `chat_uuid` | `Chat Uuid from step 2` |


