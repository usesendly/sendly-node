import { EmailsResource } from './resources/emails'
import { DomainsResource } from './resources/domains'
import { LogsResource } from './resources/logs'
import { WebhooksResource } from './resources/webhooks'
import { version } from '../package.json';
import { SendlyError } from './errors';

const BASE_URL = 'https://api.usesendly.app/v1';

export class Sendly {
    private readonly headers: Headers;
    readonly emails = new EmailsResource(this);
    readonly domains = new DomainsResource(this);
    readonly logs = new LogsResource(this);
    readonly webhooks = new WebhooksResource(this);
    
    constructor(apikey?: string) {
        const resolvedKey = apikey ?? process.env.SENDLY_API_KEY

        if (!resolvedKey) {
            throw new Error('Missing API key. Pass it to the constructor `new Sendly("se_123")`')
        }

        this.headers = new Headers({
            'Authorization': `Bearer ${resolvedKey}`,
            'Content-Type': 'application/json',
            'User-Agent': `sendly-node:${version}`
        });
    }

    async request<T>(method: string, path: string, options?: { body?: unknown, query?: object }): Promise<T> {
        const url = new URL(`${BASE_URL}${path}`)

        if (options?.query) {
            Object.entries(options.query).forEach(([k, v]) => {
                if (v !== undefined) url.searchParams.set(k, String(v))
            })
        }
        
        const res = await fetch(url, {
            method,
            headers: this.headers,
            body: options?.body ? JSON.stringify(options.body) : undefined,
        })

        if (!res.ok) {
            const error = await res.json() as { code: string; message: string }
            throw new SendlyError(res.status, error.code, error.message)
        }

        return res.json() as Promise<T>
    }
}