"use client";
import { Row, Col, Avatar, Space, Typography } from "antd";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { FC } from "react";
import ColoredLine from "../../c-colorline";
interface IDevelopment {
  logo: React.ReactNode;
  svg: StaticImageData;
  title: string;
  des: string;
  id?: string;
  styled?: {
    img: string;
  };
}

const CDevelopment: FC<{ props: IDevelopment }> = ({ props }) => {
  const { logo, svg, title, des, id, styled } = props;
  return (
    <Row
      className="p-10 sm:mx-0 sm:px-10 sm:pt-10 sm:my-20 rounded-lg"
      id={id}
      style={{
        boxShadow: "0px 0px 20px #5695F72E",
      }}
      align={"middle"}
      justify={"space-between"}
      gutter={12}
    >
      <Col
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
        className=""
      >
        <span>
          <Avatar src={logo} className="scale-75" size={64} shape={"square"} />
        </span>
        <center>
          <Image
            alt="image"
            src={svg}
            className={`object-contain ${styled?.img}`}
          />
        </center>
      </Col>
      <Col
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
        className="pr-20"
      >
        <Space direction="vertical" size={"large"} className="mb-10 xl:mb-0">
          <Typography.Title
            level={4}
            style={{
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography.Title>
          <ColoredLine color="white" />
          <div className="h-[230px] sm:h-[auto] overflow-y-scroll">
            <Typography.Text
              style={{
                color: "#969595",
                fontSize: 14,
                fontWeight: 300,
              }}
              className="!leading-loose"
            >
              {des}
            </Typography.Text>
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default CDevelopment;
