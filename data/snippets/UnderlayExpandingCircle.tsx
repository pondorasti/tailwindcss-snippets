const UnderlayExpandingCircle: ISnippet = {
  title: "Underlay Expanding Circle",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/UnderlayExpandingCircle.tsx",
  playgroundLink: "https://play.tailwindcss.com/nEHCtBr6iK",
  source: (
    <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
      <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
        Hover over me
      </span>
    </div>
  ),
}

export default UnderlayExpandingCircle
