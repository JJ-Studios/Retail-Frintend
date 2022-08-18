import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import globalVariable from "./GlobalVariable";
import { getSessionStorage, setSessionStorage } from "./GlobalVariable";

function AdListing() {
  const [adList, setAdList] = useState([]);

  // get ads from database
  const getAds = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetAllAds").then(
      (response) => {
        setAdList(response.data);
      }
    );
  };

  useEffect(() => getAds(getSessionStorage("productItem")), []);

  // scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
      {/*<section className="page-search" style={{ backgroundColor: "#8b0000" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="advance-search">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputtext4"
                        placeholder="What are you looking for"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputCategory4"
                        placeholder="Category"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputLocation4"
                        placeholder="Location"
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <button type="submit" className="btn btn-primary">
                        Search Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="category-sidebar">
                <div className="widget category-list">
                  <h4 className="widget-header">Bath</h4>
                  <ul className="category-list">
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Candles");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Candles <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Fragrances");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Fragrances <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Scrubs");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Scrubs <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Soap");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Soap <span></span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget category-list">
                  <h4 className="widget-header">Clothing</h4>
                  <ul className="category-list">
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Hats");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Hats <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Shirts");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Tops <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Bottoms");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Bottoms <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Underwear");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Underwear <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Socks");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Socks <span></span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget category-list">
                  <h4 className="widget-header">Bags</h4>
                  <ul className="category-list">
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Backpacks");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Backpacks <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Handbags");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Handbags <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Wallets");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Wallets <span></span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget category-list">
                  <h4 className="widget-header">Jewelry</h4>
                  <ul className="category-list">
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Bracelets");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Bracelets <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Earrings");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Earrings <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Necklaces");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Necklaces <span></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CategoryProduct"
                        onClick={() => {
                          setSessionStorage("productItem", "Rings");

                          scrollToTop();
                          if (window.location.pathname === "/CategoryProduct") {
                            window.location.reload(false);
                          }
                          //window.location.reload(false);
                        }}
                      >
                        Rings <span></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="category-search-filter">
                <div className="row">
                  <div className="col-md-6 pt-2">
                    <Link
                      to="/"
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Return Home
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <div className="view">
                      <strong>Views</strong>
                      <ul className="list-inline view-switcher">
                        <li className="list-inline-item">
                          <a
                            href="#"
                            onclick="event.preventDefault();"
                            className="text-info"
                          >
                            <i className="fa fa-th-large"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="ad-list-view.html">
                            <i className="fa fa-reorder"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {adList.map((val) => {
                    return (
                      <div className="col-sm-12 col-lg-4 col-md-6">
                        {/*className="product-item"*/}
                        <div className="">
                          <div className="">
                            <div className="thumb-content">
                              {/*<div className="price">${val.Ad_Price}</div>*/}
                              <Link
                                to="/Single"
                                onClick={() => {
                                  globalVariable.singleProduct = val;
                                  localStorage.setItem(
                                    "singleProduct",
                                    JSON.stringify(val)
                                  );
                                  scrollToTop();
                                }}
                              >
                                <img
                                  className="card-img-top img-fluid"
                                  src={"images/" + val.Ad_Image_ID}
                                  alt="Product"
                                  style={{ height: "310px" }}
                                />
                              </Link>
                            </div>
                            <div
                              className="card-body pb-5"
                              style={{ backgroundColor: "#F7E9EC" }}
                            >
                              <h3 className="card-title">
                                <a href="single.html">{val.Ad_Name}</a>
                              </h3>
                              <h4 className="card-title border-bottom border-dark pb-4">
                                <a href="single.html">${val.Ad_Price}</a>
                              </h4>
                              {/*<ul className="list-inline product-meta">
                                <li className="list-inline-item">
                                  <a href="single.html">{val.Ad_Category}</a>
                                </li>
                              </ul>*/}
                              {/*<p className="card-text">{val.Ad_Description}</p>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/*<div className="pagination justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                </div>*/}
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default AdListing;
