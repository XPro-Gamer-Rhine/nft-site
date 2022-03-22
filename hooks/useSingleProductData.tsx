import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { IBid } from '../frontend/types';
import useGetContract from './useGetContract';
import config from '../config/env-vars';

const {
  API_URL,
  NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS,
  DOG_NFT_ABI,
  NEXT_PUBLIC_ARTIST_ADDRESS,
} = config;

type UseSingleProductData = [
  (_id: number) => void,
  { [nftData: string]: any }
];
const useSingleProductData = (): UseSingleProductData => {
  const {
    marketSigner,
    marketProvider,
    nftSigner,
    nftProvider,
    account,
  } = useGetContract();
  const [nftData, setNftData] = useState<{}>({});

  async function FetchData(_id: number) {
    let responseArr1: IBid[] = [];
    var _provider = new ethers.providers.JsonRpcProvider(API_URL);
    let contract = new ethers.Contract(
      NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS,
      DOG_NFT_ABI.abi,
      _provider
    );
    let _price: string;
    try {
      let response = await contract.NFTList(_id);
      const nftInfo = await fetch(response.TOKENURI);
      const json = await nftInfo.json();
      if (marketSigner) {
        const _response = await marketProvider.marketItemsList(6);
        _price = ethers.utils.formatEther(_response.price);
        let temp = {
          TOKENID: _id,
          AGILITY: response.AGILITY,
          BREED_COUNT: response.BREED_COUNT,
          HEALTH: response.HEALTH,
          LUCK: response.LUCK,
          STAMINA: response.STAMINA,
          TIER: response.TIER,
          IMAGE_URL: json.image,
          WEIGHT: response.WEIGHT,
          CREATOR: response.creator,
          NAME: json.name,
          DESCRIPTION: json.description,
          PRICE: _price, //json.price,
        };
        setNftData(temp);
      } else {
        let temp = {
          TOKENID: _id,
          AGILITY: response.AGILITY,
          BREED_COUNT: response.BREED_COUNT,
          HEALTH: response.HEALTH,
          LUCK: response.LUCK,
          STAMINA: response.STAMINA,
          TIER: response.TIER,
          IMAGE_URL: json.image,
          WEIGHT: response.WEIGHT,
          CREATOR: response.creator,
          NAME: json.name,
          DESCRIPTION: json.description,
          PRICE: json.price,
        };
        setNftData(temp);
      }
    } catch (e: any) {
      console.log('🐞 Error');
    }
  }

  return [FetchData, { nftData }];
};

export default useSingleProductData;
