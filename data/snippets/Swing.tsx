const Swing: ISnippet = {
  title: "Swing",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/Swing.tsx",
  playgroundLink: "https://play.tailwindcss.com/7HznJM2eA0",
  source: <div className="hover:animate-swing">Hover over me</div>,
  animation: `keyframes: {
    swing: {
      "15%": { transform: "translateX(5px)" },
      "30%": { transform: "translateX(-5px)" },
      "50%": { transform: "translateX(3px)" },
      "80%": { transform: "translateX(2px)" },
      "100%": { transform: "translateX(0)" },
    },
  },
  animation: {
    swing: "swing 1s ease 1",
  },`,
}

export default Swing
