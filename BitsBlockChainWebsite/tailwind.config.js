/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kola': ['Kola', 'sans-serif'],
    },
    },
    screens:{
      'xs':"500px",
      'sm':"700px",
      "md":"950px",
      "lg":"1080px",
      "xl":"1200px",
      "2xl":"1280px"
    }
  },
  plugins: [],
}

