"use client";
import { Row, Col, Typography, Space } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface ICustomer {
  data: { title: string; logo: StaticImageData[] }[];
  tCus: string;
}
export const CCustomer: FC<{ props: ICustomer }> = ({ props }) => {
  const { data, tCus } = props;
  const [active, setActive] = React.useState<any>();
  return (
    <Row>
      <Col className="pb-5" span={24}>
        <span
          style={{ fontSize: 22 }}
          className="text-[#3c97ff] hover:text-[#fff]"
        >
          {tCus}
        </span>
      </Col>
      <Col span={24}>
        {data?.map((ele, idx) => {
          const { logo, title } = ele;
          return (
            <Row
              key={idx}
              align={"middle"}
              className=" hover:brightness-100 transition-all ease-linear delay-100 saturate-0 hover:saturate-100 group text-[#3c97ff]   hover:border-l-2 hover:border-[#3c97ff] "
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive("")}
            >
              <Col span={8} className="bg-[#0F1C33] p-[23.3px]  ">
                <Typography.Title
                  style={{
                    margin: 0,
                    fontSize: 16,

                    fontWeight: 400,
                  }}
                  className=" !text-[#3C97FF]"
                >
                  {title}
                </Typography.Title>
              </Col>
              <Col span={16} className="bg-[#0F1C33]">
                <Space direction="horizontal" size={"middle"} align={"center"}>
                  {logo.map((e, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-center p-[8px] text-center"
                    >
                      <Image
                        src={e}
                        alt=""
                        className=" !h-[50px] !w-[110px] object-contain"
                      ></Image>
                    </div>
                  ))}
                </Space>
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};

export default CCustomer;
