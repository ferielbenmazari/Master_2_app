import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readSourceFile } from '../tools/sources-mcp/lib/quote.ts'
import { formatReport } from './lib/format-report.ts'
import { loadContentTree } from './lib/load-tree.ts'
import { validateTree } from './lib/validate.ts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const report = validateTree(loadContentTree(root), (file) => readSourceFile(root, file))
console.log(formatReport(report))
process.exit(report.issues.some((i) => i.severity === 'error') ? 1 : 0)
