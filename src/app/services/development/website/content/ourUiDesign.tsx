import { Row, Col, Typography } from "antd";
import { FC } from "react";
import { CTimeline } from "@/components/timeline";

interface IOurUiDesign {
  title: string;
  des: string;
  id?: string;
}

const COurUiDesign: FC<{ props: IOurUiDesign }> = ({ props }) => {
  const { title, des, id } = props;
  return (
    <Row id={id}>
      <Col span={24} className="text-center sm:text-start">
        <Typography.Title
          level={4}
          style={{
            color: "white",
          }}
        >
          {title}
        </Typography.Title>
        <Typography.Paragraph
          style={{
            color: "#D5D0D0",
            fontSize: 14,
            fontWeight: 300,
          }}
          className="!leading-loose px-5 sm:px-[0]"
        >
          {des}
        </Typography.Paragraph>
      </Col>
      <Col span={24}>
        <CTimeline
          props={{
            menuItem: [
              "Define the goals and target audience of the product.",
              "Conduct user research to gather information about the needs, behaviors, and goals of the target audience.",
              "Create wireframes and prototypes to test and refine the design of the product.",
              "Design the visual elements of the user interface, such as the layout, color scheme, and typography.",
              "Test the user interface with users to gather feedback and make refinements.",
              "Create the final version of the user interface and prepare it for implementation.",
            ],
            title: {
              text: "Here is a general outline of the steps involved in the UI design process:",
              color: "#3C97FF",
            },
            optional: {
              footer: true,
            },
          }}
        />
      </Col>
    </Row>
  );
};

export default COurUiDesign;
