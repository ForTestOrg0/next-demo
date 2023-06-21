import { Boundary, PageContent, Container, Text, TabsServer, Table, Th, Td, Tr, LinkRouter, Button } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getDemocracyProposals, GetDemocracyProposalsDataProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { ProposalList } from '@/components/Governance'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'

const orderFieldMap = {
  waiting: 'seconded_count',
  historical: '',
}

const statusMap = {
  waiting: 'active',
  historical: 'historical',
}

export const getServerSideProps: GetServerSideProps<
  {
    data: GetDemocracyProposalsDataProps
    type: keyof typeof orderFieldMap
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString() as keyof typeof orderFieldMap
  const type = typeof orderFieldMap[tab] === 'undefined' ? 'waiting' : tab
  const orderField = orderFieldMap[type] || orderFieldMap.waiting
  const status = statusMap[type] || statusMap.waiting
  const data = await getDemocracyProposals(subdomain, {
    row: PAGE_ROW,
    page: 0,
    order_field: orderField,
    status: status,
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      type,
      chain: chainProps,
    },
  }
}

export default function Page({ data, type }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Democracy Proposals
        </Text>
        <Boundary>
          <TabsServer
            className="mb-2"
            items={[
              {
                label: 'Waiting Queue',
                value: '/democracy_proposal?tab=waiting',
                replace: true,
                active: type === 'waiting',
              },
              {
                label: 'Historical Proposal',
                value: '/democracy_proposal?tab=historical',
                replace: true,
                active: type === 'historical',
              },
            ]}
          />
          <ProposalList proposals={data.list} />
        </Boundary>
        <LinkRouter href={`/democracy_proposal_list?tab=${type}`}>
          <Button outline className="mt-4">
            View Other {data.count - PAGE_ROW} {type}{' '}
          </Button>
        </LinkRouter>
      </Container>
    </PageContent>
  )
}
