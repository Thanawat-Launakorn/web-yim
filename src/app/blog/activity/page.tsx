"use client";
import { Row, Col, Typography, DatePicker, Card, Modal, Carousel } from "antd";
import React, { FC, useState } from "react";
import Container from "../../../components/container";
import CElec from "../../../components/svg/elec";
import CActivity from "@/components/display/page-blog/c-activity";
import ReactPlayer from "react-player";
import { styled } from "styled-components";
import tw from "twin.macro";

const StyledModal = styled.button`
  ${tw`w-full hidden`}
`;

interface IActivity {}
const Activity: FC<{ props: IActivity }> = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setUrl] = useState("");

  const Cancel = () => {
    setOpen(false);
    setUrl("");
  };

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
          <Row className="px-5">
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

          <div className="md:block hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CardMock.map((e, idx) => (
                <CActivity
                  key={idx}
                  props={e}
                  onPressed={() => {
                    setUrl(e.url);
                    setOpen(true);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden block p-4">
            <Carousel>
              {CardMock.map((e, idx) => (
                <CActivity
                  key={idx}
                  props={e}
                  onPressed={() => {
                    setUrl(e.url);
                    setOpen(true);
                  }}
                />
              ))}
            </Carousel>
          </div>

          <Modal
            open={open}
            onCancel={Cancel}
            footer={null}
            closable={false}
            keyboard
            width="1000px"
            bodyStyle={{}}
          >
            <ReactPlayer
              url={videoUrl}
              width={"100%"}
              height={500}
              className="rounded-[12px]  "
            />
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
