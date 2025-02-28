/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fd',
          400: '#36a9fa',
          500: '#0c8ee9',
          600: '#0072c6',
          700: '#0058a1',
          800: '#004c8a',
          900: '#003f72',
        },
      },
    },
  },
  plugins: [],
};