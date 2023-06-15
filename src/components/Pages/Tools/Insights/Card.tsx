import React from 'react'
import clsx from 'clsx'
import { BareProps } from '@/types/page'
import { Flex, Text } from '@/ui'

export const Card: React.FC<BareProps> = ({ children, className }) => {
  return <div className={clsx('bg-sub-bg rounded p-3', className)}>{children}</div>
}

interface CardXProps extends BareProps {
  icon: React.ReactNode
  title: string
  value: React.ReactNode
}

export const CardX: React.FC<CardXProps> = ({ children, className, icon, title, value }) => {
  return (
    <Card className={clsx('flex', className)}>
      <Flex className="bg-sub-network rounded-full w-8 h-8 justify-center items-center">{icon}</Flex>
      <Flex className="flex-col ml-2">
        <Text className="text-sub-black">{title}</Text>
        <Text className="!text-base font-bold">{value}</Text>
      </Flex>
    </Card>
  )
}

export const CardY: React.FC<CardXProps> = ({ children, className, icon, title, value }) => {
  return (
    <Card className={clsx('flex flex-col justify-center items-center', className)}>
      {icon}
      <Flex className="flex-col mt-2 justify-center items-center">
        <Text>{title}</Text>
        <Text className="!text-base font-bold">{value}</Text>
      </Flex>
    </Card>
  )
}
