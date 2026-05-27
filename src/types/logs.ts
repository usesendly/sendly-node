import type { BaseListQuery, PaginatedResponse } from './common'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type UserAgent = 'smtp' | 'nodejs'

export interface LogEntry {
  id: string
  method: HttpMethod
  status: number
  user_agent: UserAgent
  url: string
  request_body?: unknown
  response_body?: unknown
  created_at: string
}

export interface ListLogsQuery extends BaseListQuery {
  sortOrder?: 'asc' | 'desc'
  status?: number
  method?: HttpMethod
  user_agent?: UserAgent
}

export type ListLogsResponse = PaginatedResponse<LogEntry> | LogEntry[]
