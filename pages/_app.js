import '@/styles/index.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      {/* <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        ></link>
        <link rel="shortcut icon" href="favicon/favicon.ico"></link>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg"></link>
        <meta name="msapplication-TileColor" content="#000000"></meta>
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        ></meta>
        <meta name="theme-color" content="#000"></meta>
        <meta name="robots" content="index, follow"></meta>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/feed.xml"
        ></link>
      </Head> */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
