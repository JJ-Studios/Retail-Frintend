import React from "react";
import { Link } from "react-router-dom";

function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="top-to position-fixed">
      <Link onClick={scrollToTop} id="top" className="" to="#">
        <i className="fa fa-angle-up"></i>
      </Link>
    </div>
  );
}

export default ScrollButton;
