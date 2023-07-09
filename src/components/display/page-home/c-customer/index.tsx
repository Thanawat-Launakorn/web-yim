"use client";
import { Typography } from "antd";
import React, { FC } from "react";
import Image from "next/image";
import scbC from "@/assets/images/png/Layer_111.png";

interface ICustomer {
  tCon: string;
}

const HomeCustomer: FC<{ props: ICustomer }> = ({ props }) => {
  const { tCon } = props;
  return (
    <React.Fragment>
      <div>
        <Typography.Title
          style={{
            color: "#0055B7",
            display: "grid",
            fontWeight: 400,
            justifyContent: "center",
            marginBottom: 0,
          }}
          level={4}
        >
          {tCon}
        </Typography.Title>
        <div className="slider my-10">
          <div className="wrapper flex align-middle justify-center">
            <div className="saturate-0 hover:saturate-100 slide transition-all ease-linear delay-[.3]">
              <Image
                src={scbC}
                className=" !h-[35px] md:!h-[40px] xl:!h-[50px] "
                alt={""}
              />
            </div>
            <div className="saturate-0 hover:saturate-100 slide transition-all ease-linear delay-[.3]">
              <Image
                src={scbC}
                className=" !h-[35px] md:!h-[40px] xl:!h-[50px] "
                alt={""}
              />
            </div>
            <div className="saturate-0 hover:saturate-100 slide transition-all ease-linear delay-[.3]">
              <Image
                src={scbC}
                className=" !h-[35px] md:!h-[40px] xl:!h-[50px] "
                alt={""}
              />
            </div>{" "}
            <div className="saturate-0 hover:saturate-100 slide transition-all ease-linear delay-[.3]">
              <Image
                src={scbC}
                className=" !h-[35px] md:!h-[40px] xl:!h-[50px] "
                alt={""}
              />
            </div>{" "}
            <div className="saturate-0 hover:saturate-100 slide transition-all ease-linear delay-[.3]">
              <Image
                src={scbC}
                className=" !h-[35px] md:!h-[40px] xl:!h-[50px] "
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeCustomer;
