import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins'

export default ({ command, mode }: ConfigEnv) => {
  // command 开发环境下为server , 生产环境下为build
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  console.log()
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    }
  }
}
