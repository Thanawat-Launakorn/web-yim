import { ArrowRightOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Modal, Row, Typography } from "antd";
import React, { FC, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactPlayer from "react-player";
interface IHighlight {
  des?: string;
  title?: string;
  activity: string;
  url?: string;
}
// https://youtu.be/XwNKiSlJQCI
export const CHighlight: FC<{ props: IHighlight }> = ({ props }) => {
  const { des, title, activity, url } = props;

  return (
    <React.Fragment>
      <Col span={24}>
        <Row className="">
          <Col
            // xl={{ span: 16 }}
            // lg={{ span: 16 }}
            md={{ span: 16 }}
            sm={{ span: 24 }}
            // className=" translate-x-[100px] scale-100 xl:scale-100 xl:translate-x-[60px] xl:translate-y-[0px] lg:scale-75 lg:translate-x-[-70px] lg:translate-y-[-40px]  sm:scale-50 sm:translate-x-[-40px]"
          >
            <Row className="p-5" style={{ height: "500px" }}>
              <Col span={24} className="p-5">
                {/* <CYoutube
                props={{ opts, onReady: onPlayerReady }}
                videoId={"XwNKiSlJQCI"}
              /> */}
                {/* <ReactPlayer
                  url={url}
                  width={"100%"}
                  height={"100%"}
                  controls
                /> */}
              </Col>
            </Row>
          </Col>

          <Col
            // xl={{ span: 8 }}
            // lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 24 }}
            // className="grid grid-cols-1 grid-rows-4 xl:scale-100 xl:translate-x-[-60px] lg:scale-95 lg:translate-x-[-20px] sm:scale-75 sm:translate-x-[80px] "
          >
            <Row className="!content-center translate-y-10" gutter={[0, 10]}>
              <Col span={24} className="">
                <Typography.Text
                  style={{
                    color: "#3C97FF",
                  }}
                >
                  {activity}
                </Typography.Text>
              </Col>

              <Col span={18}>
                <Typography.Title level={3} style={{ color: "#FFFFFF" }}>
                  {title}
                </Typography.Title>
                <Divider className="bg-[#969595]" />
              </Col>

              <Col span={18}>
                <Typography.Paragraph
                  style={{ color: "#969595" }}
                  className="my-"
                >
                  {des}
                </Typography.Paragraph>
              </Col>

              <Col span={24}>
                <button
                  style={{
                    backgroundColor: "#3C97FF",
                    color: "#070723",
                    width: 80,
                    height: 30,
                  }}
                  className="rounded-3xl"
                >
                  More
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
};
export default CHighlight;
