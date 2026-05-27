export interface PaginationQuery {
  page?: number
  limit?: number
}

export interface DateRangeQuery {
  start_date?: string
  end_date?: string
}

export interface SearchQuery {
  search?: string
}

export type BaseListQuery = PaginationQuery & DateRangeQuery & SearchQuery

export interface PaginatedResponse<T> {
  page: number
  limit: number
  hasMore: boolean
  total: number
  data: T[]
}