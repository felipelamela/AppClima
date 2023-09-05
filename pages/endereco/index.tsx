import React from 'react'
import { useRouter } from 'next/router';
import useFetchViaCep from '../components/utilits/useFetchViaCep';
import useFetchOpenWeather from '../components/utilits/useFechtOpenWeather';
import Header from '../components/sectionComponents/Header';
import { ListaDeLocaisTypes } from '../../types';
import CardEndereco from '../components/sectionComponents/CardEndereco';
import backgroundModule from '../components/utilits/backgroundModule';
import { error } from 'console';

const fundo = {
  'day': 'linear-gradient(90deg, rgba(81, 159, 223, 1), rgba(214, 110, 11, 1))',
  'night': 'linear-gradient(90deg, rgba(84, 90, 147, 1), rgba(24, 31, 97, 1))'
}


const index = () => {
  //buscador
  const [local, setLocal] = React.useState<string | string[]>('')
  const [listaUsuario, setListaUsuario] = React.useState<ListaDeLocaisTypes[]>([])
  const [horario, setHorario] = React.useState<number | null>(null)

  const { endereco, setEndereco, errorViaCep, fetchCep } = useFetchViaCep()
  const { clima, errorOpenWeather, fetchOpenWeather, setErrorOpenWeather } = useFetchOpenWeather(listaUsuario)

  const router = useRouter()
  React.useEffect(() => {
    const dataAtual = new Date()
    const horas = dataAtual.getHours()
    setHorario(horas)


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
    if (errorOpenWeather) {
      setTimeout(() => {
        setErrorOpenWeather('')
      }, 2000)
    }
  }, [errorOpenWeather])

  React.useEffect(() => {
    if (clima) {
      setListaUsuario([...listaUsuario, clima])
    }
  }, [clima])

  function handleButton(id?: number) {
    const lista = listaUsuario.filter(user => user.id !== id)
    setListaUsuario(lista)
  }

  return (
    <section>
      {errorOpenWeather && <p>{errorOpenWeather}</p>}
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
      p{
        position:absolute;
        top:50px;
        background:#a12f2f;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        animation: Error .2s ease;
        left: 50%; 
        white-space: nowrap;
        transform: translateX(-50%);
      }
        .glob{
          max-height: 650px;
          overflow: auto;
          box-size:border-box;
        }
        .containerCard{
          display: flex;
          max-width: 560px;
          margin: 1rem auto;
          justify-content: space-between;
          padding: 1rem 2rem;
          border: 1px solid ${horario > 5 && horario < 18 ? 'black' : "white"};
          border-radius: 10px;
        }
        button{
          align-self:center;
          font-size:2rem;
          border: none;
          border-radius:5px;
          color: ${horario > 5 && horario < 18 ? 'black' : "white"};
          background:#FF000070;
          cursor:pointer;
        }
        @media(max-width: 700px){
          .glob{
            max-height: 500px;
            overflow: auto;
          }
          p{
            top:220px;
          }
        }

        @keyframes Error{
          from{
            opacity:0
          }to{
            opacity:1
          }
        }


        `}</style>

    </section>
  )
}

export default index
