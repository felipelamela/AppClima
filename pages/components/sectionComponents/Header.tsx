import React from 'react'
import Link from 'next/link'
import Input from '../globalComponents/Input'
import formatBuscador from '../utilits/formatBuscador'


const Header = ({segundaRota, segundoBotao}) => {
  const [buscador, setBuscador] = React.useState<string>('')
  return (
    <>
      <Input label='Buscar' type="text" valor={buscador} setValor={setBuscador} typeFormat='string' />
      <Link href={{
        pathname: '/endereco',
        query: { endereco: `${formatBuscador(buscador)}` }
      }}>Buscar</Link>
      <Link href={{
        pathname: `${segundaRota}`
      }}>{segundoBotao}</Link >


    </>
  )
}

export default Header