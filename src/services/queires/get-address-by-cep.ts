import { useQuery } from '@tanstack/react-query';
import { getAddressByCep } from '../address';

export function useGetAddressByCep(cep: string) {
  return useQuery({
    queryKey: ['address', 'cep', cep],
    queryFn: async () => await getAddressByCep(cep),
    enabled: cep.length === 8,
  });
}
