import { Row, Col, Avatar, Typography } from "antd";
import React, { FC } from "react";

interface ICNav {
  title: string;
  description: string;
  logo: string | React.ReactNode;
  onPressed: (v?: any) => void;
  active?: boolean;
}

export const CNavivagion: FC<{ props: ICNav }> = ({ props }) => {
  const { title, description, logo, onPressed, active } = props;
  return (
    <React.Fragment>
      <Row
        className={`opacity-20 p-8  bg-[#0c12329e] hover:opacity-100 transition-all delay-75 cursor-pointer rounded-lg ${
          active && `!opacity-100`
        }`}
        onClick={onPressed}
      >
        <Col span={24} className="text-end">
          <span className="bg-[#293e9e22] px-1.5 py-2.5 rounded-md">
            <Avatar src={logo} shape={"square"} />
          </span>
        </Col>
        <Col className="mt-8" xl={{ span: 12 }} lg={{ span: 12 }} span={24}>
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              color: "white",
              marginBottom: 15,
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Text
            style={{
              color: "#D5D0D0",
              fontSize: 12,
            }}
          >
            {description}
          </Typography.Text>
          <div className="mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 49 49"
            >
              <g id="Component_211_23" data-name="Component 211 – 23">
                <circle
                  id="Ellipse_193"
                  data-name="Ellipse 193"
                  cx="24.5"
                  cy="24.5"
                  r="24.5"
                  fill="#3c97ff"
                  opacity="0.06"
                />
                <g
                  id="Group_21948"
                  data-name="Group 21948"
                  transform="translate(22 15.951)"
                >
                  <path
                    id="Path_23715"
                    data-name="Path 23715"
                    d="M1727.31,1331.229l8.549,8.549-8.549,8.549"
                    transform="translate(-1727.31 -1331.229)"
                    fill="none"
                    stroke="#4e4c4c"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
