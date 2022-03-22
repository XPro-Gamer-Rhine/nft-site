import { ethers } from 'ethers';
import React from 'react';
import useGetContract from './useGetContract';
type UseSellNft = [(_id: number, _value: string) => void];
const useSellNft = (): UseSellNft => {
  const {
    marketSigner,
    marketProvider,
    nftSigner,
    nftProvider,
    account,
  } = useGetContract();
  const handleSell = async (_id: number, _value: string) => {
    await marketSigner.sellMarketItem(_id, {
      value: ethers.utils.parseEther(_value),
    });
  };
  return [handleSell];
};

export default useSellNft;
