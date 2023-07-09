"use client";
import React, { FC } from "react";
import Container from "@/components/container";
import MonitorMobile from "@/components/svg/monitorWithMobile";
import webApplication from "@/assets/images/png/webapplication.png";
import { Advantages } from "./content/advantages";
import accessibility from "@/assets/images/png/accessibility.png";
import scalability from "@/assets/images/png/scalability.png";
import maintenance from "@/assets/images/png/maintenance.png";
import integration from "@/assets/images/png/integration.png";
import security from "@/assets/images/png/security.png";
import coin from "@/assets/images/png/coin2.png";
import monitorWithMobile from "@/assets/images/png/monitorWithPhone.png";
import CDevelopment from "@/components/display/page-services/c-development";
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

interface IWebapplication {}

const Webapplication: FC<IWebapplication> = ({}) => {
  const handleTabs = () => {};
  const leftIcons = [
    {
      logo: accessibility,
      title: "Accessibility",
      des: "Web applications can be accessed from any device with a web browser, making them easy to use and convenient for users.",
    },
    {
      logo: scalability,
      title: "Scalability",
      des: "Web applications can easily be scaled up or down to meet the changing needs of users, making them highly flexible.",
    },
  ];

  const rightIcons = [
    {
      logo: maintenance,
      title: "Maintenance",
      des: "Since web applications are centrally hosted, they are easy to maintain and update.",
    },
    {
      logo: integration,
      title: "Integration",
      des: "Web applications can be easily integrated with other systems, such as databases and APIs.",
    },
    {
      logo: security,
      title: "Security",
      des: "Web applications can be built with security measures, such as authentication and encryption, to protect sensitive data.",
    },

    {
      logo: coin,
      title: "Cost-effective",
      des: "Web applications are generally less expensive to develop and maintain than native applications.",
    },
  ];
  return (
    <React.Fragment>
      <CTabs
        menu={[
          "Our Website",
          "Advantages of web applications",
          "Technologies We Apply",
        ]}
        onPressed={handleTabs}
      />
      <Container optional="side">
        <COurWebsite
          props={{
            type: "Digital Focus",
            title: "Our Wep Application",
            des: "Interface Digital Design",
            id: "ourwebsite",
            img: { png: monitorWithMobile },
            styled: { styledPng: "" },
          }}
        />
        <CDevelopment
          props={{
            title: "Web Application",
            des: "A web application is a software program that runs on a web server, rather than on a local computer or mobile device. It can be accessed via a web browser over the Internet, and is designed to be used by multiple users simultaneously. Web applications are often developed using languages such as HTML, CSS, and JavaScript, and can be designed to run on a variety of platforms and devices. They can be used to provide a wide range of services, such as online shopping, social networking, or content management. Web applications are typically hosted on a server and are accessed through a network, rather than being installed locally on a user’s device.",
            logo: <MonitorMobile />,
            svg: webApplication,
          }}
        />
        <Advantages
          props={{
            type: "Advantages of web applications",
            title: "There are several advantages to using web applications.",
            leftIcons,
            rightIcons,
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

export default Webapplication;
