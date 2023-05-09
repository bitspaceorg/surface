/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        colors: {
            black: '#111317',
            darkblack: '#0b0c0e',
            white: '#FFFFFF',
        },
        extend: {
          fontFamily : {
            primary : ["'VT323'", "monospace"]
          }
        }
    },
    plugins: []
};
