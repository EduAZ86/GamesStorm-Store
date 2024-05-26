/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          'primary': '#54c3e8',
          'background': '#FFFFFF',
          'secundary': '##F4F4F4',
          'contrast-text': '#FFF0F0',
          'secundary-text': '#646464',
          'text': '#303030',
          'error': '#f50a0a'

        },
        dark: {
          'primary': '#FE624C',
          'background': '#FFFFFF',
          'secundary': '##F4F4F4',
          'contrast-text': '#FFF0F0',
          'secundary-text': '#646464',
          'text': '#303030',
          'error': '#f50a0a'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

