"use client";
import React, { FC } from "react";
import { Layout as AppLayout } from "antd";
import { usePathname } from "next/navigation";
import AppHeader from "./header";
import AppFooter from "./footer";
import { AppSide } from "./side/c-side";
import { useActive } from "@/provider/app-active";
import AppTheme from "@/provider/app-theme";
import AppContent from "./content";
import { Sider } from "./side";
const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const pathServices = pathname.includes("/services");
  const { active, setActive, setDropdown } = useActive();

  return (
    <AppTheme>
      <AppLayout>
        <AppSide
          active={active}
          onClose={() => {
            setActive(false);
            setDropdown(false);
          }}
          menu={["home", "services", "solution", "blog", "about us"]}
          onPressed={(v: string) => {
            setActive(false);
            setDropdown(false);
          }}
          // ref={sideRef}
          children={<Sider />}
        />
        {pathServices ? <AppHeader services /> : <AppHeader />}
        <AppContent>{children}</AppContent>
        {!pathServices && <AppFooter />}
      </AppLayout>
    </AppTheme>
  );
};

export default Layout;
