const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'Futura', 'Inter var', '-apple-system', 'BlinkMacSystemFont', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            fontSize: '1.1em',
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            fontSize: '1.1em',
            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            h6: {
              color: theme('colors.gray.300'),
            },
            blockquote: {
              color: theme('colors.gray.300'),
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
