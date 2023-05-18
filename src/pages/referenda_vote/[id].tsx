import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getDemocracySeconded, getDemocracyVotes, GetDemocracyVotesProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import ProposalSeconds from '@/components/Governance/ProposalSeconds/ProposalSeconds';
import { ReferendaVotes } from '@/components/Governance';

export const getServerSideProps: GetServerSideProps<{
  data: GetDemocracyVotesProps;
  page: number;
  row: number;
  referendumIndex: number;
}, {
  id: string;
}> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const referendumIndex = parseInt(context.params?.id.toString() || '');

  if (Number.isNaN(referendumIndex)) {
    return {
      notFound: true,
    }
  }

  const data = await getDemocracyVotes(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1, referendum_index: referendumIndex });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
      row: PAGE_ROW,
      referendumIndex
    },
  }
}

export default function Layout({ data, page, referendumIndex }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2 break-all'>For Democracy Referenda#{referendumIndex} ({data.count})</Text>
        <Boundary>
          <ReferendaVotes votes={data.list} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/referenda_vote/${referendumIndex}?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}
