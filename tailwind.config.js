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
        sans: ['var(--font-eina)', ...fontFamily.sans]
      },
      spacing: {
        small: "0.3125rem", // 5px
        middle: "0.625rem", // 10px
        large: "1.25rem", // 20px
      },
      colors: {
        sub: {
          black: 'rgb(var(--ui-black) / <alpha-value>)',
          white: 'rgb(var(--ui-white) / <alpha-value>)',
          link: 'rgb(var(--ui-link) / <alpha-value>)',
          error: 'rgb(var(--ui-error) / <alpha-value>)',
          success: 'rgb(var(--ui-success) / <alpha-value>)',
          warning: 'rgb(var(--ui-warning) / <alpha-value>)',
          b2: 'rgb(var(--ui-b2) / <alpha-value>)',
          b3: 'rgb(var(--ui-b3) / <alpha-value>)',
          b4: 'rgb(var(--ui-b4) / <alpha-value>)',
          bg: 'rgb(var(--ui-bg) / <alpha-value>)',
          hover: 'rgb(var(--ui-hover) / <alpha-value>)',
          network: 'rgb(var(--network-color) / <alpha-value>)',
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
        topenter: {
          "0%": { opacity: 0, transform: "translateY(-40%)", transformOrigin: "top", },
          "100%": { transformOrigin: "top", transform: "translateY(0)", opacity: 1 },
        },
        topleave: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        rightenter: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        rightleave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        messagefadeout: {
          "100%": { height: 0 },
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
        "message-enter": "topenter 300ms ease-out",
        "message-leave": "topleave 300ms ease-out",
        "notification-enter": "rightenter 400ms ease-out",
        "notification-leave": "rightleave 400ms ease-out",
        "message-fadeout": "messagefadeout 200ms ease-out",
        "notification-fadeout": "notificationfadeout 200ms ease-out",
        "marquee-infinite": "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
}
