"use client";
import { FC } from "react";
import { Layout } from "antd";
import React from "react";
import logoYim from "@/assets/images/png/logoYim.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { useActive } from "@/provider/app-active";
import { ToggleSwitch } from "../button";
interface IHeader {
  className?: string;
  services?: boolean;
}

const AppHeader: FC<IHeader> = ({ className, services }) => {
  const [active, setActive] = React.useState<string>("");
  const { active: at, setActive: setAt, onActive } = useActive();
  const useNav = (v: string) => {
    setActive(v);
    setAt(false);
  };

  return (
    <Layout.Header
      className={`${className} fixed top-0 z-30 header w-screen !px-[20px] sm:!px-[50px] ${
        !!services ? "!h-[105px] sm:!h-[120px]" : "sm:!h-[60px]"
      }`}
    >
      <div className="flex flex-row justify-between align-middle items-center">
        {/* logo */}
        <div className="flex flex-row">
          <div>
            <center>
              <IconItems
                img={logoYim}
                onPressed={() => {
                  setActive("");
                }}
              />
            </center>
          </div>
          {/* menu */}
          <div className="hidden sm:block">
            <MenuItems
              props={{
                menu: ["home", "services", "solution", "blog", "about us"],
                onPressed: useNav,
                active,
              }}
            />
          </div>
        </div>
        {/* toggle theme */}
        <div className="flex flex-row align-middle items-center">
          <ToggleSwitch props={{ className: "mt-[14px] sm:mt-0" }} />
          <div className="flex sm:hidden">
            <MenuOutlined
              className="dark:text-[white] text-xl cursor-pointer mt-[10px] sm:mt-0"
              onClick={() => onActive(at)}
            />
          </div>
        </div>
        {/* menu */}
      </div>
    </Layout.Header>
  );
};
interface IIconItem {
  img: StaticImageData;
  onPressed?: () => void;
}
export const IconItems: FC<IIconItem> = ({ img, onPressed }) => {
  return (
    <Link href={"/"}>
      <Image
        src={img}
        alt={"logo-yim"}
        onClick={onPressed}
        className="object-contain !h-[36px] !w-[84px] mt-[14px] cursor-pointer"
      />
    </Link>
  );
};

interface IMenuItems {
  menu: string[];
  onPressed: (v: string) => void;
  active: string;
}
const MenuItems: FC<{ props: IMenuItems }> = ({ props }) => {
  const { menu, onPressed, active } = props;

  return (
    <div className="flex">
      {menu
        .filter((e: string) => e !== "home")
        .map((e) => {
          return (
            <Link
              href={
                e === "services"
                  ? "/services/development"
                  : `/${e.replaceAll(" ", "")}`
              }
              key={e}
              replace
            >
              <div
                className={`capitalize text-white font-normal cursor-pointer my-0 mx-5 lg:mx-[45px] tracking-wide transition-all delay-75 hover:text-[#3C97FF]
          ${active.split("/")[1] === e && "!text-[#3C97FF]"}`}
              >
                {e}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AppHeader;
