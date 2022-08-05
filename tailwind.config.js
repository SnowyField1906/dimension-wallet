module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'screen': "url('../public/img/screen.jpg')",
        'card': "url('../public/img/card.jpg')",
        'ethereum-icon': "url('../public/img/ethereum-icon.png')",
      }
    },
  },
  plugins: [],
}