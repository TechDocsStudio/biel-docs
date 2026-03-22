---
sidebar_position: 2
description: Security checklist for deploying your Biel.ai chatbot to production.
---

# Production checklist

Review these security measures before deploying your Biel.ai chatbot to production.

## Widget integrations

- [ ] **Restrict allowed domains** — List authorized domains in **Settings** > **Allowed domains** to prevent unauthorized embedding.
- [ ] **Enable 2FA** — Enable two-factor authentication in **My Account** > **Profile** for all dashboard users.
- [ ] **Configure data privacy** — Enable PII removal or Terms & Conditions as needed. See [Data privacy](../customization/data-privacy.mdx).
- [ ] **Limit client-side API key permissions** — Only expose keys with read-only permissions (`project_read`, `project_search`, `create_chat`) in client-side code.
- [ ] **Secure high-privilege keys server-side** — Store keys with write permissions (`sources_create`, `sources_delete`) in environment variables or a secrets manager. Never expose in client-side code.

## API integrations

- [ ] **Use bearer authentication** — Include `Authorization: Api-Key <token>` in every API request.
- [ ] **Rotate API keys regularly** — Establish a rotation schedule for all active keys.
- [ ] **Store keys securely** — Use environment variables, encrypted config, or a secrets manager (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault). Never hardcode or commit keys to version control.
- [ ] **Verify token access** — Confirm tokens are not in public repositories and are shared only with authorized team members.
- [ ] **Deactivate unused tokens** — Disable tokens that are no longer in use.
