const TextTransformColor: ISnippet = {
  title: "Text Transform & Color",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/TextTransformColor.tsx",
  playgroundLink: "https://play.tailwindcss.com/YQEPZafzdC",
  source: (
    <div className="group text-gray-200 hover:text-sky-600 transition ease-in-out duration-200">
      Hover over me{" "}
      <span
        aria-hidden="true"
        className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
      >
        →
      </span>
    </div>
  ),
}

export default TextTransformColor
