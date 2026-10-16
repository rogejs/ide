interface SidebarNav {
  key: string;
  value: "search" | "explorer" | "git";
}

const sidebarNav: SidebarNav[] = [
  {
    key: "sidebar-search",
    value: "search",
  },
  {
    key: "sidebar-explorer",
    value: "explorer",
  },
  {
    key: "sidebar-git",
    value: "git",
  },
];

export { type SidebarNav, sidebarNav };
