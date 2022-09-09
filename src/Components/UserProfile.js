import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { numTotalItems } from "./MyAds";
import { numActiveItems } from "./ActiveAds";
import { numSoldItems } from "./SoldAds";
import { numShipItems } from "./PendingAds";
import { numNoShipItems } from "./NoShippingAds";
import { getSessionStorage, setSessionStorage } from "./GlobalVariable";

function UserProfile() {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "sharp", // for smoothly scrolling
    });
  };

  return (
    <div className="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
      <div className="sidebar">
        <div className="widget user-dashboard-profile">
          <div className="profile-thumb">
            <img
              src="images/user/user-thumb.jpg"
              alt=""
              className="rounded-circle"
            />
          </div>

          <h5 className="text-center">Store Admin</h5>
          {/*<p>Joined February 06, 2017</p>
          {/*<a href="user-profile.html" className="btn btn-main-sm">
            Edit Profile
          </a>*/}
          <Link to="/AdListing" className="nav-link text-white add-button my-1">
            <i className="fa fa-plus-circle"></i> Add Listing
          </Link>
          {/*<Link
            to="/CreateBulkAd"
            className="nav-link text-white add-button my-1"
          >
            <i className="fa fa-plus-circle"></i> Add Gallery Item
          </Link>*/}
        </div>

        <div className="widget user-dashboard-menu">
          <ul>
            <li onClick={handleClick}>
              <Link to="/DashboardMyAds">
                <i className="fa fa-user"></i> All Items
                <span>{numTotalItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardActiveAds">
                <i className="fa fa-bookmark-o"></i> Active Items
                <span>{numActiveItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardSoldAds">
                <i className="fa fa-file-archive-o"></i>Sold Items
                <span>{numSoldItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardPendingAds">
                <i className="fa fa-truck"></i> Items To Ship
                <span>{numShipItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardNoShipAds">
                <i className="fa fa-bolt"></i> Items Not Available For Shipping
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardScents">
                <i className="fa fa-fire"></i> View Scents
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardColors">
                <i className="fa fa-paint-brush"></i> View Colors
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardCategories">
                <i className="fa fa-folder"></i> View Categories
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/DashboardBrands">
                <i className="fa fa-folder"></i> View Brands
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link to="/Home">
                <i className="fa fa-cog"></i> Logout
              </Link>
            </li>
            {/*<li>
              <a href="" data-toggle="modal" data-target="#deleteaccount">
                <i className="fa fa-power-off"></i>Delete Account
              </a>
            </li>*/}
          </ul>
        </div>

        <div className="widget user-dashboard-menu">
          <h1>Bath & Body</h1>
          <ul>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Scrubs");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Custom Products
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Candles");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Candles
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Fragrances");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Fragrances
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Soap");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Soap
                <span>{numNoShipItems}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget user-dashboard-menu">
          <h1>Bags</h1>
          <ul>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Handbags");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View All Bags
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProductBrand"
                onClick={() => {
                  setSessionStorage("productItem", "Consuela");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProductBrand") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Consuela Bags
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProductBrand"
                onClick={() => {
                  setSessionStorage("productItem", "Bogg");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProductBrand") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Bogg Bags
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProductBrand"
                onClick={() => {
                  setSessionStorage("productItem", "Simply Tote");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProductBrand") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Simply Tote
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Specialty Handbags");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Specialty Handbags
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Wallets");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Wallets
                <span>{numNoShipItems}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget user-dashboard-menu">
          <h1>Clothing</h1>
          <ul>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Hats");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Hats
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Shirts");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Tops
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Pants");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Bottoms
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Jackets");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Jackets
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Rain Wraps");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Rain Wraps
                <span>{numNoShipItems}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget user-dashboard-menu">
          <h1>Jewelry</h1>
          <ul>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Necklaces");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Necklaces
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Earrings");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Earrings
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Bracelets");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Bracelets
                <span>{numNoShipItems}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget user-dashboard-menu">
          <h1>Gifts</h1>
          <ul>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Gifts");
                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Gifts
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Candles");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Candles
                <span>{numNoShipItems}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/DashboardProduct"
                onClick={() => {
                  setSessionStorage("productItem", "Gourmet");

                  scrollToTop();
                  if (window.location.pathname === "/DashboardProduct") {
                    window.location.reload(false);
                  }
                  //window.location.reload(false);
                }}
              >
                <i className="fa fa-paint-brush"></i> View Gourmet
                <span>{numNoShipItems}</span>
              </Link>
            </li>
          </ul>
        </div>

        {/*<div
          className="modal fade"
          id="deleteaccount"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img
                  src="images/account/Account1.png"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h6 className="py-2">
                  Are you sure you want to delete your account?
                </h6>
                <p>
                  Do you really want to delete these records? This process
                  cannot be undone.
                </p>
                <textarea
                  name="message"
                  id=""
                  cols="40"
                  rows="4"
                  className="w-100 rounded"
                ></textarea>
              </div>
              <div className="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default UserProfile;
