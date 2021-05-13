module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        108: '27rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
