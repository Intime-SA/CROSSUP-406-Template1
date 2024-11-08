"use client";

import Templates from "@/components/template/Templates";

const TemplateMobilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10 text-primaryText">
      <h1 className="text-3xl font-bold mb-4">Template 1</h1>
      <h2 className="text-sm mb-4">Variantes de template</h2>
      <Templates />
    </div>
  );
};

export default TemplateMobilePage;
