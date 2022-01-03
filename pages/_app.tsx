import "tailwindcss/tailwind.css"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import * as Fathom from "fathom-client"

function MyApp({ Component, pageProps }: AppProps) {
  // Fathom Analytics
  // Source: https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
  const router = useRouter()
  useEffect(() => {
    Fathom.load("LTCIFPOU", {
      url: "https://rook.alexandru.so/script.js",
      includedDomains: ["snippets.alexandru.so"],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
