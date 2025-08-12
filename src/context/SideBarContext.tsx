import { createContext, useState } from 'react';

interface SideBarContextProps {
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarContext = createContext<SideBarContextProps>(
  {} as SideBarContextProps
);

const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  return (
    <SideBarContext.Provider value={{ openSideBar, setOpenSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
