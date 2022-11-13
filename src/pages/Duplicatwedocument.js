/** **************************** Import Packages ****************************** */
import Document, { Html, Head, Main, NextScript } from "next/document";

/** **************************** Import Lib ****************************** */
// import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* ------------------Title Icon----------------------- */}
          <link
            rel="icon"
            href="assets/images/title-icon.ico"
            type="image/icon type"
          />

          {/* ---------------Bootstrap CSS and Icons------------- */}
          <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
          <link
            href="assets/css/bootstrap-font-awesome.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link> */}
  {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>  */}
  {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}

          {/* -------------------Fontawesome CDN---------------- */}
          <link rel="stylesheet" href="assets/css/fontawesome.in.css" />
          <link rel="stylesheet" href="assets/css/fontawesome.all.css" />

          {/* ------------------ Google Fonts ------------------------- */}
          <link href="assets/css/google.fonts.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Popper CDN */}
          {/* eslint-disable-next-line */}
          <script src="assets/js/poppers.min.js"></script>
          {/* Bootstrap js CDN */}
          {/* eslint-disable-next-line */}
          <script src="assets/js/bootstrap.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
