import { FieldTimeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface ICardActical {
  title: string;
  des: string;
  updateAt?: string;
  url?: React.ReactNode;
  img: StaticImageData;
}
const CActical: FC<{ props: ICardActical }> = ({ props }) => {
  const { title, des, updateAt, url, img } = props;
  //   hover:border shadow-xl border-[#263348]
  return (
    <React.Fragment>
      <Row className=" bg-[#171E2B] rounded-[12px]   content-center justify-center ">
        <Col span={24} className="">
          <Row className="">
            <Col
              lg={{ span: 9 }}
              xl={{ span: 9 }}
              sm={{ span: 24 }}
              className="object-cover content-center text-center"
            >
              <Image
                alt=""
                src={img}
                className="rounded-[12px]   md:scale-90  sm:scale-75"
              />
            </Col>
            <Col
              className=""
              lg={{ span: 15 }}
              xl={{ span: 15 }}
              sm={{ span: 24 }}
            >
              <Row className="text-center content-center ">
                <Col span={24}>
                  <Row gutter={[0, 25]}>
                    <Col span={24} className="pt-5">
                      <Typography.Title level={5} style={{ color: "#3C97FF" }}>
                        {title}
                      </Typography.Title>
                    </Col>
                    <Col sm={{ span: 24 }} span={20} className="text-left">
                      <Typography.Text
                        style={{ color: "#B2AFAF", fontSize: "14px" }}
                      >
                        {des}
                      </Typography.Text>
                    </Col>
                    <Col span={24}>
                      <Row gutter={[0, 0]}>
                        <Col span={2}>
                          <FieldTimeOutlined
                            style={{ fontSize: "20px", color: "#5A5858" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          className="text-left object-center translate-y-0.5"
                        >
                          <Typography.Text className="!text-[#5A5858]">
                            {updateAt}
                          </Typography.Text>
                        </Col>
                        <Col className="flex flex-auto justify-end">
                          <ArrowRightOutlined
                            style={{ fontSize: "20px", color: "#3C97FF" }}
                            className="-translate-x-9"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CActical;
