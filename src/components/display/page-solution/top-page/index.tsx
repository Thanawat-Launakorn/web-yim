import { Row, Col, Typography } from "antd";
import React, { FC } from "react";
import { StaticImageData } from "next/image";
import CMonitor from "@/components/svg/monitor";
import { CImages } from "@/components/carousel";
import { CNavivagion } from "@/components/card";
import CYoutubeIcon from "@/components/svg/youtube";

interface TopPage {
  image: StaticImageData;
  title: string;
  description: string;
  carouselImages: { image: StaticImageData }[];
}
const CTopSolution: FC<TopPage> = ({
  image,
  title,
  description,
  carouselImages,
}) => {
  const [active, setActive] = React.useState<boolean>(true);

  const CNavMock = [
    {
      title: "Product",
      description:
        "Helps to solve problems for entrepreneurs and upgrade business in technology and innovation.",
      logo: (
        //monitor
        <CMonitor />
      ),
      onPressed: (v: string) => setActive((prevState) => !prevState),
      active,
    },
    {
      title: "Youtube Channel",
      description:
        "Helps to solve problems for entrepreneurs and upgrade business in technology and innovation.",
      logo: (
        //youtube
        <CYoutubeIcon />
      ),
      onPressed: (v: string) => setActive((prevState) => !prevState),

      active: !active,
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2  py-20">
        <div className="text-center sm:text-start mb-5 sm:m-0">
          <Typography.Title
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Text
            style={{
              color: "#D5D0D0",
            }}
            className="font-light !text-[12px] sm:!text-[13px]"
          >
            {description}
          </Typography.Text>
        </div>
        <div>
          <CImages images={carouselImages} />
        </div>
      </div>
      <Row align={"middle"} justify={"space-between"}>
        <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <CNavivagion props={CNavMock[0]} />
        </Col>
        <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <CNavivagion props={CNavMock[1]} />
        </Col>
      </Row>
    </>
  );
};

export default CTopSolution;
