import React from 'react'
import { useRouter } from 'next/router';
import useFetchViaCep from '../components/utilits/useFetchViaCep';
import useFetchOpenWeather from '../components/utilits/useFechtOpenWeather';
import Header from '../components/sectionComponents/Header';
import { ListaDeLocaisTypes } from '../../types';
import CardEndereco from '../components/sectionComponents/CardEndereco';
import backgroundModule from '../components/utilits/backgroundModule';

const fundo = {
  'day': 'linear-gradient(90deg, rgba(81, 159, 223, 1), rgba(214, 110, 11, 1))',
  'night': 'linear-gradient(90deg, rgba(84, 90, 147, 1), rgba(24, 31, 97, 1))'
}


const index = () => {
  //buscador
  const [local, setLocal] = React.useState<string | string[]>('')
  const [listaUsuario, setListaUsuario] = React.useState<ListaDeLocaisTypes[]>([])
  const { endereco, setEndereco, errorViaCep, fetchCep } = useFetchViaCep()
  const { clima, errorOpenWeather, fetchOpenWeather } = useFetchOpenWeather(listaUsuario)

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
  React.useEffect(() => {

    if (clima) {
      setListaUsuario([...listaUsuario, clima])
    }

  }, [clima])
  console.log(backgroundModule(3))

  function handleButton(id?: number) {
    const lista = listaUsuario.filter(user => user.id !== id)
    setListaUsuario(lista)
    console.log(listaUsuario)
  }

  return (
    <section>
      <Header segundaRota='forms' segundoBotao='Contato' />
      <div className='glob'>
        {listaUsuario.map((user, index) => (
          <div key={index} className='containerCard'>
            <CardEndereco
              cidade={user.cidade}
              pais={user.pais}
              tempNow={user.tempNow}
              tempMax={user.tempMax}
              tempMin={user.tempMin}
              umidade={user.umidade}
              vento={user.vento}
            />
            <button onClick={e => handleButton(user.id)}>&#x2715;</button>
          </div>
        ))}
      </div>
      <style jsx>{`
      section{
        background: ${fundo['day']};
        height:100vh;
      }
        .glob{
          max-height: 750px;
          overflow: auto;
        }
        .containerCard{
          display: flex;
          max-width: 560px;
          margin: 1rem auto;
          justify-content: space-between;
          padding: 1rem 2rem;
          border: 1px solid #eeeeee;
          border-radius: 10px;
        }
        button{
          align-self:center;
          font-size:2rem;
          border: none;
          border-radius:5px;
          color: #eeeeee;
          background:rgba(194, 45, 21, 1);
          cursor:pointer;
        }
        @media(max-width: 700px){
          .glob{
            max-height: 500px;
            overflow: auto;
          }
        }

        `}</style>

    </section>
  )
}

export default index
