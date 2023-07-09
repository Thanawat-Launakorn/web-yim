import OptionalLayout from "@/components/layout/optionLayout";
import { Col, Row, Space, Typography } from "antd";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
interface IAdvantages {
  content?: {
    type: string;
    title: string;
    des: string;
  };
  items?: IAdvantageItem[];
}

const Advantages: FC<IAdvantages> = ({ content, items }) => {
  const { type, title, des } = content || {};
  return (
    <React.Fragment>
      <Row className="bg-[#0C1828] p-10">
        <Col span={24}>
          <Space
            direction="vertical"
            size={"middle"}
            className="w-full text-center"
          >
            <Typography.Text
              style={{
                color: "#0055B7",
                fontSize: 13,
                fontWeight: 300,
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
            <Typography.Paragraph
              style={{
                color: "#D5D0D0",
                fontSize: 13,
                fontWeight: 300,
              }}
            >
              {des}
            </Typography.Paragraph>
          </Space>
        </Col>
        <Col span={24}>
          <OptionalLayout
            items={items}
            className="lg:grid-cols-1 mt-10"
            renderItem={({
              item,
              key,
            }: {
              item: IAdvantageItem;
              key: string | number;
            }) => <AdvantageItem props={item} key={key} />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

interface IAdvantageItem {
  title: string;
  des: string;
}

const StyledAdv = styled.div`
  * {
    ${tw`transition-all delay-75 ease-linear`}
  }

  div:hover {
    .indicatorLine {
      background-color: #3c97ff;
    }

    .title {
      color: #3c97ff !important;
    }
  }
`;

const Indicator = styled.div`
  height: 100%;
  width: 1.5px;
  background-color: #d5d0d027;
`;

const AdvantageItem: FC<{ props: IAdvantageItem }> = ({ props }) => {
  const { title, des } = props;
  return (
    <StyledAdv className="flex flex-col justify-start">
      <Row>
        <Col span={1}>
          <Indicator className="indicatorLine" />
        </Col>
        <Col span={23} className="pb-5">
          <Typography.Title
            level={5}
            style={{
              color: "white",
              fontSize: 15,
            }}
            className="title"
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              color: "#D5D0D0",
              fontSize: 13,
              fontWeight: 300,
            }}
          >
            {des}
          </Typography.Paragraph>
        </Col>
      </Row>
    </StyledAdv>
  );
};

export default Advantages;
