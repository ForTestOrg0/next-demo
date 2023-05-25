import { CSSProperties } from 'react';

export type EChartsOption = any;

export type EChartsInstance = any;

export type Opts = {
  readonly renderer?: 'canvas' | 'svg';
  readonly width?: number | null | undefined | 'auto';
  readonly height?: number | null | undefined | 'auto';
  readonly locale?: string;
};

export type EChartsReactProps = {
  readonly echarts?: any;
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly option: EChartsOption;
  readonly opts?: Opts;
};
