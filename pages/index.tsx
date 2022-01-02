import Head from "next/head"

interface ICard {
  title?: string
  style?: string
  source: JSX.Element
}

const cards: ICard[] = [
  {
    title: "Underline Left Right",
    source: (
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
        Hover over me
      </div>
    ),
  },
  {
    title: "Pulse",
    source: (
      <div className="flex h-10 w-10 absolute">
        <span className="animate-ping absolute h-10 w-10 -top-5 -left-5 rounded-full bg-gray-200 opacity-75"></span>
        <span className="relative rounded-full h-10 w-10 -top-5 -left-5 bg-gray-200"></span>
      </div>
    ),
  },
]

function Card({ source }: ICard): JSX.Element {
  // console.log(source.props.className)
  return (
    <div className="bg-gray-800 h-32 w-56 rounded-lg flex cursor-context-menu">
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
          {cards.map(({ source, style }) => (
            <Card source={source} style={style} />
          ))}

          <div className="bg-gray-800 h-32 w-56 rounded-lg flex">
            <div className="m-auto text-gray-200">
              <div>Hello</div>
            </div>
          </div>
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
          <div className="bg-red-500 h-32 w-56 rounded-lg" />
        </div>
      </main>

      {/* <footer>built by alex</footer> */}
    </div>
  )
}

export default Home
