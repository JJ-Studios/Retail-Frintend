import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getSessionStorage, setSessionStorage } from "./GlobalVariable";
import "./Component.css";

function Header() {
  //  const { product, setProduct } = useContext(productType);
  const [isActive, setIsActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    // sticky-top
    <body className="body-wrapper">
      {/*style={{ backgroundColor: "#8b0000" }}  d-none d-xl-block*/}
      {/*<section
        className="page-search bg-white pt-4 pb-0"
        style={{ height: "70px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/*className="advance-search"
              <div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-7 px-0">
                      <input
                        type="text"
                        className="form-control rounded-pill bg-light"
                        id="inputtext4"
                        placeholder="What are you looking for"
                      />
                    </div>
                    <div className="form-group col-md-0 px-0">
                      <a href="">
                        <i className="fa fa-search p-3 bg-white"></i>
                      </a>
                    </div>
                    {/*<div className="form-group col-md-3">
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
                    </div>*/}
      {/*<div className="form-group col-md-2">
                      <button type="submit" className="btn btn-primary">
                        Search Now
                      </button>
                    </div>
                    <div className="form-group col-md-1 pl-5 d-none d-lg-block">
                      <i class="fa fa-map-signs fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="form-group col-md-2 pl-2 d-none d-lg-block">
                      <h6>(281) 255-4700</h6>
                      <h6>115 Commerce St, Tomball, TX</h6>
                    </div>
                    <div className="form-group col-md-0 d-none d-lg-block">
                      <Link to="/Cart" onClick={scrollToTop}>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true">
                          <span className="number">
                            {getSessionStorage("number")}
                          </span>
                        </i>
                        <h6>Cart</h6>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
                  </section>*/}
      <section>
        <div
          className="container-fluid text-center h1"
          style={{ fontFamily: "Brush Script MT, cursive" }}
        ></div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            {/*col-md-12*/}
            <div className="col-xl-10 col-12 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light navigation">
                {/*<Link className="navbar-brand" to="/Home" onClick={scrollToTop}>
                  <img src="images/bathlogo2.png" alt="" height="38px" />
                </Link>*/}
                <p></p>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto main-nav">
                    {/**"nav-item active" */}
                    <li className={isActive ? "nav-item active" : "nav-item"}>
                      <Link
                        className="nav-link"
                        to="/Home"
                        onClick={() => {
                          scrollToTop();
                          handleClick();
                        }}
                        style={{ fontSize: "23px" }}
                      >
                        Home
                      </Link>
                    </li>

                    {/*Clothes tab*/}

                    {/*Bath tab className="nav-item dropdown dropdown-slide"*/}
                    <li className="nav-item dropdown dropdown-slide">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to="/CategoryBath"
                        style={{ fontSize: "23px" }}
                      >
                        Bath & Body
                        {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                      </Link>

                      {/*<!-- Dropdown list -->*/}
                      {/*<div className="dropdown-menu">
                        <Link
                          className="dropdown-item"
                          to="/CategoryBath"
                          onClick={scrollToTop}
                        >
                          All Bath & Body
                        </Link>*/}
                      {/*<Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Scrubs");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Custom Products
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Candles");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Candles
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Soap");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Soap
                        </Link>
                      </div>*/}
                    </li>

                    {/*Bag tab*/}
                    <li className="nav-item dropdown dropdown-slide">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to="/CategoryBags"
                        style={{ fontSize: "23px" }}
                      >
                        Bags
                        {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                      </Link>

                      {/*<!-- Dropdown list -->*/}
                      {/*<div className="dropdown-menu">
                        {/*<Link
                          className="dropdown-item"
                          to="/CategoryBags"
                          onClick={scrollToTop}
                        >
                          Bags
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryBrand"
                          onClick={() => {
                            setSessionStorage("productItem", "Consuela");

                            scrollToTop();
                            if (window.location.pathname === "/CategoryBrand") {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Consuela
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryBrand"
                          onClick={() => {
                            setSessionStorage("productItem", "Bogg");

                            scrollToTop();
                            if (window.location.pathname === "/CategoryBrand") {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Bogg
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryBrand"
                          onClick={() => {
                            setSessionStorage("productItem", "Simply Tote");

                            scrollToTop();
                            if (window.location.pathname === "/CategoryBrand") {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Simply Tote
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage(
                              "productItem",
                              "Specialty Handbags"
                            );

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Specialty Handbags
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Wallets");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Wallets
                        </Link>
                      </div>*/}
                    </li>

                    <li className="nav-item dropdown dropdown-slide">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to="/CategoryClothing"
                        style={{ fontSize: "23px" }}
                      >
                        Clothing
                        {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                      </Link>

                      {/*<!-- Dropdown list -->*/}
                      {/*<div className="dropdown-menu">
                        <Link
                          className="dropdown-item"
                          to="/CategoryClothing"
                          onClick={scrollToTop}
                        >
                          All Clothing
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Hats");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Hats
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Shirts");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Shirts
                        </Link>
                        {/*<Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Pants");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Pants
                        </Link>*/}
                      {/*<Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Shorts");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Shorts
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Jackets");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Jackets
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Rain Wraps");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Rain Wraps
                        </Link>
                      </div>*/}
                    </li>

                    {/*Jewelry tab*/}
                    <li className="nav-item dropdown dropdown-slide">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to="/CategoryJewelry"
                        style={{ fontSize: "23px" }}
                      >
                        Jewelry
                        {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                      </Link>

                      {/*<!-- Dropdown list -->*/}
                      {/*<div className="dropdown-menu">
                        <Link
                          className="dropdown-item"
                          to="/CategoryJewelry"
                          onClick={scrollToTop}
                        >
                          All Jewelry
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Necklaces");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Necklaces
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Earrings");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Earrings
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Bracelets");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          Bracelets
                        </Link>
                      </div>*/}
                    </li>

                    {/*Gifts tab*/}
                    <li className="nav-item dropdown dropdown-slide">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to="/CategoryGifts"
                        style={{ fontSize: "25px" }}
                      >
                        Gifts
                        {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                      </Link>

                      {/*<!-- Dropdown list -->*/}
                      {/*<div className="dropdown-menu">
                        <Link
                          className="dropdown-item"
                          to="/CategoryProduct"
                          onClick={() => {
                            setSessionStorage("productItem", "Gifts");

                            scrollToTop();
                            if (
                              window.location.pathname === "/CategoryProduct"
                            ) {
                              window.location.reload(false);
                            }
                            //window.location.reload(false);
                          }}
                        >
                          All Gifts
                        </Link>
                        </div>*/}
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/ContactUs"
                        onClick={scrollToTop}
                        style={{ fontSize: "25px" }}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>

                  <ul className="navbar-nav ml-auto mt-10">
                    <li className="nav-item">
                      <Link to="/Cart" onClick={scrollToTop}>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true">
                          <span className="number">
                            {getSessionStorage("number")}
                          </span>
                        </i>
                        <h6>Cart</h6>
                      </Link>
                    </li>
                    <li className="pl-xl-5">
                      <form class="d-flex">
                        <input
                          class="form-control me-1 py-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <i
                          class="btn btn-outline-success fa fa-search px-1"
                          type="submit"
                        ></i>
                      </form>
                    </li>
                    {/*<li className="nav-item">
                      <Link to="/Login">
                        <a className="nav-link login-button">Login</a>
                      </Link>
                    </li>
                    {/*<li className="nav-item">
                      <Link to="/AdListing">
                        <a className="nav-link text-white add-button">
                          <i className="fa fa-plus-circle"></i> Add Listing
                        </a>
                      </Link>
                    </li>*/}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Header;
