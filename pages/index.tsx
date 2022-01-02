import Head from "next/head"

interface ICard {
  title?: string
  source: JSX.Element
  animation?: string
}

const cards: ICard[] = [
  {
    title: "Underline Left Right",
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
        Hover over me
      </div>
    ),
  },
  {
    title: "Pulse",
    source: (
      <div className="flex h-8 w-8 absolute">
        <span className="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-gray-200 opacity-75"></span>
        <span className="relative rounded-full h-8 w-8 -top-4 -left-4 bg-gray-200"></span>
      </div>
    ),
  },
  {
    title: "Keyboard Button",
    source: (
      <div className="px-6 py-3 bg-gray-200 text-black rounded-lg border-b-4 border-b-gray-400 hover:border-b-0 transition-all ease-in-out duration-100">
        Hover over me
      </div>
    ),
  },
  {
    title: "Underlay Marker",
    source: (
      <div className="relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
        <span className="relative">Hover over me</span>
      </div>
    ),
  },
  {
    title: "Underlay Left",
    source: (
      <div className="group px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
        <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: "Spinner",
    source: (
      <svg
        className="animate-spin -ml-1 mr-3 h-8 w-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
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
    source: (
      <div className="px-6 py-3 bg-gray-200 text-black rounded-lg hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200">
        Hover &amp; hold me
      </div>
    ),
  },
  {
    title: "Swing",
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
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">
        Hover over me
      </div>
    ),
  },
  {
    title: "Underlay Left Right",
    source: (
      <div className="group px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
        <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: "Text Transform & Color",
    source: (
      <div className="text-gray-200 translate-x-0 hover:text-sky-600 hover:translate-x-1 transition ease-in-out duration-200">
        Hover over me
      </div>
    ),
  },
  {
    title: "Shimmer",
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
    title: "Three Dots Loader",
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
    source: (
      <div className="px-6 py-3 bg-gray-200 text-black rounded-lg hover:scale-110 transition-transform ease-in-out duration-200">
        Hover over me
      </div>
    ),
  },
  {
    title: "Active Underline Left Right",
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
        Hover over me
      </div>
    ),
  },
]

function Card({ source }: ICard): JSX.Element {
  // console.log(source.props.className)
  return (
    <div className="bg-gray-800 border border-gray-500/30 h-32 w-56 rounded-lg flex cursor-context-menu">
      <div className="m-auto text-gray-200">{source}</div>
    </div>
  )
}

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Tailwind Snippets</title>
        <meta name="description" content="A collection of snippets made with TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-lg mx-auto mt-8">
        {/* <h1>Right click the animation to copy the styling</h1> */}

        <div className="flex flex-wrap gap-8">
          {cards.map(({ source }) => (
            <Card source={source} />
          ))}

          <div className="bg-gray-800 h-32 w-56 rounded-lg flex">
            <div className="m-auto text-gray-200"></div>
          </div>
        </div>
      </main>

      {/* <footer>built by alex</footer> */}
    </div>
  )
}

export default Home
