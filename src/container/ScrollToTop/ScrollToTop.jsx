import React from "react";
import { useEffect } from "react";
import AOS from "aos";

function ScrollToTop() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
      duration: 500,
    });
  }, []);

  useEffect(() => {
    //Get all the hyperlink elements
    var links = document?.getElementsByTagName("a");

    //Browse the previously created array
    Array.prototype.forEach.call(links, function (elem, index) {
      //Get the hyperlink target and if it refers to an id go inside condition
      var elemAttr = elem.getAttribute("href");
      if (elemAttr && elemAttr.includes("#")) {
        //Replace the regular action with a scrolling to target on click
        elem.addEventListener("click", function (ev) {
          ev.preventDefault();
          //Scroll to the target element using replace() and regex to find the href's target id
          document.getElementById(elemAttr.replace(/#/g, ""))?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        });
      }
    });
  }, []);

  return (
    <div data-spy="affix">
      {/* <Link href="/"> */}
      <a href="#ScrollToTop">
        <img
          src="assets/images/Rocket.webp"
          alt="sticky-top-rocket"
          data-aos-offset="390"
          data-aos="fade-up"
          id="sticky-top-rocket"
        />
      </a>
      {/* </Link> */}
    </div>
  );
}

export default ScrollToTop;
