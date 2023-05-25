import { Boundary, PageContent, Container, Text, Flex, Pagination } from '@/ui'
import React, { useRef } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getLogs, GetLogsProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BlockLogs } from '@/components/Pages/Blockchain/BlockLogs'
import { BareServerSideProps, DownloadRef } from '@/types/page'
import { CsvDownload } from '@/components/CsvDownload'

export const getServerSideProps: GetServerSideProps<{ data: GetLogsProps; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const data = await getLogs(context.req.headers.host || '', {
    row: PAGE_ROW,
    page: page - 1,
  })
  const chainProps = await getChainProps(context.req.headers.host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ data, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const childRef = useRef<DownloadRef>(null)
  const handleDownloadClick = () => {
    const tableData: any[][] = [['Log Index', 'Block', 'Type', 'Engine']]
    data.logs.forEach((item) => {
      let arr = [item.log_index, item.block_num, item.log_type, item.engine]
      tableData.push(arr)
    })
    let tableName = `log-${data.logs[data.logs.length - 1].block_num}-${data.logs[0].block_num}.csv`
    childRef.current?.downloadCsv(tableData, tableName)
  }
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Log List
        </Text>
        <Boundary>
          <BlockLogs logs={data.logs} />
        </Boundary>
        <Flex className="mt-5 flex justify-between">
          <CsvDownload
            ref={childRef}
            onClick={() => {
              handleDownloadClick()
            }}
          />
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/log?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
