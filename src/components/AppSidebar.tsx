import { useAppStore } from "@lavaz/store";
import { useTranslation } from "react-i18next";
import { store } from "@/store/store";
import Explorer from "./system/sidebar/Explorer";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTitle,
} from "./ui/Sidebar";

export default function AppSidebar() {
  const { t } = useTranslation();
  const [view] = useAppStore(store.sidebarView, (s) => s.view);
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>{t(`sidebar.${view}`)}</SidebarTitle>
      </SidebarHeader>
      <SidebarContent>
        {view === "explorer" && <Explorer />}
        {view === "search" && <div className="p-3 text-sm">search</div>}
        {view === "git" && <div className="p-3 text-sm">git</div>}
      </SidebarContent>
    </Sidebar>
  );
}
