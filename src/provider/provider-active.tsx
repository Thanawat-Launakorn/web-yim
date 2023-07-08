"use client";
import React from "react";
import { createContext, FC } from "react";

type ContextProps = {
  active: boolean;
  onDropdown: boolean;
  setActive: (v?: any) => void;
  setDropdown: (v?: any) => void;
  onActive: (v?: boolean) => void;
};

const Context = createContext<ContextProps>({} as ContextProps);

type ProviderProps = {
  children?: React.ReactNode;
};

const Active: FC<ProviderProps> = ({ children }) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [onDropdown, setDropdown] = React.useState<boolean>(false);

  const onActive = () => {
    setActive((v) => !v);
  };

  return (
    <Context.Provider
      value={{
        active,
        onDropdown,
        setActive,
        setDropdown,
        onActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useActive = () => React.useContext(Context);
export default Active;
