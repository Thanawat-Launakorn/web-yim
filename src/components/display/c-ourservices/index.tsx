"use client";
import { Typography, Row, Col, Avatar } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import ColoredLine from "../c-colorline";

interface IOurservices {
  logo?: React.ReactNode;
  svg: StaticImageData;
  title?: string;
  des: string;
  tCon: string;
}

const COurServies: FC<{ props: IOurservices }> = ({ props }) => {
  const { logo, svg, title, des, tCon } = props;
  return (
    <React.Fragment>
      <Typography.Title
        style={{
          color: "#0055B7",
          display: "grid",
          justifyContent: "center",
        }}
        level={4}
        className="sm:my-36 !opacity-0 sm:opacity-100"
      >
        {tCon}
      </Typography.Title>
      <div
        className="bg-[#011731] rounded-md pb-14 px-[12px] pt-[12px] sm:px-[60px] sm:pt-16  xl:pb-0  lg:mx-[100px] xl:mx-[160px] "
        data-aos="fade-up"
      >
        <Row gutter={64} className="">
          <Col
            xl={{ span: 10 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <span>
              <Avatar src={logo} className="" size={64} shape={"square"} />
            </span>
            <center>
              <Image
                src={svg}
                alt={""}
                className="object-contain !h-[280px] sm:!h-[400px] md:!h-[400px] lg:!h-[400px]"
              />
            </center>
          </Col>
          <Col
            xl={{ span: 14 }}
            lg={{ span: 24 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            className="!px-[50px] sm:p-0"
          >
            <Typography.Title
              level={4}
              style={{
                color: "#FFFFFF",
                fontSize: 22,
              }}
            >
              {title}
            </Typography.Title>
            <ColoredLine color="white" className="my-5" />
            <div className="h-[190px] sm:w-[auto] overflow-y-scroll overflow-x-hidden sm:h-auto">
              <Typography.Paragraph
                style={{
                  color: "#969595",
                  fontSize: 14,
                }}
                className=" !font-normal !leading-loose"
              >
                {des}
              </Typography.Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default COurServies;
