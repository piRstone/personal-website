const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter var', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.black')
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: theme('colors.gray.300'),
            h2: theme('colors.gray.300'),
            h3: theme('colors.gray.300'),
            h4: theme('colors.gray.300'),
            h5: theme('colors.gray.300'),
            h6: theme('colors.gray.300'),
          }
        }
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
