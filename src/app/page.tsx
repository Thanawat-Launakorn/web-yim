"use client";
import LogoYim from "@/components/svg/logoYim"; //logoYimDesktop
import CElec from "@/components/svg/elec";
import CElectNoLight from "@/components/svg/elecNoLight";
import elec from "@/assets/images/png/elec.png";
import HomeLogoPage from "@/components/display/page-home/c-logopage";
import HomeCustomer from "@/components/display/page-home/c-customer";
import CMonitor from "@/components/svg/monitor";
import HomeTechnology from "@/components/display/page-home/c-technology";
import tech1 from "@/assets/images/png/tech-1.png";
import { StaticImageData } from "next/image";
import man from "@/assets/images/png/manInRounded.png";
import COurServies from "@/components/display/c-ourservices";
import Layout1 from "@/components/display/c-layout1";
import Layout2 from "@/components/display/c-layout2";
import Layout3 from "@/components/display/c-layout3";
import mobile from "@/assets/images/png/mobile.png";
import monitorWithPhone from "@/assets/images/png/monitorWithPhone.png";
import monitorCar from "@/assets/images/png/monitorCar.png";
import logoYimMobile from "@/assets/images/png/logoYimMobile.png"; //logoYimMobile

import React from "react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeLogoPage
        props={{
          logo: <LogoYim height={192} width={444} />,
          title: "BUSINESS IN SOFTWARE AND HARDWARE DEVELOPMENT",
          elec: elec,
          elecNoLight: elec,
          logoMobile: logoYimMobile,
        }}
      />
      <HomeCustomer
        props={{
          tCon: "Customer",
        }}
      />
      <HomeTechnology
        props={{
          elec: <CElec />,
          svg: tech1 as StaticImageData,
          tCon: "Technology",
        }}
      />
      <COurServies
        props={{
          tCon: "Our Services",
          title:
            "Web development is an essential part of today’s online world .",
          des: "Web developers may use a variety of programming languages and technologies,such as HTML, CSS, JavaScript, and back-end languages like Python, Ruby, and PHP,to build and maintain websites. There are many different roles within the field of webdevelopment, ncluding front-end developers, who focus on the client-side of a website and ensure that it looks and functions as intended, and back-end developers, who focus on the server-side of a website and handle tasks such as storing and retrieving data from databases and ensuring the website can scale and perform well under high traffic.",
          svg: man,
          logo: <CMonitor />,
        }}
      />
      <div className="flex flex-col">
        <div>
          <Layout1
            props={{
              svg: monitorCar,
              description:
                "Smart Building Solutionภาพรวมการออกแบบของระบบงานการจัดการอาคารอัจฉริยะโดยระบบจะมีโมดูลต่าง ๆเพื่อสามารถไปจัดการและบริหารจัดการอาคารได้อย่างมีประสิทธิภาพโดยมีระบบต่างๆ ที่มีอยู่ในโครงการ ",
              title: "Interface Detail Design",
              type: "Digital Focus",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="bg-[#00244D]">
            <Layout2
              props={{
                svg: monitorWithPhone,
                title: "Q CHARGE",
                description:
                  "management system with in various projectwith functions and details that cover the whole project",
                type: "Application",
              }}
            />
          </div>
          <div className="bg-[#012752]">
            <Layout3
              props={{
                svg: mobile,
                title: "Q CHARGE",
                description:
                  "management system with in various projectwith functions and details that cover the whole project",
                type: "Application",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
