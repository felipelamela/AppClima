export default function cleanInputs(
  setNome: Function,
  setEmail: Function,
  setContato: Function,
  setMensagem: Function,
  setArquivo: Function,
) {
  setNome('')
  setEmail('')
  setContato('')
  setMensagem('')
  setArquivo(null)
}