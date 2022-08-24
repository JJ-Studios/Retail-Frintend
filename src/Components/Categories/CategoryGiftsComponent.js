import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import globalVariable from "../GlobalVariable";
import { getSessionStorage, setSessionStorage } from "../GlobalVariable";

function CategoryGiftsComponent() {
  // const [adList, setAdList] = useState([]);
  const [adGifts, setGiftsList] = useState([]);
  const [candleList, setCandleList] = useState([]);

  // const for scroll references
  const giftsRef = useRef();
  const candleRef = useRef();

  // get ads from database
  const getGifts = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setGiftsList(response.data);
      }
    );
  };

  const getCandles = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setCandleList(response.data);
      }
    );
  };

  //useEffect(() => getAds(), []);
  useEffect(() => getGifts("Gifts"), []);
  useEffect(() => getCandles("Candles"), []);

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
                <img className="w-100" src={"images/banner/gifts.jpg"} />
              </div>
            </div>
          </div>
          <div className="col-md-12 pb-4">
            <Link
              to="#"
              onClick={() => {
                giftsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Gifts
            </Link>
            <Link
              to="#"
              onClick={() => {
                candleRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Candles
            </Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={giftsRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Gifts
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {adGifts.map((val) => {
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
                              {/*border-bottom border-dark*/}
                              <h4 className="card-title pb-4">
                                <Link
                                  to="/Single"
                                  onClick={() => {
                                    localStorage.setItem(
                                      "singleProduct",
                                      JSON.stringify(val)
                                    );
                                    scrollToTop();
                                  }}
                                >
                                  ${val.Ad_Price}
                                </Link>
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
            </div>
            <div className="pt-5 pb-3">
              <div
                ref={candleRef}
                className="col-sm-12 py-0"
                style={{
                  fontFamily: "Brush Script MT, cursive",
                  margin: "-5%",
                  fontSize: "100px",
                }}
              >
                Candles
              </div>
            </div>
            <div className="product-grid-list">
              <div className="row mt-30">
                {candleList.map((val) => {
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
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default CategoryGiftsComponent;
