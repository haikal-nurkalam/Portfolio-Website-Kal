/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        // sans : ['Poppins', "sans-serif"]
          sans: ['"Poppins"', "sans-serif"]
      },
      colors: {
        'Primary-Text': '#505035',
        'Background-Card' : '#F7F7F3',
        'Secondary' : '#CECEB6',
        'Background-Card-Darker' : '#EBEBE0',
      },
      
  },
  plugins: [],
}
}
