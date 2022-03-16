import React from 'react';

const Banner = () => {
  return (
    <div className="rn-banner-area">
      <div
        className="slider-style-7 bg_image--15 bg_image"
        data-black-overlay={8}
      >
        <div className="rn-banner-wrapper row">
          <div className="order-3 col-xl-5 col-lg-12 col-12 order-xl-1">
            <div className="item-description">
              <p>
                The term fungible means something that can be replaced
                by something similar. So, by the name Non Fungible
                Tokens, we can easily understand.
              </p>
              <div className="product-share-wrapper">
                <div className="profile-share">
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Mark Joe"
                  >
                    <img
                      src="assets/images/client/client-1.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Mr.Jone-lee"
                  >
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="David Worner"
                  >
                    <img
                      src="assets/images/client/client-5.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    9+ Place Bit.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 col-xl-4 col-lg-12 col-12 order-xl-2">
            <h2 className="title">
              Discover <br />
              Rare Digital art &amp; collect <span>NFT's</span>
            </h2>
          </div>
          <div className="order-1 col-xl-3 col-lg-12 col-12 order-xl-3">
            <div className="img-thumb-award">
              <img src="assets/images/logo/award-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
