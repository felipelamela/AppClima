import React from 'react'
import axios from 'axios';

const useFetchOpenWeather = () => {
  const [clima, setClima] = React.useState<null>(null);
  const [errorOpenWeather, setErrorOpenWeather] = React.useState<string | null>(null);

  const fetchOpenWeather = (cidade: string) => {
    try {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=831abf463c39305a62a4a3ec257719a7`)
        .then(response => {
          const local = response.data;
          setClima(local)
        })
    } catch (error) {
      setErrorOpenWeather(error);
    }
  };

  return { clima, errorOpenWeather, fetchOpenWeather };
}

export default useFetchOpenWeather