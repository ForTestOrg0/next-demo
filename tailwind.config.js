const { fontFamily } = require('tailwindcss/defaultTheme')

const getNetworkColor = (network) => {
  // TODO
  void network;
  return {
    primary: '#ff0083',
  };
};

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
      spacing: {
        small: "0.3125rem", // 5px
        middle: "0.625rem", // 10px
        large: "1.25rem", // 20px
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
        },
        ...getNetworkColor(),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'module': '0px 2px 10px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        rightenter: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        rightleave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        notificationfadeout: {
          "100%": { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "notification-enter": "rightenter 400ms ease-out",
        "notification-leave": "rightleave 400ms ease-out",
        "notification-fadeout": "notificationfadeout 200ms ease-out",
        "marquee-infinite": "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
}
