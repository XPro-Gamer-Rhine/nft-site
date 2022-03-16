import Davatar from '@davatar/react';
import React from 'react';

interface IProps {
  AGILITY: string;
  BREED_COUNT: string;
  HEALTH: string;
  LUCK: string;
  STAMINA: string;
  TIER: string;
  IMAGE_URL: string;
  WEIGHT: string;
  CREATOR: string;
  NAME: string;
  DESCRIPTION: string;
  PRICE: string;
}
const NftDetails: React.FC<IProps> = ({
  AGILITY,
  BREED_COUNT,
  HEALTH,
  LUCK,
  STAMINA,
  TIER,
  IMAGE_URL,
  CREATOR,
  NAME,
  DESCRIPTION,
  PRICE,
}) => {
  const splitAddress =
    CREATOR?.substr(0, 6) +
    `....` +
    CREATOR?.substr(CREATOR.length - 5, CREATOR.length - 1);
  return (
    <div className="product-details-area rn-section-gapTop">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="product-tab-wrapper rbt-sticky-top-adjust">
              <div className="pd-tab-inner">
                <div
                  className="tab-content rn-pd-content"
                  id="v-pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="rn-pd-thumbnail">
                      <img src={IMAGE_URL} alt="Nft_Profile" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
            <div className="rn-pd-content-area">
              <div className="pd-title-area">
                <h4 className="title">{NAME}</h4>
              </div>

              <div className="rn-bid-details">
                <div className="tab-wrapper-one">
                  <nav className="tab-button-one"></nav>
                  <div
                    className="tab-content rn-bid-content"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="rn-pd-bd-wrapper">
                        <div className="top-seller-inner-one">
                          <h6 className="name-title">Owner</h6>
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <Davatar
                                size={50}
                                address={CREATOR}
                                generatedAvatarType="jazzicon" // optional, 'jazzicon' or 'blockies'
                              />
                            </div>
                            <div className="top-seller-content">
                              <a href="#">
                                <h6 className="name">
                                  {splitAddress}
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="rn-pd-sm-property-wrapper">
                          <h6 className="pd-property-title">
                            Property
                          </h6>
                          <div className="property-wrapper">
                            <div className="pd-property-inner">
                              <span className="color-body type">
                                AGILITY
                              </span>
                              <span className="color-white value">
                                {AGILITY}
                              </span>
                            </div>
                            <div className="pd-property-inner">
                              <span className="color-body type">
                                BREED COUNT
                              </span>
                              <span className="color-white value">
                                {BREED_COUNT}
                              </span>
                            </div>
                            <div className="pd-property-inner">
                              <span className="color-body type">
                                HEALTH
                              </span>
                              <span className="color-white value">
                                {HEALTH}
                              </span>
                            </div>
                            <div className="pd-property-inner">
                              <span className="color-body type">
                                LUCK
                              </span>
                              <span className="color-white value">
                                {LUCK}
                              </span>
                            </div>
                            <div className="pd-property-inner">
                              <span className="color-body type">
                                STAMINA
                              </span>
                              <span className="color-white value">
                                {STAMINA}
                              </span>
                            </div>
                            <div className="pd-property-inner">
                              <span className="color-body type">
                                TIRE
                              </span>
                              <span className="color-white value">
                                {TIER}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="place-bet-area">
                  <h2>PRICE : {PRICE}</h2>
                  <button
                    type="button"
                    className="btn btn-primary-alta mt--30"
                    data-bs-toggle="modal"
                    data-bs-target="#placebidModal"
                  >
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comments-wrapper pt--40">
          <div className="comments-area">
            <div className="trydo-blog-comment">
              <ul className="comment-list">
                <li className="comment byuser ">
                  <div className="single-comment">
                    <div className="comment-author comment-img">
                      <img
                        className="comment-avatar"
                        src={IMAGE_URL}
                        alt="Comment Image"
                        height="100"
                        width="80"
                        style={{ borderRadius: '100px' }}
                      />
                      <div className="m-b-20">
                        <div className="commenter">{NAME}</div>
                        <div className="time-spent">
                          {' '}
                          August 20, at 8:44 pm
                        </div>
                      </div>
                    </div>
                    <div className="comment-text">
                      <p>{DESCRIPTION}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
