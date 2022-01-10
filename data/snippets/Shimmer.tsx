const Shimmer: ISnippet = {
  title: "Shimmer",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L136",
  playgroundLink: "https://play.tailwindcss.com/pE7XMJWPbK",
  source: (
    <div className="animate-shimmer bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%] h-12 w-40 rounded-lg"></div>
  ),
  animation: `keyframes: {
    shimmer: {
      from: { backgroundPosition: "200% 0" },
      to: { backgroundPosition: "-200% 0" },
    },
  },
  animation: {
    shimmer: "shimmer 8s ease-in-out infinite",
  },`,
}

export default Shimmer
