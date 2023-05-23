import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { GetTreasuryTipProps, getTreasuryTip } from '@/utils/api';
import { TreasuryTipInfo, TreasuryTippersClient } from '@/components/Governance';
import { getChainProps } from '@/utils/chain';
import { BareServerSideProps } from '@/types/page';
import METADATA from "@/config/metadata";

export const getServerSideProps: GetServerSideProps<{ host: string; data: GetTreasuryTipProps, tab: string, tipHash: string } & BareServerSideProps, { id: string }> = async (context) => {
  const host = context.req.headers.host || '';
  const tab = (context.query.tab || '')?.toString();
  const tipHash = context.params?.id;
  const chainProps = await getChainProps(context.req.headers.host);
  
  if (typeof tipHash === 'undefined' || !chainProps) {
    return {
      notFound: true,
    }
  }
  const data = await getTreasuryTip(host, { hash: tipHash });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      data: data.data,
      tab,
      tipHash,
      chain: chainProps,
      metadata: {
        ...METADATA['tip'],
        title: METADATA['tip']['title'] + tipHash,
      }
    },
  }
}


export default function Page({ host, data, tipHash }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const proposal = data.info;

  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-4 break-all'>Treasury Tips#{tipHash}</Text>

        <Boundary>
          <TreasuryTipInfo proposal={proposal} />
        </Boundary>
        <Boundary className='mt-5'>
          <TabGroup>
            <TabList>
              <Tab>Tipper</Tab>
              <Tab>Post</Tab>
              <Tab>Comments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TreasuryTippersClient host={host} hash={tipHash} />
              </TabPanel>
              <TabPanel>comments</TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  );
}
