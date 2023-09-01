import React from 'react'
import Title from '../globalComponents/Title'
import Paragraph from '../globalComponents/Paragraph';
import DataComponent from './DataComponent';

interface TitleComponentType {
  tagCidade: 'h1' | 'h2' | 'h3';
  tagPais: 'h1' | 'h2' | 'h3';
  cidade: string
  pais: string
}


const TitleComponent: React.FC<TitleComponentType> = ({ tagCidade, tagPais, cidade, pais }) => {
  return (
    <div className='containerLocal'>
      <div>
        <Title tag={tagCidade} text={cidade} color='eeeeee' />
        <Title tag={tagPais} text={pais} color='eeeeee' />
      </div>
      <div>
        <DataComponent />
      </div>
      <style jsx>{`
        .containerLocal{
          display:inline;
          padding: 3rem 0 2rem
        }
        div{
          display: flex;
          gap:8px;
        }     
      `}</style>
    </div>
  )
}

export default TitleComponent