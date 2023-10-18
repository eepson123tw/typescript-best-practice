// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetUno(), presetAttributify()],
      include: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
      ]
    })
  ]
})
