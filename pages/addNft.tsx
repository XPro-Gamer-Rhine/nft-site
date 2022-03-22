import React from 'react';
import NftForm from '../components/layout/form';
import Navbar from '../components/layout/navbar';
import MobileMenu from '../components/layout/parts/mobileMenu';
import MouseAndArrowUp from '../components/layout/parts/mouseAndArrowUp';

export default function AddNft() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <NftForm />
      <MouseAndArrowUp />
    </>
  );
}
