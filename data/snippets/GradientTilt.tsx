const GradientTilt: ISnippet = {
  title: "Gradient Tilt",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/GradientTilt.tsx",
  playgroundLink: "https://play.tailwindcss.com/GMTiinWZXq?file=config",
  source: (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative px-6 py-3 bg-gray-200 text-black rounded-lg">Hover over me</div>
    </div>
  ),
  animation: `keyframes: {
    tilt: {
      "0%, 50%, 100%": { transform: "rotate(0deg)" },
      "25%": { transform: "rotate(0.5deg)" },
      "75%": { transform: "rotate(-0.5deg)" },
    },
  },
  animation: {
    tilt: "tilt 10s infinite linear",
  },`,
}

export default GradientTilt
