import React from 'react'
import { BareProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { AccountLink, AssetLink } from '@/components/Links'
import { Asset } from '@/types/api'
import { Balance } from '@/components/Balance'
import { Identicon } from '@/components/Identicon'

interface Props extends BareProps {
  assets: Asset[]
}

const Page: React.FC<Props> = ({ assets }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Asset ID</Th>
          <Th>Symbol</Th>
          <Th>Name</Th>
          <Th>Owner</Th>
          <Th>Issuer</Th>
          <Th>Holders</Th>
          <Th>Total Supply</Th>
        </Tr>
        {assets.map((asset, index) => {
          return (
            <Tr key={asset.asset_id}>
              <Td>
                <AssetLink assetId={asset.asset_id}></AssetLink>
              </Td>
              <Td>
                <AssetLink assetId={asset.asset_id}>{asset.metadata.symbol}</AssetLink>
              </Td>
              <Td>
                <Text>{asset.metadata.name}</Text>
              </Td>
              <Td>
                <Identicon account={asset.owner} />
              </Td>
              <Td>
                <Identicon account={asset.issuer} />
              </Td>
              <Td>
                {asset.holders > 0 ? (
                  <AssetLink assetId={asset.asset_id} query={{ tab: 'holder' }}>
                    {asset.holders}
                  </AssetLink>
                ) : (
                  <Text>{asset.holders}</Text>
                )}
              </Td>
              <Td>
                <Balance
                  value={asset.supply}
                  showSymbol={false}
                  token={{
                    decimals: asset.metadata.decimals,
                    symbol: asset.metadata.symbol,
                  }}
                />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page
