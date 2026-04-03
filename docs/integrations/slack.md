---
sidebar_label: Slack
description: Connect your Biel.ai project to Slack so users can ask questions and get AI-powered answers directly from any Slack channel or DM.
sidebar_position: 4
---

# Slack integration

Connect your Biel.ai project to Slack and let users interact with your documentation bot directly from any channel or direct message. The bot answers questions using your indexed documentation, with full source citations.

## What you can do

- **Answer questions in channels** — users mention `@Biel.ai` and get an instant answer
- **Direct message support** — users chat with the bot privately without leaving Slack
- **Cited sources** — every answer includes links to the relevant documentation pages
- **Per-project routing** — each Slack workspace connects to a specific Biel.ai project

## Prerequisites

Before starting, ensure you have:

- A **Biel.ai account** with at least one project and indexed documentation
- A **Slack workspace** where you have permission to install apps
- Admin access to your Biel.ai dashboard

## Setup

### 1. Connect your Slack workspace

1. In the Biel.ai dashboard, open the project you want to connect
2. Go to **Settings** → scroll down to the **Integrations** section
3. Click **Add to Slack**
4. You will be redirected to Slack's authorization screen — review the permissions and click **Allow**
5. Once authorized, Slack redirects back to Biel.ai and the workspace is connected

### 2. Invite the bot to a channel

After connecting, invite the bot to any channel where you want it to respond:

```
/invite @Biel.ai
```

For direct messages, users can find the bot by searching its name in the Slack search bar.

### 3. Start asking questions

**In a channel** — mention the bot followed by your question:

```
@Biel.ai how do I authenticate with the API?
```

**In a direct message** — just send your message directly, no mention needed:

```
What are the system requirements?
```

The bot will respond with an AI-generated answer and a list of source links from your documentation.

## Supported event types

| Event | Description |
|-------|-------------|
| `app_mention` | User mentions `@Biel.ai` in a channel |
| `message.im` | User sends a direct message to the bot |

## Troubleshooting

**The bot does not respond to mentions**

Make sure the bot has been invited to the channel with `/invite @Biel.ai`. The bot can only see messages in channels it has been added to.

---

Need help? [Contact us](https://biel.ai/contact) or visit the [support page](/support).
