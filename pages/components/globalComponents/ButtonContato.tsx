import React from 'react'
import { ButtonContatoType } from '../../../types'


const ButtonContato: React.FC<ButtonContatoType> = ({ rota, nome, color }) => {
  return (
    <>
      <a href={rota}>{nome}</a >
      <style jsx>{`
        a{
          background:red;
          padding: 1rem 2rem; 
          border-radius: 10px;
          font-size:1.2rem;
          color: ${color};
          background:#ffffff10;
          border:1px solid ${color}
        }
      
      `}</style>

    </>
  )
}

export default ButtonContato