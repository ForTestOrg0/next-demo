import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { CrowdloanListClient } from '@/components/Pages/Parachain/CrowdloanList'
import { crowdloanListStatusMap } from '@/components/Pages/Parachain/CrowdloanList/CrowdloanList'

export const getServerSideProps: GetServerSideProps<{ page: number; host: string } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const host = context.req.headers.host || ''
  const chainProps = await getChainProps(host)

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
      chain: chainProps,
      host,
    },
  }
}

export default function Page({ chain, page, host }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Crowdloan List
        </Text>
        <Boundary>
          <TabGroup>
            <TabList>
              <Tab>Active</Tab>
              <Tab>Completed</Tab>
              <Tab>Retired</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CrowdloanListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...crowdloanListStatusMap.active.args,
                  }}
                  // disableColumn={crowdloanListStatusMap.active.disableColumn}
                  viewAllQuery={{ status: 'parachain' }}
                />
              </TabPanel>
              <TabPanel>
                <CrowdloanListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...crowdloanListStatusMap.completed.args,
                  }}
                  // disableColumn={crowdloanListStatusMap.completed.disableColumn}
                  viewAllQuery={{ status: 'parathread' }}
                />
              </TabPanel>
              <TabPanel>
                <CrowdloanListClient
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    ...crowdloanListStatusMap.retired.args,
                  }}
                  disableColumn={crowdloanListStatusMap.retired.disableColumn}
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
