module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'screen': "url('../src/images/screen.jpg')",
        'card': "url('../src/images/card.jpg')",
        'ethereum-icon': "url('../src/images/ethereum-icon.png')",
      }
    },
  },
  plugins: [],
}