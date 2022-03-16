import React from 'react';
import NftContent from '../nftContent';

type Props = {};

const Content = (props: Props) => {
  return (
    <>
      <div
        id="list-item-3 "
        className="rn-product-area rn-section-gapBottom masonary-wrapper-activation"
      >
        <div className="container rn-live-bidding-area ptb--70">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-4">
              <div className="section-title">
                <h3 className="title mb--0">Explore Product</h3>
              </div>
            </div>

          </div>
          <NftContent />
        </div>
      </div>
      <div className="rn-service-area pb--70" id="list-item-4">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--30">
              <h3 className="title">Make Easyer</h3>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="rn-service-one color-shape-7">
                <div className="inner">
                  <div className="icon">
                    <img
                      src="assets/images/icons/shape-7.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-01</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Set up your wallet</a>
                    </h4>
                    <p className="description">
                      Powerful features and inclusions, which makes
                      Nuron standout, easily customizable and
                      scalable.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="rn-service-one color-shape-1">
                <div className="inner">
                  <div className="icon">
                    <img
                      src="assets/images/icons/shape-1.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-02</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Create your collection</a>
                    </h4>
                    <p className="description">
                      A great collection of beautiful website
                      templates for your need. Choose the best
                      suitable template.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="rn-service-one color-shape-5">
                <div className="inner">
                  <div className="icon">
                    <img
                      src="assets/images/icons/shape-5.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-03</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Add your NFT's</a>
                    </h4>
                    <p className="description">
                      We've made the template fully responsive, so it
                      looks great on all devices: desktop, tablets
                      and.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
