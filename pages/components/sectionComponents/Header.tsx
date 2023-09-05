import React from 'react'
import Link from 'next/link'
import Input from '../globalComponents/Input'
import formatBuscador from '../utilits/formatBuscador'
import ButtonContato from '../globalComponents/ButtonContato'



const Header = ({ segundaRota, segundoBotao }) => {
  const [buscador, setBuscador] = React.useState<string>('')
  const [periodo, setPeriodo] = React.useState<string | null>(null)
  const [color, setColor] = React.useState<string | null>(null)


  React.useEffect(() => {
    setPeriodo(localStorage.getItem('periodo'))
    setColor(localStorage.getItem('cor'))

  }, [])

  if (periodo == null) return null

  return (
    <>
      <div className='containerH'>
        <div>
          <a className='Home' href='/'>ClimApp</a>
        </div>
        <div className='containerHeader'>
          <div className='containerBusca'>
            <Input color={color} label=' ' type='text' valor={buscador} setValor={setBuscador} pressDown={formatBuscador} typeFormat='string' />
            <Link href={{
              pathname: '/endereco',
              query: { endereco: `${formatBuscador(buscador)}` }
            }}><img width={30} height={30} src={`/images/lupa${periodo.trim()}.svg`} alt='busca' /></Link>
          </div>
          <ButtonContato color={color} rota={segundaRota} nome={segundoBotao} />

        </div>
      </div>
      <style jsx>{`
      .Home{
        color:#${color};
        font-size:2rem;
      }
      .containerH{
          margin: 0 auto;
          display:flex;
          justify-content:space-between;
          max-width: 1400px;
          padding: 1rem 2rem;
          align-items: center;
          justyfi-content: end;
        }
        .containerHeader{
          display:flex;
          max-width: 1400px;
          padding: 1rem 2rem;
          align-items: center;
          justify-content: end;
        }
        img{
            max-width:30px;
            background:none;
            vertical-align: middle;
            
          }
        input{
          font-size:1.3rem;
          padding: .3rem .6rem;
          background:none;
          border:none;
        }
        input:focus{
          box-shadow:0 0 0 0;
          outline:0;
        }
        .containerBusca{
          padding:0;
          background:#ffffff10;
          border:1px solid #${color};
          padding:.3rem  1rem 0 .3rem;
          margin:1rem;
          border-radius:10px;
        }
        @media(max-width:800px){
          .containerHeader{
            justify-content:center
          }
          .containerH{
            flex-wrap:wrap;
            justify-content: space-around;
          }

        }
        @media(max-width:620px){
          .containerHeader{
            flex-wrap:wrap;
            padding:0 ;
          }
          .containerBusca{
            margin: 1rem 0;
          }
          input{
            font-size:1.1rem;
            padding: .3rem .0 .3rem .6rem;
          }
        }

      `}</style>

    </>
  )
}

export default Header