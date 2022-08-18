import React from "react";
import { Link } from "react-router-dom";

function AllCategory() {
  return (
    <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>All Categories</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, provident!
                </p>
              </div>
              <div className="row">
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div
                    className="category-block"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="header">
                      <i className="fa fa-laptop icon-bg-1"></i>
                      <h4>MEN</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to="/Category">
                          Shirts <span>93</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Pants <span>233</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Shorts <span>183</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Shoe <span>343</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div
                    className="category-block"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="header">
                      <i className="fa fa-apple icon-bg-2"></i>
                      <h4>Women</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to="/Category">
                          <a>
                            Shirts <span>393</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Pants <span>23</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Shorts <span>13</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Shoes<span>43</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div
                    className="category-block"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="header">
                      <i className="fa fa-home icon-bg-3"></i>
                      <h4>Bath</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to="/Category">
                          <a>
                            Soap <span>93</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Shampoo <span>23</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Conditers <span>83</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Candles <span>33</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div
                    className="category-block"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="header">
                      <i className="fa fa-home icon-bg-3"></i>
                      <h4>Kids</h4>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to="/Category">
                          <a>
                            Clothing <span>93</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Toys <span>23</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Shoes <span>83</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Category">
                          <a>
                            Candy <span>33</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default AllCategory;
