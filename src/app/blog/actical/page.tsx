"use client";
import { FieldTimeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col, Typography, DatePicker, Card, Carousel } from "antd";
import React, { FC } from "react";
import light from "@/assets/images/actical/light.png";
import sdwan from "@/assets/images/actical/sd-van.png";
import future from "@/assets/images/actical/future.png";
import Container from "@/components/container";
import CActical from "@/components/display/page-blog/c-actical";

const Mock = [
  {
    title: "INTERNET SERVICE PROVIDER",
    des: "ผู้ให้บริการอินเทอร์เน็ตความเร็วสูงในแบบครบวงจร(ISP) ให้กลุ่มลูกค้าองค์กร ที่ต้องการการการรับส่งข้อมูลขนาดใหญ่อย่างรวดเร็วโดยให้บริการผ่านโครงข่าย Fiberoptic ที่มีประสิทธิภาพสูง โดยมีความเร็วเริ่มต้นตั้งแต่ 1 Mbps จนถึง 100Gbps. บริการนี้เหมาะกับหน่วยงานเอกชน หรือหน่วยงานที่ต้องการความเสถียรสูงในการรับและส่งข้อมูล",
    updateAt: "March 30,2022",
    img: sdwan,
  },
  {
    title: "INTERNET SERVICE PROVIDER",
    des: "ผู้ให้บริการอินเทอร์เน็ตความเร็วสูงในแบบครบวงจร(ISP) ให้กลุ่มลูกค้าองค์กร ที่ต้องการการการรับส่งข้อมูลขนาดใหญ่อย่างรวดเร็วโดยให้บริการผ่านโครงข่าย Fiberoptic ที่มีประสิทธิภาพสูง โดยมีความเร็วเริ่มต้นตั้งแต่ 1 Mbps จนถึง 100Gbps. บริการนี้เหมาะกับหน่วยงานเอกชน หรือหน่วยงานที่ต้องการความเสถียรสูงในการรับและส่งข้อมูล",
    updateAt: "March 20,2022",
    img: light,
  },
  {
    title: "INTERNET SERVICE PROVIDER",
    des: "ผู้ให้บริการอินเทอร์เน็ตความเร็วสูงในแบบครบวงจร(ISP) ให้กลุ่มลูกค้าองค์กร ที่ต้องการการการรับส่งข้อมูลขนาดใหญ่อย่างรวดเร็วโดยให้บริการผ่านโครงข่าย Fiberoptic ที่มีประสิทธิภาพสูง โดยมีความเร็วเริ่มต้นตั้งแต่ 1 Mbps จนถึง 100Gbps. บริการนี้เหมาะกับหน่วยงานเอกชน หรือหน่วยงานที่ต้องการความเสถียรสูงในการรับและส่งข้อมูล",
    updateAt: "March 20,2022",
    img: future,
  },
];

interface IActical {}
const Actical: FC<{ props: IActical }> = ({ props }) => {
  return (
    <React.Fragment>
      <Container className="bg-[#081224]">
        <Row className=" pb-10">
          <Col span={24} className="mb-3">
            <Row>
              <Col flex="auto" className="text-start ">
                <Typography.Text style={{ color: "#3C97FF" }}>
                  Actical
                </Typography.Text>
              </Col>
              <Col>
                <Typography.Text className="mr-3" style={{ color: "#B2AFAF" }}>
                  เลือกเดือน
                </Typography.Text>
                <DatePicker picker="month" />
              </Col>
            </Row>

            {/* className="!grid grid-cols-2  gap-5 pt-10 justify-center lg:grid-cols-2  lg:scale-100 " */}
            <Row className="sm:block hidden pt-8 m-5">
              <Col span={24}>
                <Row gutter={[20, 20]}>
                  <Col md={{ span: 12 }}>
                    <CActical props={Mock[0]} />
                  </Col>
                  <Col md={{ span: 12 }}>
                    <CActical props={Mock[1]} />
                  </Col>
                  <Col md={{ span: 12 }}>
                    <CActical props={Mock[2]} />
                  </Col>
                  <Col md={{ span: 12 }}>
                    <CActical props={Mock[0]} />
                  </Col>
                  <Col md={{ span: 12 }}>
                    <CActical props={Mock[1]} />
                  </Col>
                  <Col md={{ span: 12 }}>
                    <CActical props={Mock[2]} />
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* <div className="sm:hidden block">
              <Row className="justify-center ">
                <Col>
                  <Carousel>
                    <Col>
                      <CMActical props={Mock[0]} />
                    </Col>
                    <Col>
                      <CMActical props={Mock[1]} />
                    </Col>
                    <Col>
                      <CMActical props={Mock[2]} />
                    </Col>
                  </Carousel>
                </Col>
              </Row>
            </div> */}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Actical;
