"use client";
import React, { FC } from "react";
import Container from "@/components/container";
import mobileecom from "@/assets/images/png/mobileecom.png";
import monitorCar from "@/assets/images/png/monitorCar.png";
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
import OurUiDesign from "../website/content/ourUiDesign";

interface IMobilecommerceapps {}

const Mobileecommerceapps: FC<IMobilecommerceapps> = ({}) => {
  return (
    <React.Fragment>
      <CTabs
        menu={[
          "Our Website",
          "What You Get with Our UI Design",
          "Technologies We Apply",
        ]}
      />
      <Container optional="side">
        <COurWebsite
          props={{
            title: "Mobile Ecommerce Apps",
            type: "Digital Focus",
            des: "Interface Detail Design",
            img: { png: monitorCar },
          }}
        />
        <CDevelopment
          props={{
            title: "Mobile Ecommerce Apps",
            des: "To design a successful mobile ecommerce app, it’s important to focus on creating a seamless user experience. This includes ensuring that the app is easy to navigate, has a clear and intuitive layout, and loads quickly. It’s also important to consider the needs of users, such as the ability to search for specific products or save items for later. Additionally, security is a key concern for mobile ecommerce apps, so it’s important to implement measures to protect sensitive customer information.",
            logo: <></>,
            svg: mobileecom,
          }}
        />
        <OurUiDesign
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

export default Mobileecommerceapps;
