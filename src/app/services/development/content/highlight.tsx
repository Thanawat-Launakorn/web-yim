"use client";
import { Row, Col, Typography, Space } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import vehicle from "@/assets/images/jpg/vehicle.jpg";
import monitorWithMobile from "@/assets/images/png/monitorWithPhone.png";
import mobile from "@/assets/images/png/mobile.png";
import ColoredLine from "@/components/display/c-colorline";

interface IHightlight {
  id?: string;
  title: string;
}

export const Hightlight: FC<IHightlight> = ({ id, title }) => {
  return (
    <div>
      <Row id={id}>
        <Col
          xl={{
            span: 5,
          }}
          lg={{
            span: 24,
          }}
          md={{
            span: 24,
          }}
          sm={{
            span: 24,
          }}
          xs={{
            span: 24,
          }}
        >
          <div className="text-center sm:text-start">
            <Typography.Title
              level={5}
              style={{
                color: "white",
              }}
            >
              {title}
            </Typography.Title>
            <CDetail
              type="Digital Focus"
              title="Interface Detail Design"
              description="Smart Building Solution ภาพรวมการออกแบบของระบบงานการจัดการอาคารอัจฉริยะ โดยระบบจะมีโมดูลต่างๆเพื่อสามารคไปจัดการและบริหารจัดการอาคารได้อย่างมีประสิทธิภาพโดยมีระบบต่าง ที่อยู่ในโครงการ"
              className="px-5 sm:px-0 xl:pr-10 lg:mt-[25px] xl:mt-[100px]"
            />
          </div>
        </Col>
        <Col
          xl={{
            span: 19,
          }}
          lg={{
            span: 24,
          }}
          className="px-5 sm:p-0 lg:mt-10"
        >
          <Image
            alt="image"
            src={vehicle}
            className="object-contain mt-10 lg:m-0"
          />
        </Col>
      </Row>
      <div className="mt-[50px] sm:mt-[200px]"></div>
      <Row className="bg-[#00244D] p-10 sm:p-20">
        <Col
          span={16}
          xl={{
            span: 16,
            order: 1,
          }}
          lg={{
            span: 16,
            order: 1,
          }}
          md={{
            span: 16,
            order: 1,
          }}
          sm={{
            span: 16,
            order: 1,
          }}
          xs={{
            span: 24,
            order: 2,
          }}
        >
          <Image
            alt={"image"}
            src={monitorWithMobile}
            className="object-contain"
          />
        </Col>
        <Col
          xl={{
            span: 8,
            order: 2,
          }}
          lg={{
            span: 8,
            order: 2,
          }}
          md={{
            span: 8,
            order: 2,
          }}
          sm={{
            span: 8,
            order: 2,
          }}
          xs={{
            span: 24,
            order: 1,
          }}
        >
          <CDetail
            reverse
            type="Application"
            title="Q CHARGE"
            description="management system with in various project with functions and details that cover the whole project"
          />
        </Col>
      </Row>

      <Row className="bg-[#012752] p-10 sm:p-20" align={"middle"} justify="end">
        <Col
          xl={{
            span: 10,
          }}
          lg={{
            span: 10,
          }}
          md={{
            span: 10,
          }}
          sm={{
            span: 10,
          }}
          xs={{
            span: 24,
          }}
          className="sm:pl-20"
        >
          <CDetail
            reverse
            type="Application"
            title="Q CHARGE"
            description="management system with in various project with functions and details that cover the whole project"
          />
        </Col>
        <Col
          xl={{
            span: 14,
          }}
          lg={{
            span: 14,
          }}
          md={{
            span: 14,
          }}
          sm={{
            span: 14,
          }}
          xs={{
            span: 24,
          }}
        >
          <Image src={mobile} alt="image" className="object-contain" />
        </Col>
      </Row>
      <div className="sm:mt-[200px]"></div>
    </div>
  );
};

interface IDetail {
  type: string;
  title: string;
  description: string;
  className?: string;
  reverse?: boolean;
}
export const CDetail: FC<IDetail> = ({
  type,
  title,
  description,
  className,
  reverse,
}) => {
  return (
    <React.Fragment>
      <Space
        direction="vertical"
        className={`${className} text-center sm:text-start`}
      >
        <div className={`flex flex-col ${!!reverse && "flex-col-reverse"}`}>
          <Typography.Text
            style={{
              color: "#3C97FF",
              marginBottom: 10,
            }}
          >
            {type}
          </Typography.Text>
          <ColoredLine color="#3C97FF" className="mx-auto sm:mx-0" />
        </div>

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
            color: "white",
            fontWeight: 200,
          }}
        >
          {description}
        </Typography.Paragraph>
      </Space>
    </React.Fragment>
  );
};
