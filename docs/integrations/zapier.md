---
sidebar_label: Zapier
description: Use Biel.ai as a RAG source in Zapier for intelligent document retrieval and AI-powered automation.
sidebar_position: 5
---

# Zapier integration for RAG workflows

Connect Biel.ai to your Zapier Zaps to add intelligent document retrieval and question-answering capabilities. Use your indexed documentation as a knowledge base for chatbots, support automation, and custom AI workflows.

This integration enables Retrieval-Augmented Generation (RAG) in Zapier, allowing your automations to search and cite your documentation when answering questions or processing requests.

## What you can build

Common use cases for Biel.ai in Zapier Zaps:

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
- **Zapier account** (free or paid)
- **Project slug** from your Biel.ai dashboard
- **API key** from your team settings

## Setup: Get AI-powered answers

This Zap uses Biel.ai's chat endpoint to get AI-generated answers with citations from your documentation.

### 1. Create a new Zap

In Zapier, create a new Zap and add the following steps:

1. **Trigger** (e.g., New Email, Slack Message, Form Submission)
2. **Webhooks by Zapier** action to query Biel.ai
3. **Action** to return or send results (e.g., Send Email, Post to Slack)

### 2. Configure the Webhooks action

Add a **Webhooks by Zapier > POST** action with these settings:

**URL:** `https://docs.biel.ai/api/v1/chats/`

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

:::tip Using Code by Zapier
For more complex message structures, use **Code by Zapier** to format the JSON properly before sending to the Webhooks action.
:::

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

Need help? [Contact us](https://biel.ai/contact) to discuss your Zap.

