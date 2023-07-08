"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "antd";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logoYimMobile from "@/assets/images/png/logoYimMobile.png"; //logoYimMobile

interface ILogoPage {
  logo?: React.ReactNode;
  elec?: React.ReactNode;
  elecNoLight?: React.ReactNode;
  mobile?: boolean;
  title?: string;
}

const HomeLogoPage: FC<{ props: ILogoPage }> = ({ props }) => {
  const { elec, logo, elecNoLight, mobile, title } = props;

  return (
    <>
      {/* mobile */}
      {!!mobile ? (
        <div className="relative min-h-full group">
          <div className="flex flex-col justify-center align-middle text-center sm:hidden  my-5 sm:my-20 relative z-10">
            <center>
              <Image
                alt="image-logo"
                src={logo as string}
                width={200}
                height={200}
                className="object-contain"
              />
            </center>
            <center>{/* <StyledIndicator className="line" /> */}</center>
            <Typography.Title
              style={{ color: "white" }}
              level={5}
              className="px-[60px] absolute mt-[80px]"
            >
              {title}
            </Typography.Title>
          </div>
          <div className="absolute -top-[120px] -left-[240px] scale-75 z-0 opacity-100 transition-all ease-linear delay-[.3] group-hover:opacity-0 ">
            <Image
              src={elec as string}
              alt="image-logo"
              className="object-contain "
            />
          </div>
          <div className="absolute -top-[200px] -right-[800px] scale-75 z-0 transition-all ease-linear delay-[8] group-hover:-translate-y-[600px]">
            <Image
              src={elec as string}
              alt="image-logo"
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        // desktop
        // no hover
        <div className="relative min-h-screen group">
          <div className="absolute -left-[450px] -top-20 scale-90 group-hover:opacity-0 transition-all ease-linear ">
            {elec}
          </div>
          <div
            className="pt-48 group-hover:opacity-0 group-hover:hidden transition-all ease-linear "
            style={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            {/* width: 444 */}
            {/* height 192 */}
            {logo}
          </div>
          {/* hovered */}
          <div
            className="mt-[-175px]  block"
            style={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            <div className="grid grid-cols-1 gap-y-10 transition-all ease-linear delay-[.3] group-hover:opacity-100 opacity-0">
              <center>
                <Image
                  src={logoYimMobile}
                  alt="image-logo"
                  className="object-contain !h-[192px] !w-[444px] scale-[1.75] group-hover:opacity-100 opacity-0"
                />
              </center>

              <div className="text-center w-[450px]">
                <h1 className="text-[30px] text-white">{title}</h1>
                <center>{/* <StyledIndicator className="line" /> */}</center>
              </div>
            </div>
          </div>

          <div className="absolute -right-[690px] -bottom-[100px] scale-90 group-hover:translate-y-[-900px] transition-all ease-linear delay-[4]">
            {elec}
          </div>
          <div className="absolute -right-[800px] -top-[300px] rotate-180">
            {elecNoLight}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeLogoPage;
