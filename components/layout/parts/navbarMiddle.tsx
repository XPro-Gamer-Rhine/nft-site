import React from 'react';
import Navbar from '../navbar';
import Banner from './banner';
import Content from './content';

const NavbarMiddle = () => {
  return (
    <div className="rn-nft-mid-wrapper">
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
};

export default NavbarMiddle;
