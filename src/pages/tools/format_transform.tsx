import React, { useState } from 'react'
import { Boundary, PageContent, Container, Flex, Text, Input, Menu, MenuButton, MenuItem, MenuItems, Button } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PAGE_ROW, TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps, Token } from '@/types/page'
import { ArrowDownFillingIcon } from '@/ui/Svg'
import { trimSpecialChar } from '@/utils/formatText'
import { u8aToHex } from '@polkadot/util'
import { getAddress, isAddress } from 'ethers'
import { encodeAddress, decodeAddress, addressToEvm } from '@polkadot/util-crypto'

export type OutputType = {
  name: string
  isPublicKey: boolean
  value: string
}

export const getServerSideProps: GetServerSideProps<{ host: string; page: number } & BareServerSideProps> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const host = context.req.headers.host || ''
  const chainProps = await getChainProps(host)
  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      page,
      chain: chainProps,
    },
  }
}

export default function Page({ host, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [address, setAddress] = useState('')
  const [showErr, setShowErr] = useState(false)
  const [outputType, setOutputType] = useState('All')
  const [outputList, setOutputList] = useState<OutputType[]>([])
  const handleTextareaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }
  const handleOutputTypeChange = (e: any) => {
    setOutputType(e.target.id)
  }
  const transformAddress = () => {
    setShowErr(false)
    let public_key = ''
    let currentAddress = ''
    if (address) {
      setAddress(trimSpecialChar(address))
    }
    if (address.length === 64) {
      public_key = '0x' + address
    } else if (address.length === 66) {
      public_key = address
      currentAddress = address
    } else {
      try {
        // public_key = u8aToHex(decodeAddress(address))
      } catch (err) {
        setShowErr(true)
        console.log(err)
      }
    }
    const outputAll = []
    setOutputList([])
    if (public_key.length !== 66) {
      setShowErr(true)
      return
    }
    outputAll.push({
      name: 'Public Key',
      isPublicKey: true,
      value: public_key,
    })
    // let h160 = u8aToHex(addressToEvm(public_key)) as string
    // if (isAddress(h160)) {
    //   h160 = getAddress(h160)
    // }
    // outputAll.push({
    //   name: 'H160',
    //   isPublicKey: true,
    //   value: h160,
    // })
    setOutputList(outputAll)
  }
  const links = [
    { name: 'All', value: 'All' },
    { name: 'Public Key', value: 'Public Key' },
    { name: 'H160', value: 'H160' },
    { name: 'Polkadot & Parachain', value: 'Polkadot & Parachain' },
    { name: 'Kusama & Parachain', value: 'Kusama & Parachain' },
    { name: 'Rococo & Parachain', value: 'Rococo & Parachain' },
  ]
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Account Format Transform
        </Text>
        <Flex className="gap-x-16">
          <div className="w-96">
            <Boundary className="">
              <Text block bold className="mb-4 break-all">
                Input Account
              </Text>
              <Input className="w-full" value={address} onChange={handleTextareaChange}></Input>
              <Text block bold className="mb-4 break-all">
                Output Type
              </Text>
              <Menu className="w-full">
                <MenuButton className="w-full">
                  <Input className="w-full" value={outputType} readOnly={true} suffix={<ArrowDownFillingIcon className="w-5" />}></Input>
                </MenuButton>
                <MenuItems>
                  {links.map((link) => (
                    <MenuItem as="div" key={link.value}>
                      {({ active, close }) => (
                        <div id={link.value} onClick={handleOutputTypeChange}>
                          {link.name}
                        </div>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
              <Button outline className="my-4" onClick={transformAddress}>
                Transform
              </Button>
              <div className="h-56 bg-sub-bg-light p-5 overflow-auto text-xs">
                <p className="text-sm text-sub-network font-semibold mb-5">What is the SS58 account?</p>
                <p>
                  SS58 is a simple account format designed for Substrate based chains. There&lsquo;s no problem with using other account formats for a
                  chain, but this serves as a robust default. It is heavily based on Bitcoin&lsquo;s Base-58-check format with a few alterations.
                </p>
                <p>
                  The basic idea is a base-58 encoded value that can identify a specific account on the Substrate chain. Different chains have
                  different means of identifying accounts. SS58 is designed to be extensible for this reason.
                </p>
                <p>
                  The living specification for the SS58 account format can be found on the
                  <a target="_blank" href="https://docs.substrate.io/v3/advanced/ss58/">
                    {' '}
                    Substrate wiki
                  </a>
                </p>
              </div>
            </Boundary>
          </div>
          <div className="flex-1">
            <Boundary className="h-full">
              <div className="network-list">
                <div className="network bg-sub-bg-light h-20 flex items-center">
                  {outputList.map((item) => (
                    <div key={item.name} className="ml-5 text-xs">
                      <div className="font-semibold leading-5">{item.name}</div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Boundary>
          </div>
        </Flex>
      </Container>
    </PageContent>
  )
}
