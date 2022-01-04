const snippets: ISnippet[] = [
  {
    title: "Underline Left Right",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L3",
    playgroundLink: "https://play.tailwindcss.com/wu05IAG55F",
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
        Hover over me
      </div>
    ),
  },
  {
    title: "Pulse",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L13",
    playgroundLink: "https://play.tailwindcss.com/Lua057Ji2l",
    source: (
      <div className="flex h-8 w-8 absolute">
        <span className="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-gray-200 opacity-75"></span>
        <span className="relative rounded-full h-8 w-8 -top-4 -left-4 bg-gray-200"></span>
      </div>
    ),
  },
  {
    title: "Keyboard Button",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L24",
    playgroundLink: "https://play.tailwindcss.com/mIS0tN3dQ9",
    source: (
      <div className="px-6 py-3 bg-gray-200 text-black rounded-lg border-b-4 border-b-gray-400 hover:border-b-0 transition-all ease-in-out duration-100">
        Hover over me
      </div>
    ),
  },
  {
    title: "Underlay Marker",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L34",
    playgroundLink: "https://play.tailwindcss.com/mBEHHzveWs",
    source: (
      <div className="relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
        <span className="relative">Hover over me</span>
      </div>
    ),
  },
  {
    title: "Underlay Left",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L44",
    playgroundLink: "https://play.tailwindcss.com/1eXQZT8CqF",
    source: (
      <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
        <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: "Spinner",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L56",
    playgroundLink: "https://play.tailwindcss.com/S7AMIMNDYf",
    source: (
      <svg
        className="animate-spin h-8 w-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Hover & Active Scale Button",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L76",
    playgroundLink: "https://play.tailwindcss.com/hxZ37q2LAv",
    source: (
      <div className="px-6 py-3 bg-gray-200 text-black rounded-lg hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200">
        Hover &amp; hold me
      </div>
    ),
  },
  {
    title: "Swing",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L87",
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
  },
  {
    title: "Underline Bottom Top",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L104",
    playgroundLink: "https://play.tailwindcss.com/CpfdeRMOF0",
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">
        Hover over me
      </div>
    ),
  },
  {
    title: "Underlay Left Right",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L114",
    playgroundLink: "https://play.tailwindcss.com/L7dQEa01J0",
    source: (
      <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
        <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: "Text Transform & Color",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L126",
    playgroundLink: "https://play.tailwindcss.com/zbRrj0ZCee",
    source: (
      <div className="text-gray-200 translate-x-0 hover:text-sky-600 hover:translate-x-1 transition ease-in-out duration-200">
        Hover over me
      </div>
    ),
  },
  {
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
  },
  {
    title: "Underlay Expanding Circle",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L153",
    playgroundLink: "https://play.tailwindcss.com/nEHCtBr6iK",
    source: (
      <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
        <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
          Hover over me
        </span>
      </div>
    ),
  },
  {
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
  },
  {
    title: "Hover Scale Button",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L187",
    playgroundLink: "https://play.tailwindcss.com/ll5x3lzO6V",
    source: (
      <div className="px-6 py-3 bg-gray-200 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200">
        Hover over me
      </div>
    ),
  },
  {
    title: "Active Underline Left Right",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L197",
    playgroundLink: "https://play.tailwindcss.com/uDx5TA9jhf",
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
        Hover over me
      </div>
    ),
  },
  {
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
  },
  {
    title: "Gradient Tilt",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L223",
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
  },
  {
    title: "Background Pulse",
    editLink: "https://github.com/Pondorasti/tailwindcss-snippets/blob/main/data/snippets.tsx#L244",
    playgroundLink: "https://play.tailwindcss.com/Mf77KHXg25",
    source: <div className="animate-pulse bg-gray-900 h-12 w-40 rounded-lg"></div>,
  },
]

export default snippets
