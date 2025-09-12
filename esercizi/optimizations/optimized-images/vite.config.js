import { defineConfig } from 'vite'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
//   base: 'http://127.0.0.1:5500/esercizi/optimizations/optimized-font-awesome/dist/',
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets:  browserslistToTargets(browserslist('>= 0.25%')),
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
})
