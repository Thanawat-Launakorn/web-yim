import { Col } from "antd";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IPartner {
  data: { logo: StaticImageData[] }[];
  tPratner: string;
}

const CMPartner: FC<{ props: IPartner }> = ({ props }) => {
  const { tPratner, data } = props;
  return (
    <React.Fragment>
      <div>
        <Col span={24} className="text-center">
          <span
            style={{
              // display: "grid",
              // justifyContent: "center",
              marginBottom: 0,
              fontSize: 22,
            }}
            className="text-[#3c97ff] hover:text-[#fff] drop-shadow-xl text-center"
          >
            {tPratner}
          </span>
        </Col>

        <div className="my-10">
          {data.map((e, idx) => {
            const { logo } = e;
            return (
              <div
                key="idx"
                className="wrapper flex align-middle justify-center "
              >
                {logo.map((e, idx) => (
                  <div
                    key={idx}
                    className="!h-[90px] !w-[180px]  slide object-contain object-center  transition-all ease-linear delay-[.3]"
                  >
                    <Image
                      src={e}
                      alt=""
                      className="!h-[80px] !w-[180px] object-center object-contain"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CMPartner;
