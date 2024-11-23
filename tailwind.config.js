/** @type {import('tailwindcss').Config} */

// const { fontFamily } = require('tailwindcss/defaultTheme')

import { Container } from 'postcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      // '2xl':'1536px',
    },
    container: {
      // 版心開啟置中樣式: class 中出現 container 樣式時都具有置中效果
      center:true,
    },
    extend: {
      // fontFamily:''
      fontFamily: {
        sans: ["Noto Sans TC", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

