/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: {
        100: '#000000',
        200: '#111111',
      },
      gray: {
        100: '#9DA0A2',
        200: '#646464',
        300: '#575656'
      },
      blue:{
        50: '#B3E0EB',
        100: '#0A54E4',
        200: '#00348C',
      },
      error: {
        100: '#E74C3C',
      },
      whiteRgba: 'rgba(255, 255, 255, 0.5)',
      blueRgba: 'rgba(0, 52, 140, 0.7)'
    },
    extend: {
      fontFamily: {
        ashley: ['ashley', 'sans-serif'],
        geomanist: ['geomanist', 'sans-serif'],
        leagueGothic: ['leagueGothic', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 1px #5A28A0, 0 0 1px #5A28A0, 0 0 1px #5A28A0, 0 0 10px #5A28A0',
      },
      hueRotate: {
        276: '276deg',
      },
    },
  },
  plugins: [],
};
