import React from 'react'
import Input from '../globalComponents/Input'
import Button from '../globalComponents/Button'
import TextArea from '../globalComponents/TextArea'

const Forms = () => {


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>

        <Input label='Nome' type='text' />
        <Input label='Email' type='text' />
        <Input label='Contato' type='tel' />
        <TextArea />
        <Button name='Enviar' />
      </form>
      <style jsx>{`
        form{
          margin: 0 auto;
          display:grid;
          max-width: 500px;
          width:100%;
        }
      `}</style>

    </>

  )
}

export default Forms