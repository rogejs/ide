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

const sizes = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

interface ButtonProps extends ComponentProps<"button"> {
  as?: "default" | "child";
  variant?: keyof typeof variants;
  danger?: boolean;
  size?: keyof typeof sizes;
}

export default function Button({
  as = "default",
  variant = "primary",
  size = "md",
  className,
  danger = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = as === "default" ? "button" : Slot.Root;
  console.log(variants[variant][danger ? "danger" : "base"]);
  return (
    <Comp
      className={cn(
        "btn",
        variants[variant][danger ? "danger" : "base"],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
