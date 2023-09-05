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
  const [envioDoForms, setEnvioDoForms] = React.useState<string | null>(null)


  const [periodo, setPeriodo] = React.useState<string | null>(null)
  const [color, setColor] = React.useState<string | null>(null)


  React.useEffect(() => {
    setPeriodo(localStorage.getItem('periodo'))
    setColor(localStorage.getItem('cor'))
  }, [])





  function handleSubmit(e: React.FormEvent<HTMLFormElement>): null {
    e.preventDefault()
    const novoContato = {
      'nome': nome,
      'email': email,
      'contato': contato,
      'mensagem': mensagem,
      'pdf': arquivo
    }
    if (arquivo?.type === "application/pdf") {
      setEnvioDoForms('Enviado com Sucesso.')
      //Limpando os inputs após enviar
      console.log(novoContato)
      cleanInputs(
        setNome,
        setEmail,
        setContato,
        setMensagem,
        setArquivo)
    } else {
      setEnvioDoForms("Erro ao enviar")
    }
    setTimeout(() => {
      setEnvioDoForms(null)
    }, 3000)
    return null
  }


  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        {envioDoForms && <p>{envioDoForms}</p>}

        <Input placeholder='Seu nome' classD='forms' color={color} label='Nome' type='text' valor={nome} setValor={setNome} typeFormat='string' />
        <Input placeholder='Seu E-mail' classD='forms' color={color} label='Email' type='email' valor={email} setValor={setEmail} typeFormat='string' />
        <Input placeholder='99 99999 9999' classD='forms' color={color} label='Contato' type='tel' valor={contato} setValor={setContato} typeFormat='number' />
        <TextArea placeholder='Deixe sua mensagem' color={color} name='Mensagem' valor={mensagem} setValor={setMensagem} />
        <InputFile color={color} label='Arquivo' tipoArquivo='.pdf' setValor={setArquivo} />
        <Button color={color} name='Enviar' />
      </form>
      <style jsx>{`
        form{
          margin: 0 auto;
          display:grid;
          max-width: 500px;
          width:100%;
        }

        p{
          position:absolute;
          top:50px;
          background:${envioDoForms === "Erro ao enviar" ? '#a12f2f' : 'green'};
          padding: 1rem 2rem;
          border-radius: 10px;
          color: white;
          animation: Error .2s ease;
          left: 50%; 
          white-space: nowrap;
          transform: translateX(-50%);
        }
        @keyframes Error{
          from{
            opacity:0
          }to{
            opacity:1
          }
        }
        @media(max-width:700px){
          p{
            top:220px;
          }
        }
      `}</style>

    </>

  )
}

export default Forms