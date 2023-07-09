import React, { FC } from "react";

type ContextProps = {
  theme?: string;
  setTheme: (v: string) => void;
};
const Context = React.createContext<ContextProps>({} as ContextProps);
interface ITheme {
  children: React.ReactNode;
}
const AppTheme: FC<ITheme> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>("dark");

  React.useEffect(() => {
    const rootElement = document?.documentElement?.classList;

    if (theme === "dark") {
      rootElement.add("dark");
    } else {
      rootElement.remove("dark");
    }
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export const useTheme = () => React.useContext(Context);
export default AppTheme;
