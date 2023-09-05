import React from 'react'
import axios from 'axios';
import useFetchOpenWeather from './useFechtOpenWeather';

const useFetchViaCep = () => {
  const [endereco, setEndereco] = React.useState<string | string[]>('');
  const [errorViaCep, setErrorViaCep] = React.useState<string | string[]>('');
  const { fetchOpenWeather } = useFetchOpenWeather()


  const fetchCep = (cep: string | string[]) => {
    try {
      axios.get(`http://viacep.com.br/ws/${cep}/json`)
        .then(response => {
          const local = response.data;
          setEndereco(local.localidade)
        })
    } catch (error) {
      setErrorViaCep(error)
    }


  };

  return { endereco, setEndereco, errorViaCep, fetchCep };
}

export default useFetchViaCep