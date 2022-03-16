const Footer = () => {
  return (
    <div className="rn-footer-area footer-for-left-sticky-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center inner">
              <div className="logo logo-custom-css">
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
              <p className="description mt--30">
                © 2022. All rights reserved by
                <a
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                  rel="noreferrer"
                >
                  Rainbow-Themes.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
