import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getTransfers, getRuntimeInfo, GetRuntimeInfoProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { RuntimeList } from '@/components/Pages/Tools/RuntimeList'
import { AssetLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<{ data: GetRuntimeInfoProps; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const chainProps = await getChainProps(context.req.headers.host)
  let data = await getRuntimeInfo(context.req.headers.host || '', {
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
