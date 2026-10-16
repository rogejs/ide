import type { ComponentProps, ReactNode } from "react";
import { textInlineSizes, weights } from "@/data/text.data";
import cn from "@/libs/utils/cn";

interface TextInlineProps extends ComponentProps<"span"> {
  as?: "span" | "em";
  children: ReactNode;
  className?: string;
  size?: keyof typeof textInlineSizes;
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
      className={cn("", textInlineSizes[size], weights[weight], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
