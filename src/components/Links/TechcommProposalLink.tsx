import React from 'react';
import { BareProps } from '@/types/page';
import { LinkRouter } from '@/ui';

interface Props extends BareProps {
  index: string | number;
}

const TechcommProposalLink: React.FC<Props> = ({ children, index, className }) => (
  <LinkRouter className={className} href={`/tech/${index}`}>{children ?? index}</LinkRouter>
);

export default TechcommProposalLink;
