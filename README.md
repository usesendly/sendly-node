# Sendly SDK for JavaScript

A simple JavaScript SDK for Sendly API access from Node.js or Bun.

> For questions, visit: https://docs.usesendly.app

## Installation

```bash
npm install @sendlyapp/sdk
```

Or with Bun:

```bash
bun add @sendlyapp/sdk
```

## Quick Start

### 1. Get your API key
Create your account and generate your API key at [usesendly.app](https://usesendly.app).

### 2. Set your API key

You can pass the key directly or use the `SENDLY_API_KEY` environment variable.

```ts
import { Sendly } from '@sendlyapp/sdk'

const client = new Sendly(process.env.SENDLY_API_KEY)
```

If no key is passed, the SDK uses `process.env.SENDLY_API_KEY`.

### 3. Send a simple email

```ts
const response = await client.emails.send({
  from: 'mail@example.com',
  to: 'mail@hello.world',
  subject: 'Hello from Sendly',
  reply_to: 'mail@example.com',
  text: 'Hello world',
  html: '<h1>Hello world</h1><p>This is a test email.</p>'
})

console.log(response)
```

## Main Resources

### Emails
- `client.emails.send(payload)`
- `client.emails.list(query)`
- `client.emails.get(id)`

#### Inbound
- `client.emails.inbound.list(query)`
- `client.emails.inbound.get(id)`

#### Envelope
- `client.emails.envelope.list(query)`

### Domains

- `client.domains.create(payload)`
- `client.domains.list(query)`
- `client.domains.get(identifier)`
- `client.domains.update(identifier, payload)`
- `client.domains.delete(identifier)`
- `client.domains.verify(identifier)`

### Webhooks

- `client.webhooks.create(payload)`
- `client.webhooks.list(query)`
- `client.webhooks.get(id)`
- `client.webhooks.update(id, payload)`
- `client.webhooks.delete(id)`

### Logs

- `client.logs.list(query)`

## Docs

For full documentation, see:

- https://docs.usesendly.app
