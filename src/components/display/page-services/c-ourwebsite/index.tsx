import { Row, Col, Typography, Space } from "antd";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface IOurwebsite {
  title: string;
  type: string;
  des: string;
  id?: string;
  img: {
    png?: StaticImageData;
    jpg?: StaticImageData;
    svg?: React.ReactNode;
  };
  styled?: {
    styledPng?: string;
  };
}

const COurWebsite: FC<{ props: IOurwebsite }> = ({ props }) => {
  const { title, type, des, id, img, styled } = props;
  return (
    <Row id={id} className="text-center">
      <Col span={24}>
        <Space direction="vertical" size={"small"} className="w-full">
          <Typography.Title
            level={4}
            style={{
              color: "white",
              margin: 0,
            }}
          >
            {title}
          </Typography.Title>
          <div className="flex justify-center align-middle">
            <Typography.Text
              style={{
                color: "#3C97FF",
                fontSize: 12,
              }}
            >{`${type} : `}</Typography.Text>
            <Typography.Text
              style={{
                color: "white",
                fontSize: 12,
                marginLeft: 5,
              }}
            >
              {des}
            </Typography.Text>
          </div>
        </Space>
      </Col>
      <Col span={24} className={`!grid !justify-center py-10 sm:py-0`}>
        {!!img.svg && (
          <div className="!grid !justify-center md:!mt-[-50px] lg:!mt-[-80px]">
            {img.svg}
          </div>
        )}
        {!!img.jpg && <Image src={img.jpg} alt="image" className="" />}

        {!!img.png && (
          <Image
            src={img.png}
            alt="image"
            className={`object-contain mt-0 sm:mt-10 xl:mt-0 xl:scale-75 px-5 sm:px-0 ${styled?.styledPng}`}
          />
        )}
      </Col>
    </Row>
  );
};

export default COurWebsite;
