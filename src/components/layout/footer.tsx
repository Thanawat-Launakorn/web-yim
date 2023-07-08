"use client";
import { Col, Layout, Row, Space, Typography, Divider, Avatar } from "antd";
import React, { FC } from "react";
import Facebook from "../svg/facebook";
import Instragram from "../svg/instragram";
import LogoYim from "../svg/logoYim";
import CYoutube from "../svg/youtube";
import Container from "../container";
import Link from "next/link";
interface IFooter {
  services?: boolean;
}

const AppFooter: FC<IFooter> = ({ services }) => {
  const IMockMenuLeft = !!services
    ? [
        {
          menu: "News",
          details: ["ข่าวสาร", "คอร์สออนไลน์", "จัดการหลักสูตร", "อื่นๆ"],
        },
        {
          menu: "About",
          details: [
            "Overall",
            "Innovation and Technology",
            "Customer",
            "Contact us",
          ],
        },
      ]
    : [
        {
          menu: "Services",
          details: ["Development", "UX UI Design", "Migration", "Management"],
        },
        {
          menu: "Solution",
          details: ["Product", "Media"],
        },
        {
          menu: "News",
          details: ["ข่าวสาร", "คอร์สออนไลน์", "จัดการหลักสูตร", "อื่นๆ"],
        },
        {
          menu: "About",
          details: [
            "Overall",
            "Innovation and Technology",
            "Customer",
            "Contact us",
          ],
        },
      ];

  const IMockMenuRight = {
    img: <LogoYim />,
    description:
      "บ้านเลขที่ 1889 ซอยลาดพร้าว94 (ปัญจมิตร) ถนนทาวน์อินทาวน์ แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพมหานคร 10240",
  };

  const IMockIcon = [
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/yimcorp",
    },
    {
      icon: <Instragram />,
      link: "",
    },
    {
      icon: <CYoutube />,
      link: "",
    },
  ];
  return (
    <Layout.Footer className="!bg-gradient-to-t to-[#080E1F] from-20% from-[#031932] !px-0 !py-10 wrapper">
      <Container className="bg-transparent">
        <Row justify={"space-between"} align={"middle"}>
          <Col
            xl={{ span: 18, order: 1 }}
            lg={{ span: 12, order: 1 }}
            md={{ order: 1 }}
            span={24}
            xs={{ order: 2 }}
          >
            <div className="flex flex-col justify-center overflow-y-scroll h-[200px] sm:h-auto sm:px-0 sm:block">
              <MenuLeft
                props={{
                  data: IMockMenuLeft,
                }}
              />
            </div>
          </Col>
          <Col
            xl={{ span: 6, order: 2 }}
            lg={{ span: 12, order: 2 }}
            md={{ order: 2 }}
            span={24}
            xs={{ order: 1 }}
            className="!text-center sm:!text-start"
          >
            <MenuRight props={{ data: IMockMenuRight }} />
            <div className="flex flex-row justify-center my-5 sm:hidden ">
              <MenuIcon props={{ data: IMockIcon }} />
            </div>
          </Col>
        </Row>
        <Divider className="!bg-[#969595] opacity-50" />
        <Row justify={"space-between"} align={"middle"}>
          <Col
            xl={{
              span: 18,
            }}
            lg={{
              span: 18,
            }}
            md={{
              span: 12,
            }}
            xs={{
              span: 0,
            }}
            className={`!flex-row !hidden sm:!flex ${
              !!services && `!opacity-0`
            }`}
          >
            <MenuIcon
              props={{
                data: IMockIcon,
              }}
            />
          </Col>
          <Col
            xl={{
              span: 6,
            }}
            lg={{
              span: 6,
            }}
            md={{
              span: 12,
            }}
            xs={{
              span: 24,
            }}
          >
            <div className="text-center">
              <Typography.Text
                style={{
                  color: "#969595",
                }}
                className="!text-[2.5px] sm:!text-[10px]"
              >
                ©2019 Y.I.M Corporation Limited.All Rights Reserved.
              </Typography.Text>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout.Footer>
  );
};

interface IMenuLeft {
  data: { menu: string; details: string[] }[];
}

const MenuLeft: FC<{ props?: IMenuLeft }> = ({ props }) => {
  return (
    <React.Fragment>
      {props?.data.map((data, idx) => {
        return (
          <Space
            key={idx}
            direction="vertical"
            className={`${
              [1, 3].includes(idx) &&
              "xl:mx-36 lg:mx-5 md:mx-[80px] sm:mx-[45px]"
            }  mx-auto text-center sm:text-start`}
            size={"small"}
          >
            <Typography.Title
              style={{
                margin: 0,
                fontSize: 12,
                color: "#D5D0D0",
              }}
              level={5}
            >
              {data.menu}
            </Typography.Title>
            {data.details.map((data) => (
              <Typography.Text
                key={data}
                style={{
                  fontSize: 10,
                }}
                className="!text-[#969595] cursor-pointer"
              >
                {data}
              </Typography.Text>
            ))}
          </Space>
        );
      })}
    </React.Fragment>
  );
};

interface IMenuRight {
  data: {
    img: string | React.ReactNode;
    description: string;
  };
}

const MenuRight: FC<{ props: IMenuRight }> = ({ props }) => {
  const { img, description } = props.data;
  return (
    <React.Fragment>
      <div className="flex flex-col align-middle justify-center ">
        <div>
          <Avatar
            src={img}
            shape={"square"}
            alt={"image-footer"}
            size={64}
            className="!h-[50px] !w-[60px]"
          />
        </div>

        <Typography.Text
          style={{
            fontSize: 10,
          }}
          className="!leading-5 sm:pr-20 !text-[#FFFFFF]"
        >
          {description}
        </Typography.Text>
      </div>
    </React.Fragment>
  );
};

interface IMenuIcon {
  data: {
    icon: React.ReactNode;
    link: string;
  }[];
}

const MenuIcon: FC<{ props: IMenuIcon }> = ({ props }) => {
  const { data } = props;
  return (
    <React.Fragment>
      {data.map((e, index) => (
        <Link
          key={index}
          href={e.link}
          className={`${
            index === 1 && "mx-6"
          } cursor-pointer rounded-full !transition-all !delay-[.3] !ease-linear hover:bg-[#3C97FF]`}
        >
          {e.icon}
        </Link>
      ))}
    </React.Fragment>
  );
};

export default AppFooter;
