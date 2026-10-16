import {
  FluentAdd,
  FluentNewFile,
  FluentNewFolder,
} from "@react-symbols/icons";
import Button from "@/components/ui/Button";
import Box from "@/components/ui/layouts/Box";
import Flex from "@/components/ui/layouts/Flex";
import { TextInline } from "@/components/ui/typography/TextInline";

interface FileTreeProps {
  root: string;
}

export default function FileTree({ root }: FileTreeProps) {
  const rootName = root.split(/\\/).filter(Boolean).pop() ?? root;

  return (
    <Box>
      <Flex alignItem="center" justify="between">
        <TextInline size="sm" weight={500} className="w-full">
          {rootName}
        </TextInline>
        <Flex justify="end" alignItem="center" gap={0}>
          <Button size="sm" variant="ghost">
            <FluentNewFile className="size-4!" />
          </Button>
          <Button size="sm" variant="ghost">
            <FluentNewFolder className="size-4!" />
          </Button>
          <Button size="sm" variant="ghost">
            <FluentNewFolder className="size-4!" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
