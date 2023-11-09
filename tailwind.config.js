/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: {
        'todo' : "url(./public/todo.png)",
        'todobg' : "url(https://t4.ftcdn.net/jpg/03/61/01/89/360_F_361018944_HkcCYRsgv14bXoe8MEYxfQoZEG39rdry.jpg)"
      }
    },
  },
  plugins: [],
}

