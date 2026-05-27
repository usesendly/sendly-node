import type { CreateDomainPayload, ListDomainsQuery, ListDomainsResponse, UpdateDomainPayload, CreateDomainResponse, GetDomainResponse, UpdateDomainResponse, DeleteDomainResponse, VerifyDomainResponse } from '../types/domains'
import type { Sendly } from '../sendly'

export class DomainsResource {
  constructor(private client: Sendly) { }

  create(payload: CreateDomainPayload) {
    return this.client.request<CreateDomainResponse>('POST', '/domains', { body: payload })
  }

  list(query?: ListDomainsQuery) {
    return this.client.request<ListDomainsResponse>('GET', '/domains', { query })
  }

  get(identifier: string) {
    return this.client.request<GetDomainResponse>('GET', `/domains/${identifier}`)
  }

  update(identifier: string, payload: UpdateDomainPayload) {
    return this.client.request<UpdateDomainResponse>('PATCH', `/domains/${identifier}`, { body: payload })
  }

  delete(identifier: string) {
    return this.client.request<DeleteDomainResponse>('DELETE', `/domains/${identifier}`)
  }

  verify(identifier: string) {
    return this.client.request<VerifyDomainResponse>('POST', `/domains/${identifier}/verify`)
  }
}

export default DomainsResource
