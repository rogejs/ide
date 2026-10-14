import { Menubar as M } from "radix-ui";
import type {
  MenubarContentProps,
  MenubarItemProps,
  MenubarMenuProps,
  MenubarProps,
  MenubarSeparatorProps,
  MenubarSubContentProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps,
} from "radix-ui/menubar";
import cn from "@/libs/utils/cn";

function Menubar({
  children,
  className,
  direction = "horizontal",
  ...props
}: MenubarProps & {
  direction?: "horizontal" | "vertical";
}) {
  return (
    <M.Root
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className,
      )}
      {...props}
    >
      {children}
    </M.Root>
  );
}

function Menu({ children, ...props }: MenubarMenuProps) {
  return <M.Menu {...props}>{children}</M.Menu>;
}

function MenubarTrigger({
  className,
  children,
  ...props
}: MenubarTriggerProps) {
  return (
    <M.Trigger
      className={cn("btn btn-ghost btn-sm text-xs!", className)}
      {...props}
    >
      {children}
    </M.Trigger>
  );
}

function MenubarContent({
  children,
  className,
  ...props
}: MenubarContentProps) {
  return (
    <M.Portal>
      <M.Content
        className={cn(
          "flex flex-col gap-0 bg-background shadow-md rounded-md p-1 min-w-30",
          className,
        )}
        {...props}
      >
        {children}
      </M.Content>
    </M.Portal>
  );
}

function MenubarItem({
  children,
  className,
  asChild = true,
  ...props
}: MenubarItemProps) {
  return (
    <M.Item
      className={cn("btn btn-ghost btn-sm text-xs!", className)}
      asChild={asChild}
      {...props}
    >
      {children}
    </M.Item>
  );
}

function MenubarSub({ children, ...props }: MenubarSubProps) {
  return <M.Sub {...props}>{children}</M.Sub>;
}

function MenubarSubTrigger({
  children,
  className,
  ...props
}: MenubarSubTriggerProps) {
  return (
    <M.SubTrigger className={cn("", className)} {...props}>
      {children}
    </M.SubTrigger>
  );
}

function MenubarSubContent({
  children,
  className,
  ...props
}: MenubarSubContentProps) {
  return (
    <M.SubContent className={cn("", className)} {...props}>
      {children}
    </M.SubContent>
  );
}

function MenubarSeparator({ className, ...props }: MenubarSeparatorProps) {
  return (
    <M.Separator
      className={cn("w-full h-px bg-accent", className)}
      {...props}
    />
  );
}

export {
  Menu,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
