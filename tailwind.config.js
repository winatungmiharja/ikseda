/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '2px 2px rgb(var(--tw-clr-primary-800))',
      sm: '1px 1px rgb(var(--tw-clr-primary-800))',
      md: '4px 4px rgb(var(--tw-clr-primary-800))',
      lg: '5px 5px rgb(var(--tw-clr-primary-800))',
      xl: '8px 8px rgb(var(--tw-clr-primary-800))',
      '2xl': '10px 10px rgb(var(--tw-clr-primary-800))',
      '3xl': '12px 12px rgb(var(--tw-clr-primary-800))',
      none: 'none',
    },
    extend: {
      backgroundImage: {
        texture: "url('/images/texture.png')",
        shapes: "url('/images/bg-shapes.svg')",
        'shapes-light': "url('/images/bg-shapes-light.svg')",
        'small-grid': "url('/images/small-grid.svg')",
        'video-grid': "url('/images/video-grid.svg')",
      },
      fontFamily: {
        primary: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        dark: '#222222',

        teal: '#46C0AE',
        magenta: '#F45B49',
        navy: '#07739E',
        mustard: '#FDCE4A',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
