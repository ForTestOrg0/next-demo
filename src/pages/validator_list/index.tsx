import { PageContent, Container, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ValidatorListClientWithPagination, WaitingListClientWithPagination } from '@/components/Pages/Staking/ValidatorList'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    page: number
    status: string
  } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const status = (context.query.status as string) || ''
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const chainProps = await getChainProps(subdomain)
  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      chain: chainProps,
      hostname: subdomain,
      page,
      status,
    },
  }
}

export default function Layout({ chain, host, page, status }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Validator
        </Text>

        {(status === '' || status === 'validator') && (
          <ValidatorListClientWithPagination
            hostname={host}
            args={{
              order: 'desc',
              order_field: 'bonded_total',
            }}
            chain={chain}
            viewAllQuery={{
              status: 'validator',
            }}
            page={page}
            row={PAGE_ROW}
          />
        )}
        {status === 'waiting' && (
          <WaitingListClientWithPagination
            hostname={host}
            args={{
              order: 'desc',
              order_field: 'bonded_owner',
            }}
            chain={chain}
            viewAllQuery={{
              status: 'validator',
            }}
            page={page}
            row={PAGE_ROW}
          />
        )}
      </Container>
    </PageContent>
  )
}
