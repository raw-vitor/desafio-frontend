import { createContext, useState, ReactNode } from "react";

type ToggleBtnContextType = {
  yieldBtn: string;
  indexing: string;
  setYieldBtn: (data: string) => void;
  setIndexing: (data: string) => void;
};
type Child = {
  children: ReactNode;
};

export const ToggleBtnContext = createContext({} as ToggleBtnContextType);

export const ToggleBtnProvider = ({ children }: Child) => {
  const [yieldBtn, setYieldBtn] = useState("bruto");
  const [indexing, setIndexing] = useState("pre");

  return (
    <ToggleBtnContext.Provider
      value={{ yieldBtn, indexing, setYieldBtn, setIndexing }}
    >
      {children}
    </ToggleBtnContext.Provider>
  );
};
