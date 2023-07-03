import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getReferendaVotes, GetReferendaVotesProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ReferendaV2Votes } from '@/components/Governance/ReferendaV2Votes'

export const getServerSideProps: GetServerSideProps<
  {
    data: GetReferendaVotesProps
    page: number
    row: number
    referendumIndex: number
  } & BareServerSideProps,
  {
    id: string
  }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const referendumIndex = parseInt(context.params?.id.toString() || '')
  const chainProps = await getChainProps(subdomain)

  if (Number.isNaN(referendumIndex)) {
    return {
      notFound: true,
    }
  }

  const data = await getReferendaVotes(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
    referendum_index: referendumIndex,
  })

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
      row: PAGE_ROW,
      referendumIndex,
      chain: chainProps,
    },
  }
}

export default function Layout({ data, page, referendumIndex, chain }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          For Democracy Referenda (V2) #{referendumIndex}
        </Text>
        <Boundary>
          <ReferendaV2Votes chain={chain} votes={data.list} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) => `/referenda_v2_vote/${referendumIndex}?page=${_page}`}
          />
        </Flex>
      </Container>
    </PageContent>
  )
}
