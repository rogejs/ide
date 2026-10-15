import Box from "../../ui/layouts/Box";
import Flex from "../../ui/layouts/Flex";
import { TextInline } from "../../ui/typography/TextInline";
import Activities from "./Activities";
import MenuTitlebar from "./Menu";

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
        <Activities />
      </Flex>
    </Box>
  );
}

export default TitleBar;
