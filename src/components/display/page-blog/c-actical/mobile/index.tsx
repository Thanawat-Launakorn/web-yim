import { FieldTimeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Carousel, Col, Row, Typography } from "antd";
import React from "react";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ICMActical {
  title: string;
  des: string;
  updateAt: string;
  img: StaticImageData;
}
const CMActical: FC<{ props: ICMActical }> = ({ props }) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const { title, des, updateAt, img } = props;

  return (
    <React.Fragment>
      <Row>
        <Col span={24} className="">
          <Carousel afterChange={onChange}>
            <Row
              // style={{ width: "600px" }}
              className=" bg-[#171E2B] rounded-[12px]   p-5 scale-75 "
            >
              <Col span={24}>
                <Row align="middle" className="" gutter={[10, 0]}>
                  <Col span={24} style={{}} className="text-center">
                    <Image
                      alt=""
                      src={img}
                      className="!rounded-[10] scale-75   "
                    ></Image>
                  </Col>
                  <Col span={24} className="p-3">
                    <Row className="scale-75 ">
                      <Col>
                        <Typography.Title
                          level={5}
                          style={{ color: "#3C97FF" }}
                        >
                          {title}
                        </Typography.Title>
                      </Col>

                      <Col className="">
                        <Typography.Paragraph
                          style={{ fontSize: "14px", color: "#B2AFAF" }}
                        >
                          {des}
                        </Typography.Paragraph>
                      </Col>

                      <Col className="text-center " span={4}>
                        <FieldTimeOutlined
                          style={{ fontSize: "20px", color: "#5A5858" }}
                        />
                      </Col>

                      <Col
                        style={{ color: "#5A5858" }}
                        className="translate-x-[-12px]"
                        span={10}
                      >
                        {updateAt}
                      </Col>
                      <Col className="text-right" span={10}>
                        <ArrowRightOutlined
                          style={{ fontSize: "20px", color: "#3C97FF" }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Carousel>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CMActical;
