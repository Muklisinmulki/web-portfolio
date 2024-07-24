/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary: '#005691' ,
        secondary : '#64748b',
        dark: '#004A7C',

      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

