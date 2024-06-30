/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#1A0232',
        customBlue: {
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
      backgroundImage: {
        'gradient-to-btn': 'linear-gradient(90deg, #420565 0%, #6A0B90 49.67%, #811CBB 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
