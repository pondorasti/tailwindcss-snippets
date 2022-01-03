import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en" className="nightwind">
        <Head>
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
