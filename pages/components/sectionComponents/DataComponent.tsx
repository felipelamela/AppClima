import React from 'react'
import { format, getDay } from 'date-fns'
import { DataComponentTypes } from '../../../types'



const DataComponent: React.FC<DataComponentTypes> = ({ color }) => {
    const dias = {
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: "Sábado",
        7: 'Domingo'
    }
    const data = new Date()
    const DataFormatada = format(data, 'dd/MM/yyyy')
    const diaDaSemana = getDay(data)

    return (
        <>
            <p>{dias[diaDaSemana]} - {DataFormatada}</p>
            <style jsx>{`
        p{
            padding: 10px 0 0 0;
            color: #${color}
        }
        @media(max-width: 450px){
            p{
              flex-wrap: wrap;
              text-align: center;
              justify-content: center;
            }
        
        `}</style>
        </>
    )
}

export default DataComponent