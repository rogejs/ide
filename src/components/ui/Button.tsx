import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import cn from "@/libs/utils/cn";

const variants = {
  primary: {
    base: "btn-primary",
    danger: "btn-primary--danger",
  },
  secondary: {
    base: "btn-secondary",
    danger: "btn-secondary--danger",
  },
  outline: {
    base: "btn-outline",
    danger: "btn-outline--danger",
  },
  ghost: {
    base: "btn-ghost",
    danger: "btn-ghost--danger",
  },
};

interface ButtonProps extends ComponentProps<"button"> {
  as?: "default" | "child";
  variant?: keyof typeof variants;
  danger?: boolean;
}

export default function Button({
  as = "default",
  variant = "primary",
  className,
  danger = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = as === "default" ? "button" : Slot.Root;
  return (
    <Comp
      className={cn(
        "btn",
        variants[variant][danger ? "danger" : "base"],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
