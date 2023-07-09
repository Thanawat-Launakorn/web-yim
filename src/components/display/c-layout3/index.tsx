import { Row, Col, Typography } from "antd";
import React, { FC } from "react";
import ColoredLine from "../c-colorline";
import Image, { StaticImageData } from "next/image";

interface ILayout3 {
  svg: string | StaticImageData;
  type?: string;
  title?: string;
  description?: string;
}

const Layout3: FC<{ props: ILayout3 }> = ({ props }) => {
  const { svg, type, title, description } = props;
  return (
    <React.Fragment>
      <div className="px-20 my-10 sm:my-0 text-center xl:py-10 sm:text-start">
        <Row>
          <Col
            xl={{
              span: 8,
            }}
            lg={{
              span: 24,
            }}
            className="lg:mt-20 xl:mt-[180px]"
          >
            <div className="flex flex-col-reverse sm:flex-col">
              <ColoredLine color="#3C97FF" className="my-5 mx-auto sm:mx-0" />
              <Typography.Title
                level={5}
                style={{
                  color: "#3C97FF",
                  fontSize: 12,
                  margin: 0,
                }}
                className="!font-light"
              >
                {type}
              </Typography.Title>
            </div>

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
          <Col
            xl={{
              span: 16,
            }}
            lg={{
              span: 24,
            }}
            data-aos="fade-left"
          >
            <Image alt="image" src={svg} className="object-contain" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Layout3;
