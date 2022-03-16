import Davatar from '@davatar/react';
import React from 'react';
import { useAccount, useBalance } from 'wagmi';

const NavbarLeft = () => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data }] = useBalance({
    addressOrName: accountData?.address,
    formatUnits: 'ether',
  });
  let splitAddress;
  if (accountData) {
    splitAddress =
      accountData.address?.substr(0, 6) +
      `....` +
      accountData.address?.substr(
        accountData.address.length - 5,
        accountData.address.length - 1
      );
  }
  return (
    <div className="d-none d-lg-block">
      <div className="header-area left-header-style d-flex">
        <div className="logo-area logo-custom-css">
          <a className="logo-light" href="index.html">
            <img
              src="assets/images/logo/logo-white.png"
              alt="nft-logo"
            />
          </a>
          <a className="logo-dark" href="index.html">
            <img
              src="assets/images/logo/logo-dark.png"
              alt="nft-logo"
            />
          </a>
        </div>
        <div className="sidebar-nav-wrapper">
          <nav className="mainmenu-nav">
            <ul className="mainmenu list-group">
              <li className="nav-item">
                <a className="nav-link smoth-animation" href={'/'}>
                  <i data-feather="home" />
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link smoth-animation"
                  href={'/explore'}
                >
                  <i data-feather="trending-up" />
                  Explore Product
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {accountData ? (
          <div className="authore-profile">
            <div className="thumbnail ml--65">
              <Davatar
                size={50}
                address={accountData.address}
                generatedAvatarType="jazzicon" // optional, 'jazzicon' or 'blockies'
              />
            </div>
            <div className="au-content">
              <p className="name">
                {accountData.ens?.name
                  ? accountData.ens?.name
                  : splitAddress}
              </p>
              <p className="blc">
                Balance:
                <span className="value">
                  {parseFloat(data?.formatted || '').toFixed(2)}{' '}
                  {data?.symbol}
                </span>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavbarLeft;
