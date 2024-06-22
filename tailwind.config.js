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
        },
        blue: {
          500: '#0092E4',
          600: '#0073c2',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
