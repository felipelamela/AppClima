import axios from 'axios';
import React from 'react'
import Input from '../components/globalComponents/Input';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useFetchViaCep from '../components/utilits/useFetchViaCep';
import useFetchOpenWeather from '../components/utilits/useFechtOpenWeather';

const index = () => {
  //buscador
  const [buscador, setBuscador] = React.useState<string>('')
  const [local, setLocal] = React.useState('')

  const { endereco, setEndereco, errorViaCep, fetchCep } = useFetchViaCep()
  const { clima, errorOpenWeather, fetchOpenWeather } = useFetchOpenWeather()

  const router = useRouter()
  React.useEffect(() => {
    if (Number.isNaN(+router.query.endereco)) {
      setEndereco(router.query.endereco)
    } else {
      setLocal(router.query.endereco)
    }
  }, [router])

  React.useEffect(() => {
    if (local.length === 8) {
      fetchCep(local)
    }
  }, [local])

  React.useEffect(() => {
    if (endereco) {
      fetchOpenWeather(endereco)
    }

  }, [local, endereco])

  return (
    <>
      <Input label='Buscar' type="text" valor={buscador} setValor={setBuscador} typeFormat='string' />
      <button><Link href={{
        pathname: '/endereco',
        query: { endereco: `${buscador}` }
      }}>Buscar</Link></button>

    </>
  )
}

export default index
