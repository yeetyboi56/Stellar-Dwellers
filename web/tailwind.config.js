/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Trispace", "sans-serif"],
        },
        extend: {
            colors: {
                "orange-primary": "#D96226",
                "orange-primary-dark": "#a84a1b",
            },
        },
    },
    plugins: [],
};
