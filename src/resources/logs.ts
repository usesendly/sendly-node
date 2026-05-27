import type { ListLogsQuery, ListLogsResponse } from '../types/logs'
import type { Sendly } from '../sendly'

export class LogsResource {
  constructor(private client: Sendly) { }

  list(query?: ListLogsQuery) {
    return this.client.request<ListLogsResponse>('GET', '/logs', { query })
  }
}

export default LogsResource
