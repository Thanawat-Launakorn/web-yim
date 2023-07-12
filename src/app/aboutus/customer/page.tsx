"use client";
import { Row, Col } from "antd";
import React, { FC } from "react";
import Container from "../../../components/container";
import TGControlC from "@/assets/images/png/TGControl11.png";
import ragnrokC from "@/assets/images/png/ragnarok11.png";
import scbC from "@/assets/images/png/Layer_111.png";
import abeC from "@/assets/images/png/ab11.png";
import starsC from "@/assets/images/png/stars microelectronics11.png";
import alumentC from "@/assets/images/png/Layer_211.png";
import qchargeC from "@/assets/images/png/Qcharge11.png";
import gravityC from "@/assets/images/png/gravity11.png";
import njoyC from "@/assets/images/png/njoy11.png";
import propluginC from "@/assets/images/png/proplugin11.png";
import thammasatC from "@/assets/images/png/thammasat11.png";
import srinakharinwirotC from "@/assets/images/png/Srinakharinwirot11.png";
import kongprapC from "@/assets/images/png/kongprap11.png";
import Sports_Authority_of_ThailandC from "@/assets/images/png/Sports_Authority_of_Thailand11.png";
import deC from "@/assets/images/png/de11.png";
import DepartmentofWaterworksC from "@/assets/images/png/Department of Waterworks-0111.png";
import p_siamC from "@/assets/images/png/p.siam11.png";
import PTTEP_C from "@/assets/images/png/PTTEP.png";
import raimonC from "@/assets/images/png/Layer 211.png";
import absolutehealthC from "@/assets/images/png/absolute health11.png";
import tollwayC from "@/assets/images/png/tollway11.png";
import CCustomer from "@/components/display/page-aboutus/c-customer";
import CMCustomer from "@/components/display/page-aboutus/c-customer/mobile";

interface ICustomer {}
export const Customer: FC<{ props: ICustomer }> = ({ props }) => {
  const customerLogoSCB = [scbC];
  const customerLogoIndustrial = [TGControlC, abeC, starsC, alumentC, qchargeC];
  const customerLogoMediaGame = [ragnrokC, gravityC, njoyC];
  const customerLogoMusicEntertainment = [propluginC];
  const customerLogoUniversity = [thammasatC, srinakharinwirotC];
  const customerLogoGovernment = [
    kongprapC,
    Sports_Authority_of_ThailandC,
    deC,
    DepartmentofWaterworksC,
  ];
  const customerLogoLogistic = [p_siamC];
  const customerLogoCorporate = [PTTEP_C];
  const customerLogoRealEstate = [raimonC];
  const customerLogoHospitalClinic = [absolutehealthC];
  const customerLogoOther = [tollwayC];
  const customer = [
    {
      title: "Bank",
      logo: [...customerLogoSCB],
    },
    {
      title: "Industrial",
      logo: [...customerLogoIndustrial],
    },
    {
      title: "Media & Game",
      logo: [...customerLogoMediaGame],
    },
    {
      title: "Music & Entertainment",
      logo: [...customerLogoMusicEntertainment],
    },
    {
      title: "University",
      logo: [...customerLogoUniversity],
    },
    {
      title: "Government",
      logo: [...customerLogoGovernment],
    },
    {
      title: "Logistic",
      logo: [...customerLogoLogistic],
    },
    {
      title: "Corporate",
      logo: [...customerLogoCorporate],
    },
    {
      title: "Real Estate",
      logo: [...customerLogoRealEstate],
    },
    {
      title: "Hospital & Clinic",
      logo: [...customerLogoHospitalClinic],
    },
    {
      title: "Other",
      logo: [...customerLogoOther],
    },
  ];

  return (
    <React.Fragment>
      <Container className="bg-[#081224] pt-20 pb-20">
        {/* <Col span={24} className="py-10">
          <span
            style={{ fontSize: 22 }}
            className="text-[#3c97ff] hover:text-[#fff]"
          >
            Customer
          </span>
        </Col> */}
        <div className="sm:block hidden p-5">
          <CCustomer
            props={{
              data: customer,
              tCus: "Customer",
            }}
          />
        </div>

        <div className="sm:hidden block p-5" key="index">
          <CMCustomer props={{ data: customer, tCus: "Customer" }} />
        </div>
      </Container>
    </React.Fragment>
  );
};
