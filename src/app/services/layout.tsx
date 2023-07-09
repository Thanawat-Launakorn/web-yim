"use client";
import AppFooter from "@/components/layout/footer";
import { Sider } from "@/components/layout/side";
import { Col, Row } from "antd";
import React, { FC } from "react";

const Services: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Row className="">
      <Col
        xl={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        md={{
          span: 0,
        }}
        sm={{
          span: 0,
        }}
        xs={{
          span: 0,
        }}
        className="bg-[#081224] overflow-hidden  hidden lg:block xl:px-[25px] "
      >
        <Sider />
      </Col>
      <Col
        xl={{
          span: 18,
        }}
        lg={{
          span: 18,
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
        className="pt-[80px] bg-[#081224] sm:px-[50px]"
      >
        {children}
        <AppFooter services />
      </Col>
    </Row>
  );
};

export default Services;
