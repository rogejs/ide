import { createStore } from "@lavaz/store";
import { explorerBox } from "./boxes/explorer.box";
import { fileEntryBox } from "./boxes/file-entry.box";
import { sidebarBox } from "./boxes/sidebar.box";

export const store = createStore({
  fileEntry: fileEntryBox,
  explorer: explorerBox,
  sidebar: sidebarBox,
});
