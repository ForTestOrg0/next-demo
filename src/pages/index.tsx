import { encodeAddress } from '@polkadot/util-crypto'

import {
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  TabList,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/ui'
import { useDarkMode } from 'usehooks-ts'

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { getChainProps } from '@/utils/chain'
import { useEffect } from 'react'
type Props = {}
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
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

const Dropdown: React.FC = () => {
  return (
    <Menu>
      <MenuButton>Options</MenuButton>
      <MenuItems>
        {links.map((link) => (
          <MenuItem key={link.href}>{link.label}</MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

function Uncontrolled() {
  return (
    <div className="App">
      <h1>Floating UI — Tooltip</h1>
      <Tooltip>
        <TooltipTrigger>
          <button>My trigger</button>
        </TooltipTrigger>
        <TooltipContent className="Tooltip">My tooltiptooltiptooltiptooltiptooltiptooltiptooltiptooltiptooltiptooltip</TooltipContent>
      </Tooltip>
    </div>
  )
}

export function Dark() {
  const { isDarkMode, toggle, enable, disable } = useDarkMode()

  return (
    <div>
      <p suppressHydrationWarning>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  )
}

function UncontrolledPopver() {
  return (
    <div className="App">
      <h1>Floating UI — Popover</h1>
      <Popover>
        <PopoverTrigger>My trigger</PopoverTrigger>
        <PopoverContent>
          event - compiled client and server successfully in 621 ms (1861 modules) wait - compiling... event - compiled client and server successfully
          in 464 ms (1861 modules) wait - compiling... event - compiled client and server successfully in 470 ms (1861 modules) wait - compiling...
          event - compiled client and server successfully in 278 ms (1861 modules)
        </PopoverContent>
      </Popover>
    </div>
  )
}
// export const getStaticProps: GetStaticProps<Props> = async ({
//   locale,
// }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? 'en', [
//       'common',
//     ])),
//   },
// })

export const getServerSideProps: GetServerSideProps<BareServerSideProps> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const chainProps = await getChainProps(subdomain)

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      chain: chainProps,
    },
  }
}

export default function Page() {
  useEffect(() => {
    encodeAddress('EGP7XztdTosm1EmaATZVMjSWujGEj9nNidhjqA2zZtttkFg')
  }, [])
  return (
    <div>
      Home
      <Uncontrolled />
      <UncontrolledPopver />
      <Dropdown />
      <a>asdfasdf</a>
      <TabDemo />
      <Dark />
      <p></p>
    </div>
  )
}
