import { useAppStore } from "@lavaz/store";
import { listFile, selectFolder } from "@/libs/helpers/folder-action";
import { store } from "@/store/store";

export function useFolder() {
  const [{ root, expanded }, { setExpanded, setRoot }] = useAppStore(
    store.explorer,
    (s) => s,
  );
  const [entries, { resetEntries }] = useAppStore(
    store.fileEntry,
    (s) => s.entries,
  );

  const openFolder = async () => {
    try {
      const pickedFolder = await selectFolder();
      if (!pickedFolder) return;
      resetEntries(pickedFolder, await listFile(pickedFolder));
      setRoot(pickedFolder);
    } catch (err) {
      console.error(err);
    }
  };

  return { root, openFolder };
}
