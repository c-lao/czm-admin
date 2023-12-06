import { URL, fileURLToPath } from 'node:url'
import { type AliasOptions } from 'vite'
const alias = {
  '@': fileURLToPath(new URL('../src', import.meta.url)),
  '@images': fileURLToPath(new URL('../src/assets/images', import.meta.url))
} as AliasOptions
export default alias
