/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen:{
      sm: '640px',
      //@media (min-width:640px){...}
      md: '768px',
      //@media (min-width:640px){...}
      lg: '1024px',
      //@media (min-width:640px){...}
      xl: '1280px',
      //@media (min-width:640px){...}
      xxl: '1536px'
      //@media (min-width:640px){...}
    },
    extend: {},
  },
  plugins: [],
};
