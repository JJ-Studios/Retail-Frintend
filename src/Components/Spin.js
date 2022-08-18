import React from "react";
import CardSink from "./CardSink";
import { Carousel } from "react-bootstrap";
import "./Component.css";

function Spin() {
  return (
    <body className="body-wrapper">
      <section className="popular-deals section bg-gray">
        <div className="container">
          <div className="row">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="cards-wrapper">
                    <CardSink />
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="cards-wrapper">
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                    <div class="card d-none d-md-block">
                      <CardSink />
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Spin;
