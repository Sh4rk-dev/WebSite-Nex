import { X } from 'lucide-react';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

interface ModalRootProps {
  children?: React.ReactNode;
}

export function ModalRoot({ children }: ModalRootProps) {
  const { handleOpenModal } = useContext(ModalContext);

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 fixed inset-0 top-1/2 left-1/2 z-30 size-full bg-black/80">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
        <div className="mx-7 flex min-w-[400px] max-w-[500px] flex-col rounded-2xl bg-custom-title pt-10 shadow-custom-border/10 shadow-lg">
          <div className="flex w-full flex-row items-center justify-between px-5">
            <h2 className="font-dm-sans text-custom-primary text-xl">
              Digite seu CEP
            </h2>
            <X
              className="h-6 w-6 cursor-pointer text-custom-primary hover:text-custom-primary/50"
              onClick={handleOpenModal}
            />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export function ModalContentRoot({ children }: ModalRootProps) {
  return <div className="flex w-full flex-col p-5">{children}</div>;
}
