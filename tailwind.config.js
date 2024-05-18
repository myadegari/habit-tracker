/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        body:['Shabnam','Inter','sans-serif'],
    },
 
    extend: {
      screens:{
        'xsm':{max:'360px'},
      },
      colors:{
        'woodSmoke': {
          50:  '#f7f7f8',
          100: '#ededf1',
          200: '#d7d8e0',
          300: '#b5b6c4',
          400: '#8c8ea4',
          500: '#6e7189',
          600: '#595a70',
          700: '#48495c',
          800: '#3e3e4e',
          900: '#373843',
          950: '#0e0e11',
      },
      'shiraz': {
        '50': '#fff1f2',
        '100': '#ffe3e6',
        '200': '#ffccd3',
        '300': '#ffa2af',
        '400': '#fe6e86',
        '500': '#f93a5f',
        '600': '#e6184a',
        '700': '#c20e3e',
        '800': '#a90f3d',
        '900': '#8b1039',
        '950': '#4e031a',
    },
    
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

