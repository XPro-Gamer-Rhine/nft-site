/* eslint-disable @next/next/no-sync-scripts */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>NFT Marketplace</title>
          <meta name="robots" content="noindex, follow" />
          <meta name="description" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-style-mode" content="1" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/images/favicon.png"
          />

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../../../../../../../../assets/images/favicon.png"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/vendor/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/vendor/slick.css"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/vendor/slick-theme.css"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/vendor/nice-select.css"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/plugins/feature.css"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/plugins/jquery-ui.min.css"
          />
          <link
            rel="stylesheet"
            href="../../../../../../../../assets/css/style.css"
          />
        </Head>

        <body
          className="home-sticky-pin sidebar-header scrollspy-example position-relative"
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
        >
          <Main />
          <NextScript />

          <script src="../../../../../../../../assets/js/vendor/jquery.js"></script>
          <script src="../../../../../../../../assets/js/vendor/jquery.nice-select.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/jquery-ui.js"></script>
          <script src="../../../../../../../../assets/js/vendor/modernizer.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/feather.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/slick.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/bootstrap.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/sal.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/waypoint.js"></script>
          <script src="../../../../../../../../assets/js/vendor/wow.js"></script>
          <script src="../../../../../../../../assets/js/vendor/particles.js"></script>
          <script src="../../../../../../../../assets/js/vendor/jquery.style.swicher.js"></script>
          <script src="../../../../../../../../assets/js/vendor/js.cookie.js"></script>
          <script src="../../../../../../../../assets/js/vendor/count-down.js"></script>
          <script src="../../../../../../../../assets/js/vendor/counter-up.js"></script>
          <script src="../../../../../../../../assets/js/vendor/isotop.js"></script>
          <script src="../../../../../../../../assets/js/vendor/imageloaded.js"></script>
          <script src="../../../../../../../../assets/js/vendor/backtoTop.js"></script>
          <script src="../../../../../../../../assets/js/vendor/scrolltrigger.js"></script>
          <script src="../../../../../../../../assets/js/vendor/jquery.custom-file-input.js"></script>
          <script src="../../../../../../../../assets/js/vendor/savePopup.js"></script>
          <script src="../../../../../../../../assets/js/main.js"></script>
          <script src="../../../../../../../../assets/js/vendor/web3.min.js"></script>
          <script src="../../../../../../../../assets/js/vendor/maralis.js"></script>
          <script src="../../../../../../../../assets/js/vendor/nft.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
