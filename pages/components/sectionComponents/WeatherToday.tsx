import React from 'react'
import Paragraph from '../globalComponents/Paragraph'

interface WeatherTodayTypes {
  tempNow: number
  tempMax: number
  tempMin: number
  umidade: number
  speed: number
  periodo:string
}



const WeatherToday: React.FC<WeatherTodayTypes> = ({ tempNow, tempMax, tempMin, umidade, speed, periodo }) => {
  return (
    <>
      <div className='containerTemp'>
        <div>
          <Paragraph tag='p' fontSize='5rem' text={tempNow + 'º|'} color='eeeeee' />
        </div>
        <div className='containerDados'>
          <Paragraph tag='p' text='Dia ou noite' color='eeeeee' />
          <div className='containerClima'>
            <div>
              <img width={25} height={25} src={`/images/termometro${periodo =='day'? 'day': 'night'}.svg`} alt="" />
              <Paragraph tag='p' text={'Max:  ' + tempMax + 'º'} color='eeeeee' />
            </div>
            <div>
              <img width={25} height={25} src={`/images/termometro${periodo =='day'? 'day': 'night'}.svg`} alt="" />
              <Paragraph tag='p' text={'Min:  ' + tempMin + 'º'} color='eeeeee' />
            </div>
            <div>
              <img width={25} height={25} src={`/images/gotas${periodo =="day"? 'day':'night'}.svg`} alt="" />
              <Paragraph tag='p' text={umidade + '%'} color='eeeeee' />
            </div>
            <div>
              <img width={25} height={25} src={`/images/vento${periodo =="day"? 'day': 'night'}.svg`} alt="" />
              <Paragraph tag='p' text={speed + ' km/h'} color='eeeeee' />
            </div>
          </div>
        </div>

      </div>
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
          grid-template-columns: 90px 115px;
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
      `}</style>

    </>
  )
}

export default WeatherToday