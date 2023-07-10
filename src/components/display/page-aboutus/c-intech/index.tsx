"use client";
import { Row, Col, Typography } from "antd";
import React, { FC } from "react";

interface IInTech {
  title?: string;
  des?: string;
  icon?: string | React.ReactNode;
}
export const CInTech: FC<{ props: IInTech }> = ({ props }) => {
  const { title, des, icon } = props;
  return (
    <React.Fragment>
      <Row className="bg-[#0f2339] p-5 " style={{ height: "200px" }}>
        <Col span={24} className="" style={{ width: "50px", height: "50px" }}>
          <div className="flex justify-end  ">{icon}</div>
        </Col>

        <Col span={24}>
          <Typography.Title level={4} style={{ color: "#3C97FF" }}>
            {title}
          </Typography.Title>
        </Col>

        <Col style={{ width: "250px", height: "" }}>
          <Typography.Text style={{ color: "#FFF" }}>{des}</Typography.Text>
        </Col>
      </Row>
    </React.Fragment>
  );
};
