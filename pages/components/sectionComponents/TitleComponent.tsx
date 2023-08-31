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
    <>
      <div>
        <Title tag={tagCidade} text={cidade} />
        <Title tag={tagPais} text={pais} />
      </div>
      <div>
        <DataComponent />
      </div>
      <style jsx>{`
        div{
          display: flex;
          gap:8px;
        }
      
      
      `}</style>
    </>
  )
}

export default TitleComponent