import React from "react";
import { Link } from "react-router-dom";

function HeroArea() {
  return (
    <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
      <section
        className="hero-area bg-1 text-center overly"
        style={{ backgroundColor: "#F7E9EC" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-block">
                {/*<h1>The Bath Hut Boutique</h1>
                <p>
                 Welcome to the world of the scrub <br />
                  and unique one of a kind items
                </p>*/}
                {/*<div className="short-popular-category-list text-center">
                  <h2>Popular Category</h2>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="/Category">
                        <i className="fa fa-bed"></i> Hotel
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/Category">
                        <i className="fa fa-grav"></i> Fitness
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/Category">
                        <i className="fa fa-car"></i> Cars
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/Category">
                        <i className="fa fa-cutlery"></i> Restaurants
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/Category">
                        <i className="fa fa-coffee"></i> Cafe
                      </Link>
                    </li>
                  </ul>
              </div>*/}
              </div>

              {/* <div
                className="advance-search"
                style={{ backgroundColor: "#F7E9EC" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 align-content-center">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <input
                              type="text"
                              className="form-control my-2 my-lg-1"
                              id="inputtext4"
                              placeholder="What are you looking for"
                            />
                          </div>
                          <div className="form-group col-md-3">
                            <select className="w-100 form-control mt-lg-1 mt-md-2">
                              <option>Category</option>
                              <option value="1">Top rated</option>
                              <option value="2">Lowest Price</option>
                              <option value="4">Highest Price</option>
                            </select>
                          </div>
                          <div className="form-group col-md-3">
                            <input
                              type="text"
                              className="form-control my-2 my-lg-1"
                              id="inputLocation4"
                              placeholder="Location"
                            />
                          </div>
                          <div className="form-group col-md-2 align-self-center">
                            <button type="submit" className="btn btn-primary">
                              Search Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default HeroArea;
