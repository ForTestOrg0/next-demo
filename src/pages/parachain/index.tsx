import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { ParachainListClient } from '@/components/Pages/Parachain/ParachainList'
import { parachainListStatusMap } from '@/components/Pages/Parachain/ParachainList/ParachainList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<{ host: string } & BareServerSideProps> = async (context) => {
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
      host: subdomain,
    },
  }
}

export default function Page({ chain, host }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Parachain
        </Text>
        <Boundary>
          <TabGroup>
            <TabList>
              <Tab>Parachain</Tab>
              <Tab>Parathread</Tab>
              <Tab>Registered</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ParachainListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...parachainListStatusMap.parachain.args,
                  }}
                  disableColumn={parachainListStatusMap.parachain.disableColumn}
                  viewAllQuery={{ status: 'parachain' }}
                />
              </TabPanel>
              <TabPanel>
                <ParachainListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...parachainListStatusMap.parathread.args,
                  }}
                  disableColumn={parachainListStatusMap.parathread.disableColumn}
                  viewAllQuery={{ status: 'parathread' }}
                />
              </TabPanel>
              <TabPanel>
                <ParachainListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...parachainListStatusMap.registered.args,
                  }}
                  disableColumn={parachainListStatusMap.registered.disableColumn}
                  viewAllQuery={{ status: 'registered' }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
