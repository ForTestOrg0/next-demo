import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unwrap } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { GetParachainMetaProps, getParachainFunds, getParachainMeta } from '@/utils/api/parachain'
import { ParachainFund } from '@/types/api'
import { CrowdloanInfo } from '@/components/Pages/Parachain/CrowdloanInfo'
import { ContributeListClient } from '@/components/Pages/Parachain/ContributeList'
import { TAB_ROW } from '@/config/constants'
import { CrowdloanTimelineListClient } from '@/components/Pages/Parachain/CrowdloanTimelineList'
import { ParachainDataClient } from '@/components/Pages/Parachain/ParachainData'
import { ProjectInfo } from '@/components/Pages/Parachain/ProjectInfo'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  { parachainMeta: GetParachainMetaProps; fundId: string; host: string; fund: ParachainFund | undefined } & BareServerSideProps
> = async (context) => {
  const fundId = context.query.id as string
  const subdomain = getSubdomainFromHeaders(context.req.headers)

  const data = await getParachainMeta(subdomain)
  const funds = await getParachainFunds(subdomain, {
    row: 1,
    page: 0,
    fund_id: fundId,
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !unwrap(funds) || unwrap(funds)?.funds.length === 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      parachainMeta: data.data,
      fundId,
      host: subdomain,
      chain: chainProps,
      fund: unwrap(funds)?.funds[0],
    },
  }
}

export default function Page({ host, parachainMeta, chain, fund, fundId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Crowdloan#{fundId}
        </Text>
        {fund && (
          <Boundary>
            <CrowdloanInfo metaInfo={parachainMeta} chain={chain} fund={fund} />
          </Boundary>
        )}
        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Extrinsics</Tab>
              <Tab>Timeline</Tab>
              <Tab>Chain Data</Tab>
              <Tab>Project Info</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ContributeListClient
                  host={host}
                  args={{
                    fund_id: fund?.fund_id,
                    row: TAB_ROW,
                    page: 0,
                  }}
                  chain={chain}
                />
              </TabPanel>
              <TabPanel>
                <CrowdloanTimelineListClient
                  host={host}
                  args={{
                    fund_id: fund?.fund_id,
                  }}
                  chain={chain}
                />
              </TabPanel>
              <TabPanel>
                <ParachainDataClient
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    para_id: fund?.para_id,
                  }}
                  host={host}
                />
              </TabPanel>
              <TabPanel>
                {fund?.para_id && <ProjectInfo relaychainName={chain.chainConf.id as RelaychainName} parachainId={fund?.para_id} />}
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
