"use client";
import React from "react";
import CTopSolution from "@/components/display/page-solution/top-page";
import solution from "@/assets/images/png/solution.png";

type Props = {};

export default function Solution({}: Props) {
  return (
    <div className="overflow-x-hidden px-20">
      <CTopSolution image={solution} />
    </div>
  );
}
