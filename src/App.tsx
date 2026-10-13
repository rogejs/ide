import TitleBar from "./components/system/TitleBar";
import Box from "./components/ui/layouts/Box";
import Flex from "./components/ui/layouts/Flex";
import { Sidebar } from "./components/ui/Sidebar";
import "./style.css";

function App() {
  return (
    <Box>
      <TitleBar />
      <Flex>
        <Sidebar>sidebar</Sidebar>
        <main>edit code layout</main>
      </Flex>
    </Box>
  );
}

export default App;
