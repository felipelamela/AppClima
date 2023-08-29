import axios from 'axios';
import React from 'react'
import Input from '../components/globalComponents/Input';
import { useRouter } from 'next/router';
import Link from 'next/link';

const index = () => {
  //buscador
  const [buscador, setBuscador] = React.useState<string>('')

  const router = useRouter()

  React.useEffect(() => {
    if (router.query.cep !== undefined) {
      console.log(typeof +router.query.cep)
      axios.get(`http://viacep.com.br/ws/${router.query.cep}/json`)
        .then(response => {
          const endereco = response.data;
          console.log(endereco)
        
        })
        .catch(error => {
          console.error('Erro ao consultar o CEP:', error);
        });
      router.query.cep = undefined
    }
    else if (buscador.length === 8) {
      axios.get(`http://viacep.com.br/ws/${buscador}/json`)
        .then(response => {
          const endereco = response.data;
          console.log(endereco)
        })
        .catch(error => {
          console.error('Erro ao consultar o CEP:', error);
        });
    }
  }, [buscador])


  return (
    <>

      <Input label='Buscar' type="text" valor={buscador} setValor={setBuscador} typeFormat='number' />
      <button><Link href={{
        pathname: '/endereco',
        query: { cep: `${buscador}` }
      }}>Buscar</Link></button>

    </>
  )
}

export default index



// Apikey = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=831abf463c39305a62a4a3ec257719a7

//https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${Apikey}&lang=pt_br

//google key AIzaSyClJY-3CSa_j56ynCaBhccfX4_rKfBrNPE