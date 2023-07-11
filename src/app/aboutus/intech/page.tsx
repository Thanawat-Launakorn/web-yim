"use client";
import Container from "@/components/container";
import { CInTech } from "@/components/display/page-aboutus/c-intech";
import AI from "@/components/svg/ai";
import Blockchain from "@/components/svg/blockchain";
import Circuit from "@/components/svg/circuit";
import DataCenter from "@/components/svg/datacenter";
import SmartCity from "@/components/svg/smart-city";
import WebAndApp from "@/components/svg/web&app";
import { Col, Row } from "antd";
import React from "react";
import { FC } from "react";

interface IInTech {}
export const InTech: FC<{ props: IInTech }> = ({ props }) => {
  const CardMock = [
    {
      title: "SMART CITY",
      des: "Creating innovations for city building using IOT to connect data",
      icon: <SmartCity />,
    },
    {
      title: "BLOCKCHAIN",
      des: "Creating innovations for city building using IOT to connect data",
      icon: <Blockchain />,
    },
    {
      title: "AI",
      des: "Creating innovations for city building using IOT to connect data",
      icon: <AI />,
    },
    {
      title: "WEB & APP",
      des: "Creating innovations for city building using IOT to connect data",
      icon: <WebAndApp />,
    },
    {
      title: "DATA CENTER",
      des: "Creating innovations for city building using IOT to connect data",
      icon: <DataCenter />,
    },
    {
      title: "CIRCUIT",
      des: "Creating innovations for city building using IOT to connect data",
      icon: <Circuit />,
    },
  ];
  return (
    <React.Fragment>
      <Container className="bg-[#081224] pt-20">
        <div>
          <Col className="pl-10">
            <div className="  lg:text-[20px] text-center lg:text-left">
              <span
                style={{ fontSize: 22 }}
                className=" !text-[#3c97FF] hover:!text-[#FFFFFF]"
              >
                Innovation and Technology
              </span>
            </div>
          </Col>
          <Row className="p-10" gutter={[15, 15]}>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CInTech props={CardMock[0]} />
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CInTech props={CardMock[1]} />
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CInTech props={CardMock[2]} />
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CInTech props={CardMock[3]} />
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CInTech props={CardMock[4]} />
            </Col>
            <Col xl={{ span: 8 }} sm={{ span: 12 }} span={24}>
              <CInTech props={CardMock[5]} />
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};
