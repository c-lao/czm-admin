import type { App } from 'vue'
import { setupTailwindCss } from './tailwindcss'

const setupPlugins = (app: App) => {
  setupTailwindCss()
}

export default setupPlugins
