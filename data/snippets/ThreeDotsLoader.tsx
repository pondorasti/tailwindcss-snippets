const ThreeDotsLoader: ISnippet = {
  title: "Three Dots Loader",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L165",
  playgroundLink: "https://play.tailwindcss.com/i12OeK41ZE",
  source: (
    <div>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash"></span>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.4s]"></span>
    </div>
  ),
  animation: `keyframes: {
    flash: {
      "0%": { opacity: "0.2" },
      "20%": { opacity: "1" },
      "100%": { opacity: "0.2" },
    },
  },
  animation: {
    flash: "flash 1.4s infinite linear",
  },`,
}

export default ThreeDotsLoader
