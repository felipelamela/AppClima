export interface InputTypes {
  label: string;
  type: React.HTMLInputTypeAttribute;
  valor: string;
  setValor: Function;
  typeFormat: string;
}

export interface ButtonTypes {
  name: string;
}

export interface TextAreaTypes {
  name: string;
  valor: string;
  setValor: Function;
}

export interface InputFilesTypes {
  label: string;
  setValor: Function | null;
  tipoArquivo?: string | null;
}
