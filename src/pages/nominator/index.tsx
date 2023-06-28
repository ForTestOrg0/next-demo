import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { GetStakingNominatorsProps, GetStakingValidatorProps, getStakingNominators, getStakingValidator } from '@/utils/api'
import { NominatorsList } from '@/components/Pages/Staking/NominatorsList'

export const getServerSideProps: GetServerSideProps<
  { data: GetStakingNominatorsProps; validatorData: GetStakingValidatorProps; page: number; address: string } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const address = (context.query.address as string) || ''

  if (!address) {
    return {
      notFound: true,
    }
  }

  const validatorData = await getStakingValidator(subdomain, {
    stash: address,
  })

  const data = await getStakingNominators(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
    address: address,
  })

  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps || !validatorData || validatorData.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      validatorData: validatorData.data,
      page,
      chain: chainProps,
      address,
    },
  }
}

export default function Page({ data, validatorData, chain, page, address }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Nominator for {address}
        </Text>
        <Boundary>
          <NominatorsList
            nominators={data.list}
            nominatorBond={validatorData.info.bonded_nominators}
            validatorBond={validatorData.info.bonded_owner}
            chain={chain}
          />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/nominator?page=${_page}&address=${address}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
