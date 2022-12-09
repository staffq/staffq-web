/** **************************** Import Packages ****************************** */
import React from "react";
import { Provider } from "react-redux";

/** **************************** Import Components ****************************** */
import Footer from "./Footer";
import Header from "./Header";

/** **************************** Import store ****************************** */
import { store } from "../redux/store";

export default function Layouts({ children, isShown, handleShow, handleHide }) {
  return (
    <Provider store={store}>
      <Header
        isShown={isShown}
        handleShow={handleShow}
        handleHide={handleHide}
      />
      {children}
      <Footer />
    </Provider>
  );
}
