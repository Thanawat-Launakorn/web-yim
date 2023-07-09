import { Row, Col, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import "./top.css";
import React, { FC } from "react";

interface ITopC {
  content: {
    type: string;
    title: string;
    des: string;
    svg: StaticImageData;
    svgHovered: StaticImageData;
  };
}

export const TopC: FC<{ props: ITopC }> = ({ props }) => {
  const { content } = props;

  return (
    <React.Fragment>
      <Row className="!relative flex sm:flex-row group  min-h-[350px] sm:min-h-[500px]">
        <Col
          className="left-5 sm:left-0 top-[300px] sm:top-[450px] absolute"
          xl={{
            span: 12,
          }}
          lg={{
            span: 24,
          }}
          md={{
            span: 24,
          }}
          sm={{
            span: 24,
          }}
          xs={{
            span: 24,
          }}
        >
          <div>
            <div
              style={{
                color: "#3C97FF",
              }}
              className="type"
            >
              {content.type}
            </div>
            <Typography.Title
              level={3}
              style={{
                color: "white",
                fontWeight: 300,
              }}
              className="hidden group-hover:block  group-hover:top-[-100px] absolute -left-2 titleHover"
            >
              {content.title}
            </Typography.Title>
            <Typography.Title
              level={3}
              style={{
                color: "white",
                fontWeight: 300,
                marginTop: 10,
              }}
              className="group-hover:opacity-0 w-[150px] titleHovered"
            >
              {content.title}
            </Typography.Title>
            <Typography.Paragraph
              style={{
                color: "#969595",
                fontSize: 13,
                fontWeight: 300,
              }}
              className="group-hover:opacity-100 opacity-0 absolute -left-2 -top-[50px] !leading-loose des !w-[350px] sm:w-[auto]"
            >
              {content.des}
            </Typography.Paragraph>
          </div>
        </Col>
        <Col className="!absolute !right-0" span={12}>
          {/* no hover */}
          <div className="relative right-[50px]">
            <Image
              alt="image"
              src={content.svg}
              className="scale-150 object-contain group-hover:hidden block"
            />
            {/* hovered */}
            <Image
              alt="image"
              src={content.svgHovered}
              className="scale-150 object-contain  hidden group-hover:block "
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
