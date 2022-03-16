import React, { useState } from 'react';
import { Connect } from '../util/connect';

const Navbar = () => {
  const [visable, setVisable] = useState(false);

  return (
    <>
      <header className="rn-header haeder-default header--sticky">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <a className="logo-light" href="index.html">
                  <img
                    src="../../assets/images/logo/logo-white.png"
                    alt="nft-logo"
                  />
                </a>
                <a className="logo-dark" href="index.html">
                  <img
                    src="../../assets/images/logo/logo-dark.png"
                    alt="nft-logo"
                  />
                </a>
              </div>
              <div className="mainmenu-wrapper">
                <nav
                  id="sideNav"
                  className="mainmenu-nav d-none d-xl-block"
                >
                  <ul className="mainmenu">
                    <li className="has-droupdown has-menu-child-item">
                      <a className="its_new" href={'/'}>
                        Home
                      </a>
                    </li>
                    <li className="has-droupdown has-menu-child-item">
                      <a className="its_new" href={'/explore'}>
                        Explore
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="explore-one.html">
                            DOG NFT
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" has-menu-child-item"></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <Connect />
              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              <div
                id="my_switcher"
                className="my_switcher setting-option"
              >
                <ul>
                  <li>
                    <a
                      href="javascript: void(0);"
                      data-theme="light"
                      className="setColor light"
                    >
                      <img
                        className="sun-image"
                        src="../../assets/images/icons/sun-01.svg"
                        alt="Sun images"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      data-theme="dark"
                      className="setColor dark"
                    >
                      <img
                        className="Victor Image"
                        src="../../assets/images/icons/vector.svg"
                        alt="Vector Images"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
