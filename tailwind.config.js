/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors: {
            "wishr": "#F65024"
          }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"]
    },
}