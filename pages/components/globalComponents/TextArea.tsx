'use client'
import React from 'react'
import { TextAreaTypes } from '../../../types'

const TextArea: React.FC<TextAreaTypes> = ({ name, valor, setValor, color, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <textarea placeholder={placeholder} id={name} value={valor} onChange={e => setValor(e.target.value)} />
      <style jsx>{`
        label{
          color:#${color};
        }
        textarea{
          max-width: 600px
          width: 100%;
          height: 150px; 
          resize: none;
          border:none;
          margin: .3rem 0 0;
          font-size: 1.2rem;
          padding: .4rem ;
          background:none;
          border-bottom: solid 1px #${color};
          color: #${color};
          margin: .3rem 0 2rem 0;
        }
        textarea:focus{
          box-shadow:0 0 0 0;
          outline:0;
        }
      `}</style>
    </>
  )
}

export default TextArea