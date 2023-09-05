const horario = {

  1: 'linear-gradient(90deg, #6122c3, #ffa000)', //das 4 as 6
  2: 'linear-gradient(90deg, #ffa000, #e3d55c)', // das 6 as 10
  3: 'linear-gradient(90deg, #e3d55c, #ffe87b)', //das 10 as 13
  4: 'linear-gradient(90deg, #ffe87b, #f14a4f)', //das 13 as 15
  5: 'linear-gradient(90deg, #f14a4f, #c34e51)', // das 15 as 16
  6: 'linear-gradient(90deg, #c34e51, #c871b4)', // das 16 as 17
  7: 'linear-gradient(90deg, #c871b4, #6c22c3)', // das 17 as 19
  8: 'linear-gradient(90deg, #6c22c3, #291779)', // as 19 as 22
  9: 'linear-gradient(90deg, #291779, #6122c3)', //das 22 as 4
}


const backgroundModule = (hora?: number) => {

  if (hora <= 4 || hora > 22) {
    return horario[9]
  }
  if (hora <= 6) {
    return horario[1]
  }

  if (hora <= 10) {
    return horario[2]
  }

  if (hora <= 13) {
    return horario[3]
  }

  if (hora <= 15) {
    return horario[4]
  }

  if (hora <= 16) {
    return horario[5]
  }

  if (hora <= 17) {
    return horario[6]
  }

  if (hora <= 19) {
    return horario[7]
  }

  if (hora <= 22) {
    return horario[8]
  }

}

export default backgroundModule