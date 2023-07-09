import { Row, Col, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import "./top.css";
interface ITop {
  type: string;
  title: string;
  des: string;
  img: StaticImageData;
  imgHovered: StaticImageData;
}

const CTop: FC<ITop> = ({ type, title, des, img, imgHovered }) => {
  return (
    <Row className="relative group min-h-screen md:min-h-[500px] lg:min-h-[500px] xl:min-h-[600px]">
      <Col
        xl={{
          span: 12,
        }}
        lg={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        xs={{
          span: 24,
        }}
        className="pl-20 pt-20"
      >
        <div className="text-[#3C97FF] move-text">{type}</div>
        <Typography.Title
          level={3}
          style={{ fontWeight: 300, color: "white" }}
          className="group-hover:opacity-0  title-hovered w-[150px] mt-0"
        >
          {title}
        </Typography.Title>
        <div className="relative bottom-[100px] left-[-50px]">
          <Typography.Title
            level={3}
            style={{ fontWeight: 500, color: "white" }}
            className="group-hover:opacity-100 opacity-0 title-hovered !mb-5"
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              color: "#969595",
              fontSize: 13,
              fontWeight: 300,
            }}
            className="opacity-0 !leading-loose group-hover:opacity-100 des"
          >
            {des}
          </Typography.Paragraph>
        </div>
      </Col>
      <Col
        xl={{
          span: 12,
        }}
        lg={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        xs={{
          span: 24,
        }}
        className="!absolute left-[0px] md:left-[150px] lg:left-[200px] xl:left-[250px]  bottom-[100px]"
      >
        <Image
          alt="image"
          src={img}
          className="scale-[.8] sm:scale-[2] group-hover:hidden"
        />
        <Image
          alt="image"
          src={imgHovered}
          className="scale-[.8] sm:scale-[2] group-hover:block hidden "
        />
      </Col>
    </Row>
  );
};

export default CTop;
