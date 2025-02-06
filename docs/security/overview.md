---
sidebar_position: 1
---

# Overview

At Biel.ai, security is integral to our chatbot-as-a-service platform, designed to meet enterprise requirements with robust features that ensure data protection and compliance. 

This document outlines our security approach, clarifying how we protect data and adhere to industry standards. 

## Security framework

Our security framework focuses on:

1. **Protect sensitive data**: Through encryption, anonymization, and access restrictions.
2. **Control access**: Enforcing strong authentication, authorization, and rate-limiting measures.
3. **Ensure compliance**: Aligning with standards such as GDPR to meet privacy and data protection needs.

The following measures reflect our commitment to security as a core principle.

## Key security features

We provide configurable features to enhance data protection and ensure reliable chatbot functionality:

1. **Domain restrictions**: Each project has a Project ID for embedding the chatbot widget on authorized domains. Users can configure allowed domains to prevent unauthorized embedding, ensuring secure usage.

2. **Rate limiting**: To prevent abuse, we enforce rate limits per user session and IP address, controlling interactions and mitigating spam and potential attacks.

4. **Personal identifiable information (PII)**: Each project can define if they want to automatically detect and remove sensitive information like names, emails, IPs, and phone numbers from chat conversations to protect user privacy.

4. **Role-based authentication**: Our platform includes role-based access control (RBAC) to protect the admin panel. Only authorized users with the appropriate roles can access sensitive administrative features, ensuring a secure and segmented permissions structure.

5. **Public API security**: We implement **Bearer Authentication** for secure client-server communication, preventing unauthorized access to API resources.

## Security architecture

Our security architecture integrates protections for data and network security:

1. **Network protection:** Our infrastructure includes layers of security, such as firewalls and DDoS mitigation, with continuous monitoring for rapid threat response.

2. **Data encryption**: We use industry-standard encryption to protect sensitive data both in transit and at rest, safeguarding it from unauthorized access.

3. **Logical separation between customer accounts**: We implement strict logical separation between customer accounts to prevent unauthorized cross-access and ensure that data and resources remain isolated and secure.

4. **Opt-out for model training**: Biel.ai does not use customer data for model training and opts out of data-sharing programs with providers (e.g., OpenAI, Anthropic), ensuring user conversations remain private and are not used for training purposes.

5. **GDPR compliance:** We adhere to GDPR regulations, ensuring data protection aligns with privacy regulations.

## Why this approach works

Combining **key security features** with a robust **security architecture** creates a layered defense meeting enterprise-grade demands. This structure protects both user interactions and infrastructure, delivering a secure chatbot solution.

For detailed information on our data handling practices, please refer to our [Privacy Policy](https://biel.ai/privacy).
