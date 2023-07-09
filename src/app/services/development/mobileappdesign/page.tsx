"use client";
import React, { FC } from "react";
import Container from "../../../../components/container";
import webapplication from "../../../../assets/images/png/webapplication.png";
import mobile from "../../../../assets/images/png/mobile.png";
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
import { CTips } from "./content/tip";

interface IMobileappdesign {}

const cardItems = [
  {
    title: "Start with a clear purpose :",
    des: "Determine the main goal of the app and design it with that purpose in mind.",
  },
  {
    title: "Keep it simple :",
    des: "Avoid cluttering the design with unnecessary elements and focus on creating a cleanand intuitive layout.",
  },
  {
    title: "Use clear calls to action :",
    des: "Make it easy for users to understand what they should do next by using clear and descriptive calls to action.",
  },
  {
    title: "Consider the user flow :",
    des: "Think about how users will navigate through the app and design the layout and user flow accordingly.",
  },
  {
    title: "Test the design :",
    des: "Create wireframes and prototypes to test the design and gather feedback from users.",
  },
  {
    title: "Optimize for different devices :",
    des: "Design the app to work well on a range of devices, including smartphones and tablets.",
  },
  {
    title: "Use consistent branding :",
    des: "Use consistent branding throughout the app to create a cohesive and professional look.",
  },
  {
    title: "Pay attention to detail :",
    des: "Small design elements, such as typography and color scheme, can have a big impact on the overall user experience.",
  },
];
const title = "Tips for designing a successful mobile app:";
const Mobileappdesign: FC<IMobileappdesign> = ({}) => {
  const handleTab = () => {};
  return (
    <React.Fragment>
      <CTabs
        menu={[
          "Mobile App Design",
          "Tips for designing a successful mobile app",
          "Technologies We Apply",
        ]}
        onPressed={handleTab}
      />
      <Container optional="side">
        <COurWebsite
          props={{
            title: "Mobile App Design",
            type: "Digital Focus",
            des: "Interface Detail Design",
            img: { png: mobile },
          }}
        />
        <CDevelopment
          props={{
            logo: <></>,
            title: "Mobile App Design",
            des: "Mobile app design involves creating the visual and interactive elements of a mobile application. It includes determining the layout, color scheme, typography, and other visual elements that will be used in the app. It also involves designing the user flow and creating wireframes and prototypes to test the design. In general, mobile app design aims to create a user experience that is easy to navigate, visually appealing, and engaging for the user.",
            svg: webapplication,
          }}
        />
        <CTips props={{ cardItems, title }} />
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
export default Mobileappdesign;
