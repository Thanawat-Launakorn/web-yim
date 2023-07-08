"use client";
import { Avatar, Typography } from "antd";
import { FC } from "react";

interface ICardTec {
  no: string;
  title: string;
  des: string;
  className: string;
  titleStyled?: string;
}

export const CardTec: FC<{ props: ICardTec }> = ({ props }) => {
  const { no, title, des, className, titleStyled } = props;
  return (
    <div
      className={`${className} my-5 sm:m-0 text-center border border-white rounded-xl w-[170px] p-5 !transition-all !delay-75 cursor-pointer h-[201px]`}
    >
      <Avatar
        src={<span className="!text-white z-10">{no}</span>}
        className="!bg-[#FFFFFF] opacity-[.12] z-0"
      />
      <Typography.Title
        level={4}
        style={{
          color: titleStyled,
          margin: 0,
        }}
        className="font-semibold !mt-2.5"
      >
        {title}
      </Typography.Title>
      <Typography.Text
        style={{
          color: "white",
        }}
        className="font-light"
      >
        {des}
      </Typography.Text>
    </div>
  );
};
