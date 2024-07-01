/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 24px -2px rgba(0, 0, 0, 0.25)', // Custom shadow
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(60% #191A1F, 60% #21222A)', // Custom gradient
      },
    },
  },
  plugins: [],
}