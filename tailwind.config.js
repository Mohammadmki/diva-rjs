import { Height, Opacity } from '@mui/icons-material';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg':'1080px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        "divar":"#a62626"
      },
     keyframes :{
    navbar:{
        '0%':{ transform:'translateY(-40px)',opacity:"0"},
        '50%':{ transform: 'translateY(10px)'},
        '100%':{ transform: 'translateY(15px)',opacity:'100%'}
      },
     mark:{
      '0%':{top:'0px', opacity:"0", },
      '50%':{top:"-24px",opacity:"100%",display: 'block'},
      '100%':{top:"0px",opacity:"0",display: 'none'}
     }
     },
     animation:{
    navbar:'navbar 500ms ease-in-out forwards',
    mark:'mark 2100ms ease-in-out forwards',
     }
    },
  },
  plugins: [],
}

