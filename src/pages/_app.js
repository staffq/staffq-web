/** **************************** Import Layout ****************************** */
import Layouts from "../container/Layouts";

/** **************************** Import Page ****************************** */
import TestLayout from "../pages";

/** **************************** Import CSS ****************************** */
import "../styles/globals.css";
import "../../public/assets/css/main.css";
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/js/dist/'
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layouts className="container">
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
