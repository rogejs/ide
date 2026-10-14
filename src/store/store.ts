import { createStore } from "@lavaz/store";
import { sidebarViewBox } from "./boxes/sidebar-view.box";

export const store = createStore({
  sidebarView: sidebarViewBox,
});
