---
sidebar_label: n8n
description: Use Biel.ai as a RAG source in n8n workflows for intelligent document retrieval and AI-powered automation.
sidebar_position: 3
---

# n8n integration for RAG workflows

Connect Biel.ai to your n8n workflows to add intelligent document retrieval and question-answering capabilities. Use your indexed documentation as a knowledge base for chatbots, support automation, Slack bots, and custom AI workflows.

This integration enables Retrieval-Augmented Generation (RAG) in n8n, allowing your automations to search and cite your documentation when answering questions or processing requests.

## What you can build

Common use cases for Biel.ai in n8n workflows:

- **Support chatbots**: Answer customer questions using your documentation
- **Slack/Discord bots**: Provide instant answers from your knowledge base
- **Email automation**: Generate responses with context from your docs
- **Internal tools**: Build custom AI assistants for your team
- **Content generation**: Pull relevant documentation for blog posts or guides
- **API documentation bots**: Help developers find API information quickly

:::info API Access Required
This integration requires API access, which is available on **Professional**, **Business**, and **Enterprise** plans. [Upgrade your plan](https://app.biel.ai) to get started.
:::

## Prerequisites

Before starting, ensure you have:

- **Biel.ai account** with documentation indexed ([create account](https://app.biel.ai))
- **Professional, Business, or Enterprise plan** for API access
- **n8n instance** (cloud or self-hosted)
- **Project ID** from your Biel.ai dashboard
- **API key** from your team settings

## Setup: Get AI-powered answers

This workflow uses Biel.ai's chat endpoint to get AI-generated answers with citations from your documentation.

### 1. Create a new workflow

In n8n, create a new workflow and add the following nodes:

1. **Trigger node** (e.g., Webhook, Manual, Slack)
2. **HTTP Request node** to query Biel.ai
3. **Output node** to return results

### 2. Configure the HTTP Request node

Add an **HTTP Request** node with these settings:

**Method:** `POST`

**URL:** `https://app.biel.ai/api/v1/projects/YOUR_PROJECT_ID/chat/`

Replace `YOUR_PROJECT_ID` with your project ID from the Biel.ai dashboard.

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
  "messages": [
    {
      "role": "user",
      "content": "={{ $json.question }}"
    }
  ]
}
```

For complete API documentation, see [Biel.ai REST API](/api/biel-ai-rest-api-beta).

### 3. Process the response

The chat API returns a structured response:

```json
{
  "answer": "AI-generated answer based on your documentation...",
  "sources": [
    {
      "title": "Source page title",
      "url": "https://docs.example.com/source",
      "content": "Relevant excerpt..."
    }
  ],
  "chat_uuid": "unique-conversation-id"
}
```

### 4. Continue the conversation (optional)

To maintain context in multi-turn conversations, include the `chat_uuid`:

```json
{
  "messages": [
    {
      "role": "user",
      "content": "={{ $json.question }}"
    }
  ],
  "chat_uuid": "={{ $json.previousChatId }}"
}
```

Need help? [Contact us](https://biel.ai/contact) to discuss your workflow.

