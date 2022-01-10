const FlickUp: ISnippet = {
  title: "Flick Up",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L207",
  playgroundLink: "https://play.tailwindcss.com/n22Rh5HMTY",
  source: (
    <div className="relative overflow-hidden group">
      <span className="invisible">Hover over me</span>
      <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
        Hover over me
      </span>
      <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
        Hover over me
      </span>
    </div>
  ),
}

export default FlickUp
