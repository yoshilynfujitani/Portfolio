/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        // animation: {
        //   "text-gradient": "text-gradient 1.5s linear infinite"
        // },
        keyframes: {
          "text-gradient": {
            "to": {
              "backgroundPosition": "200% center"
            }
          }
        
      },
      container:{
        center:true,
      },
      colors:{
        'subtext':'#97998B'
       
      },
      backgroundColor:{
        'Background': '#141414',
        'Main': '#1F1F1F',
      }
    },
    
  },
  plugins: [],
}
