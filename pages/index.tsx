import React from 'react'
import axios from 'axios'
import Input from './components/globalComponents/Input'
import Link from 'next/link'
import formatBuscador from './components/utilits/formatBuscador'


const index = () => {
  //dados local 
  const [latUser, setLatUser] = React.useState<number | null>(null)
  const [lngUser, setLngUser] = React.useState<number | null>(null)

  // dados fetch usuario local
  const [cidade, setCidade] = React.useState<string | null>(null)
  const [pais, setPais] = React.useState<string | null>(null)
  const [tempMax, setTempMax] = React.useState<number | null>(null)
  const [tempMin, setTempMin] = React.useState<number | null>(null)
  const [tempNow, setTempNow] = React.useState<number | null>(null)
  const [umidade, setUmidade] = React.useState<number | null>(null)

  //buscador
  const [buscador, setBuscador] = React.useState<string>('')


  //geolocal HTML5
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude:", latitude, "Longitude:", longitude);
      setLatUser(latitude)
      setLngUser(longitude)
    });
  }, [])

  //fetch usuario local
  /*
    React.useEffect(() => {
    if (latUser !== null) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latUser}&lon=${lngUser}&units=metric&appid=831abf463c39305a62a4a3ec257719a7`)
        .then(response => {
          const clima = response.data;
          setPais(clima.sys.country)
          setUmidade(clima.main.humidity)
          setTempMin(clima.main.temp_min)
          setTempMax(clima.main.temp_max)
          setCidade(clima.name)
          setTempNow(clima.main.feels_like)
        })
        .catch(error => {
          console.error(error);
        });
    }

  }, [latUser])

  if (tempNow === null) return <p> Carregando </p>
 */
  return (
    <>
      <Input label='Buscar' type="text" valor={buscador} setValor={setBuscador} typeFormat='string' />
      <button><Link href={{
        pathname: '/endereco',
        query: { endereco: `${formatBuscador(buscador)}` }
      }}>Buscar</Link></button>
      <h2>{pais}</h2>
      <h3>{cidade}</h3>
      <p>{tempNow}º</p>
      <p>{tempMax}º</p>
      <p>{tempMin}º</p>
      <p>{umidade}%</p>
    </>
  )
}

export default index

