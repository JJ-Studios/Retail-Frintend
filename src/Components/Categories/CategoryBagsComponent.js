import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function CategoryBagsComponent() {
  const [adList, setAdList] = useState([]);
  const [backpackList, setBackpackList] = useState([]);
  const [consuelaList, setConsuelaList] = useState([]);
  const [boggList, setBoggList] = useState([]);
  const [simplyList, setSimplyList] = useState([]);
  const [handbagList, setHandbagList] = useState([]);
  const [specialtyList, setSpecialtyList] = useState([]);
  const [walletList, setWalletList] = useState([]);

  // const for scroll references
  const backpackRef = useRef();
  const handbagRef = useRef();
  const walletRef = useRef();
  const consuelaRef = useRef();
  const boggRef = useRef();
  const simplyRef = useRef();
  const specialtyRef = useRef();

  // get ads from database
  const getAds = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetBags").then((response) => {
      setAdList(response.data);
    });
  };

  const getConsuela = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetBrand/${category}`).then(
      (response) => {
        setConsuelaList(response.data);
      }
    );
  };

  const getBoggbags = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetBrand/${category}`).then(
      (response) => {
        setBoggList(response.data);
      }
    );
  };

  const getSimplyTote = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetBrand/${category}`).then(
      (response) => {
        setSimplyList(response.data);
      }
    );
  };

  const getBackpacks = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setBackpackList(response.data);
      }
    );
  };

  const getHandbags = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setHandbagList(response.data);
      }
    );
  };

  const getSpecialty = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setSpecialtyList(response.data);
      }
    );
  };

  const getWallets = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setWalletList(response.data);
      }
    );
  };

  useEffect(() => getAds(), []);
  useEffect(() => getConsuela("Consuela"), []);
  useEffect(() => getBoggbags("Bogg"), []);
  useEffect(() => getSimplyTote("Simply Tote"), []);
  useEffect(() => getBackpacks("Backpacks"), []);
  useEffect(() => getHandbags("Handbags"), []);
  useEffect(() => getSpecialty("Specialty Handbags"), []);
  useEffect(() => getWallets("Wallets"), []);

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
                <img className="w-100" src={"images/banner/helicopter.jpg"} />
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
            <Link
              to="#"
              onClick={() => {
                consuelaRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Consuela
            </Link>
            <Link
              to="#"
              onClick={() => {
                boggRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Bogg Bags
            </Link>
            <Link
              to="#"
              onClick={() => {
                simplyRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Simply Tote
            </Link>
            <Link
              to="#"
              onClick={() => {
                specialtyRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Specialty Handbags
            </Link>

            <Link
              to="#"
              onClick={() => {
                walletRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-0 px-5"
              style={{ fontSize: "20px" }}
            >
              Wallets
            </Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-3">
                <div
                  ref={consuelaRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Consuela
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {consuelaList.map((val) => {
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
                                  src={
                                    "https://bathhut-api.herokuapp.com/uploads/" +
                                    val.Ad_Image_ID
                                  }
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
              <div className="pt-5 pb-3">
                <div
                  ref={boggRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Bogg Bags
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {boggList.map((val) => {
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
                                  src={
                                    "https://bathhut-api.herokuapp.com/uploads/" +
                                    val.Ad_Image_ID
                                  }
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

              <div className="pt-5 pb-3">
                <div
                  ref={simplyRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Simply Tote
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {simplyList.map((val) => {
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
                                  src={
                                    "https://bathhut-api.herokuapp.com/uploads/" +
                                    val.Ad_Image_ID
                                  }
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

              <div className="pt-5 pb-3">
                <div
                  ref={specialtyRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Specialty Handbags
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {specialtyList.map((val) => {
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
                                  src={
                                    "https://bathhut-api.herokuapp.com/uploads/" +
                                    val.Ad_Image_ID
                                  }
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

              <div className="pt-5 pb-3">
                <div
                  ref={walletRef}
                  className="col-sm-12 py-0"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    margin: "-5%",
                    fontSize: "100px",
                  }}
                >
                  Wallets
                </div>
              </div>
              <div className="product-grid-list">
                <div className="row mt-30">
                  {walletList.map((val) => {
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
                                  src={
                                    "https://bathhut-api.herokuapp.com/uploads/" +
                                    val.Ad_Image_ID
                                  }
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

export default CategoryBagsComponent;
