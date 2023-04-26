import React from 'react';
import { BareProps } from '@/types/page';
import { LinkRouter } from '@/ui';

interface Props extends BareProps {
  blockNumber: string | number;
  text?: string;
}

const BlockLink: React.FC<Props> = ({ text, blockNumber, className }) => (
  <LinkRouter className={className} href={`/block/${blockNumber}`}>{text ?? blockNumber}</LinkRouter>
);

export default BlockLink;
