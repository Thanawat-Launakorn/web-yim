import { CNav } from "@/components/card";
import { Row, Col, Typography } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import CMonitor from "@/components/svg/monitor";

interface TopPage {
    image: StaticImageData
}
const CTopSolution: FC<TopPage> = ({image}) => {
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
        <svg
          id="Group_21877"
          data-name="Group 21877"
          xmlns="http://www.w3.org/2000/svg"
          width="28.195"
          height="28.21"
          viewBox="0 0 28.195 28.21"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_20390"
                data-name="Rectangle 20390"
                width="28.195"
                height="28.21"
                fill="#269FF3"
              />
            </clipPath>
          </defs>
          <g
            id="Group_21873"
            data-name="Group 21873"
            clip-path="url(#clip-path)"
          >
            <path
              id="Path_23697"
              data-name="Path 23697"
              d="M13.267,0h1.708a1.553,1.553,0,0,0,.212.045,13.421,13.421,0,0,1,5.935,1.837,13.916,13.916,0,0,1,6.858,9.79c.1.512.145,1.032.217,1.548v1.708c-.016.088-.033.177-.048.265-.113.725-.177,1.46-.345,2.17A14.1,14.1,0,1,1,11.31.283c.646-.126,1.3-.19,1.957-.282m.821,19.4c1.5,0,2.992.005,4.488,0a2.805,2.805,0,0,0,2.944-2.941q0-2.368,0-4.736A2.8,2.8,0,0,0,18.614,8.8Q14.1,8.79,9.583,8.8a2.8,2.8,0,0,0-2.916,2.94q-.006,2.368,0,4.735a3.343,3.343,0,0,0,.078.737A2.777,2.777,0,0,0,9.572,19.4c1.505.008,3.01,0,4.515,0"
              transform="translate(0 0)"
              fill="#269FF3"
            />
            <path
              id="Path_23698"
              data-name="Path 23698"
              d="M19.391,23.414V18.885l3.894,2.268-3.894,2.261"
              transform="translate(-7.235 -7.046)"
              fill="#269FF3"
            />
          </g>
        </svg>
      ),
      onPressed: (v: string) => setActive((prevState) => !prevState),

      active: !active,
    },
  ];
  return (
    <>
      <Row align={"top"} justify="space-between" className="py-20">
        <Col
          xl={{ span: 5 }}
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 5 }}
          xs={{ span: 24 }}
          className="text-center sm:text-start mb-5 sm:m-0"
        >
          <Typography.Title
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Product
          </Typography.Title>
          <Typography.Text
            style={{
              color: "#D5D0D0",
            }}
            className="font-light !text-[12px] sm:!text-[13px]"
          >
            Websites that make it easier for customers to work with.
          </Typography.Text>
        </Col>
        <Col
          xl={{ span: 15 }}
          lg={{ span: 15 }}
          md={{ span: 15 }}
          sm={{ span: 15 }}
          xs={{ span: 24 }}
        >
          <Image src={image} alt="image" className="object-cover" />
        </Col>
      </Row>
      <Row align={"middle"} justify={"space-between"}>
        <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <CNav props={CNavMock[0]} />
        </Col>
        <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <CNav props={CNavMock[1]} />
        </Col>
      </Row>
    </>
  );
};

export default CTopSolution;
