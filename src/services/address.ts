import axios from 'axios';

interface Address {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
}

export async function getAddressByCep(cep: string): Promise<Address | null> {
  const { data } = await axios.get<Address>(
    `https://viacep.com.br/ws/${cep}/json/`
  );

  return data;
}
