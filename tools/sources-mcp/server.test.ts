import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const REPO = resolve(fileURLToPath(import.meta.url), '../../..')

describe('serveur MCP m2-sources (stdio, protocole réel)', () => {
  it('démarre, expose 5 outils et répond à search_sources', async () => {
    const transport = new StdioClientTransport({ command: 'npx', args: ['tsx', 'tools/sources-mcp/server.ts'], cwd: REPO, stderr: 'pipe' })
    const client = new Client({ name: 'test', version: '0' })
    await client.connect(transport)
    try {
      const { tools } = await client.listTools()
      expect(tools.map((t) => t.name).sort()).toEqual(['coverage', 'list_sources', 'read_source', 'search_sources', 'verify_quote'])
      const res = await client.callTool({ name: 'search_sources', arguments: { courseId: 'rec1', query: 'threats to validity', k: 2 } })
      const hits = JSON.parse((res.content as { text: string }[])[0]?.text ?? '[]') as { loc: string }[]
      expect(hits[0]?.loc).toMatch(/THREATS TO VALIDITY/)
      const bad = await client.callTool({ name: 'search_sources', arguments: { courseId: 'zzz', query: 'x' } })
      expect(bad.isError).toBe(true)
    } finally {
      await client.close()
    }
  }, 30_000)
})
