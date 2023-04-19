const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-eina)', ...fontFamily.sans]
      },
      colors: {
        sub: {
          black: '#302B3C',
          white: '#FFFFFF',
          link: '#0085FF',
          error: '#FF475D',
          success: '#6BC10E',
          warning: '#FFB600',
          b2: '#9D9D9D',
          b3: '#D8D8D8',
          b4: '#F2F4FA',
          bg: '#FBFBFD',
          hover: '#fbfbfb',
          network: 'var(--network-color)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'module': '0px 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
