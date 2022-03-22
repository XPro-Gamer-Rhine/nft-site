import { ethers } from 'ethers';
import useGetContract from './useGetContract';

type UseUploadData = [
  (
    _url: string,
    _tire: string,
    _breed: string,
    _agility: string,
    _weight: string,
    _stamina: string,
    _health: string,
    _luck: string
  ) => void
];
const useUploadData = (): UseUploadData => {
  const {
    marketSigner,
    marketProvider,
    nftSigner,
    nftProvider,
    account,
  } = useGetContract();

  const upload = async (
    _url: string,
    _tire: string,
    _breed: string,
    _agility: string,
    _weight: string,
    _stamina: string,
    _health: string,
    _luck: string
  ) => {
    await nftSigner
      .createCollectible(
        _url,
        _tire,
        _breed,
        _agility,
        _weight,
        _stamina,
        _health,
        _luck
      )
      .then(async () => {
        const response = await nftSigner.tokenCounter();
        console.log(response.toNumber());
        await nftSigner.approve(
          marketSigner.address,
          response.toNumber() - 1
        );
      })
      .then(async () => {
        const response = await nftSigner.tokenCounter();
        console.log(response.toNumber());
        await marketSigner.addMarketItem(
          response.toNumber() - 1,
          nftSigner.address,
          ethers.utils.parseEther('120')
        );
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  return [upload];
};

export default useUploadData;
