import React from 'react'
import { InputTypes } from '../../../types'
import { useRouter } from 'next/router';


const Input: React.FC<InputTypes> = ({ label, type, valor, setValor, typeFormat, placeholder, color, pressDown, classD }) => {
  const router = useRouter()

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
  function pressEnter(e) {
    if (e.code === "Enter" && valor.length >= 1) {
      const endereco = pressDown(valor)
      router.push({
        pathname: '/endereco',
        query: { endereco },
      })
    }
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        className={classD}
        type={type}
        id={label}
        required
        value={valor}
        onKeyDown={e => pressEnter(e)}
        onChange={e => format(e, typeFormat)}
        placeholder={placeholder}
      />
      <style jsx > {`
        label{
          color: #${color}
        }
        input{

          font-size: 1.2rem;
          padding: .4rem;
          border:none;
          background:none;
          color: #${color};

        }
        input:focus{
          box-shadow:0 0 0 0;
          outline:0;
        }
        .forms{
          margin: .3rem 0 2rem 0;
          border-bottom: solid 1px #${color};
        }

      `}</style >
    </>
  )
}

export default Input