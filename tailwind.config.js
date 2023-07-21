const { fontFamily } = require('tailwindcss/defaultTheme')

const getNetworkColor = (network) => {
  // TODO
  void network
  return {
    primary: '#ff0083',
  }
}

const colorKeys = ['black', 'white', 'link', 'error', 'success', 'warning', 'b2', 'b3', 'b4', 'bg', 'hover', 'network', 'network2']
const extendColors = () => {
  const colors = {}
  colorKeys.forEach((key) => {
    colors[key] = {
      DEFAULT: `rgb(var(--ui-${key}) / <alpha-value>)`,
      light: `rgb(var(--ui-${key}-light) / <alpha-value>)`,
      dark: `rgb(var(--ui-${key}-dark) / <alpha-value>)`,
    }
  })

  return colors
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Eina01', ...fontFamily.sans],
      },
      zIndex: {
        normal: '1',
        top: '1000',
        popper: '2000',
      },
      margin: {
        module: '1.25rem', // 20px, Vertical spacing of page modules
      },
      spacing: {
        small: '0.3125rem', // 5px
        middle: '0.625rem', // 10px
        large: '1.25rem', // 20px
      },
      colors: {
        sub: extendColors(),
        ...getNetworkColor(),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        module: '0px 2px 10px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        topenter: {
          '0%': { opacity: 0, transform: 'translateY(-40%)', transformOrigin: 'top' },
          '100%': { transformOrigin: 'top', transform: 'translateY(0)', opacity: 1 },
        },
        topleave: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        rightenter: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        rightleave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        messagefadeout: {
          '100%': { height: 0 },
        },
        notificationfadeout: {
          '100%': { height: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'message-enter': 'topenter 300ms ease-out',
        'message-leave': 'topleave 300ms ease-out',
        'notification-enter': 'rightenter 400ms ease-out',
        'notification-leave': 'rightleave 400ms ease-out',
        'message-fadeout': 'messagefadeout 200ms ease-out',
        'notification-fadeout': 'notificationfadeout 200ms ease-out',
        'marquee-infinite': 'marquee 25s linear infinite',
      },
      screens: {
        xl: '1200px',
      },
    },
  },
  plugins: [],
}
