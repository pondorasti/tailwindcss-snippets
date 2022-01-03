import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render(): JSX.Element {
    const title = "TailwindCSS Snippets"
    const description = "A collection of animation snippets made with TailwindCSS"
    const image = "https://snippets.alexandru.so/thumbnail.png"

    return (
      <Html lang="en" className="nightwind">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />

          {/* Title */}
          <title>{title}</title>
          <meta name="og:title" content={title} />

          {/* Description */}
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />

          {/* Image */}
          <meta name="twitter:image" content={image} />
          <meta name="og:image" content={image} />

          {/* URL */}
          <meta name="og:url" content="https://snippets.alexandru.so/" />

          {/* General */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@pondorasti" />
          <meta name="author" content="Alexandru Turcanu" />

          {/* Inter Font */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="relative bg-[#0a1120] ">
          <div className="absolute h-full w-full bg-[url('/beams.png')] bg-cover bg-center bg-fixed">
            <div className="absolute h-full w-full bg-[url('/grid.svg')] [background-position:calc(100%+5px)_calc(100%+5px)] bg-fixed" />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
