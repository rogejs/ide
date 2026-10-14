import { createBox } from "@lavaz/store";

export type SidebarView = "explorer" | "search" | "git";

interface SidbarViewState {
  view: SidebarView;
}

const initialState = {
  view: "explorer",
} satisfies SidbarViewState as SidbarViewState;

export const sidebarViewBox = createBox(initialState, (set) => ({
  setView: (view: SidebarView) => set((prev) => ({ ...prev, view })),
}))
  .persist("side-bar-view")
  .create();
