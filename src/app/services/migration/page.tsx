"use client";
import React, { FC } from "react";
import photoyim30 from "@/assets/images/png/photo-yim30.png";
import photoyim31 from "@/assets/images/png/photo-yim31.png";
import migration1 from "@/assets/images/png/migration1.png";
import migration2 from "@/assets/images/png/migration2.png";
import migration3 from "@/assets/images/png/migration3.png";
import { StaticImageData } from "next/image";
import CKeyElements from "@/components/display/page-services/c-keyelements";
import { CTabs } from "@/components/tab";
import Container from "@/components/container";
import { TopC } from "./content/top";
import Advantages from "./content/advantages";
import Services from "./content/services";

interface IMigration {}
const items: { title: string; img: StaticImageData }[] = [
  { title: "Application migration consulting", img: migration1 },
  { title: "End-to-end application migration", img: migration3 },
  { title: "Enterprise- wide cloud adoption", img: migration2 },
];

const itemsAdv: { title: string; des: string }[] = [
  {
    title: "1. Improved performance and scalability",
    des: "Migrating to a newer or more powerful platform or infrastructure can improve the performance and scalability of an application or system, allowing it to handle increased traffic or load.",
  },
  {
    title: "2. Cost savings",
    des: "Moving to a more cost-effective platform or infrastructure can help an organization reduce its overall operating costs.",
  },
  {
    title: "3. Security enhancements",
    des: "Migrating to a more secure environment can help an organization protect sensitive data and comply with regulatory requirements.",
  },
  {
    title: "4. Access to new features and capabilities",
    des: "Migrating to a new platform or infrastructure can provide access to new features and capabilities that the current environment does not offer.",
  },
  {
    title: "5. Easier maintenance",
    des: "Migrating to a newer platform or infrastructure can make it easier to perform maintenance and upgrades, and can also extend the lifespan of an application or system.",
  },
  {
    title: "6. Cloud Adoption",
    des: "Migrating an application or system to a cloud platform can provide a more flexible, scalable, and cost-effective way to run the application.",
  },
];
const Migration: FC<IMigration> = ({}) => {
  return (
    <React.Fragment>
      <CTabs menu={["Meaning Migration", "Service", "Advantages"]} />
      <Container optional="side">
        <TopC
          props={{
            content: {
              title: "Application migration",
              type: "Meaning",
              des: "Application migration refers to the process of moving an application from one environment to another, such as from an on-premises data center to a cloud platform or from on cloud platform to another. This can involve moving the application's code, data, and any associated dependencies and configurations",
              svg: photoyim30,
              svgHovered: photoyim31,
            },
          }}
        />
        <Services
          props={{
            items,
            title: "Migration Service Option",
            type: "Service",
          }}
        />

        <CKeyElements
          forSide="layout-1"
          title="Key features of an application migration service include"
          type="Key features"
        />
        <Advantages
          content={{
            type: "Advantages",
            title: "Advantages of migration",
            des: "Migrating an application or system can provide several advantages to an organization, depending on the specific migration and the goals of the organization. Some common advantages include:",
          }}
          items={itemsAdv}
        />
      </Container>
    </React.Fragment>
  );
};

export default Migration;
