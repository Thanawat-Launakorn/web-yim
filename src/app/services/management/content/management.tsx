import OptionalLayout from "@/components/layout/optionLayout";
import { Row, Col, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface IManagement {
  title: string;
  items: any[];
}

const CManagement: FC<IManagement> = ({ title, items }) => {
  return (
    <Row className="lg:my-20">
      <Col span={24} className="text-center">
        <Typography.Text
          style={{
            color: "#0055B7",
            fontSize: 16,
          }}
        >
          {title}
        </Typography.Text>
      </Col>
      <Col span={24}>
        <OptionalLayout
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 px-5 sm:px-0 mt-5"
          items={items}
          renderItem={({
            item,
            key,
            idx,
          }: {
            item: any;
            key: string | number;
            idx: number;
          }) => <ManagementItem props={item} key={key} idx={idx} />}
        />
      </Col>
    </Row>
  );
};

interface IManagementItem {
  title: string;
  img: StaticImageData;
  des: string;
}

const ManagementItem: FC<{ props: IManagementItem; idx: number }> = ({
  props,
  idx,
}) => {
  const { title, img, des } = props;
  return (
    <div className={`flex flex-col items-center sm:items-start `}>
      <Typography.Text
        style={{
          color: "#0055B7",
          fontSize: 16,
        }}
      >
        <span>0{idx + 1}.</span>
      </Typography.Text>
      <Typography.Title
        level={4}
        style={{
          color: "white",
          fontWeight: 300,
        }}
      >
        {title}
      </Typography.Title>
      <Image
        src={img}
        alt="image"
        className="my-10 !h-[190px] !w-[190px] object-contain "
      />
      <Typography.Paragraph
        style={{ fontSize: 13, color: "#D5D0D0" }}
        className="!leading-loose"
      >
        {des}
      </Typography.Paragraph>
    </div>
  );
};

export default CManagement;
