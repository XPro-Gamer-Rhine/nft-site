import type { NextPage } from 'next';
import NftForm from '../components/layout/form';
import Navbar from '../components/layout/navbar';
import NftContent from '../components/layout/nftContent';
import Footer from '../components/layout/parts/footer';
import MobileMenu from '../components/layout/parts/mobileMenu';
import MouseAndArrowUp from '../components/layout/parts/mouseAndArrowUp';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <NftContent />
      <MouseAndArrowUp />
      <Footer />
    </>
  );
};

export default Home;
