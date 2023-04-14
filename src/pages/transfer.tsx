
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useEffect, useState } from 'react';
import Chart from '@/components/Echart';

export async function getTransferData(hostname = '') {
  let domain = 'polkadot';
  if(hostname.indexOf('localhost') > -1) domain = 'polkadot'
  if(hostname.indexOf('kusama') > -1) domain = 'kusama'
  if(hostname.indexOf('darwinia') > -1) domain = 'darwinia'
  const res = await fetch(`https://${domain}.api.subscan.io/api/v2/scan/transfers`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ row: 5, page: 1 }),
  })
  const data = await res.json()
  return data;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getTransferData(context.req.headers.host || '');

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data
    }, // will be passed to the page component as props
  }
}

interface Transfer {
  extrinsic_index: string;
  block_num: string;
  block_timestamp: string;
  from: string;
  to: string;
  amount: string;
  success: string;
  asset_symbol: string;
}
function About({ data }: {data: Transfer[]}) {
  const [txData, setTxData] = useState<Transfer[]>([]);
  useEffect(() => {
    async function fetch() {
      const data = await getTransferData('kusama');
      setTxData(data.data.transfers);
    }
    fetch();
  }, [])

  return <div>
    <h3>server-side rendering</h3>
    <table      >
      <thead>
        <tr>
          <th>#</th>
          <th>Block</th>
          <th>Time</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {/* @ts-ignore */}
        {data.transfers.map((tx) => {
          return (<tr key={tx.extrinsic_index}>
            <td>{tx.extrinsic_index}</td>
            <td>{tx.block_num}</td>
            <td>{tx.block_timestamp}</td>
            <td>{tx.from}</td>
            <td>{tx.to}</td>
            <td>{tx.amount} {tx.asset_symbol}</td>
            <td>{tx.success.toString()}</td>
          </tr>)
        })}
      </tbody>
    </table>
    <h3 onClick={() => {console.log('client-side rendering h3 clicked')}}>client-side rendering</h3>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Block</th>
          <th>Time</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody> 
        {txData.map((tx) => {
          return (<tr key={tx.extrinsic_index}>
            <td>{tx.extrinsic_index}</td>
            <td>{tx.block_num}</td>
            <td>{tx.block_timestamp}</td>
            <td>{tx.from}</td>
            <td>{tx.to}</td>
            <td>{tx.amount} {tx.asset_symbol}</td>
            <td>{tx.success.toString()}</td>
          </tr>)
        })}
      </tbody>
    </table>
    <Chart />
  </div>
}

export default About