import { ReactNode, FC, useMemo } from 'react';

export type Size = 'small' | 'middle' | 'large';

export interface LoadingProps {
  children?: ReactNode;
  loading?: boolean;
  className?: string;
  size?: Size;
}

const Loading: FC<LoadingProps> = ({
  children,
  loading,
  className,
  size = 'middle',
}) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case 'small':
        return 'w-4 h-4';
      case 'middle':
        return 'w-6 h-6';
      case 'large':
        return 'w-8 h-8';
    }
  }, [size]);

  const isLoading = useMemo(() => loading != false, [loading]);

  return (
    <div className={`relative w-fit ${className}`}>
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full min-h-fit min-w-fit bg-black/5 z-10 flex items-center justify-center">
          <div
            className={`rounded-full animate-spin border-2 border-b-sub-network border-l-sub-network ${sizeStyle}`}
          />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Loading;
