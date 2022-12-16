/** **************************** Import Layout ****************************** */
import Layouts from "../container/Layouts";
import { useState } from "react";
/** **************************** Import Page ****************************** */
import TestLayout from "../pages";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
/** **************************** Import CSS ****************************** */
import "../styles/globals.css";
import "../../public/assets/css/main.css";

// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/js/dist/'
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  const [isShown, setIsShown] = useState(false);
  const handleShow = () => {
    setIsShown(true);
  };
  const handleHide = () => {
    setIsShown(false);
  };
  return (
    <Layouts
      className="container "
      isShown={isShown}
      handleShow={handleShow}
      handleHide={handleHide}
    >
      <Component {...pageProps} onMouseLeave={() => handleHide(false)} />
      <ToastContainer
        limit={1}
        autoClose={2000}
        // transition={Zoom}
        pauseOnFocusLoss={false}
        newestOnTop
      />
    </Layouts>
  );
}

export default MyApp;
