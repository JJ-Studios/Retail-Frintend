import React from "react";
import { Link } from "react-router-dom";

function PopularDeals() {
  return (
    <body className="body-wrapper">
      <section className="popular-deals section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Trending Adds</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quas, magnam.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="trending-ads-slide">
                <div className="col-sm-12 col-lg-4">
                  <div className="product-item bg-light">
                    <div className="card">
                      <div className="thumb-content">
                        {/*<!-- <div class="price">$200</div> -->*/}
                        <Link to="/Single">
                          <a>
                            <img
                              className="card-img-top img-fluid"
                              src="images/products/products-1.jpg"
                              alt="Card image cap"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link to="/Single">
                            <a>11inch Macbook Air</a>
                          </Link>
                        </h4>
                        <ul className="list-inline product-meta">
                          <li className="list-inline-item">
                            <Link to="/Single">
                              <a>
                                <i className="fa fa-folder-open-o"></i>
                                Electronics
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div className="product-ratings">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="product-item bg-light">
                    <div className="card">
                      <div className="thumb-content">
                        {/*<!-- <div class="price">$200</div> -->*/}
                        <Link to="/Single">
                          <a>
                            <img
                              className="card-img-top img-fluid"
                              src="images/products/products-2.jpg"
                              alt="Card image cap"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link to="/Single">
                            <a>Full Study Table Combo</a>
                          </Link>
                        </h4>
                        <ul className="list-inline product-meta">
                          <li className="list-inline-item">
                            <Link to="/Single">
                              <a>
                                <i className="fa fa-folder-open-o"></i>
                                Furnitures
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div className="product-ratings">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="product-item bg-light">
                    <div className="card">
                      <div className="thumb-content">
                        {/*<!-- <div class="price">$200</div> -->*/}
                        <Link to="/Single">
                          <a>
                            <img
                              className="card-img-top img-fluid"
                              src="images/products/products-3.jpg"
                              alt="Card image cap"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link to="/Single">
                            <a>11inch Macbook Air</a>
                          </Link>
                        </h4>
                        <ul className="list-inline product-meta">
                          <li className="list-inline-item">
                            <Link to="/Single">
                              <a>
                                <i className="fa fa-folder-open-o"></i>
                                Electronics
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div className="product-ratings">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="product-item bg-light">
                    <div className="card">
                      <div className="thumb-content">
                        <Link to="/Single">
                          <a>
                            <img
                              className="card-img-top img-fluid"
                              src="images/products/products-2.jpg"
                              alt="Card image cap"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link to="/Single">
                            <a>Full Study Table Combo</a>
                          </Link>
                        </h4>
                        <ul className="list-inline product-meta">
                          <li className="list-inline-item">
                            <Link to="/Single">
                              <a>
                                <i className="fa fa-folder-open-o"></i>
                                Furnitures
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div className="product-ratings">
                          <ul className="list-inline">
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item selected">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default PopularDeals;
