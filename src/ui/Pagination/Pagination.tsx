import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';
import { LinkRouter } from '../Link';

interface Props extends BareProps {
  current: number;
  total: number;
  pageSize: number;
  urlRender: (page: number) => string;
}

const normalCls = 'relative inline-flex items-center px-4 py-2 rounded text-sm text-sub-b2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0';
const currentCls = 'relative z-10 inline-flex items-center px-4 py-2 rounded ring-1 ring-inset ring-sub-network text-sm text-sub-network focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
const disableCls = 'relative inline-flex items-center px-4 py-2 rounded text-sm text-sub-b2 ring-1 ring-inset ring-gray-300 focus:outline-offset-0';
const boxCls = 'isolate inline-flex -space-x-px rounded-md shadow-sm space-x-1';

const PreviousBtn = ({ current, minPageNumber, urlRender }: { current: number, minPageNumber: number, urlRender: (page: number) => string; }) => {
  if (current <= minPageNumber) {
    return (<span className="relative inline-flex items-center rounded px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300">
      <span className="sr-only">Previous</span>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
      </svg>
    </span>)
  }

  return (<LinkRouter href={urlRender(current - 1)} className="relative inline-flex items-center rounded px-2 py-2 text-sub-network ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
    <span className="sr-only">Previous</span>
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
    </svg>
  </LinkRouter>)
}

const NextBtn = ({ current, maxPageNumber, urlRender }: { current: number, maxPageNumber: number, urlRender: (page: number) => string; }) => {
  if (current >= maxPageNumber) {
    return (<span className="relative inline-flex items-center rounded px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300">
      <span className="sr-only">Next</span>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      </svg>
    </span>)
  }

  return (<LinkRouter href={urlRender(current + 1)} className="relative inline-flex items-center rounded px-2 py-2 text-sub-network ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
    <span className="sr-only">Next</span>
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  </LinkRouter>)
}

const NumberBtn = ({ isCurrent, pageNumber, urlRender }: { isCurrent: boolean, pageNumber: number, urlRender: (page: number) => string; }) => {
  return (<LinkRouter className={isCurrent ? currentCls : normalCls} key={`Pagination-${pageNumber}`} href={urlRender(pageNumber)}>{pageNumber}</LinkRouter>)
}

const Pagination: React.FC<Props> = ({ children, className, current, total, pageSize, urlRender = (page) => '' }) => {
  const totalPage = Math.ceil(total / pageSize);
  if (totalPage <= 6) {
    return <nav className={clsx(boxCls, className)}>
      <PreviousBtn current={current} minPageNumber={1} urlRender={urlRender} />
      {Array.from(Array(totalPage).keys()).map((item, index) => {
        const pageNumber = index + 1;
        return (<NumberBtn key={`Pagination-${pageNumber}`} isCurrent={current === pageNumber} pageNumber={pageNumber} urlRender={urlRender} />)
      })}
      <NextBtn current={current} maxPageNumber={totalPage} urlRender={urlRender} />
    </nav>
  }

  if (current < 4) {
    return (<nav className={clsx(boxCls, className)}>
      <PreviousBtn current={current} minPageNumber={1} urlRender={urlRender} />
      <NumberBtn isCurrent={current === 1} pageNumber={1} urlRender={urlRender} />
      <NumberBtn isCurrent={current === 2} pageNumber={2} urlRender={urlRender} />
      <NumberBtn isCurrent={current === 3} pageNumber={3} urlRender={urlRender} />
      <NumberBtn isCurrent={current === 4} pageNumber={4} urlRender={urlRender} />
      <span className={disableCls} >...</span>
      <NumberBtn isCurrent={current === totalPage} pageNumber={totalPage} urlRender={urlRender} />
      <NextBtn current={current} maxPageNumber={totalPage} urlRender={urlRender} />
    </nav>)
  }

  if (current >= 4 && current < totalPage - 2) {
    return (<nav className={clsx(boxCls, className)}>
      <PreviousBtn current={current} minPageNumber={1} urlRender={urlRender} />
      <NumberBtn isCurrent={current === 1} pageNumber={1} urlRender={urlRender} />
      <span className={disableCls} >...</span>
      <NumberBtn isCurrent={false} pageNumber={current - 1} urlRender={urlRender} />
      <NumberBtn isCurrent={true} pageNumber={current} urlRender={urlRender} />
      <NumberBtn isCurrent={false} pageNumber={current + 1} urlRender={urlRender} />
      <span className={disableCls} >...</span>
      <NumberBtn isCurrent={false} pageNumber={totalPage} urlRender={urlRender} />
      <NextBtn current={current} maxPageNumber={totalPage} urlRender={urlRender} />
    </nav>)
  }

  return (<nav className={clsx(boxCls, className)}>
    <PreviousBtn current={current} minPageNumber={1} urlRender={urlRender} />
    <NumberBtn isCurrent={current === 1} pageNumber={1} urlRender={urlRender} />
    <span className={disableCls} >...</span>
    <NumberBtn isCurrent={totalPage - 3 === current} pageNumber={totalPage - 3} urlRender={urlRender} />
    <NumberBtn isCurrent={totalPage - 2 === current} pageNumber={totalPage - 2} urlRender={urlRender} />
    <NumberBtn isCurrent={totalPage - 1 === current} pageNumber={totalPage - 1} urlRender={urlRender} />
    <NumberBtn isCurrent={totalPage === current} pageNumber={totalPage} urlRender={urlRender} />
    <NextBtn current={current} maxPageNumber={totalPage} urlRender={urlRender} />
  </nav>)
};

export default Pagination;
