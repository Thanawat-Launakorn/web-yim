"use client";
import { CInput } from "@/components/input";
import Management from "@/components/svg/management";
import Migration from "@/components/svg/migration";
import CMonitor from "@/components/svg/monitor";
import MonitorMobbile from "@/components/svg/monitorMobile";
import { useActive } from "@/provider/app-active";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Typography, TabsProps, Tabs } from "antd";
import React, { FC } from "react";
import styled from "styled-components";

const SiderMenuWrapper = styled.div<{ $active?: boolean }>`
  .ant-typography {
    color: ${({ $active }) =>
      $active ? "#3c97ff !important " : "white !important"};
  }

  .ant-typography:hover {
    color: #3c97ff !important;
  }

  * svg:hover {
  }
`;

const StyledTabs = styled(Tabs)<{
  $active?: { side1?: boolean; side2?: boolean };
}>`
  .ant-tabs-content-holder {
  }

  .ant-tabs-tab-btn:hover {
    color: white !important;
  }

  .ant-tabs-nav-list > div {
    color: #969595;
    font-weight: 200;
  }
`;
type SiderProps = {};

export const Sider: FC<SiderProps> = ({}) => {
  const { setActive, setDropdown } = useActive();

  const sideMenuMock = [
    {
      src: <MonitorMobbile />,
      title: "Development",
      children: <CTabs />,
    },
    { src: <CMonitor />, title: "UX UI Design" },
    { src: <Migration />, title: "Migration" },
    { src: <Management />, title: "Management" },
  ];
  return (
    <React.Fragment>
      <div className="sm:p-[20px] z-40  overflow-y-hidden sm:fixed top-[100px] xl:top-[55px]">
        <CInput
          placeholder="Quick Search"
          suffix={<SearchOutlined />}
          size={"small"}
        />
        {sideMenuMock.map((element, idx) => {
          const _to = element.title.toLowerCase().replaceAll(" ", "");
          return (
            <SideMenu
              //   active={_to === pathSplit}
              key={idx}
              src={element.src}
              title={element.title}
              children={element.children || <></>}
              onPressed={(e: any) => {
                e.stopPropagation();
                setActive(false);
                setDropdown(false);
              }}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

interface ITabs extends TabsProps {}

export const CTabs: FC<ITabs> = ({}) => {
  const { setActive, setDropdown } = useActive();

  const sideMenu = [
    "Website",
    "Web Application",
    "Web Ecommerce",
    "Mobile App Design",
    "Mobile Ecommerce Apps",
  ];

  return (
    <StyledTabs
      onTabClick={(e: any) => {
        if (e instanceof Event) {
          e.stopPropagation();
        }

        setActive(false);
        setDropdown(false);
      }}
      tabPosition="right"
      className="relative -left-6"
      items={sideMenu.map((item, idx) => {
        const id = String(idx + 1);
        return {
          label: `${item}`,
          key: id,
        };
      })}
    />
  );
};

interface ISideMenu {
  children?: React.ReactNode;
  src: React.ReactNode | string;
  title: string;
  onPressed: (e?: any) => void;
  active?: boolean;
}
const SideMenu: FC<ISideMenu> = ({
  children,
  src,
  title,
  onPressed,
  active,
}) => {
  return (
    <SiderMenuWrapper $active={active}>
      <Row align={"middle"} justify="space-between" className="my-7">
        <Col span={3} className="">
          <span
            className={` sm:bg-[#071634] rounded-md relative -top-1 p-0 transition-all delay-75 `}
            style={{
              padding: -10,
              margin: 0,
            }}
          >
            <Avatar src={src} shape="square" className="scale-[.4]" />
          </span>
        </Col>
        <Col span={21} onClick={onPressed}>
          <Typography.Title
            className={``}
            level={5}
            style={{
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {title}
          </Typography.Title>
        </Col>
        <div className="ml-8">{children}</div>
      </Row>
    </SiderMenuWrapper>
  );
};
