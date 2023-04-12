'use client';

import { use, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { PageProps } from '@/types/page';

export default function Page({ params }: PageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    var myChart = echarts.init(ref.current);
    myChart.setOption({
      title: {
        text: 'ECharts Demo'
      },
      tooltip: {},
      xAxis: {
        data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5', 'X-6']
      },
      yAxis: {},
      series: [
        {
          name: 'Count',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }, [ref]);


  return (
    <div className='w-80 h-80' ref={ref}>Echart</div>
  );
}
