import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getStakingValidator, GetStakingValidatorProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { TAB_ROW } from '@/config/constants'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ValidatorInfo } from '@/components/Pages/Staking/ValidatorInfo'
import { NominatorsListClient } from '@/components/Pages/Staking/NominatorsList'
import { EraListClient } from '@/components/Pages/Staking/EraList'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetStakingValidatorProps
    tab: string
    address: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const address = context.params?.id

  if (typeof address === 'undefined') {
    return {
      notFound: true,
    }
  }
  const data = await getStakingValidator(subdomain, {
    stash: address,
  })
  const chainProps = await getChainProps(subdomain)
  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      data: data.data,
      tab,
      address,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, address }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const validatorInfo = data.info
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Validator#{validatorInfo.stash_account_display?.display || validatorInfo.stash_account_display.address}
        </Text>

        <Boundary>
          <ValidatorInfo validator={validatorInfo} chain={chain} />
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Nominator</Tab>
              <Tab>Era</Tab>
              <Tab>Reward</Tab>
              <Tab>Bonded History</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <NominatorsListClient
                  hostname={host}
                  chain={chain}
                  nominatorBond={validatorInfo.bonded_nominators}
                  validatorBond={validatorInfo.bonded_owner}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    address: validatorInfo.stash_account_display.address,
                  }}
                  viewAllQuery={{
                    address: validatorInfo.stash_account_display.address,
                  }}
                />
              </TabPanel>
              <TabPanel>
                <EraListClient
                  hostname={host}
                  chain={chain}
                  args={{
                    address: address,
                    row: TAB_ROW,
                    page: 0,
                  }}
                  viewAllQuery={{
                    address: validatorInfo.stash_account_display.address,
                  }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
