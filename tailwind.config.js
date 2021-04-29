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
        DEFAULT: {
          css: {
            color: theme('colors.black')
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.gray.300'),
              fontFamily: 'Poppins',
            },
            h2: {
              color: theme('colors.gray.300'),
              fontFamily: 'Poppins',
            },
            h3: {
              color: theme('colors.gray.300'),
              fontFamily: 'Poppins',
            },
            h4: {
              color: theme('colors.gray.300'),
              fontFamily: 'Poppins',
            },
            h5: {
              color: theme('colors.gray.300'),
              fontFamily: 'Poppins',
            },
            h6: {
              color: theme('colors.gray.300'),
              fontFamily: 'Poppins',
            },
          }
        }
      }),
    },
  },
  variants: {
    extend: {
      typography: 'dark',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
