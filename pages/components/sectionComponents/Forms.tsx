'use client'
import React from 'react'
import Input from '../globalComponents/Input'
import Button from '../globalComponents/Button'
import TextArea from '../globalComponents/TextArea'
import cleanInputs from '../utilits/cleanInputs'
import InputFile from '../globalComponents/InputFile'

const Forms = () => {
  const [nome, setNome] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [contato, setContato] = React.useState<string>('')
  const [mensagem, setMensagem] = React.useState<string>('')
  const [arquivo, setArquivo] = React.useState<File | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): null {
    e.preventDefault()
    const novoContato = {
      'nome': nome,
      'email': email,
      'contato': contato,
      'mensagem': mensagem,
      'pdf': arquivo
    }
    if (!arquivo === null) {

      console.log(novoContato)
      //Limpando os inputs após enviar
      cleanInputs(
        setNome,
        setEmail,
        setContato,
        setMensagem,
        setArquivo)
    }
    return null
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>

        <Input label='Nome' type='text' valor={nome} setValor={setNome} typeFormat='string' />
        <Input label='Email' type='text' valor={email} setValor={setEmail} typeFormat='string' />
        <Input label='Contato' type='tel' valor={contato} setValor={setContato} typeFormat='number' />
        <TextArea name='Mensagem' valor={mensagem} setValor={setMensagem} />
        <InputFile label='Arquivo' tipoArquivo='.pdf' setValor={setArquivo} />
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