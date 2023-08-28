import React from 'react'
import { InputFilesTypes } from '../../../types'

const InputFile: React.FC<InputFilesTypes> = ({ label, tipoArquivo, setValor }) => {
  const [estilo, setEstilo] = React.useState('desativo')


  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const arquivo = e.target.files?.[0]
    if (arquivo && arquivo.type === 'application/pdf') {
      setValor(arquivo)
      setEstilo('desativo')
    } else {
      setEstilo('ativo')
      setValor(null)
    }

  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        className={estilo}
        type='file'
        id={label}
        accept={tipoArquivo}
        onChange={handleFile} />
      {estilo === 'ativo' ? <p>Apenas PDF são permitidos.</p> : ''}
      <style jsx>{`
        input{
          margin: .3rem 0 1rem 0;
          font-size: 1.2rem;
          padding: .4rem ;
          text:none;
          position:relative;
        }
        p{
          margin: 0;
          padding:0;
          font-size:.7rem;
          position:relative;
          top:-40px;
          left: 10px;
        }
        .ativo{
          border: 1px solid red;
          border-radius: 10px;
          background: #ff00002b;
          padding: .4rem .4rem 30px;
        }
      
      `}</style>
    </>
  )
}

export default InputFile