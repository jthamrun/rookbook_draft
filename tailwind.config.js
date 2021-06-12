module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://static.wixstatic.com/media/4aa103_aabcb1489c2e4ec9972c6399ae49e898~mv2.jpg/v1/fill/w_1024,h_544,al_c,q_85/4aa103_aabcb1489c2e4ec9972c6399ae49e898~mv2.webp')",
      }),
      screens: {
        "3xl": '2000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
