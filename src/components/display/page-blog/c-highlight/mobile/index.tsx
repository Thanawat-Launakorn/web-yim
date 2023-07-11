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
        <Col span={24} className=" ">
          <Typography.Text
            style={{
              color: "#3C97FF",
            }}
          >
            Highlight
          </Typography.Text>
        </Col>

        <Col span={24} className="text-center">
          <Typography.Text
            style={{
              color: "#3C97FF",
            }}
          >
            {activity}
          </Typography.Text>
        </Col>

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
            // props={{ opts, onReady: onPlayerReady }}
            url={url}
            // videoId={"lTbhd5apcJo"}
            width={"100%"}
            height={"175%"}
            className=""
          />
        </Col>
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
      </Row>
    </React.Fragment>

    // <div className="grid grid-cols-1 grid-rows-1  ">
    //   <div className="text-center scale-90">
    // <Typography.Text
    //   style={{
    //     color: "#3C97FF",
    //   }}
    // >
    //   {activity}
    // </Typography.Text>
    //     <Typography.Title
    //       level={3}
    //       style={{ color: "#FFFFFF" }}
    //       className="text-center"
    //     >
    //       {title}
    //     </Typography.Title>
    //     <ColoredLine color="#3C97FF" className="my-5 mx-auto xl:mx-0 " />
    //     <div className="lg:translate-x-[100px] md:translate-x-[30px] sm:translate-x-[-20px] translate-x-[-70px] sm:scale-100  scale-50 ">
    //       <ReactPlayer
    //         props={{ opts, onReady: onPlayerReady }}
    //         url={url}
    //         // videoId={"lTbhd5apcJo"}
    //         className=""
    //       />
    //     </div>

    //     <Typography.Paragraph
    //       style={{ color: "#969595" }}
    //       className="my-10 sm:scale-95"
    //     >
    //       {des}
    //     </Typography.Paragraph>
    //     <button
    //       style={{
    //         backgroundColor: "#3C97FF",
    //         color: "#070723",
    //         width: 80,
    //         height: 30,
    //       }}
    //       className="rounded-3xl"
    //     >
    //       More
    //     </button>
    //   </div>
    // </div>
  );
};
export default CMHighlight;
