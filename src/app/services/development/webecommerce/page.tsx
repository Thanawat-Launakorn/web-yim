"use client";
import React, { FC } from "react";
import webecommerce from "@/assets/images/png/webecommerce.png";
import labtop from "@/assets/images/png/labtop.png";
import shopping from "@/assets/images/png/shopping.png";
import checkout from "@/assets/images/png/checkout.png";
import product from "@/assets/images/png/catalog.png";
import order from "@/assets/images/png/order.png";
import customer from "@/assets/images/png/customer.png";
import coin from "@/assets/images/png/coin1.png";
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
import Monitor from "@/components/svg/monitor";
import { CTabs } from "@/components/tab";
import Container from "@/components/container";
import { StaticImageData } from "next/image";
import CKeyElements from "@/components/display/page-services/c-keyelements";

interface IWebecommerce {}

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
const Webecommerce: FC<IWebecommerce> = ({}) => {
  const handleTab = () => {};
  return (
    <React.Fragment>
      <CTabs
        menu={[
          "Online Stores Ecommerce",
          "Key Elements",
          "Technologies We Apply",
        ]}
        onPressed={handleTab}
      />
      <Container optional="side">
        <COurWebsite
          props={{
            title: "Online Store Ecommerce",
            type: "The less",
            des: "Interface Detail Design",
            img: {
              png: webecommerce,
            },
          }}
        />
        <CDevelopment
          props={{
            title: "Online Store Ecommerce",
            des: "An online store, also known as an e-commerce website, is a website that allows users to purchase goods or services from the comfort of their own home. Online stores typically have a shopping cart feature that allows users to add items to their virtual cart and check out when they are finished shopping. Payment is typically made online using a credit card or a payment gateway like PayPal. Online stores can offer a wide range of products and services, from physical goods like clothes and electronics, to digital products like music and ebooks. They can also offer services such as booking travel or buying tickets to events.",
            logo: <Monitor />,
            svg: labtop,
          }}
        />
        <CKeyElements
          type="Key Elements"
          title="There are several key elements that are typically included in online stores"
          forSide={"layout-2"}
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

export default Webecommerce;
