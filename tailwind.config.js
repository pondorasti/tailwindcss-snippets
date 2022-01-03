const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.slate,
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        flash: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        swing: {
          "15%": { transform: "translateX(5px)" },
          "30%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(3px)" },
          "80%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: 0, transform: "scale(0.9)" },
          to: { opacity: 1, transform: "scale(1.0)" },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "slide-in": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "100%": { opacity: 0, transform: "translateY(16px)" },
        },
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        flash: "flash 1.4s infinite linear",
        shimmer: "shimmer 8s ease-in-out infinite",
        swing: "swing 1s ease 1",
        "fade-in": "fade-in 0.1s ease-out",
        "fade-out": "fade-out 0.1s ease-in",
        "slide-in": "slide-in 0.2s ease-out",
        "slide-out": "slide-out 0.2s ease-in",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    plugin(function ({ addBase }) {
      addBase({
        hr: {
          "@apply mt-16 mx-auto h-px w-12 opacity-10": {},
        },
        kbd: {
          "@apply p-1 bg-gray-700 text-gray-300 text-[10px] min-w-[16px] h-4 rounded inline-flex items-center justify-center":
            {},
          "box-shadow": "inset 0 -1.5px 0 0 rgb(255 255 255 / 5%)",
        },
      })
    }),
  ],
}
