import React from 'react'
import Forms from '../components/sectionComponents/Forms'


const index = () => {
  const [horario, setHorario] = React.useState<number | null>(null)


  React.useEffect(() => {
    const dataAtual = new Date()
    const horas = dataAtual.getHours()
    setHorario(horas)
  }, [])


  return (
    <section>
      <Forms />
      <style jsx>{`

      `}</style>
    </section>
  )
}

export default index