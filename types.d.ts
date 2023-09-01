export interface InputTypes {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  valor: string;
  setValor: Function;
  typeFormat: string;
  placeholder?: string;
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

}


