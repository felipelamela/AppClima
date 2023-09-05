import React from 'react'
import Title from '../globalComponents/Title'
import Paragraph from '../globalComponents/Paragraph';
import DataComponent from './DataComponent';

interface TitleComponentType {
  tagCidade: 'h1' | 'h2' | 'h3';
  tagPais: 'h1' | 'h2' | 'h3';
  cidade: string
  pais: string
  color?: string
  loading?: boolean
  errorLoading?: boolean
}


const TitleComponent: React.FC<TitleComponentType> = ({ tagCidade, tagPais, cidade, pais, color, loading, errorLoading }) => {
  return (
    <>
      {!loading &&
        <div className='containerLocal'>
          <div>
            <Title tag={tagCidade} text={cidade} color={color} />
            <Title tag={tagPais} text={pais} color={color} />
          </div>
          <div>
            <DataComponent color={color} />
          </div>

        </div>
      }
      <style jsx>{`
        .containerLocal{
          display:inline;
          padding: 3rem 0 2rem
        }
        div{
          display: flex;
          gap:8px;
        }     

        @media(max-width: 530px){
          .containerLocal{
            display:flex;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
            padding: 1rem
          }


      `}</style>
    </>
  )
}

export default TitleComponent