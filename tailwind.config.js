/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offwhite' : '#e3e3e3',
        'offblack' : '#1f1f1f',
        'footer' : '#b8b8b8',
        'lightpuprle' : '#c369ff',
        'darkpurple' : '#7905e6',
        'babyblue' : '#6195c9',
        'tile' : '#414141',
      },
      boxShadow: {
        'custom-top-bar' : '0 7px 10px rgba(0, 0, 0, 0.1)',
        'custom-top-bar-dark' : '0 7px 10px rgba(0, 0, 0, 0.6)',
        'custom-tile1' : '-3px 7px 7px rgba(0, 0, 0, 0.75)',
        'custom-tile2' : '0px 7px 7px rgba(0, 0, 0, 0.75)',
        'custom-tile3' : '3px 7px 7px rgba(0, 0, 0, 0.75)',
      },
      height: {
        'footer-height' : '24rem',
      },
      fontFamily: {
        'comfortaa' : ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}