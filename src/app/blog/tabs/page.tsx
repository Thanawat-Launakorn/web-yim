"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";
import React, { FC, useState } from "react";
import Container from "../../../components/container";

import { Link, Button } from "react-scroll";
interface IHeaderButton {
  // tabs: string[];
  // onPressed: (v: string) => void;
}
const TabsBar: FC<{ props: IHeaderButton }> = ({ props }) => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <React.Fragment>
      <Container className="bg-[#081224] pt-10">
        <Row justify="start" className=" gap-x-10 ">
          <Col>
            <Link
              style={{
                fontSize: 14,
                color: "#fff",
              }}
              to="highlight"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
              onClick={closeMenu}
              // className="hover:text-[#3c97ff]"
            >
              Highlight
            </Link>
          </Col>
          <Col>
            <Link
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
              to="activity"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              onClick={closeMenu}
            >
              Activity
            </Link>
          </Col>
          <Col>
            <Link
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
              to="yim-share"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
              onClick={closeMenu}
            >
              Yim Share
            </Link>
          </Col>
          <Col>
            <Link
              type="link"
              style={{
                color: "#FFFFFF",
                fontSize: 14,
              }}
              to="Actical"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={closeMenu}
            >
              Actical
            </Link>
          </Col>
          <Col flex="auto" className="text-end">
            <SearchOutlined style={{ color: "#4E4C4C" }} />
          </Col>

          <Divider className="bg-[#4E4C4C]" />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TabsBar;
