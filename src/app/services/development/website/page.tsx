"use client";
import React, { FC } from "react";
import websiteImage from "@/assets/images/png/websiteImage.png";
import desktop from "@/assets/images/png/desktop.png";
import CDevelopment from "@/components/display/page-services/c-development";
import CTecnologyMobile, {
  items1,
  items2,
  items3,
} from "@/components/display/page-services/c-technology/mobile";
import CMonitor from "@/components/svg/monitor";
import { CTabs } from "@/components/tab";
import Container from "@/components/container";
import CTechonology, {
  technologiesWeApply,
} from "@/components/display/page-services/c-technology/desktop";
import COurwebsite from "@/components/display/page-services/c-ourwebsite";
import COurUiDesign from "./content/ourUiDesign";

interface IWebsite {}

const Website: FC<IWebsite> = ({}) => {
  const handleTab = () => {};
  return (
    <React.Fragment>
      <CTabs
        menu={["Our Website", "Our UI Design", "Technologies We Apply"]}
        onPressed={handleTab}
      />
      <Container optional="side">
        <COurwebsite
          props={{
            title: "Web Development",
            type: "Digital Focus",
            des: "Interface Detail Design",
            id: "ourwebsite",
            img: { png: desktop },
          }}
        />
        <CDevelopment
          props={{
            title: "Web Development",
            des: "Web development refers to the process of building and maintaining websites. It includes tasks such as designing the layout and appearance of a website, writing the code that makes up the website, and setting up servers to host the website.",
            logo: <CMonitor />,
            svg: websiteImage,
          }}
        />
        <COurUiDesign
          props={{
            title: "What You Get with Our UI Design",
            des: "The user interface (UI) design process is the process of designing the user interface of a product, such as a website or software application. The goal of the UI design process is to create a user interface that is easy to use, visually appealing, and effective at helping users accomplish their goals.",
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

export default Website;
