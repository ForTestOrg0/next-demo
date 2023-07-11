const fs = require('fs').promises
const camelcase = require('camelcase')
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const svgr = require('@svgr/core').default
const babel = require('@babel/core')
const { dirname } = require('path')
const v1Networks = require('./v1-networks.json')
const _ = require('lodash')
const root = './src/config/chainslibs'

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true })
  await fs.writeFile(file, text, 'utf8')
}

async function buildConfig(networks) {
  const outDir = `${root}/`
  console.log(`Generating config for ${networks.length} networks`)
  const importString = `import { generateGradientColor } from '@/utils/color'\nimport { Chain } from '../types'\n`
  const getParachainInfo = (chainId) => {
    // polkadot
    const p = _.find(networks[0].value.parachains, { info: chainId })
    if (p) {
      return {
        id: p.paraId,
        relaychain: 'polkadot',
      }
    }

    //kusama
    const k = _.find(networks[1].value.parachains, { info: chainId })
    if (k) {
      return {
        id: k.paraId,
        relaychain: 'kusama',
      }
    }

    return null
  }
  await Promise.all(
    networks.map(async ({ name, value }) => {
      try {
        console.log(`Generating config for ${name}`)
        const parachain = getParachainInfo(name)
        const content = `export const ${camelcase(name, { pascalCase: true })}: Chain = {
  id: '${name}',
  nativeTokenUniqueId: '${value.balances?.value || ''}',
  name: '${value.label}',
  type: '${value.type}',
  theme: {
    colors: ['${value.colorMap.join(`', '`)}'],
    gradient: generateGradientColor('#d7d7d7', '${value.colorMap[0]}', 6),
  },
  gtag: '${value.gtag || ''}',
  api: '${value.api?.value || `https://${name}.webapi.subscan.io`}',
  domain: 'https://${value.network}.subscan.io',
  subdomain: ['${value.network}'],
  social: {
    telegram: '${value?.telegram?.value || ''}',
    twitter: '${value?.twitter?.value || ''}',
    github: '${value?.github?.value || ''}',
    price: '${value?.price_link?.value || ''}',
    website: '${value?.official_site?.value || ''}',
    whitePaper: '${value?.white_paper?.value || ''}',
  },${
    parachain
      ? `
  parachain: {
    id: ${parachain.id},
    relaychain: '${parachain.relaychain}',
  },`
      : ''
  }
  donate: '${value?.donate?.address || ''}',
  modules: {
    BOUNTY: ${value.hasBounty ? true : false},
    CONTRACT: ${value.hasContract ? true : false},
    CONTRACT_SOURCIFY: ${value.hasContractSourcify ? true : false},
    ETH_ADDRESS: ${value.ethAddress ? true : false},
    EVM: ${value.hasEvm ? true : false},
    EVM_NETWORK: ${value.isEvmNetwork ? true : false},
    FELLOWSHIP: ${value.hasFellowship ? true : false},
    GRANDPA_VOTE: ${value.hasVesting ? true : false},
    MULTISIG_TOOL: ${value.hasMultisigTool ? true : false},
    NOMINATION_POOL: ${value.hasNominationPool ? true : false},
    NOMINATE_FEATURE: ${value.hasNominateFeature ? true : false},
    PARACHAIN: ${value.hasParachain ? true : false},
    PARATHREAD: ${value.isParathread ? true : false},
    POLKASSEMBLY_LINK: ${value.hasPolkassemblyLink ? true : false},
    PRICE: ${value.hasPrice ? true : false},
    PRICE_HISTORY: ${value.hasPriceHistory ? true : false},
    PRICE_CONVERT: ${value.hasPriceConvert ? true : false},
    REFERENDA_V2: ${value.hasReferendaV2 ? true : false},
    SYSTEM_ACCOUNT: ${value.showSystemAccount ? true : false},
    V2_API: ${value.hasV2Api ? true : false},
    V2_REWARD: ${value.isV2Reward ? true : false},
    VESTING: ${value.hasVesting ? true : false},
    WASM_CONTRACT: ${value.hasWasmContract ? true : false},
    WASM_CONTRACT_SOURCIFY: ${value.hasWasmContractSourcify ? true : false},
    // has hide prefix before
    SS58: ${!value.hideSS58 ? true : false},
    TREASURY_CHART: ${!value.hideTreasuryChart ? true : false},
    VALIDATOR: ${!value.hideValidator ? true : false},
  },
}\n`

        return ensureWrite(`${outDir}/${name}.ts`, `${importString}${content}`)
      } catch (error) {
        console.log(name, error)
        throw Error()
      }
    })
  )
}

function exportAll(networks) {
  const outDir = `${root}/`
  //   import { acala } from './acala'
  // export const CHAINS: Chain[] = [polkadot, kusama, darwinia_para, shibuya, acala]
  const typeString = `import { Chain } from '../types'`

  const importString = networks
    .map(({ name }) => {
      return `import { ${camelcase(name, { pascalCase: true })} } from './${name}'`
    })
    .join('\n')
  const exportString = `export const CHAINS: Chain[] = [\n  ${networks.map(({ name }) => camelcase(name, { pascalCase: true })).join(',\n  ')},\n]`
  return ensureWrite(`${outDir}/index.ts`, `${typeString}\n${importString}\n${exportString}\n`)
}

async function main() {
  console.log(`Generating network config ...`)

  console.log(`Clean ${root}/*`)
  await Promise.all([rimraf(`${root}/*`)])

  console.log(`Build networks`)
  await Promise.all([buildConfig(v1Networks)])

  await exportAll(v1Networks)
  return console.log(`Finished generate`)
}

main()
