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
  vento }) => {
  return (
    <div>
      <div>
        <Title tag='h2' text={cidade + ' | ' + pais} color='eeeeee'/>
      </div>

      <div className='containerTemp'>
        <div>
          <Paragraph tag='p' fontSize='3rem' text={Math.floor(tempNow) + 'º|'} color='eeeeee' />
        </div>
        <div className='containerDados'>
          <div className='containerClima'>
            <div>
              <img src="/images/termometro.svg" alt="" />
              <Paragraph tag='p' text={'Max:  ' + Math.floor(tempMax) + 'º'} color='eeeeee' />
            </div>
            <div>
              <img src="/images/termometro.svg" alt="" />
              <Paragraph tag='p' text={'Min:  ' + Math.floor(tempMin) + 'º'} color='eeeeee' />
            </div>
            <div>
              <img src="/images/gotas.svg" alt="" />
              <Paragraph tag='p' text={Math.floor(umidade) + '%'} color='eeeeee' />
            </div>
            <div>
              <img src="/images/vento.svg" alt="" />
              <Paragraph tag='p' text={vento + ' km/h'} color='eeeeee' />
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
    `}</style>

    </div>
  )
}

export default CardEndereco