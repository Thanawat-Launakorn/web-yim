import { Row, Col, Typography } from "antd";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FC } from "react";

interface IAdvantages {
  type: string;
  title: string;
  leftIcons: ICon[];
  rightIcons: ICon[];
}

export const Advantages: FC<{ props: IAdvantages }> = ({ props }) => {
  const { type, title, leftIcons, rightIcons } = props;
  return (
    <Row align={"top"} className="mt-32 px-5 sm:p-0">
      <Col
        xl={{
          span: 12,
        }}
        lg={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        sm={{
          span: 24,
        }}
        className="xl:pr-20"
      >
        <div className="text-center sm:text-start mb-10 sm:mb-0">
          <Typography.Text
            style={{
              color: "#3C97FF",
              width: "15px !important",
            }}
          >
            {type}
          </Typography.Text>
          <Typography.Title
            level={2}
            style={{
              color: "white",
              fontWeight: 400,
            }}
            className="md:!mt-[70px] md:!mb-[175px]  lg:!mt-[70px] lg:!mb-[170px] xl:!mt-[50px] xl:!mb-[130px]"
          >
            {title}
          </Typography.Title>
        </div>

        {leftIcons.map((item) => (
          <IConItem props={item} key={item?.title} />
        ))}
      </Col>
      <Col
        xl={{
          span: 12,
        }}
        lg={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        sm={{
          span: 24,
        }}
      >
        {rightIcons.map((item) => (
          <IConItem props={item} key={item.title} />
        ))}
      </Col>
    </Row>
  );
};

interface ICon {
  logo: StaticImageData;
  title: string;
  des: string;
}

const IConItem: FC<{ props: ICon }> = ({ props }) => {
  const { logo, title, des } = props;
  return (
    <Row gutter={24} className="mb-20">
      <Col span={5}>
        <Image src={logo} alt="image" />
      </Col>
      <Col span={19}>
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
            color: "#D5D0D0",
            fontSize: 13,
            fontWeight: 300,
          }}
        >
          {des}
        </Typography.Paragraph>
      </Col>
    </Row>
  );
};
