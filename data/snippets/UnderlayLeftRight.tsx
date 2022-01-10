const UnderlayLeftRight: ISnippet = {
  title: "Underlay Left Right",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/UnderlayLeftRight.tsx",
  playgroundLink: "https://play.tailwindcss.com/L7dQEa01J0",
  source: (
    <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
      <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
        Hover over me
      </span>
    </div>
  ),
}

export default UnderlayLeftRight
