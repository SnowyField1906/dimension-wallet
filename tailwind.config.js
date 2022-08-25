module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'screen': "url('../src/images/screen.jpg')",
        'card1': "url('../src/images/card1.jpg')",
        'card2': "url('../src/images/card2.jpg')",
        'card3': "url('../src/images/card3.jpg')",
        'card4': "url('../src/images/card4.jpg')",
        'card5': "url('../src/images/card5.jpg')",
        'card6': "url('../src/images/card6.jpg')",
        'card7': "url('../src/images/card7.jpg')",
        'card8': "url('../src/images/card8.jpg')",
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