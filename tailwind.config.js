const defaultTheme = require('tailwindcss/defaultTheme')

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  // purge: ['./src/**/*.js'],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ISO', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'custom-green': '#8BB191',
        'ob-primary': '#F07933',
        'ob-secondary': '#8BB191',
        'ob-tertiary': '#62cae3',
        'ob-dark': '#0f172a', // slate-900
        'custom-secondary': '#62cae3',
        'custom-avery': '#a5d9cf',
        'custom-primary': '#F07933'
      },
      height: {
        'screen-85': '85vh',
        'screen-80': '80vh',
        'screen-20': '20vh',
        'screen-15': '15vh'
      },
      screens: {
        '3xl': '2560px'
      }
    }
  }
}
