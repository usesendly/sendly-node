import type { ListEmailsQuery, ListEmailsResponse, SendEmailPayload, SendEmailResponse, ListEnvelopeQuery, ListInboundQuery, ListEnvelopeResponse, ListInboundResponse, GetOutboundResponse, GetInboundResponse } from '../types/emails'
import type { Sendly } from '../index'

export class InboundResource {
  constructor(private client: Sendly) { }

  list(query?: ListInboundQuery) {
    return this.client.request<ListInboundResponse>('GET', '/emails/inbound', { query })
  }

  get(id: string) {
    return this.client.request<GetInboundResponse>('GET', `/emails/inbound/${id}`)
  }
}

export class EnvelopeResource {
  constructor(private client: Sendly) { }

  list(query?: ListEnvelopeQuery) {
    return this.client.request<ListEnvelopeResponse>('GET', '/emails/envelope', { query })
  }
}

export class EmailsResource {
  readonly inbound: InboundResource
  readonly envelope: EnvelopeResource

  constructor(private client: Sendly) {
    this.inbound = new InboundResource(client)
    this.envelope = new EnvelopeResource(client)
  }

  send(payload: SendEmailPayload) {
    return this.client.request<SendEmailResponse>('POST', '/emails', { body: payload })
  }

  get(id: string) {
    return this.client.request<GetOutboundResponse>('GET', `/emails/${id}`)
  }

  list(query?: ListEmailsQuery) {
    return this.client.request<ListEmailsResponse>('GET', '/emails', { query })
  }
}