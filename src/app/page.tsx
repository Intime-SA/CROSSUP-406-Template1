"use client";

import React from "react";
import Template1A from "@/components/template1/template1A";
import Template1B from "@/components/template1/template1B";
import Template1C from "@/components/template1/template1C";
import Template1D from "@/components/template1/template1D";

const TemplateMobilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10 text-primaryText">
      <h1 className="text-3xl font-bold mb-4">Template 1</h1>
      <h2 className="text-sm mb-4">Variantes de template</h2>
      <Template1A />
      {/*       <Template1B />
      <Template1C />
      <Template1D /> */}
    </div>
  );
};

export default TemplateMobilePage;
