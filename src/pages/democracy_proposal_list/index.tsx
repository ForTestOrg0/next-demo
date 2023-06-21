import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui'
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
    page: number
  } & BareServerSideProps
> = async (context) => {
  const tab = (context.query.status || '')?.toString() as keyof typeof orderFieldMap
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const type = typeof orderFieldMap[tab] === 'undefined' ? 'waiting' : tab
  const orderField = typeof orderFieldMap[type] === 'undefined' ? orderFieldMap.waiting : orderFieldMap[type]
  const status = typeof statusMap[type] === 'undefined' ? statusMap.waiting : statusMap[type]
  const data = await getDemocracyProposals(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
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
      page: page,
      chain: chainProps,
    },
  }
}

export default function Layout({ data, type, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Democracy Proposals - {type} ({data.count})
        </Text>
        <Boundary>
          <ProposalList proposals={data.list} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) => `/democracy_proposal_list?status=${type}&page=${_page}`}
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
