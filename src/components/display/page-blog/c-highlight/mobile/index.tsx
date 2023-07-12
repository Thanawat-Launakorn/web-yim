import ColoredLine from "@/components/display/c-colorline";
import { Col, Typography, Divider, Row } from "antd";
import React, { FC } from "react";
import ReactPlayer from "react-player";
import { YouTubeProps } from "react-youtube";

interface IMHighlight {
  url: string;
  des: string;
  title: string;
  activity: string;
}
const CMHighlight: FC<{ props: IMHighlight }> = ({ props }) => {
  const { des, title, activity, url } = props;

  return (
    <React.Fragment>
      <Row className="pt-5 pb-24">
        <Col>
          <Row>
            <Col span={24} className=" ">
              <Typography.Text
                style={{
                  color: "#3C97FF",
                }}
              >
                Highlight
              </Typography.Text>
            </Col>
          </Row>

          <Row>
            <Col span={24} className="text-center">
              <Typography.Text
                style={{
                  color: "#3C97FF",
                }}
              >
                {activity}
              </Typography.Text>
            </Col>
          </Row>

          <Row>
            <Col span={24} className="text-center">
              <Typography.Title level={3} style={{ color: "#FFFFFF" }}>
                {title}
              </Typography.Title>
            </Col>

            <Col span={24} className="justify-center">
              <ColoredLine color="#3C97FF" className="my-5 mx-auto xl:mx-0 " />
            </Col>
            <Col span={24} className="object-cover p-5">
              <ReactPlayer
                url={url}
                width={"100%"}
                height={"175%"}
                className=""
              />
            </Col>
          </Row>

          <Row className="translate-y-24 justify-center">
            <Col span={20} className="text-center">
              <Typography.Paragraph style={{ color: "#969595" }} className="">
                {des}
              </Typography.Paragraph>
            </Col>
            <Col span={24} className="text-center">
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
    </React.Fragment>
  );
};
export default CMHighlight;
