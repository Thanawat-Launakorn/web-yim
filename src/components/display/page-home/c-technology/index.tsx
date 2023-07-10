"use client";
import { Typography, Row, Col } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { CardTec } from "@/components/card/c-cardTecnology";
interface ITec {
  tCon?: string;
  svg: string | StaticImageData;
  elec: React.ReactNode;
  svgIsHovered?: React.ReactNode;
}

const HomeTechnology: FC<{ props: ITec }> = ({ props }) => {
  const { tCon, svg, svgIsHovered } = props;

  return (
    <React.Fragment>
      <div className="relative min-h-screen mx-20">
        <Typography.Title
          style={{
            color: "#0055B7",
            display: "grid",
            fontWeight: 400,
            justifyContent: "center",
          }}
          level={4}
          className=""
        >
          {tCon}
        </Typography.Title>
        <Row>
          <Col
            xl={{
              span: 8,
            }}
            lg={{
              span: 7,
            }}
            md={{
              span: 8,
            }}
            sm={{
              span: 24,
            }}
            xs={{
              span: 24,
            }}
          >
            <div className="px-10 sm:px-0">
              <Typography.Title
                level={4}
                style={{
                  fontWeight: 300,
                  color: "white",
                }}
                className="text-center md:text-start !text-xs sm:!text-lg"
              >
                Technology that will change our lives and businesses grow
                together.
              </Typography.Title>
            </div>
          </Col>
        </Row>
        {/* mobile */}
        <div className="grid grid-cols-1 gap-y-10 justify-items-center mt-10 md:mt-0 md:block">
          <div data-aos="fade-up" className="block md:hidden">
            <CardTec
              props={{
                no: "01",
                title: "Sofware",
                des: "Develop hardware with the highest stability.",
                className:
                  "scale-[1.2] bg-gradient-to-tr from-[#3CFFF8] from-5% to-[#293CCB] !shadow-cyan-500/50 hover:shadow-xl ", //Background Card
                titleStyled: "#3CFFF8",
              }}
            />
          </div>
          <div
            className="!animate-pulse"
            style={{
              display: "grid",
              justifyContent: "center",
            }}
            data-aos="fade-up"
          >
            <Image src={svg} className=" my-2  " alt={""} />
          </div>
          <div className="md:hidden" data-aos="fade-up">
            <CardTec
              props={{
                no: "02",
                title: "Design Solution",
                des: "Develop hardware with the highest stability.",
                className:
                  "scale-[1.2] bg-gradient-to-tr to-[#3EB5FF] from-5% from-[#3E41FF]  !shadow-blue-500/50 hover:shadow-xl", //Background Card
                titleStyled: "#3EB5FF",
              }}
            />
          </div>
          <div className="block md:hidden" data-aos="fade-up">
            <CardTec
              props={{
                no: "03",
                title: "Hardware",
                des: "Develop hardware with the highest stability.",
                className:
                  "scale-[1.2] bg-gradient-to-tr to-[#8368C3] to-90% from-[#5526C4] !shadow-indigo-500/50 hover:shadow-xl", //Background Card
                titleStyled: "#CDB8FD",
              }}
            />
          </div>
          <div
            className="absolute -left-[0] top-[150px] hidden md:block"
            data-aos="fade-right"
          >
            <CardTec
              props={{
                no: "01",
                title: "Sofware",
                des: "Develop hardware with the highest stability.",
                className:
                  "bg-gradient-to-tr from-[#3CFFF8] from-5% to-[#293CCB] !shadow-cyan-500/50 hover:shadow-xl ", //Background Card
                titleStyled: "#3CFFF8",
              }}
            />
          </div>
          {/* desktop */}
          <div
            className="absolute -right-[0] top-[150px] hidden md:block"
            data-aos="fade-left"
          >
            <CardTec
              props={{
                no: "02",
                title: "Design Solution",
                des: "Develop hardware with the highest stability.",
                className:
                  "bg-gradient-to-tr to-[#3EB5FF] from-5% from-[#3E41FF]  !shadow-blue-500/50 hover:shadow-xl", //Background Card
                titleStyled: "#3EB5FF",
              }}
            />
          </div>

          <div
            className="absolute lg:-left-[0] lg:-bottom-[50px] hidden md:block"
            data-aos="fade-bottom"
          >
            <CardTec
              props={{
                no: "03",
                title: "Hardware",
                des: "Develop hardware with the highest stability.",
                className:
                  "bg-gradient-to-tr to-[#8368C3] to-90% from-[#5526C4] !shadow-indigo-500/50 hover:shadow-xl", //Background Card
                titleStyled: "#CDB8FD",
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeTechnology;
