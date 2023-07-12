"use client";
import { Row, Col, Typography, DatePicker, Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { FC, useState } from "react";
import Container from "../../../components/container";

import sdwan from "../../../assets/images/actical/sd-van.png";
import CYimShare from "@/components/display/page-blog/c-yimshare";
import ReactPlayer from "react-player";
export const CardMock = [
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
interface IYimShare {}
const YimShare: FC<{ props: IYimShare }> = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setUrl] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const Cancel = () => {
    setOpen(false);
    setUrl("");
  };

  return (
    <React.Fragment>
      <Container className="bg-[#081224] pb-16">
        <Row className="pt-10 pb-5 justify-center">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CardMock.map((e, idx) => (
              <CYimShare
                key={idx}
                props={e}
                onPressed={() => {
                  setUrl(e.url);
                  setOpen(true);
                }}
              />
            ))}
          </div>
          <Modal
            open={open}
            onCancel={Cancel}
            footer={null}
            closable={false}
            width={550}
          >
            <ReactPlayer
              url={videoUrl}
              controls
              width={"100%"}
              height={"600px"}
              className="rounded-[12px] p-2 opacity-80"
            ></ReactPlayer>
          </Modal>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default YimShare;
