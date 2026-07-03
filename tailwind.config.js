/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{js,jsx}'], theme: { extend: { colors: { ink:'#0a0a0f', paper:'#f4f1ff', accent:'#8b5cf6' }, fontFamily: { sans:['Inter','system-ui','sans-serif'], display:['Space Grotesk','Inter','sans-serif'] }, boxShadow:{ glow:'0 0 40px rgba(139,92,246,.24)' } } }, plugins: [] }
