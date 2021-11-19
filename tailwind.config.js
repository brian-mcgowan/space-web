module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
