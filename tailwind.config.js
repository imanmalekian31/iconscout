/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue',
    './src/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FAFAFC',
          75: '#F5F6FA',
          100: '#EBEDF5',
          150: '#D8DBEB',
          600: '#5A607D',
          650: '#596080',
          700: '#737999',
          800: '#424866',
          900: '#2E334C',
        },
        blue: {
          200: '#B4BAD6',
          500: '#0092E4',
          600: '#0073C2',
        },
        red: {
          700: '#D32F2F',
        },
        teal: {
          500: '#24A8AF',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
