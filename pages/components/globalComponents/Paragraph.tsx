import React from 'react'
import { ParagraphTypes } from '../../../types';

const Paragraph: React.FC<ParagraphTypes> = ({ tag, text, fontSize = '16px', color }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag>{text}</Tag>
      <style jsx>{`
        p{
          font-size:${fontSize};
          background:;
          color: #${color}
        }
      
      `}</style>


    </>
  )
}

export default Paragraph

