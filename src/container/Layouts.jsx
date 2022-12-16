/** **************************** Import Packages ****************************** */
import React from "react";
import { Provider } from "react-redux";

/** **************************** Import Components ****************************** */
import Footer from "./Footer";
import Header from "./Header";
 function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />
}
/** **************************** Import store ****************************** */
import { store } from "../redux/store";
import { Suspense } from "react";

export default function Layouts({ children, isShown, handleShow, handleHide }) {
  return (
    <Provider store={store}>
      <Header
        isShown={isShown}
        handleShow={handleShow}
        handleHide={handleHide}
      />
      <Suspense fallback = {<Loading/>}>
      {children}</Suspense>
      <Footer />
    </Provider>
  );
}
