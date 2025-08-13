import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useGetAddressByCep } from '../services/queires/get-address-by-cep';
import { ModalContentRoot, ModalRoot } from './Modal';

const CepSchemaValidation = z.object({
  cep: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido')
    .min(8, 'CEP incompleto')
    .transform((val) => val.replace('-', '')),
  logradouro: z.string().optional(),
  bairro: z.string().optional(),
  complemento: z.string().optional(),
  uf: z.string().optional(),
  estado: z.string().optional(),
});

type FormValidation = z.infer<typeof CepSchemaValidation>;

export const SearchModal = () => {
  const [localCep, setLocalCep] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValidation>({
    resolver: zodResolver(CepSchemaValidation),
    defaultValues: {
      cep: '',
      bairro: '',
      complemento: '',
      estado: '',
      logradouro: '',
      uf: '',
    },
  });

  const { data: address } = useGetAddressByCep(localCep);

  useEffect(() => {
    if (address) {
      setValue('bairro', address.bairro);
      setValue('complemento', address.complemento);
      setValue('estado', address.estado);
      setValue('logradouro', address.logradouro);
      setValue('uf', address.uf);
    }
  }, [address, setValue]);

  function handleSearchCep(data: FormValidation) {
    setLocalCep(data.cep);
  }

  return (
    <ModalRoot>
      <ModalContentRoot>
        <form
          className="flex w-full flex-1 flex-col justify-between pt-2"
          onSubmit={handleSubmit(handleSearchCep)}
        >
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col items-start justify-center gap-2">
              <input
                className="w-full rounded-l-md border-2 border-custom-primary bg-transparent py-2 pl-4 text-Custom-Gray-60 text-custom-white duration-300 focus:shadow-custom-primary/10 focus:shadow-lg focus:outline-none"
                maxLength={9}
                placeholder="Digite seu CEP"
                type="text"
                {...register('cep')}
              />
            </div>

            <button
              className="cursor-pointer rounded-r-md bg-custom-primary px-4 py-2 text-custom-title delay-75 duration-300 hover:bg-custom-primary/50 hover:shadow-custom-primary/10 hover:shadow-lg"
              type="submit"
            >
              Search
            </button>
          </div>
          {errors.cep && (
            <span className="pt-2 text-red-500">{errors.cep.message}</span>
          )}

          <div className="flex flex-col gap-2">
            <label
              className="pt-5 font-dm-sans text-custom-primary"
              htmlFor="logradouro"
            >
              Logradouro
            </label>
            <input
              className="w-full rounded-md border-2 border-custom-primary bg-transparent py-2 pl-4 text-Custom-Gray-60 text-custom-white duration-300 read-only:opacity-50 focus:shadow-custom-primary/10 focus:shadow-lg focus:outline-none"
              id="logradouro"
              placeholder="logradouro"
              readOnly
              {...register('logradouro')}
            />

            <label
              className="pt-5 font-dm-sans text-custom-primary"
              htmlFor="bairro"
            >
              Bairro
            </label>
            <input
              className="w-full rounded-md border-2 border-custom-primary bg-transparent py-2 pl-4 text-Custom-Gray-60 text-custom-white duration-300 read-only:opacity-50 focus:shadow-custom-primary/10 focus:shadow-lg focus:outline-none"
              id="bairro"
              placeholder="bairro"
              readOnly
              {...register('bairro')}
            />

            <label
              className="pt-5 font-dm-sans text-custom-primary"
              htmlFor="complemento"
            >
              Complemento
            </label>
            <input
              className="w-full rounded-md border-2 border-custom-primary bg-transparent py-2 pl-4 text-Custom-Gray-60 text-custom-white duration-300 read-only:opacity-50 focus:shadow-custom-primary/10 focus:shadow-lg focus:outline-none"
              id="complemento"
              placeholder="complemento"
              readOnly
              {...register('complemento')}
            />

            <div className="flex flex-row gap-2 pt-5">
              <div className="flex-1 space-y-2">
                <label
                  className="font-dm-sans text-custom-primary"
                  htmlFor="estado"
                >
                  Estado
                </label>
                <input
                  className="w-full rounded-md border-2 border-custom-primary bg-transparent py-2 pl-4 text-Custom-Gray-60 text-custom-white duration-300 read-only:opacity-50 focus:shadow-custom-primary/10 focus:shadow-lg focus:outline-none"
                  id="estado"
                  placeholder="estado"
                  readOnly
                  {...register('estado')}
                />
              </div>

              <div className="flex-[0.3] space-y-2">
                <label
                  className="font-dm-sans text-custom-primary"
                  htmlFor="uf"
                >
                  UF
                </label>
                <input
                  className="w-full rounded-md border-2 border-custom-primary bg-transparent py-2 pl-4 text-Custom-Gray-60 text-custom-white duration-300 read-only:opacity-50 focus:shadow-custom-primary/10 focus:shadow-lg focus:outline-none"
                  id="uf"
                  placeholder="uf"
                  readOnly
                  {...register('uf')}
                />
              </div>
            </div>
          </div>
        </form>
      </ModalContentRoot>
    </ModalRoot>
  );
};
