"use client";
import { Col } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import "@/assets/css/overall.css";
interface IOverall {
  tOverall?: string;

  title: string;
  des: string;
  img: StaticImageData;
  type?: string;
}
export const COverall: FC<{ props: IOverall }> = ({ props }) => {
  const { des, img, title, type, tOverall } = props;
  return (
    <React.Fragment>
      <div>
        <div>
          {/* <Col>
              <span
                className=" text-[#3c97ff] hover:text-[#ffff] flex justify-center mt-16"
                style={{ fontSize: 22 }}
              >
                {tOverall}
              </span>
            </Col> */}
          {/* <div className="absolute flex flex-col border-l-2 border-[#3c97ff] h-[300px] border-b-2 w-[400px] -translate-x-48 translate-y-32 border-r-2 "></div> */}

          <div
            // style={{ width: "250px" }}
            className="bg-gradient-to-b from-[#001845] from-30% via-[#3d4352] via-100%  to-[#c2c0c0] to-100% h-96  overall relative xl:scale- lg:scale-"
          >
            <Col span={24} className="">
              <div className="flex justify-center img">
                <Image
                  src={img}
                  alt=""
                  className="scale-50  active:images !h-80"
                />
              </div>
            </Col>

            <Col span={24} className="">
              <div
                style={{ fontWeight: 450, fontSize: 16 }}
                className="text-center title"
              >
                {title}
              </div>

              <div
                style={{ color: "#969595", fontSize: 13, fontWeight: 300 }}
                className="text-left p-7 des -top-[50px] left-[8px] absolute"
              >
                {des}
              </div>
            </Col>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface IDigital {
  tOverall?: string;
  data: {
    title: string;
    des: string;
    img: StaticImageData;
    type?: string;
  };
}
export const CDigital: FC<{ props: IDigital }> = ({ props }) => {
  const { data, tOverall } = props;
  return (
    <React.Fragment>
      <div>
        <div>
          {/* <Col>
              <span
                className=" text-[#3c97ff] hover:text-[#ffff] flex justify-center mt-16"
                style={{ fontSize: 22 }}
              >
                {tOverall}
              </span>
            </Col> */}
          <div
            // style={{ width: "250px", height: "300px" }}
            className="bg-gradient-to-b from-[#001845] from-30% via-[#3d4352] via-100%  to-[#c2c0c0] to-100% h-96 overall relative xl:scale-90 lg:scale-90"
          >
            <Col span={24} className="">
              <div className="flex justify-center img">
                <Image
                  src={data.img}
                  alt=""
                  className="scale-50  active:images !h-80"
                />
              </div>
            </Col>

            <Col span={24} className="">
              <div
                style={{ fontWeight: 450, fontSize: 16 }}
                className="text-center title"
              >
                {data.title}
              </div>

              <div
                style={{ color: "#969595", fontSize: 13, fontWeight: 300 }}
                className="text-left p-7 des -top-[50px] left-[8px] absolute"
              >
                {data.des}
              </div>
            </Col>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface IProject {
  tOverall?: string;
  data: {
    title: string;
    des: string;
    img: StaticImageData;
    type?: string;
  };
}
export const CProject: FC<{ props: IProject }> = ({ props }) => {
  const { data, tOverall } = props;
  return (
    <React.Fragment>
      <div>
        <div>
          {/* <Col>
              <span
                className=" text-[#3c97ff] hover:text-[#ffff] flex justify-center mt-16"
                style={{ fontSize: 22 }}
              >
                {tOverall}
              </span>
            </Col> */}
          <div
            // style={{ width: "250px", height: "300px" }}
            className="bg-gradient-to-b from-[#001845] from-30% via-[#3d4352] via-100%  to-[#c2c0c0] to-100% h-96 overall relative xl:scale-90 lg:scale-90"
          >
            <Col span={24} className="">
              <div className="flex justify-center img">
                <Image
                  src={data.img}
                  alt=""
                  className="scale-50  active:images !h-80"
                />
              </div>
            </Col>

            <Col span={24} className="">
              <Col span={24} className="">
                <div
                  style={{ fontWeight: 450, fontSize: 16 }}
                  className="text-center title"
                >
                  <span>{data.title}</span>
                </div>
              </Col>

              <div
                style={{ color: "#969595", fontSize: 13, fontWeight: 300 }}
                className="text-left p-7 des -top-[50px] left-[8px] absolute"
              >
                {data.des}
              </div>
            </Col>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface ITOverall {
  tOverall: string;
}

export const CTOverall: FC<{ props: ITOverall }> = ({ props }) => {
  const { tOverall } = props;
  return (
    <React.Fragment>
      <div className="">
        <span
          className=" text-[#3c97ff] hover:text-[#ffff] flex justify-center mt-16 "
          style={{ fontSize: 22 }}
        >
          {tOverall}
        </span>
      </div>
      {/* <div className="linegroup ">
        <div className="absolute flex flex-col border-l-2 border-[#3c97ff] h-[300px] border-b-2 w-[400px] top-[140px] left-[150px] border-r-2 "></div>
        <div className="absolute flex flex-col  border-[#3c97ff] h-[300px]  w-[190px] top-[140px] left-[500px] border-t-2 "></div>
        <div className="absolute flex flex-col  border-[#3c97ff] h-[300px]  w-[200px] top-[140px] left-[835px] border-t-2 "></div>
        <div className="bg-[#3c97ff]  border-[#3c97ff] border-solid border-2 rounded-full  h-5 w-5  absolute left-[140.75px] top-[130px] "></div>
        <div className="bg-[#3c97ff]  border-[#3c97ff] border-solid border-2 rounded-full  h-5 w-5  absolute left-[670px] top-[130px] "></div>
        <div className="bg-[#8625C6]  border-[#8625C6] border-solid border-2 rounded-full  h-5 w-5  absolute left-[1025px] top-[130px] "></div>
      </div> */}
    </React.Fragment>
  );
};
