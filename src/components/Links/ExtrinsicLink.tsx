import React from 'react';
import { BareProps } from '@/types/page';
import { LinkRouter } from '@/ui';

interface Props extends BareProps {
  extrinsicIndex: string;
  text?: string;
}

const ExtrinsicLink: React.FC<Props> = ({ text, extrinsicIndex, className }) => (
  <LinkRouter className={className} href={`/extrinsic/${extrinsicIndex}`}>{text ?? extrinsicIndex}</LinkRouter>
);

export default ExtrinsicLink;
