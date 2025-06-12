/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Asegura que la fuente Inter esté disponible
      },
      colors: {
        // Define tu paleta de colores personalizada si lo deseas
        // Por ejemplo:
        // 'primary-blue': '#1a73e8',
        // 'secondary-pink': '#e91e63',
      }
    },
  },
  plugins: [],
}
