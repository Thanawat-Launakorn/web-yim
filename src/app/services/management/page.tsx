"use client";
import React, { FC } from "react";
import Container from "@/components/container";
import canabis from "@/assets/images/png/canabis.png";
import CManagement from "./content/management";
import monitor from "@/assets/images/png/monitor.png";
import enchance from "@/assets/images/png/enchance.png";
import trouble from "@/assets/images/png/trouble.png";
import enchance2 from "@/assets/images/png/enchance2.png";
import CTop from "./content/top";
import maintanceHover from "@/assets/images/png/maintance.png";
import maintance from "@/assets/images/png/maintancehover.png";
import COurWebsite from "@/components/display/page-services/c-ourwebsite";
import CTechonology, {
  technologiesWeApply,
} from "@/components/display/page-services/c-technology/desktop";
import CTecnologyMobile, {
  items1,
  items2,
  items3,
} from "@/components/display/page-services/c-technology/mobile";
import { CTabs } from "@/components/tab";

const items = [
  {
    title: "Application monitoring",
    img: monitor,
    des: "Application monitoring is the process of tracking and analyzing various metrics of a software application to ensure that it is running smoothly and efficiently.The goal of application monitoring is to identify and resolve performance issues before they affect the user experience.",
  },
  {
    title: "Application enhancements",
    img: enchance,
    des: "Application monitoring is the process of tracking and analyzing various metrics of a software application to ensure that it is running smoothly and efficiently.The goal of application monitoring is to identify and resolve performance issues before they affect the user experience.",
  },
  {
    title: "Application troubleshooting",
    img: trouble,
    des: "Application monitoring is the process of tracking and analyzing various metrics of a software application to ensure that it is running smoothly and efficiently.The goal of application monitoring is to identify and resolve performance issues before they affect the user experience.",
  },
  {
    title: "Application enhancements",
    img: enchance2,
    des: "Application troubleshooting refers to the process of identifying, analyzing and resolving issues or problems that occur within a software application. This can involve identifying the root cause of the problem and implementing solutions to fix it.",
  },
];

interface IManagement {}
const Management: FC<IManagement> = ({}) => {
  return (
    <React.Fragment>
      <CTabs
        menu={["Meaning", "Management Services", "Our Applications Manage"]}
      />
      <Container optional="side">
        <CTop
          type="Meading"
          title="Application maintenance"
          des="Application maintenance refers to the routine tasks that are performed in order to keep an application running smoothly and to fix any issues that may arise. This can include tasks such as software updates, security patches, bug fixes, and performance enchancements. Additionally, application maintenance may also involve monitoring the application for errors or issues, and troubleshooting or resolving any problmes that are indentified."
          img={maintance}
          imgHovered={maintanceHover}
        />
        <CManagement items={items} title="Management Services" />

        <COurWebsite
          props={{
            title: "Our Applications Manage",
            type: "CANABIS",
            des: "Ecommerce Web",
            img: {
              png: canabis,
            },
          }}
        />
        <div className="sm:hidden block">
          <CTecnologyMobile
            title=""
            items1={items1}
            items2={items2}
            items3={items3}
          />
        </div>
        <div className="sm:block hidden">
          <CTechonology
            props={{
              data: technologiesWeApply,
              id: "technologies",
              titleAlign: "center",
            }}
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Management;
