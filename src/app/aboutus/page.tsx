import React from "react";
import Image from "next/image";
import Yim from "@/assets/images/Yim.jpg";
import { Overall } from "./overall/page";
import { InTech } from "./intech/page";
import Partner from "./partner/page";
import { Customer } from "./customer/page";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="h-full bg-[#081224] ">
        <Image
          src={Yim}
          alt="image"
          className="object-cover opacity-50 hover:opacity-100 "
        />
      </div>
      <div>
        <Overall props={{}} />
      </div>
      <div>
        <InTech props={{}} />
      </div>
      <div>
        <Partner props={{}} />
      </div>
      <div>
        <Customer props={{}} />
      </div>
    </div>
  );
}
