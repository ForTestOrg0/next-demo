import { Boundary, PageContent, Container, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getRuntimeInfo, GetRuntimeInfoProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { RuntimeList } from '@/components/Pages/Tools/RuntimeList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<{ data: GetRuntimeInfoProps; page: number } & BareServerSideProps> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  const chainProps = await getChainProps(subdomain)
  let data = await getRuntimeInfo(subdomain, {
    spec: chainProps?.metadata.specVersion,
  })
  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Runtime Modules
        </Text>
        <Boundary>
          <RuntimeList modules={data.info.metadata} chain={chain} token={chain.nativeTokenConf} />
        </Boundary>
      </Container>
    </PageContent>
  )
}
