"use client";
import React from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
type ContextProps = {};
const Context = React.createContext<ContextProps>({} as ContextProps);
function AppScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // Scrolls to the top of the window
  }, [pathname]);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
export const useScrollToTop = () => React.useContext(Context);
export default AppScroll;
