import React from 'react'
import { ListaDeLocaisTypes } from '../../../types';

const useFetchOpenWeather = (lista?: ListaDeLocaisTypes[]) => {
  const [clima, setClima] = React.useState<ListaDeLocaisTypes | null>(null);
  const [errorOpenWeather, setErrorOpenWeather] = React.useState<string | null>(null);

  async function fetchOpenWeather(cidade: string | string[]) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=831abf463c39305a62a4a3ec257719a7`);
    if (!response.ok) {
      return setErrorOpenWeather('Falha ao buscar a Cidade');
    }
    const local = await response.json()
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


  };

  return { clima, errorOpenWeather, fetchOpenWeather, setErrorOpenWeather };
}

export default useFetchOpenWeather