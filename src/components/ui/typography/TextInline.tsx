import type { ComponentProps, ReactNode } from "react";
import cn from "@/libs/utils/cn";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const weights = {
  300: " font-light",
  400: "font-normal",
  500: "font-medium",
  600: "font-semibold",
  700: "font-bold",
};

interface TextInlineProps extends ComponentProps<"span"> {
  as?: "span" | "em";
  children: ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
}

export function TextInline({
  children,
  className,
  as = "span",
  size = "md",
  weight = 400,
  ...props
}: TextInlineProps) {
  const Comp = as;
  return (
    <Comp
      className={cn("", sizes[size], weights[weight], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
