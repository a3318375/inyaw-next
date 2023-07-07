/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '-999': '-999',
        '999': '999',
      },
      backgroundImage: {
        'img-default': "url(https://media.inyaw.com/cover/test123.jpg)",
        'img-mobile-default': "url(https://media.inyaw.com/cover/14db2cf6e4b441368243b23722d212c9.png)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
