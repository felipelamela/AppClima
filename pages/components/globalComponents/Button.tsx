import React from 'react'
import { ButtonTypes } from '../../../types'


const Button: React.FC<ButtonTypes> = ({ name }) => {
  return (
    <>
      <button >{name}</button>
      <style jsx>{`
        button{
          justify-self:flex-start;
          display:block;
          margin:0;
        }
      `}</style>

    </>
  )
}

export default Button