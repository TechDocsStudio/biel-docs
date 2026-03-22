# Documentation Style Guide

## Voice and tone

- Be direct and task-focused. No marketing language, no filler ("Ready to get started?", "Congratulations!").
- Use present tense and active voice. Write "Biel.ai begins crawling" not "Biel.ai will begin crawling".
- Address the reader as "you". Refer to the product as "Biel.ai".

## Structure

- **Start with context**: Landing pages and tutorials should open with one factual sentence about what the product (or feature) does — not a value proposition.
- **Explain before you instruct**: Add a one-sentence explanation of a concept before asking the reader to create or configure it (e.g., "A project groups your content sources and powers the chatbot.").
- **Connect sections**: Use bridge sentences between tutorial steps so the page reads as a continuous flow, not isolated procedures (e.g., "Now that your content is indexed, verify that the chatbot returns accurate answers.").
- **Self-contained sections**: Don't abstract shared setup steps into a separate section. If two sections use the same snippet (e.g., a `<head>` import or `npm install`), duplicate it in both. Readers may land on one section directly via anchor link.
- **End with actionable next steps**: List all relevant paths forward with a one-line description and a direct link. Frame it as a decision ("Choose how you want to surface it to users:").

## Formatting

- **Tables over nested bullet lists** when comparing items (source types, feature options, plan differences).
- **Tip/warning admonitions get descriptive titles** (e.g., `:::tip[Not getting good answers?]` not just `:::tip`).
- **Meta descriptions**: One sentence, under 160 characters.
- **Headings**: Use numbered headings (`## 1. Create your account`) only in sequential tutorials. Use plain headings elsewhere.

## What to cut

- Redundant lead-in sentences ("Follow these steps to create a project:" before a heading that says "Create a project").
- Overly polite language ("Please allow a few minutes").
- Celebration copy ("Congratulations! You've successfully...").
- Vague filler ("providing the necessary details", "complete your account setup").
- Hand-holding terminal instructions ("Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command").
- "With your terminal still open" and similar continuity filler.

## Grammar

- Use the Oxford comma (email, password, and company name).
- Clarify ambiguous UI references — if the user clicks two buttons, say "Click **Create**, then click **Done**" not "Click **Create** and **Done!**".

## SEO

- **H1 titles are locked for SEO**. Installation page H1s (e.g., "Ask AI chatbot widget for Docusaurus") are optimized for search rankings — do not change them. Use `sidebar_label` for clean sidebar navigation.
- **Intro surfaces all products**. Since the H1 may only mention one product (chatbot), the intro sentence must mention both the AI chatbot and search widget with links to their product pages. This is where readers and crawlers discover the full offering.
- **Link product names to product pages** in page intros. Link "AI chatbot" to `https://biel.ai` and "search widget" to `https://biel.ai/ai-search-for-docs`.
- **Don't add sections that weren't in the original**. Only edit existing content — don't invent new sections (e.g., adding a search widget section to a page that only covered the chatbot). New content requires explicit request.
- **Meta descriptions** should mention both chatbot and search (e.g., "Add an AI chatbot or AI search widget to your Docusaurus v3 site with Biel.ai.").
