import { Boundary, PageContent, Container, Text, Flex, Pagination } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getFellowshipReferendums, GetReferendaReferendumsProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ReferendaV2List } from '@/components/Governance/ReferendaV2List'

export const getServerSideProps: GetServerSideProps<
  {
    referendums: GetReferendaReferendumsProps
    origin: string
    page: number
    status: string
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const origin = (context.query.origin || 'all')?.toString()
  const status = (context.query.status || '')?.toString() as 'active' | 'completed'
  const page = parseInt(context.query.page as string) || 1
  const referendums = await getFellowshipReferendums(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
    origin,
    status: status,
  })

  const chainProps = await getChainProps(subdomain)

  if (!referendums || referendums.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      referendums: referendums.data,
      chain: chainProps,
      status,
      page,
      origin,
    },
  }
}

export default function Layout({ referendums, origin, page, status }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Fellowship Referenda
        </Text>
        <Boundary>
          <ReferendaV2List referendums={referendums.list} type="fellowship" />
          <Flex className="mt-5 flex-row-reverse">
            <Pagination
              total={referendums.count}
              pageSize={PAGE_ROW}
              current={page}
              urlRender={(_page) => `/fellowship_list?status=${status}&origin=${origin}&page=${_page}`}
            />
          </Flex>
        </Boundary>
      </Container>
    </PageContent>
  )
}
