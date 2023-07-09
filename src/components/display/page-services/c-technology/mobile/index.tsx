"use client";
import { Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import react from "@/assets/images/png/react.png";
import node from "@/assets/images/png/node.png";
import nest from "@/assets/images/png/nest.png";
import postgres from "@/assets/images/png/postgres.png";
import ejs from "@/assets/images/png/ejs.png";
import cypress from "@/assets/images/png/cypress.png";
import docker from "@/assets/images/png/docker.png";

export const items1 = [
  { img: react, name: "Reactjs" },
  { img: node, name: "Node js" },
  { img: nest, name: "Nest" },
  { img: postgres, name: "PostgresSQL" },
];

export const items2 = [
  { img: ejs, name: "ejs" },
  { img: cypress, name: "cypress" },
  { img: docker, name: "docker" },
];

export const items3 = [
  { img: react, name: "Reactjs" },
  { img: node, name: "Node js" },
  { img: nest, name: "Nest" },
  { img: postgres, name: "PostgresSQL" },
];

interface ITecnologyMobile {
  title: string;
  items1?: { img: StaticImageData; name: string }[];
  items2?: { img: StaticImageData; name: string }[];
  items3?: { img: StaticImageData; name: string }[];
}

const StyledIndicator = styled.div`
  ${tw`w-full h-[5px] absolute top-0 left-0 transition-all ease-linear delay-75 bg-[#3C97FF]`}
`;

const CTecnologyMobile: FC<ITecnologyMobile> = ({
  title,
  items1,
  items2,
  items3,
}) => {
  return (
    <React.Fragment>
      <div className="bg-[#161A2C] relative group my-10 mx-5">
        <StyledIndicator />
        <div className="p-5">
          <Typography.Title level={5} className="!text-white">
            {title}
          </Typography.Title>
          <div className="grid grid-cols-4 gapx-x-[1px]  transition-all ease-linear delay-[.3]">
            {items1?.map((e, idx) => (
              <Citem key={idx} props={e} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-x-[1px] my-10   transition-all ease-linear delay-[.3] ">
            {items2?.map((e, idx) => (
              <Citem key={idx} props={e} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-x-[1px]   transition-all ease-linear delay-[.3] ">
            {items3?.map((e, idx) => (
              <Citem key={idx} props={e} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface item {
  img: StaticImageData;
  name: string;
}

const Citem: FC<{ props: item }> = ({ props }) => {
  const { img, name } = props;
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="text-center">
        <Image src={img} alt="image" className="object-contain !h-[30px]" />
      </div>
      <div className="text-center">
        <Typography.Text
          style={{
            color: "#4E4C4C",
            fontSize: 10,
            fontWeight: 300,
          }}
        >
          {name}
        </Typography.Text>
      </div>
    </div>
  );
};

export default CTecnologyMobile;
