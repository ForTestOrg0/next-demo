import React from 'react';
import { BareProps } from '@/types/page';
import { Table, Td, Th, Tr, Text } from '@/ui';
import { Identicon } from '@/components/Identicon';
import { ExtrinsicLink } from '@/components/Links';
import { TreasuryTipper } from '@/types/api';

interface Props extends BareProps {
  tippers: TreasuryTipper[];
}

const Component: React.FC<Props> = ({ tippers }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Tippers</Th>
          <Th>Extrinsic Index</Th>
          <Th>Value</Th>
        </Tr>

        {tippers?.map((item, index) => {
          return (
            <Tr key={item.extrinsic_index}>
              <Td>
                <Identicon account={item.rewarder} />
              </Td>
              <Td>
                <ExtrinsicLink extrinsicIndex={item.extrinsic_index} />
              </Td>
              <Td>
                <Text>{item.amount}</Text>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Component;
