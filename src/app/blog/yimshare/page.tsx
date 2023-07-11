"use client";
import { Row, Col, Typography, DatePicker, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { FC } from "react";
import Container from "../../../components/container";

import sdwan from "../../../assets/images/actical/sd-van.png";
import CYimShare from "@/components/display/page-blog/c-yimshare";

interface IYimShare {}
const YimShare: FC<{ props: IYimShare }> = ({ props }) => {
  const CardMock = [
    {
      title: "Only My Railgun",
      topic: "Yim share EP14",
      url: "https://www.youtube.com/watch?v=lTbhd5apcJo",
      img: sdwan,
      updateAt: "March 30,2022",
    },
    {
      title: "Europe Street beat",
      topic: "Yim share EP14",
      url: "https://youtu.be/XwNKiSlJQCI",
      updateAt: "March 20,2022",
    },
    {
      title: "Europe Street beat",
      topic: "Yim share EP14",
      url: "https://youtu.be/owk_LdgpNh0",
      updateAt: "March 20,2022",
    },
    {
      title: "Europe Street beat",
      topic: "Yim share EP14",
      url: "https://youtu.be/owk_LdgpNh0",
      updateAt: "March 20,2022",
    },
  ];
  return (
    <React.Fragment>
      <Container className="bg-[#081224] pb-16">
        <Row className="pt-10 pb-5">
          <Col span={24} className="mb-3">
            <Row className="">
              <Col flex="auto" className="text-start ">
                <Typography.Text style={{ color: "#3C97FF" }}>
                  Yim Share
                </Typography.Text>
              </Col>
              <Col>
                <Typography.Text className="mr-3" style={{ color: "#B2AFAF" }}>
                  เลือกเดือน
                </Typography.Text>
                <DatePicker picker="month" />
              </Col>
            </Row>
          </Col>
          <Row gutter={[40, 70]} className="">
            <Col xl={{ span: 6 }} lg={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CYimShare props={CardMock[0]} />
            </Col>
            <Col xl={{ span: 6 }} lg={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CYimShare props={CardMock[1]} />
            </Col>
            <Col xl={{ span: 6 }} lg={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CYimShare props={CardMock[2]} />
            </Col>
            <Col xl={{ span: 6 }} lg={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CYimShare props={CardMock[3]} />
            </Col>
          </Row>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default YimShare;
