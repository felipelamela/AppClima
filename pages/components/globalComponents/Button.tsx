import React from 'react'
import { ButtonTypes } from '../../../types'


const Button: React.FC<ButtonTypes> = ({ name, color }) => {
  return (
    <>
      <button >{name}</button>
      <style jsx>{`
        button{
          justify-self:flex-start;
          display:block;
          padding: 1rem 2rem; 
          border-radius: 10px;
          font-size:1rem;
          color: #${color};
          background:#ffffff10;
          border:1px solid #${color}
        }
      `}</style>

    </>
  )
}

export default Button