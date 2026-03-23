---
sidebar_label: WebSocket API
sidebar_position: 8
description: Real-time chat via WebSocket for streaming AI responses.
---

# WebSocket API

The WebSocket API enables real-time, streaming chat with your Biel.ai project. Use it when you need token-by-token AI responses instead of waiting for the full response via the [REST API](/api/biel-ai-api).

**Endpoint:** `wss://app.biel.ai/ws/messages/{projectId}`

To continue an existing chat: `wss://app.biel.ai/ws/messages/chat/{chatId}`

## Connect

Open a WebSocket connection to:

```
wss://app.biel.ai/ws/messages/{projectId}
```

Replace `{projectId}` with your project slug (e.g., `jfvzioa17q`).

## Send a message

Send a JSON message to the WebSocket:

```json
{
  "projectId": "your-project-slug",
  "from": "user",
  "message": "How do I authenticate?",
  "url": "https://docs.example.com/auth",
  "email": "user@example.com"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `projectId` | string | Yes | Project slug. |
| `from` | string | Yes | Always `"user"`. |
| `message` | string | Yes | The user's message (max 1000 characters, Markdown supported). |
| `chatId` | string | No | Chat session UUID. Omit for the first message — included in the AI response. |
| `url` | string | No | Page URL where the chat is happening. Used for domain validation. |
| `email` | string | No | Email or ID for conversation tracking. |
| `apiKey` | string | No | API key with `chat_create` permission. Required for private projects. |
| `thinkMode` | boolean | No | Enable reasoning mode for deeper analysis. |
| `metadata` | string | No | Tag to identify the conversation source. |

## Receive a response

The server sends JSON messages back. Partial messages stream token-by-token; the final message includes sources.

```json
{
  "projectId": "your-project-slug",
  "chatId": "550e8400-e29b-41d4-a716-446655440000",
  "from": "ai",
  "messageId": "msg-uuid",
  "message": "To authenticate, use the...",
  "timestamp": "2026-01-15T10:30:00Z",
  "isPartial": false,
  "sources": [
    {
      "title": "Authentication guide",
      "url": "https://docs.example.com/auth"
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `projectId` | string | Project slug. |
| `chatId` | string | Chat session UUID. Use this in subsequent messages to continue the conversation. |
| `from` | string | Always `"ai"`. |
| `messageId` | string | Message UUID. |
| `message` | string | AI response content (Markdown). |
| `timestamp` | string | ISO 8601 timestamp. |
| `isPartial` | boolean | `true` for streaming tokens, `false` for the final message. |
| `sources` | array | Source references (only in final message). Each has `title` and `url`. |
| `incomplete` | boolean | `true` if the response was cut short due to token limits. Only in the final message. |

## Authentication

The WebSocket API uses the same authentication model as the [REST API](/api/biel-ai-api):

- **Public projects** — No API key required. Domain restrictions still apply.
- **Private projects** — Include `apiKey` in the first message payload with `chat_create` permission.

Domain validation is checked on every message using the `url` field. If your project has allowed domains configured, the `url` must match one of them.

## Rate limiting

| Limit | Threshold | Penalty |
|-------|-----------|---------|
| Per chat session | 15 messages/minute | Rejected until window resets |
| Per IP address | 100 messages/minute | IP blocked for 1 hour |
| Burst detection | 10 messages in 3 seconds | Rejected for 1 minute |
