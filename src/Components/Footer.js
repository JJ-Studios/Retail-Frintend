import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <body className="body-wrapper">
      <footer className="footer section section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-7 offset-md-1 offset-lg-0">
              <div className="block about">
                <img src="images/bathlogo2.png" alt="" height="38px" />

                <p className="alt-color">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="col-lg-2 offset-lg-1 col-md-3">
              <div className="block">
                <h4>Site Pages</h4>
                <ul>
                  <li>
                    <a href="#">Boston</a>
                  </li>
                  <li>
                    <a href="#">How It works</a>
                  </li>
                  <li>
                    <a href="#">Deals & Coupons</a>
                  </li>
                  <li>
                    <a href="#">Articls & Tips</a>
                  </li>
                  <li>
                    <a href="terms-condition.html">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 offset-md-1 offset-lg-0">
              <div className="block">
                <h4>Admin Pages</h4>
                <ul>
                  <li>
                    <Link to="/Category" onClick={scrollToTop}>
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link to="/Dashboard" onClick={scrollToTop}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/Gallery" onClick={scrollToTop}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/CheckoutPage" onClick={scrollToTop}>
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/*<div className="col-lg-4 col-md-7">
              <div className="block-2 app-promotion">
                <div className="mobile d-flex">
                  <a href="">
                    <img src="images/footer/phone-icon.png" alt="mobile-icon" />
                  </a>
                  <p>Get the Dealsy Mobile App and Save more</p>
                </div>
                <div className="download-btn d-flex my-3">
                  <a href="#">
                    <img
                      src="images/apps/google-play-store.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="#" className="ml-3">
                    <img
                      src="images/apps/apple-app-store.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </footer>

      <footer className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="copyright">
                <p>
                  Copyright ©
                  <script>
                    var CurrentYear = new Date().getFullYear();
                    document.write(CurrentYear);
                  </script>
                  . All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <ul className="social-media-icons text-right">
                <li>
                  <a
                    className="fa fa-facebook"
                    href="https://www.facebook.com/themefisher"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-twitter"
                    href="https://www.twitter.com/themefisher"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-pinterest-p"
                    href="https://www.pinterest.com/themefisher"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a className="fa fa-vimeo" href=""></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="top-to">
          <Link onClick={scrollToTop} id="top" className="" to="#">
            <i className="fa fa-angle-up"></i>
          </Link>
        </div>
      </footer>
    </body>
  );
}

export default Footer;
