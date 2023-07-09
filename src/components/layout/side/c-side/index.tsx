"use client";
import { useActive } from "@/provider/app-active";
import { CloseOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import logoYim from "@/assets/images/png/logoYim.png";
import { IconItems } from "../../header";

interface ISidebar {
  active: boolean;
  menu: string[];
  onClose: () => void;
  onPressed: (v: string) => void;
  children?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLInputElement>;
}

export const AppSide: FC<ISidebar> = ({
  onClose,
  menu,
  onPressed,
  active,
  children,
}) => {
  return (
    <div
      className={`transition-all ease-linear delay-75 h-screen w-[70vw] bg-gradient-to-br from-[#39476c8c] from-60% to-[#1b243c] translate-x-[-100%] fixed top-0 z-50 overflow-y-scroll side  ${
        active && "translate-x-[0%] shadow-side sm:hidden"
      }`}
    >
      {/* header */}
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between items-center leading-[64px] px-[20px]">
          <IconItems img={logoYim} onPressed={() => onPressed("/home")} />
          <CloseOutlined
            className="text-white text-2xl mt-2"
            onClick={onClose}
          />
        </div>
        {/* side menu */}
        <div className="mt-5">
          {menu
            .filter((e: string) => e !== "home")
            .map((e, idx) => {
              return (
                <div
                  key={e}
                  className={`capitalize text-white font-normal cursor-pointer px-[20px] py-[20px] tracking-wide transition-all delay-75`}
                  onClick={() => {
                    onPressed(idx === 0 ? `/services/development` : `/${e}`);
                  }}
                >
                  {idx === 0 ? (
                    <Subchild children={children} title={e} />
                  ) : (
                    <h1>{e}</h1>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

interface ISubchild {
  children: React.ReactNode;
  title: string;
}

const Subchild: FC<ISubchild> = ({ children, title }) => {
  const { onDropdown, setDropdown } = useActive();

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between align-middle">
          <h1 className="w-[90%]">{title}</h1>
          <div
            className="w-[10%] text-center"
            onClick={(e) => {
              e.stopPropagation();
              setDropdown((prev: any) => !prev);
            }}
          >
            {onDropdown ? <DownOutlined /> : <UpOutlined />}
          </div>
        </div>
        <div
          className={` ${
            onDropdown ? "h-auto side-bar-open" : "side-bar-close"
          }`}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};
