import {
  Menu,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/Menubar";

export default function MenuTitlebar() {
  return (
    <Menubar>
      <Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Tạo mới</span>
          </MenubarItem>
          <MenubarItem>
            <span>Cửa sổ mới</span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <span>Mở tệp</span>
          </MenubarItem>
          <MenubarItem>
            <span>Mở thư mục</span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <span>Lưu</span>
          </MenubarItem>
          <MenubarItem>
            <span>Lưu mới</span>
          </MenubarItem>
        </MenubarContent>
      </Menu>
    </Menubar>
  );
}
