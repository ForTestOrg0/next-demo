import { FC, ReactNode } from 'react'
import Image from 'next/image'
import noData from './assets/no-data.png'

export interface EmptyProps {
  description?: ReactNode
  className?: string
}

const Empty: FC<EmptyProps> = ({ description, className }) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <Image alt="no data" src={noData} />
      {description}
    </div>
  )
}

export default Empty
