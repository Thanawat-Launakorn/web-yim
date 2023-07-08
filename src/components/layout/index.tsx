"use client";
import React, { FC } from "react";
import { Layout as AppLayout } from "antd";
import { useRouter, usePathname } from "next/navigation";
import AppHeader from "./header";
import AppFooter from "./footer";
import { AppSide } from "./side";
import { useActive } from "@/provider/provider-active";
const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const pathServices = pathname === "/services";
  const { active, setActive, setDropdown } = useActive();

  return (
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
        children={<></>}
      />
      {pathServices ? <AppHeader services /> : <AppHeader />}
      {children}
      {!pathServices && <AppFooter />}
    </AppLayout>
  );
};

export default Layout;
