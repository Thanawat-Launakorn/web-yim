import React from "react";
import WeAreYim from "@/assets/images/actical/we-are-yim.png";
import Image from "next/image";
import Highlight from "./highlight/page";
import Activity from "./activity/page";
import Actical from "./actical/page";
import TabsBar from "./tabs/page";
import YimShare from "./yimshare/page";
type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className=" min-h-fit bg-[#081224] ">
        <Image
          src={WeAreYim}
          alt="image"
          className="opacity-50 hover:opacity-100 object-cover"
        />
      </div>
      <div>
        <TabsBar props={{}} />
      </div>
      <div id="highlight">{/* <Highlight props={{}} /> */}</div>
      <div id="activity">
        <Activity props={{}} />
      </div>
      <div id="yim-share">
        <YimShare props={{}} />
      </div>
      <div id="actical">
        <Actical props={{}} />
      </div>
    </div>
  );
}
