import React from 'react'
import { BareProps } from '@/types/page'
import { LinkRouter } from '@/ui'

interface Props extends BareProps {
  index: string | number
}

const CouncilProposalLink: React.FC<Props> = ({ children, index, className }) => (
  <LinkRouter className={className} href={`/council/${index}`}>
    {children ?? index}
  </LinkRouter>
)

export default CouncilProposalLink
