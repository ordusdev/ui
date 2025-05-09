export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#93c5fd',
          DEFAULT: '#3b82f6',
          dark: '#1e3a8a',
        },
        background: {
          primary: {
            light: '#f3f3f3',
            DEFAULT: '#262422',
            dark: '#161412',
          },
          secondary: {
            light: '#c3c3c3',
            DEFAULT: '#363432',
            dark: '#262422',
          },
        },
        foreground: {
          primary: {
            light: '#161412',
            DEFAULT: '#e3e3e3',
            dark: '#f3f3f3',
          },
          secondary: {
            light: '#363432',
            DEFAULT: '#b3b3b3',
            dark: '#c3c3c3',
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
  darkMode: 'media',
}
