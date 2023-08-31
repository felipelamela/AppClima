import React from 'react'
import { ParagraphTypes } from '../../../types';

const Paragraph: React.FC<ParagraphTypes> = ({ tag, text, fontSize='16px' }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag>{text}</Tag>
      <style jsx>{`
        p{
          font-size:${fontSize};
          background:;
        }
      
      `}</style>


    </>
  )
}

export default Paragraph

