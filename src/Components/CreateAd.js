import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function CreateAd() {
  let categories;
  let primeCategory = "";
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [date, setDate] = useState(0);
  const [price, setPrice] = useState(0);
  const [priceHigh, setPriceHigh] = useState(0);
  const [description, setDescription] = useState("");
  //const [size, setSize] = useState("");
  const [image, setImage] = useState({});
  const [imageName, setImageName] = useState("");
  const [adExtraExtraSmall, setadExtraExtraSmall] = useState(0);
  const [adExtraSmall, setadExtraSmall] = useState(0);
  const [adSmall, setadSmall] = useState(0);
  const [adMedium, setadMedium] = useState(0);
  const [adLarge, setadLarge] = useState(0);
  const [adExtraLarge, setadExtraLarge] = useState(0);
  const [adExtraExtraLarge, setadExtraExtraLarge] = useState(0);
  const [adFourOz, setadFourOz] = useState(0);
  const [adEightOz, setadEightOz] = useState(0);
  const [adSixteenOz, setadSixteenOz] = useState(0);
  const [adSubCategory, setAdSubCategory] = useState("");
  const [adQty, setAdQty] = useState(0);

  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  const getCategories = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetCategories").then(
      (response) => {
        setCategoryList(response.data);
      }
    );
  };

  const getBrands = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetBrands").then(
      (response) => {
        setBrandList(response.data);
      }
    );
  };

  //useEffect(() => getCategory(adSubCategory), []);
  useEffect(() => getCategories(), []);
  useEffect(() => getBrands(), []);

  const fileOnChange = (event) => {
    setImage(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };

  const sendImage = (event) => {
    let formData = new FormData();

    formData.append("image", image);

    fetch("https://bathhut-api.herokuapp.com/UploadImage", {
      method: "post",
      body: formData,
    });
  };

  const addListing = () => {
    Axios.post("https://bathhut-api.herokuapp.com/CreateAd", {
      title: title,
      category: category,
      brand: brand,
      date: date,
      price: price,
      priceHigh: priceHigh,
      description: description,
      //size: size,
      adSubCategory: adSubCategory,
      adExtraExtraSmall: adExtraExtraSmall,
      adExtraSmall: adExtraSmall,
      adSmall: adSmall,
      adMedium: adMedium,
      adLarge: adLarge,
      adExtraLarge: adExtraLarge,
      adExtraExtraLarge: adExtraExtraLarge,
      adFourOz: adFourOz,
      adEightOz: adEightOz,
      adSixteenOz: adSixteenOz,
      adQty: adQty,
      //imageID: imageName,
    }).then(() => {
      alert("Item Uploaded");
      //window.location.reload(false);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
      <section className="ad-post py-5">
        <div className="container">
          <form action="#" onSubmit={handleSubmit}>
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
                      setTitle(event.target.value);
                    }}
                    className="border w-100 p-2 bg-white text-capitalize"
                    placeholder="Ad title go There"
                  />
                  <h6 className="font-weight-bold pt-4 pb-1">Product Size:</h6>
                  <div className="row px-3">
                    {/*className="col-lg-5 mr-lg-4 my-2 rounded bg-white"*/}
                    <div className=" my-2 rounded w-100 bg-white">
                      <label for="size" className="p-2">
                        XXS:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadExtraExtraSmall(event.target.checked);
                        }}
                      />
                      <label for="size" className="p-2">
                        XS:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadExtraSmall(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        S:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadSmall(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        M:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadMedium(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        L:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadLarge(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        XL:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadExtraLarge(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        XXL:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadExtraExtraLarge(event.target.checked);
                        }}
                      />
                    </div>
                    <div className=" my-2 rounded w-100 bg-white">
                      <label for="size" className="pl-3 pr-1">
                        4 oz:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadFourOz(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        8 oz:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadEightOz(event.target.checked);
                        }}
                      />
                      <label for="size" className="pl-3 pr-1">
                        16 oz:
                      </label>
                      <input
                        type="checkbox"
                        value="1"
                        id="size"
                        onChange={(event) => {
                          setadSixteenOz(event.target.checked);
                        }}
                      />
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
                  <div className="">
                    <h6 className="font-weight-bold pt-4 pb-1">Quantity:</h6>
                    <div className="row px-3">
                      <div className="col-lg-4 mr-lg-4">
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          step="1"
                          min="1"
                          max=""
                          defaultValue="1"
                          title="Qty"
                          className="w-75 py-1 text-center"
                          size="4"
                          pattern="1"
                          inputmode=""
                          onChange={(event) => {
                            setAdQty(Number(event.target.value));
                          }}
                        />
                      </div>
                    </div>
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
                  <h6 className="font-weight-bold pt-4 pb-1">
                    Select Ad Category:
                  </h6>
                  <select
                    name=""
                    id="inputGroupSelect"
                    className="w-100 p-2"
                    onChange={(event) => {
                      categories = event.target.value.split(",");
                      setAdSubCategory(categories[0]);
                      setCategory(categories[1]);
                    }}
                  >
                    <option value=" ">Select category</option>
                    {categoryList.map((val) => {
                      return (
                        <option
                          value={[val.Sub_Category, val.Primary_Category]}
                        >
                          {val.Sub_Category}
                        </option>
                      );
                    })}
                  </select>
                  <h6 className="font-weight-bold pt-4 pb-1">
                    Select Ad Brand:
                  </h6>
                  <select
                    name=""
                    id="inputGroupSelect"
                    className="w-100 p-2"
                    onChange={(event) => {
                      setBrand(event.target.value);
                    }}
                  >
                    <option value=" ">Select brand</option>
                    {brandList.map((val) => {
                      return <option value={val.Brand}>{val.Brand}</option>;
                    })}
                  </select>
                  <div className="price">
                    <h6 className="font-weight-bold pt-4 pb-1">
                      Item Price ($ USD):
                    </h6>
                    <div className="row px-3">
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="number"
                          min="0"
                          step=".01"
                          onChange={(event) => {
                            setPrice(event.target.value);
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
                  <div className="price">
                    <h6 className="font-weight-bold pt-4 pb-1">Color:</h6>
                    <div className="row px-3">
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="color"
                          className="border-0 py-2 w-100 price"
                          placeholder="Color 1"
                          id="color"
                        />
                      </div>
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="color"
                          className="border-0 py-2 w-100 price"
                          placeholder="Color 2"
                          id="color"
                        />
                      </div>
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="color"
                          className="border-0 py-2 w-100 price"
                          placeholder="Color 3"
                          id="color"
                        />
                      </div>
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="color"
                          className="border-0 py-2 w-100 price"
                          placeholder="Color 4"
                          id="color"
                        />
                      </div>
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="color"
                          className="border-0 py-2 w-100 price"
                          placeholder="Color 5"
                          id="color"
                        />
                      </div>
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="color"
                          className="border-0 py-2 w-100 price"
                          placeholder="Color 6"
                          id="color"
                        />
                      </div>
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
                        Must have file extension: jpg or png
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

export default CreateAd;
