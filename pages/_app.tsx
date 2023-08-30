import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google"
import Head from "next/head";
import './global.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clima App</title>
        <meta name="description" content="Clima de sua região com um novo formato" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={montserrat.className}>
        <Component{...pageProps} />
      </main>
    </>
  )
}