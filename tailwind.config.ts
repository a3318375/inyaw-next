/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height:{
        '18rem':'18rem',
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

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        transparent: 'transparent',
        current: 'currentColor',
        'describe': '#858585',
        'summary': '#4c4948',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
}