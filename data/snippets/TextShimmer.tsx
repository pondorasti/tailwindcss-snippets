const TextShimmer: ISnippet = {
  title: "Shimmer",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/TextShimmer.tsx",
  playgroundLink: "https://play.tailwindcss.com/iOPPOIJo2q",
  source: (
    <div className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]">
      Text Shimmer Effect
    </div>
  ),
  animation: `keyframes: {
    "text-shimmer": {
      from: { backgroundPosition: "0 0" },
      to: { backgroundPosition: "-200% 0" },
    },
  },
  animation: {
    "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
  },`,
}

export default TextShimmer
