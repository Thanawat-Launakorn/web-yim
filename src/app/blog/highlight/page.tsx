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
        <div className="md:block hidden">
          <CHighlight props={Mock[0]} />
        </div>

        {/* <div className="md:hidden block ">
          <CMHighlight props={Mock[0]} />
        </div> */}
      </Container>
    </React.Fragment>
  );
};

export default Highlight;
