import { getCurrentWindow } from "@tauri-apps/api/window";
import { MinusIcon, SquareIcon, XIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/layouts/Flex";

export default function Activities() {
  const appWindow = getCurrentWindow();
  return (
    <Flex gap={0}>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => appWindow.minimize()}
      >
        <MinusIcon />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => appWindow.toggleMaximize()}
      >
        <SquareIcon />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        danger
        onClick={() => appWindow.close()}
      >
        <XIcon />
      </Button>
    </Flex>
  );
}
