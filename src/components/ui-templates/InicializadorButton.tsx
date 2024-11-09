"use client";

import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";

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
  return (
    <SheetTrigger asChild>
      <Button
        variant="outline"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: "10px",
        }}
        onClick={() => onClick(type)}
      >
        {label}
      </Button>
    </SheetTrigger>
  );
};
