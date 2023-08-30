import React from 'react'
import { ParagraphTypes } from '../../../types';

const Paragraph: React.FC<ParagraphTypes> = ({ tag, text }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag>{text}</Tag>
      <style jsx>{`
        p{

        }
      
      `}</style>


    </>
  )
}

export default Paragraph

