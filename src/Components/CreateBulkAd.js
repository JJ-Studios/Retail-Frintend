import React from "react";
import { useState } from "react";
import Axios from "axios";

function CreateBulkAd() {
  const [brand, setBrand] = useState("");
  const [itemType, setItemType] = useState("");
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [imageName, setImageName] = useState("");

  const fileOnChange = (event) => {
    setImage(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };

  const sendImage = (event) => {
    let formData = new FormData();

    formData.append("image", image);

    fetch("http://localhost:3001/UploadBulkImage", {
      method: "post",
      body: formData,
    });
  };

  const addListing = () => {
    Axios.post("http://localhost:3001/CreateBulkAd", {
      brand: brand,
      itemType: itemType,
      priceLow: priceLow,
      priceHigh: priceHigh,
      image: image,
      description: description,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
      <section className="ad-post py-5">
        <div className="container">
          <form action="#">
            <fieldset className="border border-dark p-4 mb-5">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Post Your ad</h3>
                </div>
                <div className="col-lg-6">
                  <h6 className="font-weight-bold pt-4 pb-1">Title Of Ad:</h6>
                  <input
                    type="text"
                    onChange={(event) => {
                      setItemType(event.target.value);
                    }}
                    className="border w-100 p-2 bg-white text-capitalize"
                    placeholder="Ad title go There"
                  />
                  <h6 className="font-weight-bold pt-4 pb-1">Product Brand:</h6>
                  <div className="row px-3">
                    <div className="col-lg-5 mr-lg-4 my-2 rounded bg-white">
                      <label for="date" className="py-2">
                        Brand:&nbsp;&nbsp;
                      </label>
                      <select
                        onChange={(event) => {
                          setPriceHigh(event.target.value);
                        }}
                        name="size"
                        id="size"
                      >
                        <option value="None">Select Size</option>
                        <option value="XS">Extra Small</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                      </select>
                    </div>
                    {/*<div className="col-lg-4 mr-lg-4 my-2 rounded bg-white ">
                      <input
                        type="radio"
                        name="itemName"
                        value="business"
                        id="business"
                      />
                      <label for="business" className="py-2">
                        Business
                      </label>
                    </div>*/}
                  </div>
                  <h6 className="font-weight-bold pt-4 pb-1">Description:</h6>
                  <textarea
                    name=""
                    id=""
                    className="border p-3 w-100"
                    rows="7"
                    placeholder="Write details about your product"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="col-lg-6">
                  <h6 className="font-weight-bold pt-4 pb-1">Brand of Item:</h6>
                  <input
                    type="text"
                    onChange={(event) => {
                      setBrand(event.target.value);
                    }}
                    className="border w-100 p-2 bg-white text-capitalize"
                    placeholder="Brand Name Goes Here"
                  />
                  <div className="price">
                    <h6 className="font-weight-bold pt-4 pb-1">
                      Item Price Range ($ USD):
                    </h6>
                    <div className="row px-3">
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="number"
                          min="0"
                          step=".01"
                          onChange={(event) => {
                            setPriceLow(event.target.value);
                          }}
                          name="price"
                          className="border-0 py-2 w-100 price"
                          placeholder="Price Low"
                          id="price"
                        />
                      </div>
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="number"
                          min="0"
                          step=".01"
                          onChange={(event) => {
                            setPriceHigh(event.target.value);
                          }}
                          name="price"
                          className="border-0 py-2 w-100 price"
                          placeholder="Price High"
                          id="price"
                        />
                      </div>

                      {/*<div className="col-lg-4 mrx-4 rounded bg-white my-2 ">
                        <input
                          type="checkbox"
                          value="Negotiable"
                          id="Negotiable"
                        />
                        <label for="Negotiable" className="py-2">
                          Negotiable
                        </label>
                      </div>*/}
                    </div>
                  </div>
                  <h6 className="font-weight-bold pt-4 pb-1">Item Image:</h6>
                  <div className="choose-file text-center my-2 py-4 rounded">
                    <label for="file-upload">
                      <span className="d-block font-weight-bold text-dark">
                        Upload Image for Item
                      </span>
                      {/*<span className="d-block">or</span>*/}
                      <span className="d-block btn bg-primary text-white my-3 select-files">
                        Select image
                      </span>
                      <span className="d-block">
                        Maximum upload file size: 10 MB
                      </span>
                      <span className="d-block">{imageName}</span>
                      <input
                        type="file"
                        className="form-control-file d-none"
                        id="file-upload"
                        name="image"
                        onChange={fileOnChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              onClick={() => {
                sendImage();
                addListing();
              }}
              class="btn btn-primary d-block mt-2"
            >
              Post Your Ad
            </button>
          </form>
        </div>
      </section>
    </body>
  );
}

export default CreateBulkAd;
