/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        175: '175px',
        72: '72px',
        64: '64px',
        40: '40px',
        36: '36px',
        24: '24px',
      },
      colors: {
        ffb800: '#FFB800',
      },
      backgroundColor: {
        ffb800: '#FFB800',
      },
      gap: {
        20: '20px',
      },
    },
  },
  plugins: [],
}
