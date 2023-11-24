import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // base colors
        'base-l-green': '#778745',
        'base-d-green': '#49632c',
        'base-yellow': '#FFBE0B',
        'base-l-brown': '#db9d57',
        'base-d-brown': '#aa6122',
        'base-primary': '#14213D',
        // rest of the colors
        black: '#222',
        white: '#fff',
        'red-light': '#f8d7da',
        'red-dark': '#842029',
        'green-light': '#d1e7dd',
        'green-dark': '#0f5132',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        shadow: ['Shadows Into Light', 'cursive'],
        kalam: ['Kalam', 'cursive'],
      },

      // box shadow
      boxShadow: {
        1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
