import { useAppStore } from "@lavaz/store";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Box from "@/components/ui/layouts/Box";
import { sidebarNav } from "@/data/sidebar-nav.data";
import cn from "@/libs/utils/cn";
import { store } from "@/store/store";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupItem,
  SidebarHeader,
  SidebarTitle,
} from "../../ui/Sidebar";
import Explorer from "./Explorer";

export default function AppSidebar() {
  const { t } = useTranslation();
  const [sidebarValue, { setSidebar }] = useAppStore(
    store.sidebar,
    (s) => s.value,
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle className="text-accent-foreground">
          {/*{t(`sidebar.${view}`)}*/}
        </SidebarTitle>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {sidebarNav.map((item) => (
            <Box key={item.key} className="text-sm">
              <SidebarGroupItem
                className={cn(
                  "text-xs justify-between",
                  sidebarValue === item.value
                    ? "text-secondary-foreground"
                    : "text-accent-foreground",
                )}
                onClick={() => setSidebar({ value: item.value })}
              >
                {t(`sidebar.${item.value}`)}
                {sidebarValue === item.value ? (
                  <ChevronUpIcon />
                ) : (
                  <ChevronDownIcon />
                )}
              </SidebarGroupItem>
              {item.value === "explorer" && (
                <Explorer isOpen={sidebarValue === item.value} />
              )}
            </Box>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
