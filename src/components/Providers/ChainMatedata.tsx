import { TokenMetadata } from '@/types/api';
import { BareProps } from '@/types/page';
import React, { createContext, useState } from 'react';

export type ChainMetadataContextType = {
  tokens: Record<string, TokenMetadata>;
  setTokens: (a: Record<string, TokenMetadata>) => void;
};

interface Props extends BareProps {
  tokens?: Record<string, TokenMetadata>;
}

let Context = createContext<ChainMetadataContextType | null>(null);

const Provider: React.FC<Props> = ({ tokens, children }) => {
  const [tokensState, setTokensState] = useState<
    ChainMetadataContextType['tokens']
  >(tokens || {});

  const updateChainTokens = (tokens: Record<string, TokenMetadata>) => {
    setTokensState({
      ...tokensState,
      ...tokens,
    });
  };

  return (
    <Context.Provider
      value={{
        tokens: tokensState,
        setTokens: updateChainTokens,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };
