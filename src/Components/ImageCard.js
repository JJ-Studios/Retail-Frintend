import React from "react";
import { Link } from "react-router-dom";

function ImageCard(props) {
  return (
    <div className="card text-center">
      <img
        className="card-img-top img-fluid"
        style={{ height: "300px" }}
        src={props.images}
        alt="Card image cap"
      />
      <div className="card-body">
        <h2 className="card-text" text>
          {props.titles}
        </h2>
      </div>
    </div>
  );
}
export default ImageCard;
