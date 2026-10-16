import { Group, Panel, Separator } from "react-resizable-panels";
import TitleBar from "./components/system/titlebar/TitleBar";
import "./style.css";
import { useEffect } from "react";
import AppSidebar from "./components/system/sidebar/AppSidebar";
import Flex from "./components/ui/layouts/Flex";
import { useFolder } from "./hooks/system/use-folder";

function App() {
  const { openFolder } = useFolder();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLocaleLowerCase() === "o") {
        e.preventDefault();
        openFolder();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openFolder]);

  return (
    <Flex direction="vertical" className="h-dvh">
      <TitleBar />
      <Group orientation="horizontal" className="min-h-0 w-full">
        <Panel
          id="sidebar"
          defaultSize="18%"
          minSize="12%"
          maxSize="35%"
          collapsible
        >
          <AppSidebar />
        </Panel>
        <Separator className="w-px bg-gray-500" />
        <Panel id="main" defaultSize="65%">
          <Group orientation="vertical">
            <Panel id="editor" defaultSize="70%" minSize="20%">
              <main>edit code layout</main>
            </Panel>
            <Separator className="w-full h-px bg-gray-500" />
            <Panel id="terminal" defaultSize="30%" minSize="10%" collapsible>
              <div>terminal</div>
            </Panel>
          </Group>
        </Panel>
        <Separator className="w-px bg-gray-500" />
        <Panel id="chat-bot" defaultSize="22%" minSize="15%" maxSize="40%">
          <div>chat ai</div>
        </Panel>
      </Group>
    </Flex>
  );
}

export default App;
