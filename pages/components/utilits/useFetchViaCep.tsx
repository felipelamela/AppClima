import React from 'react'

const useFetchViaCep = () => {
  const [endereco, setEndereco] = React.useState<null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setEndereco(null);
        setError('');
      } else {
        setEndereco(data);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setError('');
    }
  };

  return { endereco, error, fetchCep };
}

export default useFetchViaCep