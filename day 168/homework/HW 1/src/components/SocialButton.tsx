import React from "react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  const sizedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon, { className: "size-9" })
    : icon;

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2 h-[70px] w-[70px]"
      onClick={onClick}
    >
      {sizedIcon} {label}
    </Button>
  );
}
