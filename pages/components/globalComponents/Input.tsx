import React from 'react'
import { InputTypes } from '../../../types'


const Input: React.FC<InputTypes> = ({ label, type, valor, setValor }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        required
        value={valor}
        onChange={e => setValor(e.target.value)} />
      <style jsx>{`
        input{
          margin: .3rem 0 1rem 0;
          font-size: 1.2rem;
          padding: .4rem 
        }
      
      `}</style>
    </>
  )
}

export default Input