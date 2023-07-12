import {
  ArrowRightOutlined,
  FieldTimeOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Row, Col, ModalProps, Modal, Typography, Divider } from "antd";
import { data } from "autoprefixer";
import { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface IYimShare {
  title: string;
  topic: string;
  url?: string;
  img?: StaticImageData;
  updateAt: string;
}
const CYimShare: FC<{ props: IYimShare; onPressed?: () => void }> = ({
  props,
  onPressed,
}) => {
  const { title, topic, url, img, updateAt } = props;

  return (
    <React.Fragment>
      <Row style={{}} className="">
        <Col
          className=" justify-center object-contain "
          style={{ width: "px", height: "430px" }}
        >
          <Row style={{ height: "470px" }} className="">
            <Col>
              {/* <ReactPlayer
                url={url}
                controls
                width={"110%"}
                height={"100%"}
                className="rounded-[12px] p-2 opacity-80"
              ></ReactPlayer> */}
            </Col>
          </Row>

          <Row className="-translate-y-28 ">
            <Col span={24} className="-translate-y-44 text-center">
              <PlayCircleOutlined
                style={{ fontSize: "25px" }}
                onClick={onPressed}
              />
            </Col>
            <Col span={24} className="absolute -translate-y-10 px-2">
              <Typography.Text style={{ color: "#fff" }}>
                {topic}
              </Typography.Text>
            </Col>
            <Col span={24} className="px-2">
              <Typography.Title level={4} style={{ color: "#fff" }}>
                {title}
              </Typography.Title>
            </Col>
            <Col span={24} className="-translate-y-5 px-2">
              <Divider className="bg-black" />
            </Col>
            <Col className="-translate-y-10 px-2">
              <FieldTimeOutlined
                style={{ fontSize: "20px", color: "#5A5858" }}
              />
            </Col>
            <Col className="-translate-y-10 px-2">
              <Typography.Text className="!text-[#fff]">
                {updateAt}
              </Typography.Text>
            </Col>
            <Col className="flex flex-auto justify-end -translate-y-10 px-2">
              <ArrowRightOutlined
                style={{ fontSize: "20px", color: "#3C97FF" }}
                className="-translate-x-9"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

interface IPreviewModal {
  open?: boolean;
  url?: string;
  toggle?: () => void;
  title?: string;
  des?: string;
}
const PreviewModal: React.FC<IPreviewModal> = ({
  open,
  toggle,
  url,
  des,
  title,
}) => {
  return (
    <CModal open={open} onCancel={toggle} maskClosable={false}>
      <ReactPlayer
        url={url}
        controls
        width={"90%"}
        height={"90%"}
        className="rounded-[12px] p-2"
      />
    </CModal>
  );
};

const StyledModal = styled(Modal)`
  .anticon-close > svg {
    margin: auto;
    display: block;
    width: 150px;
    height: 150px;
  }
`;

interface CModalProps extends ModalProps {}
const CModal: FC<CModalProps> = ({
  footer = null,
  closable = false,
  centered = true,
  ...props
}) => {
  return (
    <StyledModal
      centered={centered}
      closable={closable}
      footer={footer}
      {...props}
    ></StyledModal>
  );
};

export default CYimShare;
