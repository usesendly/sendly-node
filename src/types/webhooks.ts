import type { BaseListQuery, PaginatedResponse } from './common'

export interface Webhook {
  id: string
  url: string
  active?: boolean
  created_at: string
}

export interface WebhookDetail {
  id: string
  url: string
  status: boolean
  events: { id: string; event: string }[]
  signing_secret?: string
  created_at: string
}

export interface CreateWebhookPayload {
  url: string
  events: string[]
}

export interface UpdateWebhookPayload {
  url?: string
  events?: string[]
}

export interface ListWebhooksQuery extends BaseListQuery {
  sortBy?: 'url' | 'created_at'
  sortOrder?: 'asc' | 'desc'
}

export type ListWebhooksResponse = PaginatedResponse<Webhook> | Webhook[]

export type CreateWebhookResponse = { webhook: Webhook; signing_key: string }
export type GetWebhookResponse = WebhookDetail
export type UpdateWebhookResponse = { id: string }
export type DeleteWebhookResponse = { id: string }
