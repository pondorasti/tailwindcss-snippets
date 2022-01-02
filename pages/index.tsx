import Head from "next/head"
import Card from "@components/Card"
import snippets from "@data/snippets"

function Home(): JSX.Element {
  const linkStyle = "text-sm font-medium text-gray-200 opacity-70 hover:opacity-100 transition-[opacity] duration-200"
  const iconStyle = "h-6 w-6"

  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8">
      <Head>
        <title>TailwindCSS Snippets</title>
        <meta name="description" content="A collection of snippets made with TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-white py-8 flex items-center justify-between">
        <div className="tracking-wide font-medium text-lg">TailwindCSS Snippets</div>
        <div className="flex gap-4">
          <a className={linkStyle} target="_blank" rel="noopener noreferrer" href="https://twitter.com/Pondorasti/">
            <span className="sr-only">Twitter account</span>
            <svg className={iconStyle} viewBox="0 0 24 24" fill="currentColor">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
            </svg>
          </a>
          <a className={linkStyle} target="_blank" rel="noopener noreferrer" href="https://github.com/pondorasti/">
            <span className="sr-only">GitHub account</span>
            <svg className={iconStyle} viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
          </a>
        </div>
      </header>

      <main>
        <h1 className="mt-8 text-white text-center text-3xl font-semibold sm:text-4xl">
          Right click the animation <br /> to copy the styling
        </h1>
        <hr />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {snippets.map(({ title, source }) => (
            <Card key={title} source={source} />
          ))}
        </div>
      </main>

      <footer>
        <hr />
        <div className="my-16 text-center text-gray-500 text-sm font-light">
          Crafted by{" "}
          <span className="text-gray-200">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/pondorasti/">
              Alex
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
