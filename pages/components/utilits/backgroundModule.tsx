import React from 'react'

const horario = {
  0: 'Meia-Noite',
  1: 'Uma Hora',
  2: 'Duas Horas',
  3: 'Três Horas',
  4: 'Quatro Horas',
  5: 'Cinco Horas',
  6: 'Seis Horas',
  7: 'Sete Horas',
  8: 'Oito Horas',
  9: 'Nove Horas',
  10: 'Dez Horas',
  11: 'Onze Horas',
  12: 'Meio-Dia',
  13: 'Uma Hora',
  14: 'Duas Horas',
  15: 'Três Horas',
  16: 'Quatro Horas',
  17: 'Cinco Horas',
  18: 'Seis Horas',
  19: 'Sete Horas',
  20: 'Oito Horas',
  21: 'Nove Horas',
  22: 'Dez Horas',
  23: 'Onze Horas'
}


const backgroundModule = (hora?: number) => {

  return horario[hora]
}

export default backgroundModule