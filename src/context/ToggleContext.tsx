import { createContext, useState, ReactNode } from "react";

type ToggleBtnContextType = {
  yieldBtn: string;
  indexing: string;
  setYieldBtn: (data: string) => void;
  setIndexing: (data: string) => void;
  makeUrlToRequest: () => string;
};
type Child = {
  children: ReactNode;
};

export const ToggleBtnContext = createContext({} as ToggleBtnContextType);

export const ToggleBtnProvider = ({ children }: Child) => {
  const [yieldBtn, setYieldBtn] = useState("bruto");
  const [indexing, setIndexing] = useState("pre");

  const makeUrlToRequest = () => {
    return `simulacoes/?tipoIndexacao=${indexing}&tipoRendimentp=${yieldBtn}`;
  };

  return (
    <ToggleBtnContext.Provider
      value={{ yieldBtn, indexing, setYieldBtn, setIndexing, makeUrlToRequest }}
    >
      {children}
    </ToggleBtnContext.Provider>
  );
};
