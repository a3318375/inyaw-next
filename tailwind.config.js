/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height:{
        '25rem':'25rem',
      },
      maxWidth: {
        'content': '53rem',
      },
      zIndex: {
        '-999': '-999',
        '999': '999',
      },
      backgroundImage: {
        'img-default': `url('https://media.inyaw.com/cover/7037ade43b1e484eac903a111b7ea709.jpg-inyaa')`,
        'img-mobile-default': `url('https://media.inyaw.com/cover/14db2cf6e4b441368243b23722d212c9.png-inyaa')`,
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'describe': '#858585',
        'summary': '#4c4948',
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              background: '#ffe066',
              color: '#ff6663',
              paddingTop: 0,
              paddingRight: '5px',
              paddingBottom: '1px',
              paddingLeft: '5px',
              fontFamily: 'Noto Sans SC',
              textShadow: 'none',
              borderRadius: '5px',
              '&::before': {
                content: 'none!important',
              },
              '&::after': {
                content: 'none!important',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
