"use client";

import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { useDynamicFont } from "@/app/fonts/fonts";

interface TemplateButtonProps {
  label: string;
  type: string;
  onClick: (type: string) => void;
}

export const InicializadorButton: React.FC<TemplateButtonProps> = ({
  label,
  type,
  onClick,
}) => {
  const dynamicFont = useDynamicFont(); // Get the current font style

  console.log(dynamicFont);

  return (
    <SheetTrigger asChild>
      <Button
        variant="outline"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: "10px",
          fontFamily: dynamicFont.style.fontFamily, // Apply the selected font
        }}
        onClick={() => onClick(type)}
      >
        {label}
      </Button>
    </SheetTrigger>
  );
};
