import type { ComponentProps, ReactNode } from "react";
import { textBlockSizes, weights } from "@/data/text.data";
import cn from "@/libs/utils/cn";

interface TextBlockProps extends ComponentProps<"p"> {
  children: ReactNode;
  className?: string;
  size?: keyof typeof textBlockSizes;
  weight?: keyof typeof weights;
}

export function TextBlock({
  children,
  className,
  size = "md",
  weight = 400,
  ...props
}: TextBlockProps) {
  return (
    <p
      className={cn(textBlockSizes[size], weights[weight], className)}
      {...props}
    >
      {children}
    </p>
  );
}
