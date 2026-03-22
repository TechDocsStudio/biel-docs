---
sidebar_position: 1
sidebar_label: Overview
description: Security features, architecture, and compliance in Biel.ai.
---

# Security overview

Biel.ai is designed to meet enterprise security requirements for data protection, compliance, and transparency.

## Configurable security features

| Feature | Description |
|---------|-------------|
| **Role-based access (RBAC)** | Restricts dashboard access to authorized users with segmented permissions. |
| **Domain restrictions** | Limits which domains can embed the chatbot widget. |
| **Rate limiting** | Per-session and per-IP limits to prevent spam and abuse. |
| **PII removal** | Automatically detects and redacts names, emails, and phone numbers from conversations. |
| **Bearer authentication** | Enforces API key authentication for all API requests. |
| **Granular API permissions** | Scope each API key to specific permissions (`project_read`, `project_search`, `create_chat`, `sources_create`). |

## Security architecture

| Layer | Protection |
|-------|-----------|
| **Network** | Firewalls, DDoS mitigation, continuous monitoring, and real-time alerts. |
| **Data encryption** | Encrypted in transit and at rest. Automated backups for recovery. |
| **Audit logs** | Detailed logs of security-sensitive operations for accountability. |
| **Account isolation** | Customer data is strictly separated between accounts. |
| **Model training opt-out** | Customer data is never shared with third-party model training (OpenAI, Anthropic). |
| **GDPR compliance** | User data handled in line with European data protection regulations. |

See the [Privacy Policy](https://biel.ai/privacy) for details on data handling.  
