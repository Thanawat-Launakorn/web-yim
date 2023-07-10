"use client";
import Container from "@/components/container";
import {
  CDigital,
  COverall,
  CProject,
  CTOverall,
} from "@/components/display/page-aboutus/c-overall";
import { Col } from "antd";
import { FC } from "react";
import chartbar from "@/assets/images/chartbar.png";
import chartpie from "@/assets/images/chartpie.png";
import chartlayerde from "@/assets/images/chartlayerde.png";
import React from "react";
import { CDetail } from "@/app/services/development/content/highlight";

interface IOverall {}
export const Overall: FC<{ props: IOverall }> = ({ props }) => {
  const overall = [chartbar, chartpie, chartlayerde];
  return (
    <React.Fragment>
      <Container className="bg-[#081224]  lg:pt-10 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 ">
          <Col className="">
            <CTOverall props={{ tOverall: "Overall" }} />
          </Col>

          <Col className="">
            <COverall
              props={{
                content: {
                  title: "Enterprise & SI",
                  des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
                  img: chartbar,
                },
              }}
            />
          </Col>

          <Col>
            <CDigital
              props={{
                content: {
                  title: "Digital Transformation",
                  des: "Helps to solve problems for entrepreneurs and upgrade business in technology and innovation.",
                  img: chartpie,
                },
              }}
            />
          </Col>

          <Col>
            <CProject
              props={{
                content: {
                  title: "Project",
                  des: "Create systems for organizations and connect internal systems CRM, CMS,Payment Accounting, Data, etc.",
                  img: chartlayerde,
                },
              }}
            />
          </Col>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default COverall;
