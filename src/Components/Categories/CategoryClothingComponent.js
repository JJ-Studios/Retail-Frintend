import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { getSessionStorage, setSessionStorage } from "../GlobalVariable";

function CategoryClothingComponent() {
  const [adList, setAdList] = useState([]);
  const [shirtsList, setShirtsList] = useState([]);
  const [hatsList, setHatsList] = useState([]);
  const [pantsList, setPantsList] = useState([]);
  //const [shortsList, setShortsList] = useState([]);
  //const [underList, setUnderList] = useState([]);
  const [jacketsList, setJacketsList] = useState([]);
  const [rainWrapList, setRainWrapList] = useState([]);

  // const for scroll references
  const hatsRef = useRef();
  const shirtsRef = useRef();
  const pantsRef = useRef();
  // const shortsRef = useRef();
  //const underRef = useRef();
  const jacketsRef = useRef();
  const rainWrapRef = useRef();

  // get ads from database
  const getAds = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetClothing").then(
      (response) => {
        setAdList(response.data);
      }
    );
  };

  const getShirts = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setShirtsList(response.data);
      }
    );
  };

  const getHats = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setHatsList(response.data);
      }
    );
  };

  const getPants = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setPantsList(response.data);
      }
    );
  };

  /* const getShorts = (category) => {
    Axios.get(`http://localhost:3001/GetProduct/${category}`).then(
      (response) => {
        setShortsList(response.data);
      }
    );
  };*/

  /*const getUnder = (category) => {
    Axios.get(`http://localhost:3001/GetProduct/${category}`).then(
      (response) => {
        setUnderList(response.data);
      }
    );
  };*/

  const getJackets = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setJacketsList(response.data);
      }
    );
  };

  const getRainWrap = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setRainWrapList(response.data);
      }
    );
  };

  useEffect(() => getAds(), []);
  useEffect(() => getShirts("Shirts"), []);
  useEffect(() => getHats("Hats"), []);
  useEffect(() => getPants("Pants"), []);
  // useEffect(() => getShorts("Shorts"), []);
  useEffect(() => getJackets("Jackets"), []);
  useEffect(() => getRainWrap("Rain Wraps"), []);

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
            <div className="col-md-12">
              <div className="pb-5">
                <img className="w-100" src={"images/banner/EITS.jpg"} />
              </div>
            </div>
          </div>
          <div className="col-md-12 pb-4">
            {/*style={{ backgroundColor: "#FF69B4", color: "white" }}*/}
            {/*<Link
              to="/"
              type="button"
              className="btn btn-primary py-0 px-3"
              onClick={scrollToTop}
            >
              Return Home
    </Link>*/}
            <Link
              to="#"
              onClick={() => {
                hatsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Hats
            </Link>
            <Link
              to="#"
              onClick={() => {
                shirtsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Shirts
            </Link>
            {/*<Link
              to="#"
              onClick={() => {
                pantsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
            >
              Pants
            </Link>*/}
            {/*<Link
              to="#"
              onClick={() => {
                shortsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
            >
              Shorts
            </Link>*/}
            <Link
              to="#"
              onClick={() => {
                jacketsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Jackets
            </Link>
            <Link
              to="#"
              onClick={() => {
                rainWrapRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Rain Wraps
            </Link>
          </div>
          <div className="row">
            <div className="col-md-3">
              {/*<div className="category-sidebar">
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

                {/*<div className="widget filter">
                  <h4 className="widget-header">Choose Size</h4>
                  <select>
                    <option>Select Size</option>
                    <option value="1">Top rated</option>
                    <option value="2">Lowest Price</option>
                    <option value="4">Highest Price</option>
                  </select>
                </div>

                <div className="widget price-range w-100">
                  <h4 className="widget-header">Price Range</h4>
                  <div className="block">
                    <input
                      className="range-track w-100"
                      type="text"
                      data-slider-min="0"
                      data-slider-max="5000"
                      data-slider-step="5"
                      data-slider-value="[0,5000]"
                    />
                    <div className="d-flex justify-content-between mt-2">
                      <span className="value">$10 - $5000</span>
                    </div>
                  </div>
                      </div>
                      </div>*/}
            </div>
            <div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={hatsRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Hats
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {hatsList.map((val) => {
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
            <div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={shirtsRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Shirts
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {shirtsList.map((val) => {
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
            {/*<div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={pantsRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Pants
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {pantsList.map((val) => {
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
            {/*<p className="card-text">{val.Ad_Description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
                </div>*/}
            {/*<div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={shortsRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Shorts
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {shortsList.map((val) => {
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
            {/*<p className="card-text">{val.Ad_Description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
                </div>*/}

            <div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={jacketsRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Jackets
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {jacketsList.map((val) => {
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
            <div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={rainWrapRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Rain Wraps
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {rainWrapList.map((val) => {
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
          </div>
        </div>
      </section>
    </body>
  );
}

export default CategoryClothingComponent;
