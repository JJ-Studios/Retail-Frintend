import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import globalVariable from "../GlobalVariable";
import { getSessionStorage, setSessionStorage } from "../GlobalVariable";

function CategoryBrandComponent() {
  const navigate = useNavigate();
  const [adList, setAdList] = useState([]);

  // const for scroll references
  const classicRef = useRef();
  const everydayRef = useRef();
  const deeRef = useRef();
  const rattlerRef = useRef();

  // get ads from database
  const getAds = (category) => {
    Axios.get(`http://localhost:3001/GetBrand/${category}`).then((response) => {
      setAdList(response.data);
    });
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
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pb-5">
                <img
                  className="w-100"
                  src={
                    "images/banner/" + getSessionStorage("productItem") + ".jpg"
                  }
                />
              </div>
            </div>
          </div>

          <div className="row pb-4">
            {/*style={{ backgroundColor: "#FF69B4", color: "white" }}*/}
            {/*<Link
              to="/"
              type="button"
              className="btn btn-primary py-0 px-3"
              onClick={scrollToTop}
            >
              Return Home
                </Link>*/}
            {/*<Link
              to="#"
              onClick={() => {
                classicRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
            >
              Classic Totes
            </Link>
            <Link
              to="#"
              onClick={() => {
                everydayRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
            >
              Everyday Totes
            </Link>
            <Link
              to="#"
              onClick={() => {
                deeRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
            >
              Dee Dee Totes
            </Link>
            <Link
              to="#"
              onClick={() => {
                rattlerRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
            >
              Rattler Totes
            </Link>*/}
          </div>

          <div className="row">
            <div className="col-md-4 pt-3"></div>
            <div className="col-md-12">
              {/*category-search-filter */}
              <div className="" style={{ marginTop: "-3.5%" }}>
                <div className="row">
                  <h1></h1>
                </div>
              </div>
              {/*<div className="pt-5 pb-3">
                <div ref={classicRef} className="col-sm-12 py-4 h1 bg-light">
                  Classic Totes
                </div>
          </div>*/}
              <div className="product-grid-list">
                <div className="row mt-30">
                  {adList.map((val) => {
                    return (
                      <div className="col-sm-12 col-lg-3 col-md-6">
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
                                  {val.Ad_Name}
                                </Link>
                              </h3>
                              <h4 className="card-title pb-4">
                                {val.Ad_Price_High !== null &&
                                  val.Ad_Price_High !== 0 && (
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
                                      ${val.Ad_Price} - ${val.Ad_Price_High}
                                    </Link>
                                  )}
                                {(val.Ad_Price_High === null ||
                                  val.Ad_Price_High === 0) && (
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
                                    ${val.Ad_Price}
                                  </Link>
                                )}
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
                {/*<div className="pt-5 pb-3">
                  <div ref={everydayRef} className="col-sm-12 py-4 h1 bg-light">
                    Everyday Totes
                  </div>
                </div>
                <div className="row mt-30">
                  {adList.map((val) => {
                    return (
                      <div className="col-sm-12 col-lg-3 col-md-6">
                        {/*className="product-item"
                        <div className="">
                          <div className="">
                            <div className="thumb-content">
                              {/*<div className="price">${val.Ad_Price}</div>
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
                              <h4 className="card-title pb-4">
                                {val.Ad_Price_High !== null && (
                                  <a href="single.html">
                                    ${val.Ad_Price} - ${val.Ad_Price_High}
                                  </a>
                                )}
                                {val.Ad_Price_High === null && (
                                  <a href="single.html">${val.Ad_Price}</a>
                                )}
                              </h4>
                              {/*<ul className="list-inline product-meta">
                                <li className="list-inline-item">
                                  <a href="single.html">{val.Ad_Category}</a>
                                </li>
                              </ul>*/}
                {/*<p className="card-text">{val.Ad_Description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-5 pb-3">
                  <div ref={deeRef} className="col-sm-12 py-4 h1 bg-light">
                    Dee Dee Totes
                  </div>
                </div>
                <div className="row mt-30">
                  {adList.map((val) => {
                    return (
                      <div className="col-sm-12 col-lg-3 col-md-6">
                        {/*className="product-item"
                        <div className="">
                          <div className="">
                            <div className="thumb-content">
                              {/*<div className="price">${val.Ad_Price}</div>
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
                              <h4 className="card-title pb-4">
                                {val.Ad_Price_High !== null && (
                                  <a href="single.html">
                                    ${val.Ad_Price} - ${val.Ad_Price_High}
                                  </a>
                                )}
                                {val.Ad_Price_High === null && (
                                  <a href="single.html">${val.Ad_Price}</a>
                                )}
                              </h4>
                              {/*<ul className="list-inline product-meta">
                                <li className="list-inline-item">
                                  <a href="single.html">{val.Ad_Category}</a>
                                </li>
                              </ul>*/}
                {/*<p className="card-text">{val.Ad_Description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-5 pb-3">
                  <div ref={rattlerRef} className="col-sm-12 py-4 h1 bg-light">
                    Rattler Totes
                  </div>
                </div>
                <div className="row mt-30">
                  {adList.map((val) => {
                    return (
                      <div className="col-sm-12 col-lg-3 col-md-6">
                        {/*className="product-item"
                        <div className="">
                          <div className="">
                            <div className="thumb-content">
                              {/*<div className="price">${val.Ad_Price}</div>
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
                              <h4 className="card-title pb-4">
                                {val.Ad_Price_High !== null && (
                                  <a href="single.html">
                                    ${val.Ad_Price} - ${val.Ad_Price_High}
                                  </a>
                                )}
                                {val.Ad_Price_High === null && (
                                  <a href="single.html">${val.Ad_Price}</a>
                                )}
                              </h4>
                              {/*<ul className="list-inline product-meta">
                                <li className="list-inline-item">
                                  <a href="single.html">{val.Ad_Category}</a>
                                </li>
                              </ul>*/}
                {/*<p className="card-text">{val.Ad_Description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default CategoryBrandComponent;
