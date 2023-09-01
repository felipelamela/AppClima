import React from 'react'
import axios from 'axios'
import TitleComponent from './components/sectionComponents/TitleComponent'
import WeatherToday from './components/sectionComponents/WeatherToday'
import Clima from "./components/globalComponents/Clima"


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
  const [vento, setVento] = React.useState<number | null>(null)
  const [clima, setClima] = React.useState<string | null>(null)
  const [periodo, setPeriodo] = React.useState<string | null>(null)


  //geolocal HTML5
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude:", latitude, "Longitude:", longitude);
      setLatUser(latitude)
      setLngUser(longitude)

      setPeriodo(localStorage.getItem('periodo'))

    });
  }, [])

  //fetch usuario local
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
          setVento(clima.wind.speed)
          setClima(clima.weather[0].description)
        })
        .catch(error => {
          console.error(error);
        });
    }

  }, [latUser])

  console.log(periodo)

  if (tempNow === null) return <p> Carregando </p>

  return (

    <>
      <section>
        <div className='mainContent'>
          <div className='divDados'>
            <div >
              <TitleComponent tagCidade='h2' tagPais='h2' cidade={cidade + ' |'} pais={pais} />
            </div>
            <div >
              <WeatherToday
                tempNow={Math.floor(tempNow)}
                tempMax={Math.floor(tempMax)}
                tempMin={Math.floor(tempMin)}
                umidade={Math.floor(umidade)}
                speed={vento}
              />
            </div>
          </div>
          <Clima horario={periodo} clima={clima} />


        </div>

      </section>

      <style jsx>{`

      .mainContent{
        margin: 0 auto;
        justify-content:space-around;
        display:flex;
        margin: 6rem auto 0;
        align-items: center;
      }
      .divDados{
        padding: 2rem;
        max-width: 330px;
      }

      @media (max-width:800px){
        .mainContent{
          justify-items:center;
          max-width: 1200px;
          display:grid;
          gap: 1rem;
          margin: 0 auto ;

        }
        .divDados{
          padding:0;
          order:2;
          position: relative;
        } 
        .divImagem{
          order:1;

        } 
        .Imagem{
          max-width:100%;
          heigth:auto;

        }
      }
    `}</style>
    </>

  )
}

export default index
