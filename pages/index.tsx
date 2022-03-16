import type { NextPage } from 'next';
import Footer from '../components/layout/parts/footer';
import MobileMenu from '../components/layout/parts/mobileMenu';
import MouseAndArrowUp from '../components/layout/parts/mouseAndArrowUp';
import NavbarLeft from '../components/layout/parts/navbarLeft';
import NavbarMiddle from '../components/layout/parts/navbarMiddle';
import NavbarRight from '../components/layout/parts/navbarRight';

const Home: NextPage = () => {
  return (
    <>
      <NavbarLeft />
      <MobileMenu />
      <NavbarMiddle />
      <NavbarRight />
      <Footer />
      <MouseAndArrowUp />
    </>
  );
};

export default Home;
