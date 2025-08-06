---
sidebar_position: 2
---

# Production checklist

Use this checklist to confirm that essential security measures are configured for optimal protection on the Biel.ai chatbot before going to production. Each item provides straightforward actions to help you secure data, control access, and maintain compliance.

## For widget integrations

:::info Widget Integrations Only
The following steps apply only to implementations using the **chatbot widget**.
:::

- [ ] **Restrict allowed domains**: List only the domains authorized to host your chatbot widget in  **Projects** > **Settings** > **Allowed domains**. This restricts embedding to approved sites, helping prevent unauthorized access.

- [ ] **Enable two-factor authentication (2FA)**: Navigate to **My Account** > **Profile** and enable 2FA for all accounts with access to the dashboard to enhance access security.

- [ ] **Configure data privacy (optional)**: Choose whether to display a terms and conditions modal before starting a conversation or to remove Personally Identifiable Information (PII) from chat conversations. For more information, see [Data privacy](../customization/data-privacy.mdx).

- [ ] **Use limited permissions for client-side API keys**: If using private projects with the widget, only expose API keys with read-only permissions (e.g., `project_read`, `project_search`, `create_chat`) in client-side code.

- [ ] **Secure high-privilege API keys server-side**: Store API keys with creation, modification, or deletion permissions (such as `sources_create`, `sources_delete`) in environment variables or secure configuration files on your server. Never expose these in client-side code.

## For API integrations

:::info API Integrations Only
The following steps apply only to direct integrations using the **Business or Enterprise API**. These steps are not necessary for widget-based implementations.
:::

- [ ] **Enable bearer authentication**: Ensure each API client request includes a bearer token in the header as follows: `Authorization: Api-Key <token>`.

- [ ] **Set up regular API keys rotation**: Establish a schedule for rotating API keys periodically to enhance security.

- [ ] **Verify token security**: Confirm that tokens are not publicly accessible (e.g., in repositories) and are shared only with authorized team members.

- [ ] **Use secure API key storage**: Store API keys in environment variables, encrypted configuration files, or dedicated secrets management systems (e.g., AWS Secrets Manager, Azure Key Vault, HashiCorp Vault). Never hardcode keys in your application code or commit them to version control.

- [ ] **Deactivate unused tokens**: Immediately disable any tokens that are no longer in use to prevent unauthorized access.

Completing this checklist ensures that your Biel.ai chatbot environment is secure, protecting data integrity and meeting compliance standards.
