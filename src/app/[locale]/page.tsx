import React from "react";
import Templates from "@/components/template/Templates";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="min-h-screen bg-background">
      <h1>{t("title")}</h1>
      <Templates />
    </main>
  );
}
