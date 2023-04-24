import type { Meta, StoryObj } from "@storybook/react";

import { Menu, MenuButton, MenuItems, MenuItem } from "./";
import { BareProps } from "@/types/page";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Dropdown: React.FC<BareProps> = () => {
  return (
    <Menu>
      <MenuButton>Options</MenuButton>
      <MenuItems>
        {links.map((link) => (
          <MenuItem key={link.href}>
            {link.label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

const meta: Meta<typeof Menu> = {
  title: "UI/Menu",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {},
};
