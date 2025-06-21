---
sidebar_label: MCP server
description: Connect AI tools like Cursor, VS Code, and Claude Desktop to your product documentation using Biel.ai's MCP server.
sidebar_position: 1
---

# MCP server integration

Connect AI development tools like Cursor, VS Code, and Claude Desktop to your product documentation through Biel.ai's Model Context Protocol (MCP) server. 

Biel.ai provides a hosted Retrieval-Augmented Generation (RAG) layer that makes your documentation searchable and useful to AI tools. This enables smarter completions, accurate technical answers, and context-aware suggestions—directly in your IDE or chat environment.

![Biel MCP](./images/biel-mcp.png)

The MCP server acts as a bridge between your AI coding assistant and your Biel.ai project, allowing the AI to query your documentation whenever it needs context about your product or API.

## Prerequisites

Before starting, ensure you have:
- A **Biel.ai account**. If you don't have one, [sign up for free](https://app.biel.ai/accounts/signup/).
- **A project created in your Biel.ai dashboard**. Follow the [Quickstart guide](../quickstart.md) to create one.
- **Your project slug** - this is visible in your project URL or dashboard.
- An AI tool that supports MCP (Cursor IDE, Claude Desktop, or VS Code with MCP extension).
- **API key** (optional) - only required for private projects. Business/Enterprise plans only.

## Quickstart

The fastest way to get started is using our hosted MCP server. No setup or maintenance required.

Use this MCP server configuration with your AI tool:

```json
{
  "mcpServers": {
    "biel-ai": {
      "description": "Query your product's documentation, APIs, and knowledge base.",
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.biel.ai/sse?project_slug=YOUR_PROJECT_SLUG&domain=https://your-docs-domain.com"
      ]
    }
  }
}
```

Set the following parameters:

- `project_slug:` Your Biel.ai project slug from your dashboard.
- `domain`: Your documentation domain.
- `api_key`: Optopnal, API key (only needed for private projects)

## Tool-specific setup

### Cursor IDE

1. Open Cursor Settings: `Ctrl+Shift+J` (Windows/Linux) or `Cmd+Shift+J` (Mac).
2. Go to **MCP** → **Add new global MCP Server**
3. Paste the configuration from Step 1
4. Save and restart Cursor.

### Claude desktop

1. Open your configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the configuration from Step 1.
3. Save and restart Claude Desktop.

### VS Code

1. Install the MCP extension for VS Code.
2. Open VS Code settings → MCP configuration.
3. Add the configuration from Step 1.

## Advanced: Self-hosted

For advanced users who prefer to run their own MCP server instance, see the [README](https://github.com/techdocsStudio/biel-mcp) for self-hosting instructions.

## Using the Integration

Once configured, the MCP server will monitor your AI assistant's messages and automatically route relevant queries to Biel.ai.

### Query triggers

By default, the server routes queries to Biel.ai when:
- The message **includes the keyword `biel_ai`**
- Or when you've defined custom rules that match the message

You can customize these triggers in your MCP configuration.

### Example queries

Here are some ways to interact with your documentation through the AI tools:

#### API Documentation
```
Can you check in biel_ai what the authentication headers are for the /users endpoint?
```

#### Framework Usage
```
Could you ask biel_ai how we handle API errors in React?
```

#### Deployment guides
```
biel_ai, what's our staging deployment checklist?
```

#### Troubleshooting
```
I'm getting a 403 error from the login API — can biel_ai explain why that might happen?
```

#### Setup instructions
```
Can you check with biel_ai how to install our plugin in Docusaurus?
```

#### Team processes
```
Ask biel_ai what new developers need to install before running the app locally.
```

## Configuration options

The MCP server supports several configuration parameters:

- **`project_slug`** (required): Your Biel.ai project identifier
- **`api_key`** (optional): For authentication with private projects
- **`base_url`** (optional): Defaults to `https://app.biel.ai`
- **`domain`** (optional): Your documentation domain for additional context
- **`chat_uuid`** (optional): To continue previous conversations

## Troubleshooting

### Connection issues

If your AI tool can't connect to the MCP server:

1. **Verify project slug:** Make sure it matches your Biel.ai project.
2. **Network connectivity:** Ensure your firewall allows connections to `mcp.biel.ai`
3. **Check project privacy:** For private projects, ensure you have an API key

### No responses

If the AI tool isn't querying Biel.ai:

1. **Include trigger keywords:** Make sure to use `biel_ai` in your messages.
2. **Check project status:** Verify your Biel.ai project has indexed content.
3. **Review logs:** Check your AI tool's logs for MCP-related errors.

### API Key issues

**API keys are only required for private projects** and are only available on **Business and Enterprise plans**.

If you are getting authentication errors:
1. **Check if your project is private:** Public projects don't need API keys.
2. **Upgrade your plan:** API keys require Business or Enterprise plan.
3. **Regenerate API key:** Create a new API key in your team settings if needed.

## Security considerations

- **API keys are passed per request** and never stored on the MCP server.
- **Restrict API key permissions** to only the necessary Biel.ai projects.
- **Use HTTPS** for all communications (enabled by default with hosted service).

## Next steps

Once you have the MCP integration working:

1. **Explore advanced queries:** Try asking complex questions about your documentation
2. **Customize trigger rules:** Set up custom keywords or patterns for automatic routing.
3. **Monitor usage:** Check your Biel.ai analytics to see how the integration is being used.
4. **Train your team:** Share example queries and best practices with your development team.

For additional configuration options and advanced usage, check out our [API documentation](/api/biel-ai-rest-api-beta).

Need assistance? [Contact us](https://biel.ai/contact) to discuss your specific use case. 