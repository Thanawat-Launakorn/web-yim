import { Row, Col, Typography, Space } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import OptionalLayout from "@/components/layout/optionLayout";
import { StaticImageData } from "next/image";

interface IServices {
  items: { title: string; img: StaticImageData }[];
  type: string;
  title: string;
}

const Services: FC<{ props: IServices }> = ({ props }) => {
  const { items, type, title } = props;
  return (
    <Row className="my-20">
      <Col span={24} className="text-center">
        <Space direction="vertical" size={"middle"}>
          <Typography.Text
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: "#0055B7",
            }}
          >
            {type}
          </Typography.Text>
          <Typography.Title
            level={4}
            style={{
              color: "white",
            }}
          >
            {title}
          </Typography.Title>
        </Space>
      </Col>
      <div className="my-12aw" />
      <Col span={24}>
        <OptionalLayout
          items={items}
          className="grid grid-cols-1 gap-5 px-5 sm:px-0 sm:grid-cols-3 lg:gap-2 xl:gap-10 "
          renderItem={({
            item,
            key,
          }: {
            item: { img: string; title: string };
            key: string | number;
          }) => <ServiceItem content={item} key={key} />}
        />
      </Col>
    </Row>
  );
};

const StyledCard = styled.div`
  .main {
    ${tw`rounded-lg  bg-[#0c12329e] p-10`};
  }
`;

interface IServiceItem {
  content: {
    img: string;
    title: string;
  };
  styled?: {
    styleImg: string;
    styleTitle: string;
  };
}

const ServiceItem: FC<IServiceItem> = ({ content, styled }) => {
  return (
    <React.Fragment>
      <StyledCard>
        <Row className="main">
          <Col span={24} className="text-end">
            <Image
              alt="image"
              src={content.img}
              className={`object-cover !h-[83px] !w-[83px] ${styled?.styleImg}`}
            />
          </Col>
          <div className="my-24"></div>
          <Col span={24} className="text-start">
            <Typography.Title
              level={4}
              style={{
                color: "white",

                fontWeight: 400,
              }}
              className={`${styled?.styleTitle} pr-10`}
            >
              {content.title}
            </Typography.Title>
          </Col>
          <div className="my-14"></div>
          <Col className="flex flex-row w-full">
            <div className="rounded-lg bg-[#3C97FF] w-[60%] h-[7.5px]" />
            <div className="rounded-lg bg-[#3c97FF] brightness-75 w-[15%] h-[7.5px] ml-2.5" />
            <div className="rounded-lg bg-[#3c97FF] opacity-80 w-[5%] h-[7.5px] ml-8" />
          </Col>
        </Row>
      </StyledCard>
    </React.Fragment>
  );
};

export default Services;
