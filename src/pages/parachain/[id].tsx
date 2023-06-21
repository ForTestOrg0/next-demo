import { Boundary, PageContent, Container, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { PLOTimelineClient } from '@/components/Pages/Parachain/PLOTimeline'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    tab: string
    paraId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const paraId = context.params?.id

  if (typeof paraId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const chainProps = await getChainProps(subdomain)

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      tab,
      paraId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, chain, paraId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Parachain#{paraId}
        </Text>

        <Boundary>
          <PLOTimelineClient
            host={host}
            args={{
              para_id: parseInt(paraId),
              order: 'asc',
            }}
          />
        </Boundary>
      </Container>
    </PageContent>
  )
}
