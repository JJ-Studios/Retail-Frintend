import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Axios from "axios";
import globalVariable from "./GlobalVariable";
import { getSessionStorage, setSessionStorage } from "./GlobalVariable";

function SelectedAd() {
  const singleItem = JSON.parse(localStorage.getItem("singleProduct"));

  let midPrice;
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [newQty, setNewQty] = useState(singleItem.Ad_Quantity);
  const [singleScent, setSingleScent] = useState("Select Fragrance");
  const [customScent, setCustomScent] = useState("");
  const [scentList, setScentList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [newStatus, setNewStatus] = useState("");

  // setSessionStorage("singleProduct", globalVariable.singleProduct);

  const getScents = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetScents").then(
      (response) => {
        setScentList(response.data);
      }
    );
  };

  const getColors = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetColors").then(
      (response) => {
        setColorList(response.data);
      }
    );
  };

  const editAdStatus = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdStatus", {
      status: newStatus,
      id: id,
    });
  };

  const editAdQuantity = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdQuantity", {
      newQty: newQty,
      id: id,
    });
  };

  setSessionStorage("CartItem", singleItem);
  const sendToCart = (item) => {
    let temp = getSessionStorage("number");
    temp = Number(getSessionStorage("number")) + 1;
    setSessionStorage("number", temp);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // for smoothly scrolling
    });
  };

  const incrementQtyPlus = () => {
    setQty(qty + 1);
  };

  const incrementQtyMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const changeQuantity = () => {
    setNewQty(singleItem.Ad_Quantity - qty);
    editAdQuantity(singleItem.Card);

    if (newQty === 0) {
      setNewStatus("Sold");
      editAdStatus(singleItem.Card);
    }
  };

  useEffect(() => getScents(), []);
  useEffect(() => getColors(), []);

  return (
    <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-2 pt-5 mt-5 d-none d-xl-block">
              <div className="text-right"></div>
            </div>
            <div className="col-md-6">
              <div className="product-details">
                <h1 className="product-title">{singleItem.Ad_Name}</h1>
                <div className="product-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-folder-open-o"></i> Category
                      <a href="">{singleItem.Ad_Category}</a>
                    </li>
                    {/*<li className="list-inline-item">
                      <i className="fa fa-calendar"></i> Posted{" "}
                      <a href="">{singleItem.Ad_Date}</a>
                    </li>*/}
                    {/*<li className="list-inline-item">
                      <i className="fa fa-location-arrow"></i> Location
                      <a href="">Dhaka Bangladesh</a>
                    </li>*/}
                  </ul>
                </div>
                {/*className="product-slider" */}
                <div className="">
                  <div
                    className="product-slider-item my-4 text-center"
                    data-image={"images/" + singleItem.Ad_Image_ID}
                  >
                    <img
                      className="img-fluid"
                      src={"images/" + singleItem.Ad_Image_ID}
                      alt="product-img"
                      style={{ maxHeight: "500px" }}
                    />
                  </div>
                </div>

                <div className="content mt-5 pt-5">
                  <div>
                    <button
                      className="btn btn-success w-100"
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar">
                <div className="border-bottom border-dark py-3 pt-5">
                  <h3>{singleItem.Ad_Name}</h3>
                  {price === 0 && <h3>From ${singleItem.Ad_Price}</h3>}
                  {price !== 0 && <h3>${+(price * qty).toFixed(12)}</h3>}
                </div>
                {/*singleItem.Ad_Category === "Clothing" && (
                  <div className="border-bottom border-dark py-3">
                    <h4>
                      <a>Color</a>
                    </h4>
                    {colorList.map((val) => {
                      return (
                        <a
                          className="dot"
                          style={{ backgroundColor: val.Color }}
                          href=""
                        >
                          &nbsp;
                        </a>
                      );
                    })}
                  </div>
                  )*/}
                {singleItem.Ad_Category === "Bath" && (
                  <div className="border-bottom border-dark py-5">
                    <h4>Fragrance</h4>
                    <button
                      className="btn btn-light btn-outline-dark w-100 py-2"
                      data-toggle="modal"
                      data-placement="top"
                      data-target="#selectscent"
                      title="Select"
                    >
                      {singleScent}
                      <i className="float-right arrow down mt-1"></i>
                      {singleItem.Ad_Name === ".Custom Scents" && (
                        <div>{customScent}</div>
                      )}
                    </button>
                    <br />
                    {/*" - " + singleScent*/}
                    {/* Modal for selecting a scent */}
                    <div
                      className="modal fade"
                      id="selectscent"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered modal-lg"
                        role="document"
                      >
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
                          <div className="modal-body mx-5">
                            <h3>Fragrances</h3>
                            {scentList.map((val) => {
                              return (
                                <div>
                                  {/*val.Scent + " - " + val.Description*/}
                                  <input
                                    type="radio"
                                    value={val.Scent}
                                    name="scent"
                                    onChange={(event) => {
                                      setSingleScent(event.target.value);
                                      console.log(singleScent);
                                    }}
                                  />
                                  {" : " + val.Scent}
                                  <h3></h3>
                                </div>
                              );
                            })}
                            {singleItem.Ad_Name === ".Custom Scents" && (
                              <div>
                                <h3>Colors</h3>
                                <input
                                  type="radio"
                                  value="-Blue-"
                                  name="customscent"
                                  onChange={(event) => {
                                    setCustomScent(event.target.value);
                                    console.log(customScent);
                                  }}
                                />
                                {" : " + "Blue"}
                                <h3></h3>
                                <input
                                  type="radio"
                                  value="-Red-"
                                  name="customscent"
                                  onChange={(event) => {
                                    setCustomScent(event.target.value);
                                    console.log(customScent);
                                  }}
                                />
                                {" : " + "Red"}
                                <h3></h3>
                                <input
                                  type="radio"
                                  value="-Pink-"
                                  name="customscent"
                                  onChange={(event) => {
                                    setCustomScent(event.target.value);
                                    console.log(customScent);
                                  }}
                                />
                                {" : " + "Pink"}
                                <h3></h3>
                              </div>
                            )}
                          </div>
                          <div className="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                            >
                              Select Fragrance
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*scentList.map((val) => {
                        return (
                          <option className="h4" value={val.Scent}>
                            {val.Scent + " - " + val.Description}
                          </option>
                        );
                      })*/}
                  </div>
                )}
                {singleItem.Ad_Category !== "Bags" && (
                  <div className="border-bottom border-dark py-5">
                    <h4>Size</h4>
                    <select
                      className="w-50 py-2"
                      name="size"
                      id="size"
                      onChange={(event) => {
                        // check for 4 oz size
                        if (event.target.value === "4oz") {
                          // set the low price to active price
                          setPrice(singleItem.Ad_Price);
                          console.log(price);
                        } else if (event.target.value === "8oz") {
                          // check if there is a 4 oz size in database, check for smallest size
                          if (singleItem.Ad_4_OZ === 0) {
                            // set lowest price if 8 oz is smallest
                            setPrice(singleItem.Ad_Price);
                          } else if (singleItem.Ad_Price_High === null) {
                            setPrice(+(singleItem.Ad_Price + 10).toFixed(12));
                            console.log(price);
                          } else {
                            midPrice =
                              singleItem.Ad_Price +
                              (singleItem.Ad_Price_High - singleItem.Ad_Price) /
                                2;
                            setPrice(midPrice);
                            console.log(price);
                          }
                        } else if (event.target.value === "16oz") {
                          if (singleItem.Ad_Price_High === null) {
                            setPrice(+(singleItem.Ad_Price + 20).toFixed(12));
                            console.log(price);
                          } else {
                            setPrice(singleItem.Ad_Price_High);
                          }
                        }
                      }}
                    >
                      <option className="h4" value="None">
                        Select Size
                      </option>
                      {singleItem.Ad_XS !== 0 && (
                        <option className="h4" value="XS">
                          Extra Small
                        </option>
                      )}
                      {singleItem.Ad_S !== 0 && (
                        <option className="h4" value="S">
                          Small
                        </option>
                      )}
                      {singleItem.Ad_M !== 0 && (
                        <option className="h4" value="M">
                          Medium
                        </option>
                      )}
                      {singleItem.Ad_L !== 0 && (
                        <option className="h4" value="L">
                          Large
                        </option>
                      )}
                      {singleItem.Ad_XL !== 0 && (
                        <option className="h4" value="XL">
                          Extra Large
                        </option>
                      )}
                      {singleItem.Ad_4_OZ !== 0 && (
                        <option className="h4" value="4oz">
                          4 oz
                        </option>
                      )}
                      {singleItem.Ad_8_OZ !== 0 && (
                        <option className="h4" value="8oz">
                          8 oz
                        </option>
                      )}
                      {singleItem.Ad_16_OZ !== 0 && (
                        <option className="h4" value="16oz">
                          16 oz
                        </option>
                      )}
                    </select>
                  </div>
                )}
                <div className="border-bottom border-dark py-3">
                  <h4>Quantity</h4>
                  {/*<input
                    type="button"
                    value="-"
                    className="py-2 px-3"
                    onClick={incrementQtyMinus}
                      />*/}
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    step="1"
                    min="1"
                    max={singleItem.Ad_Quantity}
                    defaultValue="1"
                    title="Qty"
                    className="w-25 py-2 text-center"
                    size="4"
                    pattern="1"
                    inputmode=""
                    onChange={(event) => {
                      if (price === 0) {
                        setPrice(singleItem.Ad_Price);
                      }
                      setQty(Number(event.target.value));
                    }}
                  />
                  {/*<input
                    type="button"
                    value="+"
                    className="py-2 px-3"
                    onClick={incrementQtyPlus}
                      />*/}
                </div>
                <div className=" py-4">
                  <button
                    className="btn btn-contact d-inline-block btn-light px-lg-5 my-1 px-md-3 w-100"
                    onClick={() => {
                      sendToCart(singleItem);
                      changeQuantity();
                      scrollToTop();
                      window.location.reload();
                    }}
                  >
                    Add To Cart
                  </button>
                  <Link
                    onClick={() => {
                      scrollToTop();
                      changeQuantity();
                    }}
                    to="/CheckoutPage"
                    className="btn btn-dark d-inline-block btn-light px-lg-5 my-1 px-md-3 w-100"
                  >
                    Checkout
                  </Link>
                </div>
                {/*<div
                  className="text-center border-bottom border-dark"
                  
                >
                  <h4>Price</h4>
                  <p>${singleItem.Ad_Price}</p>
                </div>*/}

                {/*<div className="widget user text-center">
                  <h4>
                    <a>Color</a>
                  </h4>
                  {/*<p className="member-time">Member Since Jun 27, 2017</p>

                  <a
                    className="dot"
                    style={{ backgroundColor: "black" }}
                    href=""
                  >
                    &nbsp;
                  </a>
                  <a
                    className="dot"
                    style={{ backgroundColor: "gray" }}
                    href=""
                  >
                    &nbsp;
                  </a>
                  <a
                    className="dot"
                    style={{ backgroundColor: "white" }}
                    href=""
                  >
                    &nbsp;
                  </a>
                  <ul className="list-inline mt-20">
                    <li className="list-inline-item">
                      <label for="date" className="py-2">
                        Size:&nbsp;&nbsp;
                      </label>
                      <select className="w-100 p-2" name="size" id="size">
                        <option value="None">Select Size</option>
                        <option value="XS">Extra Small</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                      </select>
                    </li>
                    <li className="list-inline-item pt-3">
                      <a
                        href=""
                        className="btn btn-contact d-inline-block btn-primary px-lg-5 my-1 px-md-3"
                      >
                        Contact
                      </a>
                    </li>
                    {/*<li className="list-inline-item">
                      <a
                        href=""
                        className="btn btn-contact d-inline-block  btn-primary px-lg-5 my-1 px-md-3"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href=""
                        className="btn btn-offer d-inline-block btn-primary ml-n1 my-1 px-lg-4 px-md-3"
                      >
                        Make an offer
                      </a>
                    </li>
                  </ul>
                </div>*/}

                {/*<div className="widget rate">
                  <h5 className="widget-header text-center">
                    What would you rate
                    <br />
                    this product
                  </h5>

                  <div className="starrr"></div>
                </div>*/}

                {/*<div className="widget coupon text-center">
                  <p>
                    Have a great product to post ? Share it with your fellow
                    users.
                  </p>

                  <a href="" className="btn btn-transparent-white">
                    Submit Listing
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default SelectedAd;
