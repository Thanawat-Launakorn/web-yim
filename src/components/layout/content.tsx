import { FC } from "react";
import { usePathname } from "next/navigation";
import Container from "../container";
interface IContent {
  children: React.ReactNode;
}

const AppContent: FC<IContent> = ({ children }) => {
  return (
    <Container className="flex min-h-screen flex-col  dark:bg-bgdark bg-bgWhite">
      {children}
    </Container>
  );
};

export default AppContent;
