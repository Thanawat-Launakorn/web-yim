"use client";
import { Row, Col, Avatar, Typography } from "antd";
import React, { FC } from "react";
import Image from "next/image";
import uxui from "@/assets/images/png/uxui.png";
import shopping from "@/assets/images/png/shopping.png";
import checkout from "@/assets/images/png/checkout.png";
import product from "@/assets/images/png/catalog.png";
import order from "@/assets/images/png/order.png";
import customer from "@/assets/images/png/customer.png";
import coin from "@/assets/images/png/coin1.png";
import canabis from "@/assets/images/png/canabis.png";
import { StaticImageData } from "next/image";
import ColoredLine from "@/components/display/c-colorline";
import CKeyElements from "@/components/display/page-services/c-keyelements";
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
import Container from "@/components/container";

const items: { logo: StaticImageData; title: string; des: string }[] = [
  {
    logo: shopping,
    title: "Shopping cart",
    des: "This is a virtual cart that allows customers to add items to their order as they shop. The shopping cart typically displays the total cost of the order, including any applicable taxes and shipping fees.",
  },
  {
    logo: checkout,
    title: "Payment gateway",
    des: "This is a secure service that processes online payments. Popular payment gateways include PayPal and Stripe.",
  },
  {
    logo: product,
    title: "Product catalog",
    des: "This is a list of all the products or services that the online store offers. The product catalog typically includes information about each product, such as its name, price, and a description.",
  },
  {
    logo: order,
    title: "Shopping cart",
    des: "This is a virtual cart that allows customers to add items to their order as they shop. The shopping cart typically displays the total cost of the order, including any applicable taxes and shipping fees.",
  },
  {
    logo: customer,
    title: "Checkout process",
    des: "This is the process by which customers enter their payment and shipping information to complete their order. The checkout process should be secure and easy to use.",
  },
  {
    logo: coin,
    title: "Product catalog",
    des: "This is a list of all the products or services that the online store offers. The product catalog typically includes information about each product, such as its name, price, and a description.",
  },
];
interface IUXUI {}

const UXUI: FC<IUXUI> = ({}) => {
  return (
    <React.Fragment>
      <CTabs
        menu={["Our UX UI Design", "Key Elements", "Technologies We Apply"]}
      />
      <Container optional="side">
        <COurWebsite
          props={{
            title: "Our UX UI Design",
            type: "CANABIS",
            des: "Ecommerce Web",
            img: { png: canabis },
          }}
        />
        <CDevelopment
          title="UX UI Design"
          img={uxui}
          desLeft="UI design, or user interface design, is the process of designing the visual elements of a product, such as the layout, color scheme, and typography. It is important for UI designers to create a visually appealing and consistent design that enhances the user’s experience of the product."
          desRight="UX design and UI design are two important aspects of creating a successful product. UX design, or user experience design, is the process of designing products to provide a meaningful and relevant experience to users. This involves research, prototyping, and testing to ensure that the product is easy to use, efficient, and enjoyable."
          logo={<></>}
        />
        <CKeyElements
          forSide="layout-2"
          title="There are several elements that contribute to good UX and UI design ."
          type="Key Elements"
          items={items}
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

interface IDevelopment {
  logo: React.ReactNode;
  title: string;
  desLeft: string;
  desRight: string;
  img: StaticImageData;
}

const CDevelopment: FC<IDevelopment> = ({
  logo,
  title,
  desLeft,
  desRight,
  img,
}) => {
  return (
    <Row
      align={"middle"}
      justify="space-between"
      style={{
        boxShadow: "0px 0px 20px #5695F72E",
      }}
      className="p-10"
    >
      {/* 1 */}
      <Col
        className="flex flex-col flex-1"
        xl={{
          span: 6,
        }}
        lg={{ span: 24 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Avatar src={logo} shape="circle" size={64} />
        <Typography.Title
          level={4}
          style={{
            color: "white",
          }}
        >
          {title}
        </Typography.Title>
        <ColoredLine color="white" className="my-5" />
        <Typography.Paragraph
          style={{
            color: "#969595",
            fontSize: 13,
            fontWeight: 300,
          }}
          className="!leading-loose"
        >
          {desLeft}
        </Typography.Paragraph>
      </Col>
      {/* 2 */}
      <Col
        xl={{
          span: 12,
        }}
        lg={{ span: 24 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Image src={img} alt="image" className="object-contain" />
      </Col>
      {/* 3 */}
      <Col
        xl={{
          span: 6,
        }}
        lg={{ span: 24 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Typography.Paragraph
          style={{
            color: "#969595",
            fontSize: 13,
            fontWeight: 300,
          }}
        >
          {desRight}
        </Typography.Paragraph>
      </Col>
    </Row>
  );
};

export default UXUI;
