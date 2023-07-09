"use client";
import { Col, Row, Timeline, Typography } from "antd";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledTimeLine = styled(Timeline)`
  ${tw`!p-10 sm:!p-[0]`}
  .ant-timeline-item-head {
    padding: 0 !important;
    background-color: transparent !important;
  }

  .ant-timeline-item-tail {
    ${tw`bg-[#80FBF7]`}
  }
`;

interface ITimeLineDsc {
  header: string;
  dsc: string;
}

interface ITimeLineDot {
  title: string;
}

export const TimeLineDot: FC<{ props: ITimeLineDot }> = ({ props }) => {
  const { title } = props;
  return (
    <div
      style={{
        backgroundColor: "#010F21",
        color: "#3C97FF",
        padding: "10px 12.5px",
        boxShadow: "-1px 0px 80px 5px #5695F740",
      }}
      className="rounded-[5px] "
    >
      {title}
    </div>
  );
};

export const TimeLineDsc: FC<{ props: ITimeLineDsc }> = ({ props }) => {
  const { header, dsc } = props;
  return (
    <Row className="!px-5 my-5 sm:!py-12 sm:my-0">
      <Col span={24}>
        <Typography.Title
          level={5}
          style={{
            color: "#3C97FF",
          }}
          className="!tracking-wide !font-semibold"
        >
          {header}
        </Typography.Title>
      </Col>
      <Col>
        <Typography.Text
          style={{
            color: "#D5D0D0",
            fontSize: 12,
          }}
        >
          {dsc}
        </Typography.Text>
      </Col>
    </Row>
  );
};

interface ITimeline {
  menuItem: string[];
  title: {
    text: string;
    color: string;
  };
  optional?: {
    footer: boolean;
  };
}

export const CTimeline: FC<{ props: ITimeline }> = ({ props }) => {
  const { menuItem, title, optional } = props;

  return (
    <React.Fragment>
      <Typography.Title
        level={4}
        style={{
          color: title.color,
        }}
        className="tracking-wide pt-20 pb-10 text-center sm:text-start"
      >
        {title.text}
      </Typography.Title>
      <StyledTimeLine
        items={menuItem.map((item, idx) => {
          return {
            children: <TimeLineItem title={item} />,
            dot: <TimeLineDot props={{ title: `${idx + 1}` }} />,
          };
        })}
      />
      {!!optional?.footer && (
        <Typography.Title
          level={5}
          style={{
            color: "#3C97FF",
            fontSize: 14,
          }}
          className="text-center px-5 sm:p-[0] sm:text-start sm:w-[600px] sm:relative -top-[30px] left-[52.5px]"
        >
          The specific steps and techniques used in the UI design process can
          vary depending on the specific goals and constraints of the project.
        </Typography.Title>
      )}
    </React.Fragment>
  );
};

interface ITimeLineItem {
  title: string;
}

const TimeLineItem: FC<ITimeLineItem> = ({ title }) => {
  return (
    <Row className="my-[25px] !px-5">
      <Col span={24}>
        <Typography.Title
          style={{
            fontSize: 15,
            fontWeight: 200,
            color: "white",
          }}
          className="!leading-loose"
        >
          {title}
        </Typography.Title>
      </Col>
    </Row>
  );
};
