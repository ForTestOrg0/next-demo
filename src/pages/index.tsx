import { Tab, TabGroup, TabPanels, TabPanel, TabList, Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeading, PopoverTrigger, Tooltip, TooltipContent, TooltipTrigger, } from "@/ui";


const TabDemo: React.FC = () => {
  return (
    <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 1</Tab>
        <Tab>Tab 1</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  )
}

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Dropdown: React.FC = () => {
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

function Uncontrolled() {
  return (
    <div className="App">
      <h1>Floating UI — Tooltip</h1>
      <Tooltip>
        <TooltipTrigger><button>My trigger</button></TooltipTrigger>
        <TooltipContent className="Tooltip">My tooltiptooltiptooltiptooltiptooltiptooltiptooltiptooltiptooltiptooltip</TooltipContent>
      </Tooltip>
    </div>
  );
}

function UncontrolledPopver() {
  return (
    <div className="App">
      <h1>Floating UI — Popover</h1>
      <Popover>
        <PopoverTrigger>My trigger</PopoverTrigger>
        <PopoverContent>
          123
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Page() {

  return (
    <div>
      Home
      <Uncontrolled />
      <UncontrolledPopver />
      <Dropdown /><a>asdfasdf</a>
      <TabDemo/>
    </div>
  );
}
