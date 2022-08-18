import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export { list };

let cardID = 0;
let list = 0;

function GalleryComponent() {
  const [adList, setAdList] = useState([]);

  // get ads from database
  const getAds = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetAllBulkAds").then(
      (response) => {
        setAdList(response.data);
      }
    );
  };

  useEffect(() => getAds(), []);

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
              <div className="search-result bg-white">
                <h2>Results For "Items"</h2>
                <p>123 Results</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
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
                                to="/BulkSingle"
                                onClick={() => {
                                  list = val;
                                  scrollToTop();
                                }}
                              >
                                <img
                                  className="card-img-top img-fluid"
                                  src={"images/" + val.Image}
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
                                <a href="single.html">
                                  {val.Item_Type} - {val.Brand}
                                </a>
                              </h3>
                              <h4 className="card-title border-bottom border-dark pb-4">
                                <a href="single.html">
                                  From ${val.Price_Low} to ${val.Price_High}
                                </a>
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

export default GalleryComponent;
