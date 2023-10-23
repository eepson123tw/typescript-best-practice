// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetUno(), presetAttributify()],
      content: {
        pipeline: {
          include: [
            /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
            'src/**/*.{js,ts}'
          ]
        }
      }
    })
  ]
})
