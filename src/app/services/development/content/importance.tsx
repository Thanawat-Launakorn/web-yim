"use client";
import { Typography, Row, Col, Space } from "antd";
import Image from "next/image";
import { FC } from "react";
import visibility from "@/assets/images/png/visibility.png";
import accesibility from "@/assets/images/png/accesibility.png";
import credibility from "@/assets/images/png/credibility.png";
import visibilitybag from "@/assets/images/png/visibilityBag.png";
import { StaticImageData } from "next/image";
import ColoredLine from "@/components/display/c-colorline";

interface IImportant {
  title: string;
  id: string;
}

export const CImportant: FC<{ props: IImportant }> = ({ props }) => {
  const { title, id } = props;
  const Mock: IChild[] = [
    {
      img: visibility,
      title: "Visibility",
      des: "Helps to solve problems for enterpreneurs and upgrade business in technology and innovation.",
    },
    {
      img: credibility,
      title: "Credibility",
      des: "Having a professional-looking website can help to establish crediblity and trust with potential customers or clients.",
    },
    {
      img: accesibility,
      title: "Accesibility",
      des: "A website allows people to access information about your business or organization at any time, from any location, making it convenient for them to learn more about what you have to offer.",
    },
    {
      img: visibilitybag,
      title: "Visiblity",
      des: "A website can be a useful tool for communication, allowing you to share news, update, and other information with your audience.",
    },
  ];
  return (
    <div id={id}>
      <div className="px-5 sm:p-0 sm:my-[80px]">
        <Typography.Title
          level={5}
          style={{
            color: "white",
          }}
        >
          {title}
        </Typography.Title>
        <div>
          {Mock.map((ele, idx) => {
            return <CChild key={idx} props={ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

interface IChild {
  img: StaticImageData;
  title: string;
  des: string;
}

const CChild: FC<{ props: IChild }> = ({ props }) => {
  const { img, title, des } = props;
  return (
    <Row align={"middle"} justify="space-between">
      <Col
        xl={{
          span: 5,
        }}
        lg={{
          span: 5,
        }}
        md={{
          span: 5,
        }}
        sm={{
          span: 5,
        }}
        xs={{
          span: 24,
        }}
      >
        <Image alt="image" src={img} className="object-contain" />
      </Col>
      <Col
        xl={{
          span: 19,
        }}
        lg={{
          span: 19,
        }}
        md={{
          span: 19,
        }}
        sm={{
          span: 19,
        }}
        xs={{
          span: 24,
        }}
      >
        <Space
          direction="vertical"
          size={"small"}
          className="text-center sm:text-start"
        >
          <ColoredLine color="#3C97FF" className="mx-auto sm:mx-0" />

          <Typography.Title
            level={5}
            style={{
              color: "white",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              color: "white",
              fontWeight: 200,
            }}
          >
            {des}
          </Typography.Paragraph>
        </Space>
      </Col>
    </Row>
  );
};
