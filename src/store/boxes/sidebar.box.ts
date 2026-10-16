import { createBox } from "@lavaz/store";
import type { SidebarNav } from "@/data/sidebar-nav.data";

type SidebarState = Pick<SidebarNav, "value">;

const initialState = {
  value: "explorer",
} satisfies SidebarState as SidebarState;

export const sidebarBox = createBox(initialState, (set) => ({
  setSidebar: (opts: Pick<SidebarNav, "value">) =>
    set((prev) => ({ ...prev, value: opts.value })),
}))
  .persist("sidebar-state")
  .create();
