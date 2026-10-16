import { createBox } from "@lavaz/store";
import type { FileEntry } from "@/libs/helpers/folder-action";

interface FileEntryState {
  entries: Record<string, FileEntry[]>;
}

const initialState = { entries: {} } satisfies FileEntryState as FileEntryState;

export const fileEntryBox = createBox(initialState, (set) => ({
  setEntries: (path: string, children: FileEntry[]) =>
    set((prev) => ({
      ...prev,
      entries: { ...prev.entries, [path]: children },
    })),
  resetEntries: (path: string, children: FileEntry[]) =>
    set((prev) => ({ ...prev, entries: { [path]: children } })),
})).create();
