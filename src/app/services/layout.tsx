"use client";
import AppFooter from "@/components/layout/footer";
import { Sider } from "@/components/layout/side";
import React, { FC } from "react";

const Services: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex sm:flex-row">
      <div className="bg-[#081224] overflow-hidden hidden md:w-[20%] md:block lg:block xl:px-[25px] ">
        <Sider />
      </div>
      <div className="pt-[80px] bg-[#081224] md:px-[100px] min-w-[80%] md:w-[80%]">
        {children}
        <AppFooter services />
      </div>
    </div>
  );
};

export default Services;
