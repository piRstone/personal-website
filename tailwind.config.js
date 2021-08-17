const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '5px 6px',
              borderRadius: '8px',
              fontWeight: 'normal',
              '&::before': {
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
            },
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
            strong: {
              color: theme('colors.gray.300'),
            },
            a: {
              color: '#337ff1',
            },
            code: {
              color: theme('colors.gray.300'),
              backgroundColor: '#1d2c46',
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
