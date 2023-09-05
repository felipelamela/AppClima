import React from 'react'

interface LoadingTypes {

}


const Loading = () => {
  return (
    <>
      <div>
        <img src='/carregando.png' />
      </div>


      <style jsx>{`
      div{
        width:120px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
      }
      img{
        max-width:100%;
        animation: spin 2s linear infinite;
      }
        @keyframes spin {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }
      
      `}</style>
    </>
  )
}

export default Loading