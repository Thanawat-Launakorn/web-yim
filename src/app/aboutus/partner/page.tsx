"use client";
import Container from "@/components/container";
import aeribotics from "@/assets/images/png/aeribotics7.png";
import asean from "@/assets/images/png/asean rice.png";
import innova from "@/assets/images/png/Innova.png";
import katapult from "@/assets/images/png/katapult.png";
import technothump from "@/assets/images/png/technothump.png";
import React, { FC } from "react";
import CMPartner from "@/components/display/page-aboutus/c-partner";

interface IPartner {}
export const Partner: FC<{ props: IPartner }> = ({ props }) => {
  const partner = [innova, aeribotics, technothump, katapult, asean];
  const Mockpartner = [
    {
      logo: [...partner],
    },
  ];
  return (
    <React.Fragment>
      <Container className="bg-[#081224] py-20">
        {/* <CPartner
          props={{ data: Mockpartner, tPatrner: "Technology Partner" }}
        /> */}
        <CMPartner
          key="index"
          props={{ tPratner: "Tachnology Partner", data: Mockpartner }}
        />
      </Container>
    </React.Fragment>
  );
};
export default Partner;
