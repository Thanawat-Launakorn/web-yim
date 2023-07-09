import { Row, Col, Typography, Space } from "antd";
import { FC } from "react";
import styled from "styled-components";
// import "./tips.css";
import OptionalLayout from "@/components/layout/optionLayout";
interface ITips {
  title: string;
  cardItems: ICardItem[];
}

export const CTips: FC<{ props: ITips }> = ({ props }) => {
  const { title, cardItems } = props;
  return (
    <Row className="my-20">
      <Col span={24} className="text-center sm:text-start px-5 sm:px-0">
        <Typography.Title
          level={4}
          style={{
            color: "#3C97FF",
            marginBottom: 30,
            fontWeight: 400,
          }}
        >
          {title}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <OptionalLayout
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-5 sm:px-0"
          items={cardItems}
          renderItem={({
            item,
            key,
          }: {
            item: ICardItem;
            key: string | number;
          }) => {
            return <CardItem props={item} key={key} />;
          }}
        />
      </Col>
    </Row>
  );
};

interface ICardItem {
  title: string;
  des: string;
}

const StyledCard = styled.div`
  background-color: #011731;
  padding: 15px 20px;
`;

const CardItem: FC<{ props: ICardItem }> = ({ props }) => {
  const { title, des } = props;
  return (
    <StyledCard className="card">
      <Space direction="vertical">
        <Typography.Title
          level={5}
          style={{
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </Typography.Title>
        <Typography.Paragraph
          style={{
            color: "#969595",
            fontSize: 13,
            fontWeight: 300,
          }}
        >
          {des}
        </Typography.Paragraph>
      </Space>
    </StyledCard>
  );
};
