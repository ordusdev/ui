export const tailwindOrdusTheme = {
  extend: {
    colors: {
      brand: {
        dark: '#0188aa',
        light: '#47b9d5',
        DEFAULT: '#24a1bf',
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
        tertiary: {
          light: '#a3a3a3',
          DEFAULT: '#464442',
          dark: '#363432',
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
        tertiary: {
          light: '#464442',
          DEFAULT: '#939393',
          dark: '#a3a3a3',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
}
