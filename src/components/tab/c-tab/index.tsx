"use client";
import { useActive } from "@/provider/app-active";
import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import tw from "twin.macro";
interface ITabs extends TabsProps {
  menu: string[];
  onPressed?: (v: any) => void;
}

const StyledTabs = styled(Tabs)<{ $active?: boolean }>`
  .ant-tabs-nav-list > div {
    color: white;
    font-weight: 200;
  }

  div.ant-tabs-nav::before {
    ${tw`!hidden sm:!block !border-b-[#4E4C4C]`}
  }

  .ant-tabs-nav-wrap {
    ${tw`!justify-start sm:!justify-center `}
  }

  * > svg {
    display: none;
  }

  div.ant-tabs-tab {
    ${tw`!px-[20px] !m-0 lg:!mx-[15px] xl:!mx-[20px] !py-[10px] sm:!px-2.5 sm:!py-[12.5px]`}
  }

  .ant-tabs-nav-operations {
    ${tw`!hidden`}
  }
`;

export const CTabs: FC<ITabs> = ({ menu, onPressed }) => {
  const pathname = usePathname();
  const pathSplit = pathname.split("/")[1];
  const { active } = useActive();
  return (
    <StyledTabs
      onTabClick={(e: any) => onPressed?.(e)}
      className={`${!active && "sticky"} left-0 ${
        pathSplit === "services" && "!top-[60px]"
      } sm:top-0 z-40 bg-transparent -translate-y-5`}
      tabBarGutter={50}
      size="large"
      tabPosition="top"
      items={menu.map((e) => {
        return {
          key: e,
          label: e,
        };
      })}
    />
  );
};

export default CTabs;
