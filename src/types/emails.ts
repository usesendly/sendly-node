import type { BaseListQuery, PaginatedResponse } from "./common"
import type { AttachmentInfo } from "./emailAttachments"

export type EmailStatus = 'DELIVERED' | 'FAILED' | 'BOUNCED' | 'QUEUED' | 'SENT'

export interface Email {
  id: string
  status: EmailStatus
  created_at: string
  queued_at: string
  sent_at: string | null
  failed_at: string | null
  to: string
  subject: string
  from: string
}

export interface SendEmailPayload {
  from: string
  to: string | string[]
  subject: string
  cc?: string | string[]
  bcc?: string | string[]
  text?: string
  html?: string
  reply_to?: string | string[]
  headers?: Record<string, string>
  attachments?: {
    filename?: string
    content?: string | Buffer
    content_type?: string
    cid?: string
  }[]
  idempotencyKey?: string
  tracking?: {
    open?: boolean
    click?: boolean
  }
}

export interface ListEmailsQuery extends BaseListQuery {
  sortBy?: 'to_email' | 'created_at'
  sortOrder?: 'asc' | 'desc'
}

export interface ListEnvelopeQuery extends BaseListQuery {
  sortBy?: 'from_email' | 'created_at'
  sortOrder?: 'asc' | 'desc'
}

export interface ListInboundQuery extends BaseListQuery {
  sortBy?: 'to_address' | 'received_at' | 'from_email'
  sortOrder?: 'asc' | 'desc'
}

export interface SendEmailResponse {
  id: string
  idempotency_key?: string
  tracking?: {
    open?: boolean
    click?: boolean
  }
  total_recipients: number
}

export interface OutboundListItem {
  id: string
  to: string
  subject: string
  from: string
  status: string
  created_at: string
}

export interface OutboundDetail {
  id: string
  from: string
  subject: string
  to: string
  reply_to?: string[]
  cc?: string[]
  bcc?: string[]
  status: string
  text?: string | null
  html_url?: string | null
  created_at: string
  logs: { event: string; created_at: string }[]
  attachments: (import('./emailAttachments').AttachmentInfo & { download_url: string })[]
}

export interface EnvelopeListItem {
  id: string
  subject: string
  from: string
  total_recipients: number
  created_at: string
}

export interface InboundAttachmentInfo extends AttachmentInfo {
  is_inline: boolean
  download_url?: string
}

export interface InboundListItem {
  id: string
  to_address: string
  from_name?: string | null
  from_email: string
  subject?: string | null
  reply_to?: string[] | null
  bcc?: string[] | null
  cc?: string[] | null
  received_at: string
  attachments: InboundAttachmentInfo[]
}

export interface InboundDetail {
  id: string
  to_address: string
  from_name?: string | null
  from_email: string
  headers?: Record<string, any> | null
  subject?: string | null
  reply_to?: string[] | null
  bcc?: string[] | null
  cc?: string[] | null
  text_content?: string | null
  received_at: string
  html_url?: string | null
  raw_html_url?: string | null
  raw_email_url?: string | null
  attachments: InboundAttachmentInfo[]
}

export type ListEmailsResponse = PaginatedResponse<OutboundListItem> | OutboundListItem[]
export type ListEnvelopeResponse = PaginatedResponse<EnvelopeListItem> | EnvelopeListItem[]
export type ListInboundResponse = PaginatedResponse<InboundListItem> | InboundListItem[]
export type GetOutboundResponse = OutboundDetail
export type GetInboundResponse = InboundDetail
