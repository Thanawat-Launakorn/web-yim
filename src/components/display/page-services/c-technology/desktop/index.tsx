'use client'
import { Col, Row, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import react from "@/assets/images/png/react.png";
import node from "@/assets/images/png/node.png";
import nest from "@/assets/images/png/nest.png";
import postgres from "@/assets/images/png/postgres.png";
import ejs from "@/assets/images/png/ejs.png";
import cypress from "@/assets/images/png/cypress.png";
import docker from "@/assets/images/png/docker.png";

const technologiesLogo = [react, node, nest, postgres, ejs, cypress, docker];
export const technologiesWeApply = [
  {
    title: "Application",
    logo: [...technologiesLogo],
  },
  { title: "Service Integration", logo: [...technologiesLogo] },
  { title: "DevOps & Automation", logo: [...technologiesLogo] },
  { title: "Utilities", logo: [...technologiesLogo] },
];

interface ITechnology {
  titleAlign?: "center" | "end";
  data: { title: string; logo: StaticImageData[] }[];
  id?: string;
}

const CTechonology: FC<{ props: ITechnology }> = ({ props }) => {
  const { titleAlign, data, id } = props;
  const [active, setActive] = React.useState<any>();

  return (
    <Row className="my-10" id={id}>
      <Col span={24}>
        <Typography.Title
          level={4}
          style={{
            color: "white",
            textAlign: titleAlign || "start",
          }}
          className="!my-10"
        >
          Technology We Apply
        </Typography.Title>
      </Col>
      <Col span={24}>
        {data.map((ele, idx) => {
          const { title, logo } = ele;
          return (
            <Row
              key={idx}
              align={"top"}
              className="hover:brightness-150 transition-all ease-linear delay-100"
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive("")}
              gutter={[5, 0]}
            >
              <Col
                xl={{
                  span: 8,
                }}
                lg={{
                  span: 8,
                }}
                md={{
                  span: 12,
                }}
                sm={{
                  span: 12,
                }}
                xs={{
                  span: 12,
                }}
              >
                <div className="bg-[#0F1C33] ">
                  <Typography.Title
                    style={{
                      padding: 21,
                      fontSize: 13,
                      margin: 0,
                      color: "#FFFFFFA2",
                      fontWeight: 400,
                    }}
                    className=""
                  >
                    {title}
                  </Typography.Title>
                </div>
              </Col>

              <Col
                xl={{
                  span: 16,
                }}
                lg={{
                  span: 16,
                }}
                md={{
                  span: 12,
                }}
                sm={{
                  span: 12,
                }}
                xs={{
                  span: 12,
                }}
              >
                <div
                  className={`opacity-0 flex flex-row bg-[#0F1c33] ${
                    idx === active && "opacity-100"
                  } transition-all ease-linear delay-100`}
                >
                  {logo.map((e, idx) => (
                    <div
                      className="flex flex-col justify-center lg:p-[6px] lg:pb-[8px] xl:p-[8px] text-center"
                      key={idx}
                    >
                      <Image
                        src={e}
                        alt="image"
                        className=" !h-[25px] !w-[30px] scale-100 object-right object-contain"
                      />
                      <Typography.Text
                        style={{
                          color: "#969595",
                          fontSize: 8,
                        }}
                      >
                        Reactjs
                      </Typography.Text>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};

export default CTechonology;
