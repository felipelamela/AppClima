export interface InputTypes {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  valor: string;
  setValor: Function;
  typeFormat: string;
  placeholder?: string;
  color?: string;
  pressDown?: Function;
  classD?: string;
}

export interface ButtonTypes {
  name: string;
  color?: string;
}

export interface TextAreaTypes {
  name: string;
  valor: string;
  setValor: Function;
  color?: string;
  placeholder?: string;
}

export interface InputFilesTypes {
  label: string;
  setValor: Function | null;
  tipoArquivo?: string | null;
  color?: string;
}

export interface ParagraphTypes {
  tag: "p";
  text: string;
  fontSize?: string;
  color?: string;
}

export interface TitleTypes {
  tag: "h1" | "h2" | "h3";
  text: string;
  color?: string;
}

export interface ListaDeLocaisTypes {
  id?: number;
  cidade: string;
  pais: string;
  tempNow: number;
  tempMax: number;
  tempMin: number;
  umidade: number;
  vento: string;
  color?: string;
}

export interface ButtonContatoType {
  rota: string;
  nome: string;
  color?: string;
}

export interface DataComponentTypes {
  color: string;
}
