import React from 'react'
import { InputTypes } from '../../../types'


const Input: React.FC<InputTypes> = ({ label, type, valor, setValor, typeFormat, placeholder, color }) => {

  //validação de numero && string
  function format(e: React.ChangeEvent<HTMLInputElement>, typeFormat: string) {
    const valor = +e.target.value

    if (typeFormat === 'number' && !Number.isNaN(valor)) {
      return setValor(e.target.value)
    }
    if (typeFormat === 'string') {
      return setValor(e.target.value)
    }

  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        required
        value={valor}
        onChange={e => format(e, typeFormat)}
        placeholder={placeholder}
      />
      <style jsx > {`
        input{
          margin: .3rem 0 1rem 0;
          font-size: 1.2rem;
          padding: .4rem;
          border:none;
          background:none;
          color:${color};
        }
        input:focus{
          box-shadow:0 0 0 0;
          outline:0;
        }

      `}</style >
    </>
  )
}

export default Input