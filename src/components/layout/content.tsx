import { FC } from "react";

interface IContent {
  children: React.ReactNode;
}

const AppContent: FC<IContent> = ({ children }) => {
  return <div style={{ overflowX: "hidden" }}>{children}</div>;
};

export default AppContent;
