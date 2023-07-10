"use client";
import { Card, Space } from "antd";
import React, { CSSProperties } from "react";

interface Props {
  children?: React.ReactNode;
  optional?: "card" | "side";
  height?: number | string;
  className?: string;
  style?: CSSProperties;
}

const Container = ({
  optional,
  children,
  height = "",
  className,
  style,
}: Props) => {
  return (
    <React.Fragment>
      {!optional && (
        <div style={style} className={`${className}  w-full pt-20`}>
          {children}
        </div>
      )}
      {optional === "card" && (
        <Card
          style={{ height: height, width: "100%" }}
          className={`${className} min-h-full !px-7 py-10`}
        >
          {children}
        </Card>
      )}

      {optional === "side" && (
        <Space
          style={style}
          className={`${className}  mt-[25px]  md:mt-[80px] lg:mt-[70px] xl:mt-[0px]  w-full`}
          direction="vertical"
        >
          {children}
        </Space>
      )}
    </React.Fragment>
  );
};

export default Container;
