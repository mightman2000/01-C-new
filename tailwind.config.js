/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

         fontFamily:{
              'inter': ['Inter', 'sans-serif'],
        //   'SpaceGrotesk': ['Space Grotesk' , 'sans-serif'],
         }

    },
  },
  plugins: [],
}