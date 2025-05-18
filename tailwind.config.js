/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sansita: ['"Sansita Swashed"', 'cursive']
      },
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

