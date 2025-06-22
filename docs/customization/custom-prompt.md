---
sidebar_position: 7
---

# Custom prompt

A prompt is the instruction or set of instructions given to the chatbot that guides how it processes and responds to user input.

Biel.ai provides three options for configuring your chatbot's behavior:

## Option 1: AI Assistant v2 (Recommended)
This is the recommended prompt that comes pre-configured with built-in restrictions and optimizations specifically designed for technical documentation and support interactions. It includes:

- **More restrictive to context**: Only responds based on available context and documentation
- **Reduced hallucinations**: Won't answer unless there's a high degree of certainty
- **Enhanced accuracy**: Built-in safeguards for precise responses
- **Optimized processing**: Advanced features for documentation handling

**Trade-off**: The assistant won't provide responses when it doesn't have sufficient information, even if it could potentially extrapolate from similar content.

**Example**: If you don't have installation docs for a specific framework but have docs for other frameworks, AI Assistant v2 won't provide a response rather than attempt to extrapolate.

## Option 2: AI Assistant v1
This option provides more freedom in responses while maintaining core safeguards. It includes:

- **More flexible responses**: Extrapolates from available information and uses existing knowledge
- **Broader coverage**: Attempts to provide helpful responses even with limited context
- **Creative problem-solving**: Can make educated guesses based on similar scenarios

**Trade-off**: Higher potential for hallucinations and less accurate responses when information is incomplete.

**Example**: If you don't have installation docs for a specific framework but have docs for other frameworks, AI Assistant v1 will try to extrapolate and provide installation guidance based on similar patterns.

:::tip When to use each version
- **Use AI Assistant v2** when accuracy is critical and you prefer no response over potentially incorrect information
- **Use AI Assistant v1** when broader coverage is preferred and occasional inaccuracies are acceptable
:::

You can extend either AI Assistant version by adding specific instructions. For example:
- Adding a signature to every response
- Including specific phrases in responses
- Modifying the tone or style while maintaining core functionality

## Option 3: Custom prompt
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

   - For AI Assistant v2: Select **AI Assistant v2** and optionally add your extensions to the default behavior
   - For AI Assistant v1: Select **AI Assistant v1** and optionally add your extensions to the default behavior  
   - For Custom Prompt: Select **Custom prompt** and define your complete prompt

5. Example of extending an AI Assistant prompt:
    ```
    Always start responses with "Hi!"
    ```

6. Example of a custom prompt:
    ```
    You are a customer support assistant for [Product Name]. Provide clear, accurate answers related to product features, troubleshooting, and usage. Keep responses professional and focused on the product. Only respond based on the information you can extract from CONTEXT and the conversation HISTORY.
    ```

7. Click **Save** to apply the changes.
