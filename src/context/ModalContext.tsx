import { createContext, useState } from 'react';

interface ModalContextProps {
  openModal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
