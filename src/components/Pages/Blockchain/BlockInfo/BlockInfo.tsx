import React from 'react';
import { BareProps, BareServerSideProps } from '@/types/page';
import { TableCol, TdCol, TrCol, Text } from '@/ui';
import { BlockLink, RuntimeLink } from '@/components/Links';
import { BlockDetail } from '@/types/api';
import { Identicon } from '@/components/Identicon';
import { Time, TimeFromNow } from '@/components/Time';
import { BlockStatus } from '../BlockList';

interface Props extends BareProps, BareServerSideProps {
  block: BlockDetail;
}

const Page: React.FC<Props> = ({ block, chain }) => {
  return (
    <TableCol className="w-full">
      <tbody>
        {block?.block_timestamp ? (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">Timestamp</TdCol>
            <TdCol>
              <Time date={block?.block_timestamp} />
            </TdCol>
          </TrCol>
        ) : null}
        {block?.block_timestamp ? (
          <TrCol>
            <TdCol className="font-semibold whitespace-nowrap">
              Block Time
            </TdCol>
            <TdCol>
              <TimeFromNow date={block?.block_timestamp} />
            </TdCol>
          </TrCol>
        ) : null}
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Status</TdCol>
          <TdCol>
            <BlockStatus
              finalized={block?.finalized}
              text={block?.finalized ? 'Finalized' : 'Unfinalized'}
            />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Hash</TdCol>
          <TdCol>
            <Text>{block?.hash}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Parent Hash</TdCol>
          <TdCol>
            {(block?.block_num || 0) - 1 > -1 ? (
              <BlockLink blockNumber={block?.block_num - 1}>
                {block?.parent_hash}
              </BlockLink>
            ) : (
              <Text>{block?.parent_hash}</Text>
            )}
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">State Root</TdCol>
          <TdCol>
            <Text>{block?.state_root}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">
            Extrinsics Root
          </TdCol>
          <TdCol>
            <Text>{block?.extrinsics_root}</Text>
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">Validator</TdCol>
          <TdCol>
            <Identicon account={block?.account_display} />
          </TdCol>
        </TrCol>
        <TrCol>
          <TdCol className="font-semibold whitespace-nowrap">
            Spec Version
          </TdCol>
          <TdCol>
            <RuntimeLink
              module=""
              query={{ version: block?.spec_version.toString() }}
            >
              {block?.spec_version}
            </RuntimeLink>
          </TdCol>
        </TrCol>
      </tbody>
    </TableCol>
  );
};

export default Page;
