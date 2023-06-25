import React, { useState, useMemo } from 'react'
import { Boundary, PageContent, Container, Flex, Text, Input, Menu, MenuButton, MenuItem, MenuItems, Button, Link, DatePicker } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getChainProps } from '@/utils/chain'
import { parseTimeToUtc } from '@/utils/time'
import { trimSpecialChar } from '@/utils/formatText'
import { BareServerSideProps } from '@/types/page'
import { ArrowDownFillingIcon, FromToIcon } from '@/ui/Svg'
import { getSubdomainFromHeaders } from '@/utils/url'
import { getPriceConverter, getPriceHistory, GetPriceConverterProps, GetPriceHistoryProps } from '@/utils/api/price'
import dayjs from 'dayjs'

export type OutputType = {
  name: string
  isPublicKey: boolean
  value: string
}

export const getServerSideProps: GetServerSideProps<{ host: string; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const chainProps = await getChainProps(subdomain)
  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ host, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const nativeToken = chain.nativeToken.symbol
  const [amount, setAmount] = useState('')
  const [block, setBlock] = useState('')
  const [date, setDate] = useState<Date | null>()
  const [dimensionText, setDimensionText] = useState('Block')
  const [dimension, setDimension] = useState('block')
  const [fromTokenText, setFromTokenText] = useState(nativeToken)
  const [toTokenText, setToTokenText] = useState('USD')
  const [converResult, setConverResult] = useState<GetPriceConverterProps>()
  const [history, setHistory] = useState<GetPriceHistoryProps>()
  const links = [
    { name: 'Block', value: 'block' },
    { name: 'Date', value: 'time' },
  ]
  const tokens = [
    { name: 'USD', value: 'USD' },
    { name: nativeToken, value: nativeToken },
  ]
  const handleTextareaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlock(e.target.value)
  }
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }
  const handleDimensionChange = (e: any) => {
    links.forEach((link) => {
      if (link.value === e.target.id) {
        setDimension(link.value)
        setDimensionText(link.name)
      }
    })
  }
  const handleFromTokenTextChange = (e: any) => {
    setFromTokenText(e.target.id)
  }
  const handleToTokenTextChange = (e: any) => {
    setToTokenText(e.target.id)
  }
  const calcPrice = async () => {
    let time = dayjs(date).unix()
    if (dimension === 'block') {
      time = +trimSpecialChar(block)
    }
    const data = await getPriceConverter(host, {
      from: fromTokenText,
      value: +amount,
      time: time,
      quote: toTokenText,
    })
    if (!data?.data) {
      return
    }
    setConverResult(data.data)
    const history = await getPriceHistory(host, {
      start: dayjs
        .utc(data.data.price.time * 1000)
        .subtract(30, 'days')
        .format('YYYY-MM-DD'),
      end: dayjs
        .utc(data.data.price.time * 1000)
        .add(1, 'days')
        .format('YYYY-MM-DD'),
    })
    if (history?.data) {
      setHistory(history.data)
    }
  }
  const priceTime = useMemo(() => {
    if (converResult) {
      return `${parseTimeToUtc(converResult.price.time)}, Block #${converResult.price.height}`
    } else {
      return ''
    }
  }, [converResult])
  const outputAmount = useMemo(() => {
    if (converResult) {
      if (fromTokenText === 'USD') {
        return +amount / +converResult.price.price
      } else {
        return +amount * +converResult.price.price
      }
    } else {
      return ''
    }
  }, [converResult, fromTokenText, amount])
  const ema7Amount = useMemo(() => {
    if (history) {
      if (fromTokenText === 'USD') {
        return +amount / +history.ema7_average
      } else {
        return +amount * +history.ema7_average
      }
    } else {
      return ''
    }
  }, [history, fromTokenText, amount])
  const ema30Amount = useMemo(() => {
    if (history) {
      if (fromTokenText === 'USD') {
        return +amount / +history.ema30_average
      } else {
        return +amount * +history.ema30_average
      }
    } else {
      return ''
    }
  }, [history, fromTokenText, amount])
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Price Converter
        </Text>
        <Boundary className="lg:p-5">
          <Text block bold className="mb-4 break-all">
            Conversion will be based on historical price at this time
          </Text>
          <Text block bold className="mb-4 break-all">
            Time Dimension
          </Text>
          <Menu className="w-full mb-5">
            <MenuButton className="w-full">
              <Input className="w-full" value={dimensionText} readOnly={true} suffix={<ArrowDownFillingIcon className="w-5" />}></Input>
            </MenuButton>
            <MenuItems>
              {links.map((link) => (
                <MenuItem as="div" key={link.value}>
                  {({ active, close }) => (
                    <div id={link.value} onClick={handleDimensionChange}>
                      {link.name}
                    </div>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
          {dimension === 'block' && (
            <>
              <Text block bold className="mb-4 break-all">
                Block
              </Text>
              <Input className="w-full mb-5" value={block} onChange={handleTextareaChange}></Input>
            </>
          )}
          {dimension === 'time' && (
            <>
              <Text block bold className="mb-4 break-all">
                Time
              </Text>
              <DatePicker value={date} onSelect={setDate} onClear={() => setDate(null)} className="w-full mb-5 justify-start" />
            </>
          )}
          <div className="flex items-end justify-between">
            <div className="flex items-end">
              <div className="mr-5">
                <Text block bold className="mb-4 break-all">
                  From
                </Text>
                <Input className="w-72" value={amount} onChange={handleAmountChange}></Input>
              </div>
              <div>
                <Menu className="w-72">
                  <MenuButton className="w-full">
                    <Input className="w-full" value={fromTokenText} readOnly={true} suffix={<ArrowDownFillingIcon className="w-5" />}></Input>
                  </MenuButton>
                  <MenuItems>
                    {tokens.map((link) => (
                      <MenuItem as="div" key={link.value}>
                        {({ active, close }) => (
                          <div id={link.value} onClick={handleFromTokenTextChange}>
                            {link.name}
                          </div>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div>
              <FromToIcon className="w-7" />
            </div>
            <div>
              <Menu className="w-72">
                <MenuButton className="w-full">
                  <Input className="w-full" value={toTokenText} readOnly={true} suffix={<ArrowDownFillingIcon className="w-5" />}></Input>
                </MenuButton>
                <MenuItems>
                  {tokens.map((link) => (
                    <MenuItem as="div" key={link.value}>
                      {({ active, close }) => (
                        <div id={link.value} onClick={handleToTokenTextChange}>
                          {link.name}
                        </div>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
          <Button outline className="my-5" onClick={calcPrice}>
            Convert
          </Button>
          <div className="h-40 bg-sub-bg-light p-5 overflow-auto text-xs">
            <div className="text-sub-network font-semibold text-sm mb-5">Result</div>
            {converResult && (
              <>
                <div className="text-sub-b2 font-semibold text-sm">{priceTime}</div>
                <div className="flex text-sub-network font-semibold text-sm">
                  <div className="price mr-3">
                    {nativeToken} Price ( USD ): {converResult.price.price};
                  </div>
                  <div className="total">
                    Number of {toTokenText}: {outputAmount}
                  </div>
                </div>
                {history && (
                  <>
                    <div className="flex text-sub-network font-semibold text-sm">
                      <div className="price mr-3">
                        {nativeToken} EMA7 Price ( USD ): {history.ema7_average};
                      </div>
                      <div className="total">
                        Number of {toTokenText}: {ema7Amount}
                      </div>
                    </div>
                    <div className="flex text-sub-network font-semibold text-sm">
                      <div className="price mr-3">
                        {nativeToken} EMA30 Price ( USD ): {history.ema30_average};
                      </div>
                      <div className="total">
                        Number of {toTokenText}: {ema30Amount}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </Boundary>
      </Container>
    </PageContent>
  )
}
