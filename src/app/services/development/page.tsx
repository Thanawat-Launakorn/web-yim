import Container from "@/components/container";
import { CTabs } from "@/components/tab";
import CMonitor from "@/components/svg/monitor";
import man from "@/assets/images/png/manInRounded.png";
import React from "react";
import { Hightlight } from "./content/highlight";
import { CImportant } from "./content/importance";
import CDevelopment from "@/components/display/page-services/c-development";
import CTechonology, {
  technologiesWeApply,
} from "@/components/display/page-services/c-technology/desktop";
import CTecnologyMobile, {
  items1,
  items2,
  items3,
} from "@/components/display/page-services/c-technology/mobile";

type Props = {};

export default function Development({}: Props) {
  return (
    <React.Fragment>
      <CTabs
        menu={[
          "Hightlight Services",
          "Development Services",
          "Importance of Development",
          "Technologies We Apply",
        ]}
      />
      <Container optional="side">
        <Hightlight id="hightlight" title="Hightlight Services" />
        <CDevelopment
          props={{
            id: "development",
            title:
              "Web development is an essential part of today’s online world .",
            des: "Web developers may use a variety of programming languages and technologies,such as HTML, CSS, JavaScript, and back-end languages like Python, Ruby, and PHP,to build and maintain websites. There are many different roles within the field of webdevelopment, ncluding front-end developers, who focus on the client-side of a website and ensure that it looks and functions as intended, and back-end developers, who focus on the server-side of a website and handle tasks such as storing and retrieving data from databases and ensuring the website can scale and perform well under high traffic.",
            svg: man,
            logo: <CMonitor />,
            styled: { img: "!h-[390px] !w-[349px]" },
          }}
        />
        <CImportant
          props={{
            id: "importance",
            title: "Importace of Development",
          }}
        />
        <div className="hidden sm:block">
          <CTechonology
            props={{ data: technologiesWeApply, id: "technologies" }}
          />
        </div>
        <div className="block sm:hidden">
          <CTecnologyMobile
            title="Application"
            items1={items1}
            items2={items2}
            items3={items3}
          />
        </div>
      </Container>
    </React.Fragment>
  );
}
