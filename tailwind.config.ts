export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ordus/ui/**/*.{js,ts,jsx,tsx}', // se for publicada depois
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#00faaf',
          light: '#00faaf',
          DEFAULT: '#00faaf',
        },
        background: {
          primary: {
            light: '#f3f3f3',
            DEFAULT: '#141618',
            dark: '#442c1c',
          },
          secondary: {
            light: '#c3c3c3',
            DEFAULT: '#242628',
            dark: '#734830',
          },
          tertiary: {
            light: '#a3a3a3',
            DEFAULT: '#343638',
            dark: '#363432',
          },
        },
        foreground: {
          primary: {
            light: '#161412',
            DEFAULT: '#e4e3e2',
            dark: '#f3f3f3',
          },
          secondary: {
            light: '#363432',
            DEFAULT: '#d4d3d2',
            dark: '#734830',
          },
          tertiary: {
            light: '#464442',
            DEFAULT: '#c4c3c2',
            dark: '#935840',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // darkMode: 'media',
}
