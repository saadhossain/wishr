/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors: {
            "wishr": "#F65024",
            "wishr2nd": "#03C0A8"
          }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"]
    },
}