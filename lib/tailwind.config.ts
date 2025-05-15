import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}', // aponta para os arquivos da lib
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false, // importante: desativa reset CSS para evitar conflito com consumidor
  },
  plugins: [],
}

export default config
