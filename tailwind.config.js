module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'screen': "url('../src/images/screen.jpg')",
        'card1': "url('../src/images/card1.jpg')",
        'card2': "url('../src/images/card2.jpg')",
        'ethereum-icon': "url('../src/images/ethereum-icon.png')",
        'welcome-image-1': "url('../src/images/welcome-image-1.png')",
        'welcome-image-2': "url('../src/images/welcome-image-2.png')",
        'welcome-image-3': "url('../src/images/welcome-image-3.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}