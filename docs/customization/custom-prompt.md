---
sidebar_position: 7
---

# Custom prompt


A prompt is the instruction or set of instructions given to the chatbot that guides how it processes and responds to user input.

Biel.ai provides two options for configuring your chatbot's behavior:

## Option 1: AI assistant (Default)
This is the default prompt that comes pre-configured with built-in restrictions and optimizations specifically designed for technical documentation and support interactions. It includes:

- Built-in safeguards for accurate responses
- Optimized processing for technical content
- Advanced features for documentation handling

You can extend the default AI Assistant behavior by adding specific instructions. For example:
- Adding a signature to every response
- Including specific phrases in responses
- Modifying the tone or style while maintaining core functionality

## Option 2: Custom prompt
For complete control over the chatbot's behavior, you can define your own custom prompt. This option allows you to:

- Define the exact personality and behavior
- Set specific response patterns
- Customize the interaction style
- Target specific use cases

:::warning  
Defining your own custom prompt gives you full control over the chatbot's behavior, but it may disable some of the platform's built-in safeguards and advanced processing features.
:::

### Configure the prompt  

:::important  
Only users with the **Administrator** or **Maintainer** role can manage projects. For more details, see [Manage roles](../administration/roles.md).  
:::  

Follow these steps to configure your prompt:

1. Log in to your Biel.ai account and navigate to your dashboard.
2. Select your project from the list of available projects.
3. Click **Settings**.
4. Under the **LLM settings > Define prompt** section:

   - For AI Assistant: Select **AI Assistant** and optionally add your extensions to the default behavior
   - For Custom Prompt: Select **Custom prompt** and define your complete prompt

5. Example of extending the AI Assistant prompt:
    ```
    Always start responses with "Hi!"
    ```

6. Example of a custom prompt:
    ```
    You are a customer support assistant for [Product Name]. Provide clear, accurate answers related to product features, troubleshooting, and usage. Keep responses professional and focused on the product. Only respond based on the information you can extract from CONTEXT and the conversation HISTORY.
    ```

7. Click **Save** to apply the changes.
