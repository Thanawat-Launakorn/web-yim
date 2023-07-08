import Container from "@/components/container";
import DLogoPage from "@/components/display/page-home/c-logopage";
import LogoYim from "@/components/svg/logoYim"; //logoYimDesktop
import CElec from "@/components/svg/elec";
import CElectNoLight from "@/components/svg/elecNoLight";
import logoYimMobile from "@/assets/images/png/logoYimMobile.png"; //logoYimMobile
import elec from "@/assets/images/png/elec.png";
import HomeLogoPage from "@/components/display/page-home/c-logopage";
import HomeCustomer from "@/components/display/page-home/c-customer";
import CMonitor from "@/components/svg/monitor";
import HomeTechnology from "@/components/display/page-home/c-technology";
import tech1 from "@/assets/images/png/tech-1.png";
import { StaticImageData } from "next/image";
import man from "@/assets/images/png/manInRounded.png";
import COurServies from "@/components/display/c-ourservices";

export default function Home() {
  return (
    <Container className="flex min-h-screen flex-col bg-[#081224]">
      <div className="hidden md:block">
        <HomeLogoPage
          props={{
            elecNoLight: <CElectNoLight />,
            elec: <CElec />,
            logo: <LogoYim height={192} width={444} />,
            title: "BUSINESS IN SOFTWARE AND HARDWARE DEVELOPMENT",
          }}
        />
      </div>
      <div className="block sm:hidden">
        <DLogoPage
          props={{
            mobile: true,
            logo: "",
            title: "BUSINESS IN SOFTWARE AND HARDWARE DEVELOPMENT",
            elec: "",
          }}
        />
      </div>

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
    </Container>
  );
}
