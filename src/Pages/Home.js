import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import HeroArea from "../Components/HeroArea";
import PopularDeals from "../Components/PopularDeals";
import AllCategory from "../Components/AllCategory";
import CallToAction from "../Components/CallToAction";
import CardComponent from "../Components/CardComponent";
import Spin from "../Components/Spin";
import ImageCard from "../Components/ImageCard";
import { Link } from "react-router-dom";
import {
  getSessionStorage,
  setSessionStorage,
} from "../Components/GlobalVariable";
import Header from "../Components/Header";
function Home() {
  const [adList, setAdList] = useState([]);

  // get ads from database
  const getAds = (category) => {
    Axios.get(`https://bathhut-api.herokuapp.com/GetProduct/${category}`).then(
      (response) => {
        setAdList(response.data);
      }
    );
  };

  // scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => getAds(getSessionStorage("productItem")), []);

  return (
    <div>
      <Header />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section>
          <div className="container-fluid pb-5">
            <div className="">
              <img
                className="card-img-top"
                src="images/home/hero.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-10 mx-auto">
            <div className="container-fluid">
              {/*    <div className="mb-3" style={{ paddingTop: "3%" }}>
              <img
                style={{ height: "400px" }}
                className="card-img-top"
                src="images/xcat_give-love_su1_hb.jpg"
                alt="Card image cap"
              />
              </div>*/}

              <div
                className="row"
                style={{ paddingTop: "3%", paddingBottom: "3%" }}
              >
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
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
                    <ImageCard
                      images="../images/Bathhut/IMG_9503.jpg"
                      titles="Custom Products"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
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
                    <ImageCard
                      images="../images/Bathhut/IMG_9296.jpg"
                      titles=" Candles"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
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
                    <ImageCard
                      images="../images/Bathhut/IMG_8085.jpg"
                      titles="Soap"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
                    to="/CategoryJewelry"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    <ImageCard
                      images="../images/Bathhut/IMG_1259(1).jpg"
                      titles="Jewelry"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
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
                    <ImageCard
                      images="../images/Bathhut/IMG_9466.HEIC.jpg"
                      titles="Consuela"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
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
                    <ImageCard
                      images="../images/Bathhut/IMG_9495.HEIC.jpg"
                      titles="Bogg"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
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
                    <ImageCard
                      images="../images/Bathhut/simplytote.jpg"
                      titles="Simply Tote"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
                    to="/CategoryProduct"
                    onClick={() => {
                      setSessionStorage("productItem", "Specialty Handbags");
                      scrollToTop();
                      if (window.location.pathname === "/CategoryProduct") {
                        window.location.reload(false);
                      }
                      //window.location.reload(false);
                    }}
                  >
                    <ImageCard
                      images="../images/Bathhut/specialty.jpg"
                      titles="Specialty Bags"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
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
                    <ImageCard
                      images="../images/Bathhut/IMG_8326.jpg"
                      titles="Hats"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
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
                    <ImageCard
                      images="../images/Bathhut/IMG_9490.HEIC.jpg"
                      titles="Tops"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
                    to="/CategoryProduct"
                    onClick={() => {
                      setSessionStorage("productItem", "Jackets");
                      scrollToTop();
                      if (window.location.pathname === "/CategoryProduct") {
                        window.location.reload(false);
                      }
                      //window.location.reload(false);
                    }}
                  >
                    <ImageCard
                      images="../images/Bathhut/IMG_8250.jpg"
                      titles="Jackets"
                    />
                  </Link>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  style={{ paddingBottom: "2%" }}
                >
                  <Link
                    to="/CategoryProduct"
                    onClick={() => {
                      setSessionStorage("productItem", "Rain Wraps");
                      scrollToTop();
                      if (window.location.pathname === "/CategoryProduct") {
                        window.location.reload(false);
                      }
                      //window.location.reload(false);
                    }}
                  >
                    <ImageCard
                      images="../images/Bathhut/IMG_9497.HEIC.jpg"
                      titles="Rain Wraps"
                    />
                  </Link>
                </div>
              </div>

              <div className="" style={{ marginTop: "2%", paddingTop: "1%" }}>
                <img
                  style={{}}
                  class="card-img-top"
                  src="images/banner/1.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </section>
      </body>

      {/*<CardComponent />*}
      {/*<Spin />*/}
      {/*<AllCategory />*/}
      <div className="py-5" style={{ backgroundColor: "#F7E9EC" }}></div>
      {/*<CallToAction />*/}
    </div>
  );
}

export default Home;
