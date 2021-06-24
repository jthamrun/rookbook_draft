const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Quicksand', // <-- Roboto is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fontFamily,
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://static.wixstatic.com/media/4aa103_aabcb1489c2e4ec9972c6399ae49e898~mv2.jpg/v1/fill/w_1024,h_544,al_c,q_85/4aa103_aabcb1489c2e4ec9972c6399ae49e898~mv2.webp')",
        "about-pattern" : "url('https://www.braintreepayments.com/blog/content/images/2015/12/southeast-asia.jpg')"
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
