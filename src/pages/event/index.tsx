import { Boundary, PageContent, Container, Text, Flex, Pagination } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getEvents, GetEventsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
import { BlockEvents } from '@/components/Pages/Blockchain/BlockEvents';

export const getServerSideProps: GetServerSideProps<
  { data: GetEventsProps; page: number } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getEvents(context.req.headers.host || '', {
    row: PAGE_ROW,
    page: page - 1,
  });
  const chainProps = await getChainProps(context.req.headers.host);

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data,
      page,
      chain: chainProps,
    },
  };
};

export default function Page({
  data,
  chain,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Event History
        </Text>
        <Boundary>
          <BlockEvents events={data.events} disableColumn={{ type: true }} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination
            total={data.count}
            pageSize={PAGE_ROW}
            current={page}
            urlRender={(_page) => `/event?page=${_page}`}
          />
        </Flex>
      </Container>
    </PageContent>
  );
}
