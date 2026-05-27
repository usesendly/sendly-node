import type { BaseListQuery, PaginatedResponse } from './common'

export type DomainStatus = 'PENDING' | 'VERIFIED' | 'FAILED' | 'NOT_STARTED' | 'DELETED'

export interface DomainRecord {
  id?: string
  host: string
  value: string
  type: string
  purpose?: string
  status?: string
  ttl?: string | number
  priority?: number
}

export interface DomainListItem {
  id: string
  domain: string
  status: DomainStatus
  return_path: string
  config: {
    sending: boolean
    inbound: boolean
  }
  tracking: {
    open_tracking: boolean
    click_tracking: boolean
  }
  created_at: string
}

export interface DomainDetail {
  id: string
  domain: string
  status: DomainStatus
  region?: string
  return_path: string
  config: {
    sending: boolean
    inbound: boolean
  }
  tracking: {
    open_tracking: boolean
    click_tracking: boolean
  }
  records: {
    dkim: DomainRecord[]
    spf?: DomainRecord[]
    mx?: DomainRecord[]
  }
  created_at: string
}

export interface CreateDomainPayload {
  domain: string
  return_path: string
  sending?: boolean
  inbound?: boolean
  open_tracking?: boolean
  click_tracking?: boolean
}

export interface UpdateDomainPayload {
  sending?: boolean
  inbound?: boolean
  click_tracking?: boolean
  open_tracking?: boolean
}

export interface ListDomainsQuery extends BaseListQuery {
  sortBy?: 'name' | 'created_at' | 'lastRequest'
  sortOrder?: 'asc' | 'desc'
  status?: DomainStatus
}

export type ListDomainsResponse = PaginatedResponse<DomainListItem> | DomainListItem[]

export type CreateDomainResponse = DomainDetail
export type GetDomainResponse = DomainDetail
export type UpdateDomainResponse = { id: string }
export type DeleteDomainResponse = { id: string }
export type VerifyDomainResponse = { id: string }
