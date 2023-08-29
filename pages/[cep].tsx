import React from 'react'
import axios from 'axios';
import Input from './components/globalComponents/Input';

const index = () => {
  const [cep, setCep] = React.useState<string>('')


  React.useEffect(() => {
    if (cep.length === 8) {
      axios.get(`http://viacep.com.br/ws/${cep}/json`)
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
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude, "Longitude:", longitude);
      });
    }

  }, [cep])


  return (
    <Input typeFormat='number' label='CEP' type='text' valor={cep} setValor={setCep} />
  )
}

export default index



// Apikey = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=831abf463c39305a62a4a3ec257719a7

//https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${Apikey}&lang=pt_br

//google key AIzaSyClJY-3CSa_j56ynCaBhccfX4_rKfBrNPE