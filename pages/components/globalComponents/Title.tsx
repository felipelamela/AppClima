import React from 'react'
import { TitleTypes } from '../../../types';


const Title: React.FC<TitleTypes> = ({ tag, text, color }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag>{text}</Tag>
      <style jsx>{`
        h1{

        }

        h2{
          font-size:2.2rem;
          color: #${color}
        }

        h3{
          
        }

      
      `}</style>


    </>
  )
}

export default Title

