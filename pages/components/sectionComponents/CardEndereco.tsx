import React from 'react'
import { ListaDeLocaisTypes } from '../../../types'
import Title from '../globalComponents/Title'
import Paragraph from '../globalComponents/Paragraph'

const CardEndereco: React.FC<ListaDeLocaisTypes> = ({
  cidade,
  pais,
  tempNow,
  tempMax,
  tempMin,
  umidade,
  vento
}) => {
  const [color, setColor] = React.useState<string | null>(null)
  const [periodo, setPeriodo] = React.useState<string | null>(null)

  React.useEffect(() => {
    setPeriodo(localStorage.getItem('periodo'))
    setColor(localStorage.getItem('cor'))
  }, [])
  if (periodo == null) return null

  return (
    <div className='contGlob'>
      <div>
        <Title tag='h2' text={cidade + ' | ' + pais} color={color} />
      </div>

      <div className='containerTemp'>
        <div>
          <Paragraph tag='p' fontSize='3rem' text={Math.floor(tempNow) + 'ºc'} color={color} />
        </div>
        <div className='containerDados'>
          <div className='containerClima'>
            <div>
              <img src={`/images/termometro${periodo.trim()}.svg`} alt="" />
              <Paragraph tag='p' text={'Max:  ' + Math.floor(tempMax) + 'º'} color={color} />
            </div>
            <div>
              <img src={`/images/termometro${periodo.trim()}.svg`} alt="" />
              <Paragraph tag='p' text={'Min:  ' + Math.floor(tempMin) + 'º'} color={color} />
            </div>
            <div>
              <img src={`/images/gotas${periodo.trim()}.svg`} alt="" />
              <Paragraph tag='p' text={Math.floor(umidade) + '%'} color={color} />
            </div>
            <div>
              <img src={`/images/vento${periodo.trim()}.svg`} alt="" />
              <Paragraph tag='p' text={vento + ' km/h'} color={color} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`

    .containerTemp{
      display: flex;

      align-items:center;
      padding: 1rem 0;
    }
    .containerDados{
      padding: 0 0 0 1rem;
      text-align:center;
    }
    .containerClima{
      display:grid;
      grid-template-columns: 90px 110px;
      gap:10px;
    }
    .containerClima div{
      display: flex;
      align-itens:center;
    }
    img{
      margin:0;
      padding: 0 5px 0 0;
      max-width:25px;
      max-height: 25px
    }
    @media(max-width:430px){
      .contGlob{
        text-align: center;
      }
      .containerTemp{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
      
      }
    }
    `}</style>

    </div>
  )
}

export default CardEndereco