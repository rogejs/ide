import { createBox } from "@lavaz/store";

interface ExplorerState {
  root: string | null;
  expanded: Record<string, boolean>;
}

const initialState = {
  root: null,
  expanded: {},
} satisfies ExplorerState as ExplorerState;

export const explorerBox = createBox(initialState, (set) => ({
  setRoot: (root: string) => set((prev) => ({ ...prev, root, expanded: {} })),
  setExpanded: (path: string, open: boolean) =>
    set((prev) => ({ ...prev, expanded: { ...prev.expanded, [path]: open } })),
}))
  .persist("explorer")
  .create();
