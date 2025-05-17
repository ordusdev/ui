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
          DEFAULT: '#734830',
        },
        background: {
          primary: {
            light: '#f3f3f3',
            // DEFAULT: '#141618',
            DEFAULT: '#d4d3d2',
            dark: '#442c1c',
          },
          secondary: {
            light: '#c3c3c3',
            DEFAULT: '#e4e3e2',
            dark: '#734830',
          },
          tertiary: {
            light: '#a3a3a3',
            DEFAULT: '#f4f3f2',
            dark: '#363432',
          },
        },
        foreground: {
          primary: {
            light: '#161412',
            DEFAULT: '#442c1c',
            dark: '#f3f3f3',
          },
          secondary: {
            light: '#363432',
            DEFAULT: '#552c1c',
            dark: '#734830',
          },
          tertiary: {
            light: '#464442',
            DEFAULT: '#661c1c',
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
