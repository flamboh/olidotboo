"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CopyEmailButton() {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("hi@oli.boo");
      toast("copied to clipboard", { description: "hi@oli.boo" });
    } catch {
      toast.error("clipboard access denied", {
        style: {
          background: "var(--destructive)",
          color: "var(--destructive-foreground)",
          border: "none",
        },
      });
    }
  };

  return (
    <Button
      variant="ghost"
      className="p-2 m-0 border size-12"
      onClick={handleClick}
    >
      <Image
        src="/mail.svg"
        alt="Email"
        width={24}
        height={24}
        className="invert"
      />
    </Button>
  );
}
