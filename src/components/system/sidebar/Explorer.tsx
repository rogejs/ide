import { useAppStore } from "@lavaz/store";
import { FolderOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/Button";
import Box from "@/components/ui/layouts/Box";
import Flex from "@/components/ui/layouts/Flex";
import { TextBlock } from "@/components/ui/typography/TextBlock";
import { useFolder } from "@/hooks/system/use-folder";
import cn from "@/libs/utils/cn";
import FileTree from "./FileTree";

export default function Explorer({ isOpen }: { isOpen: boolean }) {
  const { t } = useTranslation();
  const { root, openFolder } = useFolder();

  return (
    <Box
      className={cn(
        "sidebar-item-system--open overflow-hidden smooth",
        !isOpen && "sidebar-item-system--close",
      )}
    >
      {!root ? (
        <Flex direction="vertical" gap={4}>
          <TextBlock size="sm" weight={500} className="text-accent-foreground">
            {t("explorer.empty")}
          </TextBlock>
          <Button className="w-full justify-center" onClick={openFolder}>
            <FolderOpen />
            {t("explorer.openFolder")}
          </Button>
        </Flex>
      ) : (
        <FileTree root={root} />
      )}
    </Box>
  );
}
