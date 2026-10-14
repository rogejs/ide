import type { ComponentProps, ReactNode } from "react";
import cn from "@/libs/utils/cn";

function Sidebar({ children }: { children: ReactNode }) {
  return <aside className="flex flex-col h-full">{children}</aside>;
}

function SidebarHeader({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}

function SidebarTitle({
  children,
  className,
  as = "h1",
  ...props
}: ComponentProps<"h1"> & { as?: "h1" | "p" }) {
  const Comp = as;
  return (
    <Comp className={cn("text-sm font-semibold", className)} {...props}>
      {children}
    </Comp>
  );
}

function SidebarDescription({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  );
}

function SidebarContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("min-h-0 flex-1 overflow-auto", className)} {...props} />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarDescription,
  SidebarHeader,
  SidebarTitle,
};
