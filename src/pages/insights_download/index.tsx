import { PageContent, Container, Text } from '@/ui'
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { DownloadScreenshot } from '@/components/Pages/Tools/Insights'

export const getServerSideProps: GetServerSideProps<{ host: string; start: string; end: string } & BareServerSideProps> = async (context) => {
  const host = context.req.headers.host || ''
  const start = context.query.start as string
  const end = context.query.end as string
  const chainProps = await getChainProps(context.req.headers.host)

  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      chain: chainProps,
      start,
      end,
    },
  }
}

export default function Page({ host, chain, start, end }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1 z-10">
        <Text>Generate Stg</Text>
        <DownloadScreenshot
          url={`https://develop.subscan-ui-next-bbg.pages.dev/insights?start=${start}&end=${end}`}
          width={1380}
          height={950}
          timeout={10}
          host={host}
        />
        <Text>Generate Testnet</Text>
        <DownloadScreenshot
          url={`https://preview.subscan-ui-next-bbg.pages.dev/insights?start=${start}&end=${end}`}
          width={1380}
          height={950}
          timeout={10}
          host={host}
        />
      </Container>
    </PageContent>
  )
}
