import {
  BoxIcon,
  Cross1Icon,
  DividerHorizontalIcon,
} from "@radix-ui/react-icons";
import { getCurrentWindow } from "@tauri-apps/api/window";
import Button from "../ui/Button";
import Box from "../ui/layouts/Box";
import Flex from "../ui/layouts/Flex";
import { TextInline } from "../ui/typography/TextInline";
import MenuTitlebar from "./Menu";

const appWindow = getCurrentWindow();

function TitleBar() {
  return (
    <Box data-tauri-drag-region className="px-0 w-full">
      <Flex data-tauri-drag-region justify="between">
        <MenuTitlebar />
        <TextInline
          data-tauri-drag-region
          className="cursor-default"
          weight={600}
          size="sm"
        >
          Roge Code
        </TextInline>
        <Flex gap={0}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => appWindow.minimize()}
          >
            <DividerHorizontalIcon />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => appWindow.toggleMaximize()}
          >
            <BoxIcon />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            danger
            onClick={() => appWindow.close()}
          >
            <Cross1Icon />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TitleBar;
