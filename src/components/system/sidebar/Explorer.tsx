import TreeItem from "./TreeItem";

export default function Explorer() {
  const mock = [{ isDir: true, name: "projects", id: "projects-folder" }];
  return (
    <div>
      {mock.map((item) => (
        <TreeItem key={item.id} node={item} />
      ))}
    </div>
  );
}
