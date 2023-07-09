import { Row, Col, Typography } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import ColoredLine from "../c-colorline";

interface ILayout2 {
  svg: string | StaticImageData;
  type?: string;
  title?: string;
  description?: string;
}

const Layout2: FC<{ props: ILayout2 }> = ({ props }) => {
  const { svg, type, title, description } = props;
  return (
    <React.Fragment>
      <div className="my-10 xl:py-20 px-10 text-center sm:text-start sm:my-0">
        <Row>
          <Col
            xl={{
              span: 16,
              order: 1,
            }}
            lg={{
              span: 24,
              order: 1,
            }}
            md={{
              span: 24,
              order: 1,
            }}
            sm={{
              span: 24,
              order: 1,
            }}
            xs={{
              span: 24,
              order: 2,
            }}
            data-aos="fade-right"
            className="lg:mt-20 xl:mt-[180px]"
          >
            <div className="text-center">
              <Image
                alt="image"
                src={svg}
                className="object-contain sm:my-0 my-10"
              />
            </div>
          </Col>
          <Col
            xl={{
              span: 8,
              order: 2,
            }}
            lg={{
              span: 24,
              order: 2,
            }}
            md={{
              span: 24,
              order: 2,
            }}
            sm={{
              span: 24,
              order: 2,
            }}
            xs={{
              span: 24,
              order: 1,
            }}
          >
            <div className="flex flex-col-reverse sm:flex-col">
              <ColoredLine color="#3C97FF" className="my-5 mx-auto sm:mx-0 " />
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
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Layout2;
