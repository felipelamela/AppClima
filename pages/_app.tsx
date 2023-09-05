import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google"
import React from 'react'
import Head from "next/head";
import './global.css'
import Header from "./components/sectionComponents/Header";
import backgroundModule from "./components/utilits/backgroundModule";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function App({ Component, pageProps }: AppProps) {

  const [horario, setHorario] = React.useState<number | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    const dataAtual = new Date()
    const horas = dataAtual.getHours()
    setHorario(horas)
    localStorage.setItem('horario', `${horas}`)

    if (horas < 18 && horas > 4) {
      localStorage.setItem('periodo', "day ")
      localStorage.setItem('cor', '292929')
    } else {
      localStorage.setItem('cor', 'EFEFEF')
      localStorage.setItem('periodo', 'night ')
    }
  }, [])


  return (
    <>
      <Head>
        <title>Clima App</title>
        <meta name="description" content="Clima de sua região com um novo formato" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={montserrat.className}>
        <Header segundaRota={router.pathname === '/forms' ? '/' : '/forms'} segundoBotao={router.pathname === '/forms' ? 'Home' : 'Contato'} />
        <Component{...pageProps} />
      </main>
      <style jsx global>{`
      
      body{
        background: ${backgroundModule(horario)};
      }
    
      `}</style>
    </>
  )
}