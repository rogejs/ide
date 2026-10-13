import type { ReactNode } from "react";

function Sidebar({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export { Sidebar };
