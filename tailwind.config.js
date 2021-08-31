// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        navLink_hover: {
          '0%': { 
            width: '0',
            opacity: '0'
           },
          '100%': { 
            width: '2.5rem;',
            opacity: '100'
           },
        }
       },
       animations: {
        navLink_hover: 'navLink_hover 3s ease-in-out'
       },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundImage: theme => ({
        'godzilla': "url('/src/images/godzilla.jpg')",
        'polygon': "url('/src/images/Polygon 1.png')",
       }),

    }
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"]
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}