import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/navbar';
import NftDetails from '../../components/layout/nftDetails';
import Footer from '../../components/layout/parts/footer';
import MobileMenu from '../../components/layout/parts/mobileMenu';
import MouseAndArrowUp from '../../components/layout/parts/mouseAndArrowUp';
import useSingleProductData from '../../hooks/useSingleProductData';

const DogContent = () => {
  const [id, setId] = useState(0);
  const [FetchData, { nftData }] = useSingleProductData();
  useEffect(() => {
    var url = window.location.href;
    var _id: number = Number(url.substring(url.lastIndexOf('/') + 1));
    FetchData(_id);
  }, []);

  return (
    <>
      <Navbar />
      <MobileMenu />

      <NftDetails
        AGILITY={nftData.AGILITY}
        BREED_COUNT={nftData.BREED_COUNT}
        HEALTH={nftData.HEALTH}
        LUCK={nftData.LUCK}
        STAMINA={nftData.STAMINA}
        TIER={nftData.TIER}
        IMAGE_URL={nftData.IMAGE_URL}
        WEIGHT={nftData.WEIGHT}
        CREATOR={nftData.CREATOR}
        NAME={nftData.NAME}
        DESCRIPTION={nftData.DESCRIPTION}
        PRICE={nftData.PRICE}
        TOKEN_ID={nftData.TOKENID}
      />
      <MouseAndArrowUp />
      <Footer />
    </>
  );
};

export default DogContent;
