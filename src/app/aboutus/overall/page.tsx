"use client";
import Container from "@/components/container";
import {
  CDigital,
  COverall,
  CProject,
  CTOverall,
} from "@/components/display/page-aboutus/c-overall";
import { Col, Row } from "antd";
import { FC } from "react";
import chartbar from "@/assets/images/chartbar.png";
import chartpie from "@/assets/images/chartpie.png";
import chartlayerde from "@/assets/images/chartlayerde.png";
import React from "react";
import { CDetail } from "@/app/services/development/content/highlight";

interface IOverall {}
export const Overall: FC<{ props: IOverall }> = ({ props }) => {
  const EnterpriseSIchartbar = [chartbar];
  const Digitalchartpie = [chartpie];
  const Projectchartlayerde = [chartlayerde];
  const Overall = [
    {
      title: "Enterprise & SI",
      des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
      img: [...EnterpriseSIchartbar],
    },
    {
      title: "Digital Transformation",
      des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
      img: [...Digitalchartpie],
    },
    {
      title: "Project",
      des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
      img: [...Projectchartlayerde],
    },
  ];
  return (
    <React.Fragment>
      <Container className="bg-[#081224]  lg:pt-5 pb-10 p-5">
        <Row className="sm:scale-90 md:scale-100" gutter={[10, 10]}>
          <Col xl={{ span: 6 }} md={{ span: 12 }} span={24} className="">
            <CTOverall props={{ tOverall: "Overall" }} />
          </Col>

          <Col xl={{ span: 6 }} md={{ span: 12 }} span={24} className="">
            <COverall
              props={{
                data: {
                  title: "Enterprise & SI",
                  des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
                  img: chartbar,
                },
                tOverall: "Overall",
              }}
            />
          </Col>

          <Col xl={{ span: 6 }} md={{ span: 12 }} span={24}>
            <CDigital
              props={{
                data: {
                  title: "Digital Transformation",
                  des: "Helps to solve problems for entrepreneurs and upgrade business in technology and innovation.",
                  img: chartpie,
                },
              }}
            />
          </Col>

          <Col xl={{ span: 6 }} md={{ span: 12 }} span={24}>
            <CProject
              props={{
                data: {
                  title: "Project",
                  des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
                  img: chartlayerde,
                },
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default COverall;
