import React from 'react'
import { ButtonTypes } from '../../../types'


const Button: React.FC<ButtonTypes> = ({ name }) => {

  /*
    function handleButton(e: React.MouseEvent<HTMLButtonElement>): void {
      e.preventDefault()
  
  
      return null
    }
  
  
  */

  return (
    <>
      <button >{name}</button>
      <style jsx>{`
        button{
          justify-self:flex-start;
        }
      `}</style>

    </>
  )
}

export default Button