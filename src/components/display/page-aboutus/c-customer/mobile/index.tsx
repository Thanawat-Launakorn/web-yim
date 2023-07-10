import { Col, Row, Space, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FC } from "react";

interface IMCustomer {
  data: { title: string; logo: StaticImageData[] }[];
  tCus: string;
}
const CMCustomer: FC<{ props: IMCustomer }> = ({ props }) => {
  const { data, tCus } = props;
  return (
    <React.Fragment>
      <Row>
        <Col span={24} className="py-10">
          <span
            style={{ fontSize: 22 }}
            className="text-[#3c97ff] hover:text-[#fff]"
          >
            {tCus}
          </span>
        </Col>
        <Col span={24}>
          {data.map((ele, idx) => {
            const { logo, title } = ele;
            return (
              <div
                key={idx}
                className="  text-center hover:brightness-100 transition-all ease-linear delay-100 saturate-0 hover:saturate-100 group    hover:border-t-4 hover:border-[#3c97ff]"
              >
                <div className=" grid grid-cols-1 bg-[#0F1C33] pt-5">
                  <Typography.Title
                    style={{ fontSize: 18, fontWeight: 400 }}
                    className=" !text-[#3C97FF] text"
                  >
                    {title}
                  </Typography.Title>
                </div>
                <div className="bg-[#0F1C33] pb-5">
                  <Space direction="horizontal">
                    {logo.map((e, idx) => (
                      <div className="" key={idx}>
                        <Image
                          src={e}
                          alt=""
                          className=" !h-[50px] !w-[110px] object-contain"
                        />
                      </div>
                    ))}
                  </Space>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default CMCustomer;
