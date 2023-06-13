import React from 'react'
import { Token, BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { RuntimeLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { Module } from '@/types/api'
import { Identicon } from '@/components/Pages/XCM/ParachainIdenticon'
import { Balance } from '@/components/Balance'
import { formatHash } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  modules: Module[]
  token?: Token
}

const Page: React.FC<Props> = ({ modules, token, chain }) => {
  const orderModules = modules.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Name</Th>
          <Th>Call Functions</Th>
          <Th>Events</Th>
          <Th>Storage Functions</Th>
          <Th>Constants</Th>
          <Th>Error Types</Th>
        </Tr>
        {orderModules.map((item) => {
          return (
            <Tr key={item.name}>
              <Td>
                <RuntimeLink module={item.name} query={{ version: '' + chain?.metadata.specVersion }}></RuntimeLink>
              </Td>
              <Td>{item.calls?.length || 0}</Td>
              <Td>{item.events?.length || 0}</Td>
              <Td>{item.storage?.length || 0}</Td>
              <Td>{item.constants?.length || 0}</Td>
              <Td>{item.errors?.length || 0}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
