"use client";
import { Row, Col, Typography, DatePicker, Card } from "antd";
import React, { FC } from "react";
import Container from "../../../components/container";
import CElec from "../../../components/svg/elec";
import CActivity from "@/components/display/page-blog/c-activity";

interface IActivity {}
const Activity: FC<{ props: IActivity }> = ({ props }) => {
  const CardMock = [
    {
      title: "Europe Street beat",
      des: "As the technology of microprocessor units becomes more advanced Servo motor  control system, HMI, PLC, CNCAs the technology of microprocessor units becomes more advanced Servo motor  control",
      onClick: (v: any) => v,
      updateAt: "March 30,2022",
      url: "https://www.youtube.com/watch?v=lTbhd5apcJo",
    },
    {
      title: "test2",
      des: "As the technology of microprocessor units becomes more advanced Servo motor  control system, HMI, PLC, CNCAs the technology of microprocessor units becomes more advanced Servo motor  control",
      onClick: (v: any) => v,
      updateAt: "March 20,2022",
      url: "https://youtu.be/owk_LdgpNh0",
    },
    {
      title: "test3",
      des: "As the technology of microprocessor units becomes more advanced Servo motor  control system, HMI, PLC, CNCAs the technology of microprocessor units becomes more advanced Servo motor  control",
      onClick: (v: any) => v,
      updateAt: "March 10,2022",
      url: "https://youtu.be/bbGaZf-30WM",
    },
  ];
  return (
    <Container className="bg-[#081224] pt-5">
      <Row>
        <Col span={24}>
          <Row className="">
            <Col flex="auto" className="text-start ">
              <Typography.Text style={{ color: "#3C97FF" }}>
                Activity
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="mr-3" style={{ color: "#B2AFAF" }}>
                เลือกเดือน
              </Typography.Text>
              <DatePicker picker="month" />
            </Col>
          </Row>
          <Row className="justify-center pt-8" gutter={[30, 30]}>
            <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }} span={24}>
              <CActivity props={CardMock[0]} />
            </Col>
            <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }} span={24}>
              <CActivity props={CardMock[1]} />
            </Col>
            <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }} span={24}>
              <CActivity props={CardMock[2]} />
            </Col>
            <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }} span={24}>
              <CActivity props={CardMock[0]} />
            </Col>
            <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }} span={24}>
              <CActivity props={CardMock[1]} />
            </Col>
            <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }} span={24}>
              <CActivity props={CardMock[2]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
