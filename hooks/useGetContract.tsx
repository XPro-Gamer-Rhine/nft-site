import { Signer } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContract, useProvider } from 'wagmi';
import { createContainer } from 'unstated-next';
import config from '../config/env-vars';

const {
  NFT_MARKET_ABI,
  DOG_NFT_ABI,
  NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS,
  NEXT_PUBLIC_MARKET_DEPLOYED_ADDRESS,
} = config;

const useGetContract = () => {
  const [{ data: account }] = useAccount({
    fetchEns: true,
  });
  const [contractSigner, setContractSigner] = useState<Signer>();
  const contractProvider = useProvider();

  // get signer
  useEffect(() => {
    (async () => {
      try {
        const res = await account?.connector?.getSigner();
        setContractSigner(res);
      } catch (e) {
        setContractSigner(undefined);
      }
    })();
  }, [account?.connector]);

  // instantiate contract
  const marketSigner = useContract({
    addressOrName: NEXT_PUBLIC_MARKET_DEPLOYED_ADDRESS,
    contractInterface: NFT_MARKET_ABI.abi,
    signerOrProvider: contractSigner,
  });
  const marketProvider = useContract({
    addressOrName: NEXT_PUBLIC_MARKET_DEPLOYED_ADDRESS,
    contractInterface: NFT_MARKET_ABI.abi,
    signerOrProvider: contractProvider,
  });

  const nftSigner = useContract({
    addressOrName: NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS,
    contractInterface: DOG_NFT_ABI.abi,
    signerOrProvider: contractSigner,
  });
  const nftProvider = useContract({
    addressOrName: NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS,
    contractInterface: DOG_NFT_ABI.abi,
    signerOrProvider: contractProvider,
  });

  return {
    marketSigner,
    marketProvider,
    nftSigner,
    nftProvider,
    account,
  };
};
export default useGetContract;
