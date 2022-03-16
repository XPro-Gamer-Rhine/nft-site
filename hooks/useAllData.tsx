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

type UseAllData = { allData: IBid[] };
const useAllData = (): UseAllData => {
  const {
    marketSigner,
    marketProvider,
    nftSigner,
    nftProvider,
    account,
  } = useGetContract();
  const [allData, setAllData] = useState<IBid[]>([]);

  async function FetchData() {
    let responseArr1: IBid[] = [];
    var _provider = new ethers.providers.JsonRpcProvider(API_URL);
    let contract = new ethers.Contract(
      NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS,
      DOG_NFT_ABI.abi,
      _provider
    );

    const data = await contract.tokenCounter();
    if (data && data.toNumber() > 0) {
      for (var i = 0; i < data.toNumber(); i++) {
        try {
          let response = await contract.NFTList(i);
          const nftInfo = await fetch(response.TOKENURI);
          const json = await nftInfo.json();
          let temp = {
            TOKENID: i,
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
          responseArr1.push(temp);
        } catch (e: any) {
          console.log('🐞 Error');
        }
      }
      setAllData(responseArr1);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return { allData };
};

export default useAllData;
