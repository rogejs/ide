import type { ComponentProps, ReactNode } from "react";
import cn from "@/libs/utils/cn";

const directions = {
  horizontal: "flex",
  "horizontal-reverse": "flex-row-reverse",
  vertical: "flex-col",
  "vertical-reverse": "flex-col-reverse",
};

const gaps = {
  0: "gap-0",
  2: "gap-0.5",
  4: "gap-1",
  8: "gap-2",
  12: "gap-3",
  16: "gap-4",
  20: "gap-5",
  24: "gap-6",
};

const justifies = {
  start: "justify-start",
  end: "justify-end",
  "end-safe": "justify-end-safe",
  center: "justify-center",
  "center-safe": "justify-center-safe",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
  baseline: "justify-baseline",
  normal: "justify-normal",
};

const alignItems = {
  start: "items-start",
  end: "items-end",
  "end-safe": "items-end-safe",
  center: "items-center",
  "center-safe": "items-center-safe",
  baseline: "items-baseline",
  "baseline-last": "items-baseline-last",
  stretch: "items-stretch",
};

interface FlexProps extends ComponentProps<"div"> {
  className?: string;
  display?: "flex" | "inline-flex";
  children: ReactNode;
  direction?: keyof typeof directions;
  gap?: keyof typeof gaps;
  justify?: keyof typeof justifies;
  alignItem?: keyof typeof alignItems;
}

function Flex({
  className,
  display = "flex",
  children,
  direction = "horizontal",
  gap = 16,
  justify = "start",
  alignItem = "center",
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        display,
        directions[direction],
        justifies[justify],
        gaps[gap],
        alignItems[alignItem],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Flex;
