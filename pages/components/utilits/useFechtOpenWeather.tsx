import React from 'react'
import axios from 'axios';
import { ListaDeLocaisTypes } from '../../../types';

const useFetchOpenWeather = (lista?: ListaDeLocaisTypes[]) => {
  const [clima, setClima] = React.useState<ListaDeLocaisTypes | null>(null);
  const [errorOpenWeather, setErrorOpenWeather] = React.useState<string | string[]>('');

  const fetchOpenWeather = (cidade: string | string[]) => {
    try {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=831abf463c39305a62a4a3ec257719a7`)
        .then(response => {
          const local = response.data;
          const dados: ListaDeLocaisTypes = {
            id: lista.length,
            cidade: local.name,
            pais: local.sys.country,
            tempNow: local.main.feels_like,
            tempMax: local.main.temp_max,
            tempMin: local.main.temp_min,
            umidade: local.main.temp_max,
            vento: local.wind.speed,
          }
          setClima(dados)
          console.log(local)
        })
    } catch (error) {
      setErrorOpenWeather(error);
    }
  };

  return { clima, errorOpenWeather, fetchOpenWeather };
}

export default useFetchOpenWeather