import React, {useMemo} from 'react';
import clsx from 'clsx';
import BigNumber from 'bignumber.js';
import { BareProps } from '@/types/page';
import Image from 'next/image';
import ayeImg from '@/styles/images/aye.png'
import nayImg from '@/styles/images/nay.png'

interface Props extends BareProps {
  ayeAmount?: string;
  ayeWithoutConviction?: string;
  nayAmount?: string;
  nayWithoutConviction?: string;
  turnout?: string;
  threshold?: string;
}


const VotePredict: React.FC<Props> = ({ ayeAmount, nayAmount, className }) => {
  const currentProgress = useMemo(()=>{
    if (ayeAmount == '0') {
      if (nayAmount == '0') {
        return 50;
      } else {
        return 0;
      }
    }
    if (nayAmount == '0') {
      return 100;
    }
    return new BigNumber(Number(ayeAmount))
      .div(new BigNumber(Number(ayeAmount)).plus(new BigNumber(Number(nayAmount))))
      .times(100)
      .toNumber();
  },[ayeAmount, nayAmount]);
  const cssVars = useMemo(()=>{
    return {
      '--aye-progress': Math.min(Math.max(currentProgress, 5), 100) + '%',
    };
  }, [currentProgress]) as React.CSSProperties;
  return (
  // todo: add turnout and threshold
  <div className={clsx('flex', className)}>
    <div className="relative inline-block px-5 pt-2.5 pb-11" style={cssVars}>
      <div className="relative w-[500px]">
        <div className="w-full h-7 bg-sub-error-light"></div>
        <div className="w-[var(--aye-progress)] absolute top-0 h-7 bg-sub-success-light"></div>
      </div>
      <div className="flex absolute top-2.5 flex-col left-0 items-start">
        <div className="w-9 h-7 rounded-l flex justify-center items-center bg-sub-success-light">
          <Image src={ayeImg} width={16} height={16} alt={'aye'} />
        </div>
        <div className="mt-1">Aye</div>
        <div className="font-semibold">
          { ayeAmount }
        </div>
      </div>
      <div className="flex absolute top-2.5 flex-col right-0 items-end">
        <div className="w-9 h-7 rounded-r flex justify-center items-center bg-sub-error-light">
          <Image src={nayImg} width={16} height={16} alt={'nay'} />
        </div>
        <div className="mt-1">Nay</div>
        <div className="font-semibold">
          { nayAmount }
        </div>
      </div>
    </div>
  </div>
  )
};

export default VotePredict;
