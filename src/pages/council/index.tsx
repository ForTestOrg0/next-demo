import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getCouncilProposals, GetCouncilProposalsProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { CouncilMotionList } from '@/components/Governance'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
// import { useTranslation } from 'next-i18next'

export const getServerSideProps: GetServerSideProps<
  {
    data: GetCouncilProposalsProps
    page: number
  } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const data = await getCouncilProposals(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
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
      page: page,
      chain: chainProps,
    },
  }
}

export default function Layout({ data, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const { t } = useTranslation('common')
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Council Motions
        </Text>
        <Boundary>
          <CouncilMotionList proposals={data.list} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/council?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
