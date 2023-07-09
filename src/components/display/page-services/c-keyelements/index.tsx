import OptionalLayout from "@/components/layout/optionLayout";
import { Row, Col, Space, Typography } from "antd";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FC } from "react";
// import "./keyelement.css";
interface IKeyElements {
  type: string;
  title: string;
  items?: IIConItem[];
  forSide: "layout-1" | "layout-2";
}

const CKeyElements: FC<IKeyElements> = ({ type, items, title, forSide }) => {
  return (
    <Row className="my-10" gutter={24}>
      <Col span={24} className="!text-center">
        <Space
          direction="vertical"
          size={"middle"}
          className="!text-center px-5 sm:px-0"
        >
          <Typography.Text
            style={{
              color: "#0055B7",
            }}
          >
            {type}
          </Typography.Text>
          <Typography.Title
            level={4}
            className="lg:mb-[50px] lg:px-[0px]"
            style={{
              color: "white",
              fontWeight: 400,
            }}
          >
            {title}
          </Typography.Title>
        </Space>
      </Col>
      <Col span={24} className="">
        <div className="sm:block hidden">
          {forSide === "layout-1" && (
            <Row className="main">
              <Col span={24}>
                <div className="flex flex-col mt-0 w-full">
                  <div>
                    {/* top */}
                    <div className="h-[300px] flex ">
                      {/* top 1*/}
                      <div className="group w-[154px]  pt-[120px] hover:pt-8 relative line-1 overflow-hidden">
                        <div
                          className="flex  flex-col border-l-[1px] h-[300px] border-[#3C97FF] border-dashed pl-2.5
                      text-white  pb-0 hover:pb-0 "
                        >
                          <p className="text-xl font-semibold group-hover:text-sm title-1 absolute group-hover:text-[#3C97FF]">
                            Assessment and planning
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-20 !leading-relaxed">
                            The service provider will assess the current
                            application and infrastructure, and create a plan
                            for the migration, including timelines, resources,
                            and any potential risks or challenges.
                          </p>
                        </div>
                      </div>
                      {/* empty */}
                      <div className="group w-[80px] ml-8 pt-[120px] hover:pt-0 opacity-0" />
                      {/* top 2 */}
                      <div className="group w-[185px] ml-8 pt-[200px] hover:pt-[100px] line-1 overflow-hidden relative">
                        <div
                          className="flex  flex-col border-l-[1px] h-[200px]  border-[#3C97FF] border-dashed pl-2.5
                      text-white  pb-8 hover:pb-16 "
                        >
                          <p className="text-xl font-semibold group-hover:text-xs title-1 absolute group-hover:text-[#3C97FF]">
                            Testing
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-32 !leading-relaxed">
                            The service provider will help test the application
                            on the new platform or infrastructure, to ensure
                            that it is functioning correctly and that there are
                            no compatibility issues.
                          </p>
                        </div>
                      </div>
                      {/* empty */}
                      <div className="group w-[80px] ml-8 pt-[120px] hover:pt-0 opacity-0" />
                      {/* top 3 */}
                      <div className="group w-[185px] ml-8 pt-[200px] hover:pt-[100px] line-1 overflow-hidden relative">
                        <div
                          className="flex  flex-col border-l-[1px] h-[200px]  border-[#3C97FF] border-dashed pl-2.5
                      text-white  pb-8 hover:pb-16 "
                        >
                          <p className="text-xl font-semibold group-hover:text-xs title-1 absolute group-hover:text-[#3C97FF]">
                            Support and maintenance
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-32 !leading-relaxed">
                            The service provider will provide support and
                            maintenance services to ensure that the application
                            continues to run smoothly after the migration.
                          </p>
                        </div>
                      </div>
                      {/* empty */}
                      <div className="group w-[0px] ml-8 pt-[120px] hover:pt-0 opacity-0" />
                      {/* top 4 */}
                      <div className="group w-[185px] ml-8 pt-[200px] hover:pt-[100px] line-1 overflow-hidden relative">
                        <div
                          className="flex  flex-col border-l-[1px] h-[200px]  border-[#3C97FF] border-dashed pl-2.5
                      text-white  pb-8 hover:pb-16 "
                        >
                          <p className="text-xl font-semibold group-hover:text-xs title-1 absolute group-hover:text-[#3C97FF]">
                            Cloud migration
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-32 !leading-relaxed">
                            Many migration service providers also specialize in
                            migrating applications to cloud platforms such as
                            AWS, Azure, and GCP.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* center */}
                    <div className=" w-full  border-b-[1px] border-[#3C97FF] border-dashed" />
                    {/* bottom */}
                    <div className="flex  h-[300px]">
                      {/* empty */}
                      <div className="group w-[100px] ml-8 pt-[120px] hover:pt-0 opacity-0" />
                      {/* bottom-1 */}
                      <div className="group w-[154px]  pb-[50px] hover:pb-0  relative  overflow-hidden">
                        <div className="line-2 flex  flex-col border-l-[1px] h-[120px] group-hover:h-[260px] border-[#3C97FF] border-dashed pl-2.5 text-white  pt-8 hover:pt-16 ">
                          <p className="text-xl font-semibold group-hover:text-xs group-hover:text-[#3C97FF] title-2 absolute">
                            Data migration
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-[85px] !leading-relaxed">
                            The service provider will help move the data from
                            the current application to the new platform or
                            infrastructure, ensuring that all data is properly
                            transferred and that there is no loss of data.
                          </p>
                        </div>
                      </div>
                      {/* empty */}
                      <div className="group w-[100px] ml-8 pt-[120px] hover:pt-0 opacity-0" />
                      {/* bottom-2 */}
                      <div className="group w-[154px]  pb-[50px] hover:pb-0  relative line-2 overflow-hidden">
                        <div className="line-2 flex  flex-col border-l-[1px] h-[120px] group-hover:h-[220px] border-[#3C97FF] border-dashed pl-2.5 text-white  pt-8 hover:pt-16 ">
                          <p className="text-xl font-semibold group-hover:text-xs group-hover:text-[#3C97FF] title-2 absolute">
                            Deployment
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-[85px] !leading-relaxed">
                            The service provider will help deploy the
                            application on the new platform or infrastructure,
                            making sure it’s ready to be used by the end-users.
                          </p>
                        </div>
                      </div>
                      {/* empty */}

                      <div className="group w-[100px] ml-8 pt-[120px] hover:pt-0 opacity-0" />
                      {/* bottom-3 */}

                      <div className="group w-[154px]  pb-[50px] hover:pb-0  relative line-2 overflow-hidden">
                        <div className="line-2 flex  flex-col border-l-[1px] h-[120px] group-hover:h-[220px] border-[#3C97FF] border-dashed pl-2.5 text-white  pt-8 hover:pt-16 ">
                          <p className="text-xl font-semibold group-hover:text-xs group-hover:text-[#3C97FF] title-2 absolute">
                            Automation
                          </p>
                          <p className=" opacity-0 group-hover:opacity-100 !text-xs text-[#D5D0D0] des-1 absolute top-[85px] !leading-relaxed">
                            Many of the migration service providers also provide
                            automation tools to make the migration process more
                            efficient and less error-prone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </div>
        <div>
          {forSide === "layout-2" && (
            <OptionalLayout
              items={items}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 sm:px-0"
              renderItem={({
                item,
                key,
              }: {
                item: IIConItem;
                key: string | number;
              }) => <IConItem props={item} key={key} />}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

interface IIConItem {
  logo: StaticImageData;
  title: string;
  des: string;
}

const IConItem: FC<{ props: IIConItem }> = ({ props }) => {
  const { logo, title, des } = props;
  return (
    <Row align={"top"} gutter={12} className="lg:mb-10">
      <Col span={3}>
        <Image src={logo} alt="image" className="!h-[37px] !w-[37px]" />
      </Col>
      <Col span={21}>
        <Space direction="vertical" size={"middle"}>
          <Typography.Title
            level={5}
            style={{
              color: "#3C97FF",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: "#D5D0D0",
            }}
            className="!leading-loose"
          >
            {des}
          </Typography.Paragraph>
        </Space>
      </Col>
    </Row>
  );
};

export default CKeyElements;
