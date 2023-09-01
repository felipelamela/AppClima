import React from 'react'
import Link from 'next/link'

interface ButtonContatoType {
  rota: string
  nome: string
}

const ButtonContato: React.FC<ButtonContatoType> = ({ rota, nome }) => {
  return (
    <>
      <a href={rota}>{nome}</a >
      <style jsx>{`
        a{
          background:red;
          padding: 1rem 2rem; 
          border-radius: 10px;
          font-size:1.2rem;
          color: #eeeeee;
          background:#ffffff10;
          border:1px solid #eeeeee
        }
      
      `}</style>

    </>
  )
}

export default ButtonContato