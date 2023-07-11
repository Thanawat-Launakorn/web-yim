import { FieldTimeOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import React, { FC } from "react";
import ReactPlayer from "react-player";
import { YouTubeProps } from "react-youtube";

interface IActivity {
  title: string;
  des: string;
  updateAt?: string;
  url?: string;
}
const CActivity: FC<{
  props: IActivity;
  styledElec?: string;
  elec?: React.ReactNode;
}> = ({ props, elec, styledElec }) => {
  const { title, des, updateAt, url } = props;

  return (
    <React.Fragment>
      <Row className=" justify-center">
        <Col span={24} className="">
          <Row
            // style={{ width: "410px" }}
            className="bg-[#171E2B] rounded-[12px] "
          >
            <Col span={24} className="">
              <Row className="justify-center p-5">
                <Col span={21} className="">
                  {/* <ReactPlayer
                    
                    url={url}
                    width="390px"
                    height="250px"
                    className="rounded-[12px] lg:scale-90"
                  /> */}
                  {/* <CYoutube
                  props={{ opts, onReady: onPlayerReady }}
                  videoId={"lTbhd5apcJo"}
                /> */}
                </Col>
              </Row>
            </Col>
            <Row className=" content-center">
              <Col span={13} className="pl-5">
                <Typography.Title level={5} style={{ color: "#3C97FF" }}>
                  {title}
                </Typography.Title>
              </Col>

              <Col span={2} className="text-center   ">
                <FieldTimeOutlined
                  style={{ fontSize: "19px", color: "#5A5858" }}
                />
              </Col>

              <Col
                span={9}
                style={{ color: "#5A5858" }}
                className="text-left object-center translate-y-0.5"
              >
                {updateAt}
              </Col>
              <Row className="justify-center">
                <Col span={24} className="p-4 text-left">
                  <Typography.Text style={{ color: "#FFFFFF" }} className="">
                    {des}
                  </Typography.Text>
                </Col>
              </Row>
            </Row>
            {/* <div className={`absolute ${styledElec}`}>{elec} </div> */}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default CActivity;
