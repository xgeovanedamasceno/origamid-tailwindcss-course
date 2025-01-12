/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        verde: {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        },
      },
    },
  },
  plugins: [],
}

