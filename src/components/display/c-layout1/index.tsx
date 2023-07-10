import { Row, Col, Typography } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import ColoredLine from "../c-colorline";

interface ILayout1 {
  svg: string | StaticImageData;
  type: string;
  title: string;
  description: string;
}

const Layout1: FC<{ props: ILayout1 }> = ({ props }) => {
  const { svg, type, title, description } = props;
  return (
    <React.Fragment>
      <div className="relative bg-[#002043] py-10 px-[30px] sm:px-5 lg:px-10 xl:px-44">
        <Row align={"middle"} justify="space-between" gutter={64}>
          <Col
            xl={{ span: 5 }}
            lg={{ span: 5 }}
            className="text-center lg:text-start"
          >
            <Typography.Title
              level={5}
              style={{
                color: "#3C97FF",
                fontSize: 12,
              }}
              className="!font-light"
            >
              {type}
            </Typography.Title>
            <ColoredLine color="#3C97FF" className="my-5 mx-auto lg:mx-0" />
            <Typography.Title
              level={3}
              style={{
                color: "white",
              }}
            >
              {title}
            </Typography.Title>
            <Typography.Paragraph
              style={{
                color: "white",
              }}
              className="!font-light"
            >
              {description}
            </Typography.Paragraph>
          </Col>
          <Col xl={{ span: 19 }} lg={{ span: 19 }} data-aos="zoom-in">
            <Image src={svg} alt="image" className="object-contain scale-90" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Layout1;
