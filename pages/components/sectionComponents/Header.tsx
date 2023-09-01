import React from 'react'
import Link from 'next/link'
import Input from '../globalComponents/Input'
import formatBuscador from '../utilits/formatBuscador'
import ButtonContato from '../globalComponents/ButtonContato'



const Header = ({ segundaRota, segundoBotao }) => {
  const [buscador, setBuscador] = React.useState<string>('')

  return (
    <>
      <div className='containerHeader'>
        <div className='containerBusca'>
          <Input label='' type='text' valor={buscador} setValor={setBuscador} typeFormat='string' />
          <Link href={{
            pathname: '/endereco',
            query: { endereco: `${formatBuscador(buscador)}` }
          }}><img src='/images/lupa.svg' /></Link>
        </div>
        <ButtonContato rota={segundaRota} nome={segundoBotao} />

      </div>
      <style jsx>{`
      .buttonContato{
        background:red;
      }
      .containerHeader{
          margin: 0 auto;
          display:flex;
          max-width: 1400px;
          padding: 1rem 2rem;
          align-items: center;
          justify-content: end;
        }
        img{
            max-width:30px;
            background:none;
            vertical-align: text-top;
            
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
          border:1px solid #eeeeee;
          padding:.3rem  1rem 0 .3rem;
          margin:1rem;
          border-radius:10px;
        }
        @media(max-width:800px){
          .containerHeader{
            justify-content:center
          }
        }
        @media(max-width:552px){
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