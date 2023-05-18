import React from 'react';
import { BareProps } from '@/types/page';
import { LinkRouter, Text } from '@/ui';
import { objectToSearchParams } from '@/utils/url';

interface Props extends BareProps {
  extrinsicIndex?: string;
  query?: Record<string, string>;
  empty?: boolean;
}

const ExtrinsicLink: React.FC<Props> = ({ empty, query, children, extrinsicIndex = '', className }) => {
  if (empty) {
    return <Text>-</Text>;
  }
  const searchParams = objectToSearchParams(query)
  return (<LinkRouter className="text-sm whitespace-nowrap" href={`/extrinsic/${extrinsicIndex}${searchParams ? `?${searchParams}` : ''}`}>{children ?? extrinsicIndex}</LinkRouter>);
};

export default ExtrinsicLink;
