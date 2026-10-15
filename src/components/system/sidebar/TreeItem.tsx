// import { FileIcon } from "@radix-ui/react-icons";
import { TextInline } from "@/components/ui/typography/TextInline";

export default function TreeItem({
  node,
}: {
  node: { isDir: boolean; name: string; id: string };
}) {
  return (
    <div>
      {/*{node.isDir  <FileIcon />}*/}
      <TextInline>{node.name}</TextInline>
    </div>
  );
}
