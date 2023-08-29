import React from 'react'
import axios from 'axios'

const index = () => {
  const [latUser, setLatUser] = React.useState<number | null>(null)
  const [lngUser, setLngUser] = React.useState<number | null>(null)


  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude:", latitude, "Longitude:", longitude);
      setLatUser(latitude)
      setLngUser(longitude)
    });
  }, [])

  React.useEffect(() => {
    if (latUser !== null) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latUser}&lon=${lngUser}&units=metric&appid=831abf463c39305a62a4a3ec257719a7`)
        .then(response => {
          const endereco = response.data;
          console.log(endereco)
          if (!endereco.erro) {
            console.log('CEP encontrado:', endereco.cep);
          } else {
            console.log('Rua não encontrada.');
          }
        })
        .catch(error => {
          console.error('Erro ao consultar o CEP:', error);
        });
    }
  }, [latUser])



  return (
    <>



    </>
  )
}

export default index

// chave api https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}


/*


if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude:", latitude, "Longitude:", longitude);
    setLatUser(latitude)
    setLngUser(longitude)
  });
}

if (latUser && lngUser) {
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latUser}&lon=${lngUser}&appid=831abf463c39305a62a4a3ec257719a7`)
    .then(response => {
      const endereco = response.data;
      console.log(endereco)
      if (!endereco.erro) {
        console.log('CEP encontrado:', endereco.cep);
      } else {
        console.log('Rua não encontrada.');
      }
    })
    .catch(error => {
      console.error('Erro ao consultar o CEP:', error);
    });
}

*/