import React from "react";
import { Link } from "react-router-dom";

function ConfirmComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <body className="body-wrapper">
      <div
        className="jumbotron text-center"
        style={{ backgroundColor: "#F7E9EC" }}
      >
        <h1 className="display-3">Thank You!</h1>
        <p className="lead">
          <strong>Please check your email</strong> for your recipe
        </p>
        <hr />
        <p>
          Having trouble? <Link to="/ContactUs">Contact us</Link>
        </p>
        <p className="lead">
          <Link
            onClick={scrollToTop}
            className="btn btn-primary btn-sm"
            to="/Home"
            role="button"
          >
            Continue to homepage
          </Link>
        </p>
      </div>
    </body>
  );
}

export default ConfirmComponent;
