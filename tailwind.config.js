/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#fafaf8',
        smoke: '#8c8c8c',
        mist: '#e4e4e1',
        line: '#d8d8d4',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
