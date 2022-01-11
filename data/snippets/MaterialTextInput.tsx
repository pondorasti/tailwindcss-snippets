const MaterialTextInput: ISnippet = {
  title: "Material Text Input",
  editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets/MaterialTextInput.tsx",
  playgroundLink: "https://play.tailwindcss.com/qefBelEn8d",
  source: (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="relative bg-inherit">
        <input
          id="username"
          name="username"
          type="text"
          className="peer bg-transparent h-10 w-36 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder="Type inside me"
        />
        <label
          htmlFor="username"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Type inside me
        </label>
      </div>
    </div>
  ),
}

export default MaterialTextInput
