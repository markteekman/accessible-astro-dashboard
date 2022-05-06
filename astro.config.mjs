import { defineConfig } from 'astro/config'
import nodejs from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  adapter: nodejs(),
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
})
