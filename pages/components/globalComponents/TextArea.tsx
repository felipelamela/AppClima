'use client'
import React from 'react'
import { TextAreaTypes } from '../../../types'

const TextArea: React.FC<TextAreaTypes> = ({ name, valor, setValor }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <textarea id={name} value={valor} onChange={e => setValor(e.target.value)} />
      <style jsx>{`
        textarea{
          max-width: 600px
          width: 100%;
          height: 150px; 
          resize: none;
          margin: .3rem 0 0;
          font-size: 1.2rem;
          padding: .4rem ;
          font-weight: regular;
        }
      `}</style>
    </>
  )
}

export default TextArea