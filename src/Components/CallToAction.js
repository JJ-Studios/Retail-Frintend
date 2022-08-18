import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <body className="body-wrapper">
      <section className="call-to-action overly bg-3 section-sm">
        <div className="container">
          <div className="row justify-content-md-center text-center">
            <div className="col-md-8">
              <div className="content-holder">
                <h2>Start today to get more exposure and grow your business</h2>
                <ul className="list-inline mt-30">
                  <li className="list-inline-item">
                    <Link to="/AdListing" className="btn btn-main">
                      Add Listing
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/Category" className="btn btn-secondary">
                      Browser Listing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default CallToAction;
