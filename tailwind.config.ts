import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F0F2F5',
          primary: '#276955',
          border: '#A2A2A2',
        },
        dark: {
          primary: '#8BC34A',
          dp00: '#121212',
          dp01: '#1e1e1e',
          dp02: '#232323',
          dp03: '#252525',
          dp04: '#272727',
          dp06: '#2c2c2c',
          dp08: '#2e2e2e',
          dp12: '#333333',
          dp16: '#363636',
          dp24: '#383838',
        },
      },
    },
    fontFamily: {
      SUITRegular: ['SUIT-Regular'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
