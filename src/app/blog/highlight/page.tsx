"use client";
import { Row, Col, Typography, Divider, Button } from "antd";
import React, { FC } from "react";
import Container from "../../../components/container";
import CHighlight from "@/components/display/page-blog/c-highlight";
import CMHighlight from "@/components/display/page-blog/c-highlight/mobile";

interface IHighlight {}
const Highlight: FC<{ props: IHighlight }> = ({ props }) => {
  const Mock = [
    {
      title: "YIM Outing ปิด Pool Villa ให้เป็นค่ายลูกเสือ",
      des: "Y.I.M. Corporation ได้พา Developer และพนักงานทุกคนไปพักผ่อนหย่อนใจ ที่จังหวัด ประจวบคีรีขัน์ที่ได้บูรณะPool Villa ให้กลายเป็น ค่ายลูกเสือพร้อมกิจกรรมฐานสุด(เหนื่อย)สนุก",
      activity: "Activity",
      url: "https://youtu.be/XwNKiSlJQCI",
    },
  ];

  return (
    <React.Fragment>
      <Container className="bg-[#081224] pb-10">
        <Row>
          <Col span={24} className="sm:block hidden">
            <CHighlight props={Mock[0]} />
          </Col>

          <Col span={24} className="sm:hidden block ">
            <CMHighlight props={Mock[0]} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Highlight;
