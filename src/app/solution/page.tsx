"use client";
import React from "react";
import CTopSolution from "@/components/display/page-solution/top-page";
import solution from "@/assets/images/png/solution.png";

type Props = {};

export default function Solution({}: Props) {
  return (
    <div className="overflow-x-hidden sm:px-20">
      <CTopSolution
        image={solution}
        title=" Product"
        description="Websites that make it easier for customers to work with."
        carouselImages={[{ image: solution }, { image: solution }]}
      />
    </div>
  );
}
