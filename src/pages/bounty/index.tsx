import { Boundary, PageContent, Container, Text, TabsServer, LinkRouter, Button } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getBountiesProposals, GetBountiesProposalsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { BountiesList } from '@/components/Governance';

const statusMap = {
  waiting: 'active',
  historical: 'historical',
}

export const getServerSideProps: GetServerSideProps<{ data: GetBountiesProposalsProps, type: keyof typeof statusMap }> = async (context) => {
  const tab = (context.query.tab || '')?.toString() as (keyof typeof statusMap);
  const type = typeof statusMap[tab] === 'undefined' ? 'waiting' : tab;
  const status = statusMap[type] || statusMap.waiting;
  const data = await getBountiesProposals(context.req.headers.host || '', { "row": PAGE_ROW, "page": 0, "status": status });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      type,
    },
  }
}

export default function Page({ data, type }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2 break-all'>Bounties</Text>
        <Boundary>
          <TabsServer className='mb-4' items={
            [
              {
                label: 'In Progress',
                value: '/bounty?tab=waiting',
                replace: true,
                active: type === 'waiting'
              },
              {
                label: 'Completed',
                value: '/bounty?tab=historical',
                replace: true,
                active: type === 'historical'
              }
            ]
          } />
          <BountiesList proposals={data.list} />
        </Boundary>
        <LinkRouter href={`/bounty?tab=${type}`}>
          <Button outline className='mt-4'>View Other {data.count - PAGE_ROW} {type} </Button>
        </LinkRouter>
      </Container>
    </PageContent >
  );
}
