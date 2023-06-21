import React, { useMemo } from 'react'
import { Boundary, PageContent, Container, Text, Table, Td, Th, Tr } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getRuntimeInfo } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { Runtime, Module } from '@/types/api'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: Runtime
    tab: string
    moduleId: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const tab = (context.query.tab || '')?.toString()
  const moduleId = context.params?.id

  if (typeof moduleId === 'undefined') {
    return {
      notFound: true,
    }
  }

  const chainProps = await getChainProps(subdomain)
  let data = await getRuntimeInfo(subdomain, {
    spec: chainProps?.metadata.specVersion,
  })

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      data: data.data,
      tab,
      moduleId,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, moduleId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const modules = data.info.metadata
  const moduleInfo = useMemo(() => {
    let result: Module | undefined
    modules?.forEach((item) => {
      if (item.name === moduleId) {
        result = item
        return false
      }
    })
    return result
  }, [modules, moduleId])
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Runtime Modules / {moduleId}
        </Text>

        {moduleInfo && (
          <>
            {moduleInfo.calls && (
              <Boundary className="mt-5">
                <Text block bold className="mb-4 break-all">
                  Call Functions
                </Text>
                <Table className="w-full">
                  <tbody>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Lookup</Th>
                      <Th>Parameters</Th>
                    </Tr>
                    {moduleInfo.calls.map((item) => {
                      return (
                        <Tr key={item.name}>
                          <Td>{item.name}</Td>
                          <Td>{item.lookup}</Td>
                          <Td>{item.args?.length || '-'}</Td>
                        </Tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Boundary>
            )}
            {moduleInfo.events && (
              <Boundary className="mt-5">
                <Text block bold className="mb-4 break-all">
                  Events
                </Text>
                <Table className="w-full">
                  <tbody>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Lookup</Th>
                      <Th>Attributes</Th>
                    </Tr>
                    {moduleInfo.events.map((item) => {
                      return (
                        <Tr key={item.name}>
                          <Td>{item.name}</Td>
                          <Td>{item.lookup}</Td>
                          <Td>{JSON.stringify(item.args_type_name)}</Td>
                        </Tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Boundary>
            )}
            {moduleInfo.storage && (
              <Boundary className="mt-5">
                <Text block bold className="mb-4 break-all">
                  Storage Functions
                </Text>
                <Table className="w-full">
                  <tbody>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Type</Th>
                    </Tr>
                    {moduleInfo.storage.map((item) => {
                      return (
                        <Tr key={item.name}>
                          <Td>{item.name}</Td>
                          <Td>{JSON.stringify(item.type)}</Td>
                        </Tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Boundary>
            )}
            {moduleInfo.constants && (
              <Boundary className="mt-5">
                <Text block bold className="mb-4 break-all">
                  Constants
                </Text>
                <Table className="w-full">
                  <tbody>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Type</Th>
                      <Th>Value</Th>
                    </Tr>
                    {moduleInfo.constants.map((item) => {
                      return (
                        <Tr key={item.name}>
                          <Td>{item.name}</Td>
                          <Td>{item.type}</Td>
                          <Td>{item.constants_value}</Td>
                        </Tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Boundary>
            )}
            {moduleInfo.errors && (
              <Boundary className="mt-5">
                <Text block bold className="mb-4 break-all">
                  Error
                </Text>
                <Table className="w-full">
                  <tbody>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Docs</Th>
                    </Tr>
                    {moduleInfo.errors.map((item) => {
                      return (
                        <Tr key={item.name}>
                          <Td>{item.name}</Td>
                          <Td>{item.doc}</Td>
                        </Tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Boundary>
            )}
          </>
        )}
      </Container>
    </PageContent>
  )
}
