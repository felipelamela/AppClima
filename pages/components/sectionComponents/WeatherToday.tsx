import React from 'react'
import Paragraph from '../globalComponents/Paragraph'

interface WeatherTodayTypes {
  tempNow: number
  tempMax: number
  tempMin: number
  umidade: number
  speed: number
  periodo?: string
  color?: string
  loading?: boolean
}



const WeatherToday: React.FC<WeatherTodayTypes> = ({ tempNow, tempMax, tempMin, umidade, speed, periodo, color, loading}) => {

  if (color === null) return null

  return (
    <>
      {!loading &&
        <div className='containerTemp'>
          <div>
            <Paragraph tag='p' fontSize='5rem' text={tempNow + 'ºc'} color={color} />
          </div>
          <div className='containerDados'>
            <Paragraph tag='p' text={periodo.trim() === 'day' ? 'Dia' : 'Noite'} color={color} />
            <div className='containerClima'>
              <div>
                <img width={25} height={25} src={`/images/termometro${periodo.trim()}.svg`} alt="" />
                <Paragraph tag='p' text={'Max:  ' + tempMax + 'º'} color={color} />
              </div>
              <div>
                <img width={25} height={25} src={`/images/termometro${periodo.trim()}.svg`} alt="" />
                <Paragraph tag='p' text={'Min:  ' + tempMin + 'º'} color={color} />
              </div>
              <div>
                <img width={25} height={25} src={`/images/gotas${periodo.trim()}.svg`} alt="" />
                <Paragraph tag='p' text={umidade + '%'} color={color} />
              </div>
              <div>
                <img width={25} className='tes' height={25} src={`/images/vento${periodo.trim()}.svg`} alt="" />
                <Paragraph tag='p' text={speed + ' km/h'} color={color} />
              </div>
            </div>
          </div>

        </div>}
      <style jsx>{`
        .containerTemp{
          display:flex;
          align-items:center;
          padding: 1rem 0;
        }
        .containerDados{
          padding: 0 0 0 1rem;
          text-align:center;
        }
        .containerClima{
          display:grid;
          grid-template-columns: 115px 115px;
          gap:10px;
          margin: 10px 0 0 0;
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

        @media(max-width: 530px){
          .containerTemp{
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
          }
        }


      `}</style>

    </>
  )
}

export default WeatherToday