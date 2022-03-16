const NFT_MARKET_ABI = require('../artifacts/contracts/MarktPlace.sol/NFTMarket.json');
const DOG_NFT_ABI = require('../artifacts/contracts/NFTDog.sol/DogNFT.json');

const envVars = {
  NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS: String(
    process.env.NEXT_PUBLIC_DOGNFT_DEPLOYED_ADDRESS
  ),
  NEXT_PUBLIC_MARKET_DEPLOYED_ADDRESS: String(
    process.env.NEXT_PUBLIC_MARKET_DEPLOYED_ADDRESS
  ),
  API_URL: String(process.env.NEXT_PUBLIC_APIURL),
  NFT_MARKET_ABI: NFT_MARKET_ABI,
  DOG_NFT_ABI: DOG_NFT_ABI,
  NEXT_PUBLIC_ALCHEMY_ID: String(process.env.NEXT_PUBLIC_ALCHEMY_ID),
  NEXT_PUBLIC_INFURA_ID: String(process.env.NEXT_PUBLIC_INFURA_ID),
  NEXT_PUBLIC_ETHERSCAN_API_KEY: String(
    process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY
  ),
  NEXT_PUBLIC_ARTIST_ADDRESS: String(
    process.env.NEXT_PUBLIC_ARTIST_ADDRESS
  ),
};

export default envVars;
