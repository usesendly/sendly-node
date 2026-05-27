import type { CreateWebhookPayload, ListWebhooksQuery, ListWebhooksResponse, UpdateWebhookPayload, CreateWebhookResponse, GetWebhookResponse, UpdateWebhookResponse, DeleteWebhookResponse } from '../types/webhooks'
import type { Sendly } from '../sendly'

export class WebhooksResource {
  constructor(private client: Sendly) { }

  create(payload: CreateWebhookPayload) {
    return this.client.request<CreateWebhookResponse>('POST', '/webhooks', { body: payload })
  }

  list(query?: ListWebhooksQuery) {
    return this.client.request<ListWebhooksResponse>('GET', '/webhooks', { query })
  }

  get(id: string) {
    return this.client.request<GetWebhookResponse>('GET', `/webhooks/${id}`)
  }

  update(id: string, payload: UpdateWebhookPayload) {
    return this.client.request<UpdateWebhookResponse>('PATCH', `/webhooks/${id}`, { body: payload })
  }

  delete(id: string) {
    return this.client.request<DeleteWebhookResponse>('DELETE', `/webhooks/${id}`)
  }
}

export default WebhooksResource
