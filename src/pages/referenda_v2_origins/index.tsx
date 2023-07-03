import { Boundary, PageContent, Container, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getReferendaTracks, GetReferendaTracksProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ReferendaTracksList } from '@/components/Governance/ReferendaTracksList'

export const getServerSideProps: GetServerSideProps<
  {
    tracks: GetReferendaTracksProps
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tracks = await getReferendaTracks(subdomain)

  const chainProps = await getChainProps(subdomain)

  if (!tracks || tracks.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tracks: tracks.data,
      chain: chainProps,
    },
  }
}

export default function Layout({ tracks, chain }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const tracksWithId = Object.keys(tracks).map((id) => {
    return {
      id,
      ...tracks[id],
    }
  })
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Referenda Origins ({Object.keys(tracks).length})
        </Text>
        <Boundary>
          <ReferendaTracksList tracks={tracksWithId} chain={chain} />
        </Boundary>
      </Container>
    </PageContent>
  )
}
