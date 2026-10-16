import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";

interface FileEntry {
  name: string;
  path: string;
  is_dir: boolean;
}

const listFile = async (path: string) =>
  invoke<FileEntry[]>("list_dir", { path });

async function selectFolder(): Promise<string | null> {
  const folder = await open({ multiple: false, directory: true });
  return folder;
}

export { type FileEntry, listFile, selectFolder };
