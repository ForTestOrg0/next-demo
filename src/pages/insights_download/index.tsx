import { PageContent, Container, Text } from '@/ui'
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { DownloadScreenshot } from '@/components/Pages/Tools/Insights'
import { getSubdomainFromHeaders } from '@/utils/url'
import { TweetButton } from '@/components/ShareTwitter'

export const getServerSideProps: GetServerSideProps<{ host: string; start: string; end: string } & BareServerSideProps> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const start = context.query.start as string
  const end = context.query.end as string
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
      start,
      end,
    },
  }
}

export default function Page({ host, chain, start, end }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text>Generate Stg</Text>
        <DownloadScreenshot
          url={`https://develop.subscan-ui-next-bbg.pages.dev/insights?start=${start}&end=${end}`}
          width={1380}
          height={950}
          timeout={10}
          host={host}
        />
        <Text>Generate PR Branch</Text>
        <DownloadScreenshot
          url={`https://preview.subscan-ui-next-bbg.pages.dev/insights?start=${start}&end=${end}`}
          width={1380}
          height={950}
          timeout={10}
          host={host}
        />
        <TweetButton
          className="mr-4"
          title={'subscan insight'}
          tags={['subscan', 'polkadot']}
          url={`https://develop.subscan-ui-next-bbg.pages.dev/insights?start=${start}&end=${end}`}
        />
      </Container>
    </PageContent>
  )
}
