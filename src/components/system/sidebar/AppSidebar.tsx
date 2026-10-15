import { useTranslation } from "react-i18next";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTitle,
} from "../../ui/Sidebar";

export default function AppSidebar() {
  const { t } = useTranslation();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle className="text-accent-foreground">
          {/*{t(`sidebar.${view}`)}*/}
        </SidebarTitle>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
}
