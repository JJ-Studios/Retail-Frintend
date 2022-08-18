import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card } from "react-bootstrap";
import CardSink from "../Components/CardSink";
import ImageCard from "../Components/ImageCard";

function CardComponent() {
  return (
    <body className="body-wrapper">
      <section className="popular-deals section bg-gray ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Trending Products</h2>
                <p>These are some of most exciting products in store</p>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <ImageCard
              title="Apple Cinnamon"
              images="images/1656214894874.jpg"
            />
            <CardSink
              title="Flip Flops"
              text="Color Options, Endless Uses, and the best shoe out there"
              images="images/1656214894874.jpg"
              listItem="Shoes"
              listItem1="Clothes"
              cagetory="Women"
              sub="Clothes"
            />

            <CardSink
              title="Apple Cinnamon"
              text="If you're looking for a wonderful blend of apples and cinnamon without an overkill of bakery base notes, our apple cinnamon fragrance oil is just for you! The aroma of a red juicy McIntosh apple, sprinkled with fresh ground cinnamon sticks."
              images="images/1656216929715.jpg"
              listItem=" Candles"
              listItem1="Scent: Apple Cinnamon "
              cagetory=" Bath"
              sub="Candles"
            />

            <CardSink
              title="Apple Cinnamon"
              text="If you're looking for a wonderful blend of apples and cinnamon without an overkill of bakery base notes, our apple cinnamon fragrance oil is just for you! The aroma of a red juicy McIntosh apple, sprinkled with fresh ground cinnamon sticks."
              images="images/favicon.png"
              listItem=" Candles"
              listItem1="Scent: Apple Cinnamon "
              cagetory=" Bath"
              sub="Candles"
            />
          </div>
        </div>
      </section>
    </body>
  );
}

export default CardComponent;
