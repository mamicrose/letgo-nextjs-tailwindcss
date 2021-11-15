module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-color': '#ff3f55',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
