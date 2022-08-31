import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
export { numTotalItems };

let numTotalItems = 0;

function MyAds() {
  let categories;
  const [adList, setAdList] = useState([]);
  const [singleCard, setSingleCard] = useState("");
  //const [singleAdList, setSingleAdList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newPriceHigh, setNewPriceHigh] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newStatus, setNewStatus] = useState("");
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

  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  // number of items on page, export to user profile
  numTotalItems = adList.length;

  const getAds = () => {
    Axios.get("https://bathhut-api.herokuapp.com/GetAllAds").then(
      (response) => {
        setAdList(response.data);
      }
    );
  };

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

  const editAdName = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAd", {
      name: newName,
      category: newCategory,
      description: newDescription,
      price: newPrice,
      size: newSize,
      status: newStatus,
      id: id,
    });
    window.location.reload(false);
  };

  const editName = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdName", {
      name: newName,
      id: id,
    });
    //window.location.reload(false);
  };

  const editAdPrice = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditPrice", {
      price: newPrice,
      id: id,
    });
    //window.location.reload(false);
  };

  const editAdPriceHigh = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditPriceHigh", {
      price: newPriceHigh,
      id: id,
    });
    //window.location.reload(false);
  };

  const editAdCategory = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdCategory", {
      category: newCategory,
      subCategory: newSubCategory,
      id: id,
    });
  };

  const editAdBrand = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdBrand", {
      brand: newBrand,
      id: id,
    });
  };

  const editAdStatus = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdStatus", {
      status: newStatus,
      id: id,
    });
  };

  const editAdSizes = (id) => {
    Axios.put("https://bathhut-api.herokuapp.com/EditAdSizes", {
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
      id: id,
    });
  };

  const deleteAd = (id, imageID) => {
    Axios.delete(
      `https://bathhut-api.herokuapp.com/DeleteItem/${id}/${imageID}`
    );
    window.location.reload(false);
  };

  useEffect(() => getAds(), []);
  useEffect(() => getCategories(), []);
  useEffect(() => getBrands(), []);

  return (
    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
      <div className="widget dashboard-container my-adslist">
        <h3 className="widget-header">All Items</h3>
        <table className="table table-responsive product-dashboard-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Title</th>
              <th className="text-center">Category</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/*Ad list*/}
            {adList.map((val) => {
              return (
                <tr>
                  <td className="product-thumb">
                    <img
                      width="80px"
                      height="auto"
                      src={
                        "https://bathhut-api.herokuapp.com/uploads/" +
                        val.Ad_Image_ID
                      }
                      alt="image description"
                    />
                  </td>
                  <td className="product-details">
                    <h3 className="title">{val.Ad_Name}</h3>
                    <span className="add-id">
                      <strong>Ad ID:</strong> {val.Card}
                    </span>
                    <span>
                      <strong>Posted on: </strong>
                      {val.Ad_Date}
                    </span>
                    <span className="price">
                      <strong>Price</strong>${val.Ad_Price}
                    </span>
                    <span className="price">
                      <strong>category</strong>
                      {val.Ad_Category} - {val.Ad_Sub_Category}
                    </span>
                    <span className="location">
                      <strong>Size</strong>
                      {/*val.Ad_Size*/}
                      {val.Ad_XXS != 0 && "XXS "}
                      {val.Ad_XS != 0 && "XS "}
                      {val.Ad_S != 0 && "S "}
                      {val.Ad_M != 0 && "M "}
                      {val.Ad_L != 0 && "L "}
                      {val.Ad_XL != 0 && "XL "}
                      {val.Ad_XXL != 0 && "XXL "}
                      {val.Ad_4_OZ != 0 && "4oz "}
                      {val.Ad_8_OZ != 0 && "8oz "}
                      {val.Ad_16_OZ != 0 && "16oz "}
                    </span>
                    <span className="location">
                      <strong>Quantity</strong>
                      {val.Ad_Quantity}
                    </span>
                    <span className="status active">
                      <strong>Status</strong>
                      {val.Ad_Status}
                    </span>
                  </td>
                  <td className="product-category">
                    <span className="categories">{val.Ad_Category}</span>
                  </td>
                  <td className="action" data-title="Action">
                    <div className="">
                      <ul className="list-inline justify-content-center">
                        <li className="list-inline-item">
                          <a
                            data-toggle="modal"
                            data-placement="top"
                            data-target="#viewitem"
                            title="view"
                            className="view"
                            href=""
                            onClick={() => {
                              setSingleCard(val);
                            }}
                          >
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="edit"
                            data-toggle="modal"
                            data-placement="top"
                            data-target="#edititem"
                            title="Edit"
                            href=""
                            onClick={() => {
                              setSingleCard(val);
                            }}
                          >
                            <i className="fa fa-pencil"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="delete"
                            data-toggle="modal"
                            data-placement="top"
                            data-target="#deleteaccount"
                            title="Delete"
                            href=""
                            onClick={() => {
                              setSingleCard(val);
                            }}
                          >
                            <i className="fa fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/*Modal for view item*/}
                    <div
                      className="modal fade"
                      id="viewitem"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
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
                          <div className="modal-body text-center">
                            <img
                              width="200px"
                              height="auto"
                              src={
                                "https://bathhut-api.herokuapp.com/uploads/" +
                                singleCard.Ad_Image_ID
                              }
                              alt="image description"
                            />
                            <h2 className="py-2">{singleCard.Ad_Name}</h2>
                            <h3>${singleCard.Ad_Price}</h3>
                            <h3>{singleCard.Ad_Date}</h3>
                            <h3>
                              {singleCard.Ad_XXS != 0 && "XXS "}
                              {singleCard.Ad_XS != 0 && "XS "}
                              {singleCard.Ad_S != 0 && "S "}
                              {singleCard.Ad_M != 0 && "M "}
                              {singleCard.Ad_L != 0 && "L "}
                              {singleCard.Ad_XL != 0 && "XL "}
                              {singleCard.Ad_XXL != 0 && "XXL "}
                              {singleCard.Ad_4_OZ != 0 && "4oz "}
                              {singleCard.Ad_8_OZ != 0 && "8oz "}
                              {singleCard.Ad_16_OZ != 0 && "16oz "}
                            </h3>
                            <p>{singleCard.Ad_Description}</p>
                          </div>
                          <div className="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*Modal for edit item*/}
                    <div
                      className="modal fade"
                      id="edititem"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header border-bottom-0">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={() => {
                                window.location.reload(false);
                              }}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body text-center">
                            <img
                              width="200px"
                              height="auto"
                              src={
                                "https://bathhut-api.herokuapp.com/uploads/" +
                                singleCard.Ad_Image_ID
                              }
                              alt="image description"
                            />
                            <br />
                            <br />
                            <h3>Name</h3>
                            <input
                              id="name"
                              type="text"
                              defaultValue={singleCard.Ad_Name}
                              className="border w-50 p-2 bg-white text-capitalize"
                              onChange={(event) => {
                                setNewName(event.target.value);
                              }}
                            />
                            <button
                              type="button"
                              className="btn btn-success py-2"
                              onClick={() => {
                                editName(singleCard.Card);
                              }}
                            >
                              Update
                            </button>
                            <br />
                            <br />
                            <h3>Price Low</h3>
                            <input
                              id="pricelow"
                              type="number"
                              defaultValue={singleCard.Ad_Price}
                              min="0"
                              step=".01"
                              onChange={(event) => {
                                setNewPrice(event.target.value);
                              }}
                              name="pricelow"
                              className="border p-2 w-50 price"
                            />
                            <button
                              type="button"
                              className="btn btn-success py-2"
                              onClick={() => {
                                editAdPrice(singleCard.Card);
                              }}
                            >
                              Update
                            </button>
                            <br />
                            <br />
                            <h3>Price High</h3>
                            <input
                              id="pricehigh"
                              type="number"
                              defaultValue={singleCard.Ad_Price_High}
                              min="0"
                              step=".01"
                              onChange={(event) => {
                                setNewPriceHigh(event.target.value);
                              }}
                              name="pricelow"
                              className="border p-2 w-50 price"
                            />
                            <button
                              type="button"
                              className="btn btn-success py-2"
                              onClick={() => {
                                editAdPriceHigh(singleCard.Card);
                              }}
                            >
                              Update
                            </button>
                            <br />
                            <br />
                            <h3>Category</h3>
                            <select
                              name=""
                              key={singleCard.Ad_Category}
                              id="inputGroupSelect"
                              className="w-50 p-2"
                              onChange={(event) => {
                                categories = event.target.value.split(",");
                                setNewSubCategory(categories[0]);
                                setNewCategory(categories[1]);
                              }}
                            >
                              <option value={singleCard.Ad_Sub_Category}>
                                {singleCard.Ad_Sub_Category}
                              </option>
                              {categoryList.map((val) => {
                                return (
                                  <option
                                    value={[
                                      val.Sub_Category,
                                      val.Primary_Category,
                                    ]}
                                  >
                                    {val.Sub_Category}
                                  </option>
                                );
                              })}
                            </select>
                            <button
                              type="button"
                              className="btn btn-success py-2"
                              onClick={() => {
                                editAdCategory(singleCard.Card);
                              }}
                            >
                              Update
                            </button>
                            <br />
                            <br />
                            <h3>Brand</h3>
                            <select
                              name=""
                              key={singleCard.Ad_Brand}
                              id="inputGroupSelect"
                              className="w-50 p-2"
                              onChange={(event) => {
                                setNewBrand(event.target.value);
                              }}
                            >
                              <option value={singleCard.Ad_Brand}>
                                {singleCard.Ad_Brand}
                              </option>
                              {brandList.map((val) => {
                                return (
                                  <option value={val.Brand}>{val.Brand}</option>
                                );
                              })}
                            </select>
                            <button
                              type="button"
                              className="btn btn-success py-2"
                              onClick={() => {
                                editAdBrand(singleCard.Card);
                              }}
                            >
                              Update
                            </button>
                            <br />
                            <br />
                            <div>
                              <h3>Status</h3>
                              <select
                                name=""
                                id="inputGroupSelect"
                                className="w-50 p-2"
                                onChange={(event) => {
                                  setNewStatus(event.target.value);
                                }}
                              >
                                <option value={singleCard.Ad_Status}>
                                  {singleCard.Ad_Status}
                                </option>
                                <option value="Active">Active</option>
                                <option value="Sold">Sold</option>
                                <option value="Ship">Ship</option>
                                <option value="No Ship">No Ship</option>
                              </select>
                              <button
                                type="button"
                                className="btn btn-success py-2"
                                onClick={() => {
                                  editAdStatus(singleCard.Card);
                                }}
                              >
                                Update
                              </button>
                            </div>
                            <br />
                            <h3>Sizes</h3>
                            <div>
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
                              <button
                                type="button"
                                className="btn btn-success py-2"
                                onClick={() => {
                                  editAdSizes(singleCard.Card);
                                }}
                              >
                                Update
                              </button>
                            </div>
                            <br />

                            <h3>Description</h3>
                            <textarea
                              name=""
                              id=""
                              className="border p-3 w-100"
                              rows="7"
                              defaultValue={singleCard.Ad_Description}
                              onChange={(event) => {
                                setNewDescription(event.target.value);
                              }}
                            ></textarea>
                          </div>
                          <div className="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                              onClick={() => {
                                window.location.reload(false);
                              }}
                            >
                              Close
                            </button>
                            {/*<button
                              type="button"
                              className="btn btn-success"
                              onClick={() => {
                                editAdName(singleCard.Card);
                              }}
                              data-dismiss="modal"
                            >
                              Update
                            </button>*/}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*Modal for delete item*/}
                    <div
                      className="modal fade"
                      id="deleteaccount"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
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
                          <div className="modal-body text-center">
                            <img
                              src="images/account/Account1.png"
                              className="img-fluid mb-2"
                              alt=""
                            />
                            <h6 className="py-2">
                              Are you sure you want to delete this item?
                            </h6>
                            <p>
                              Do you really want to delete these records? This
                              process cannot be undone.
                            </p>
                          </div>
                          <div className="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-dismiss="modal"
                              onClick={() => {
                                deleteAd(
                                  singleCard.Card,
                                  singleCard.Ad_Image_ID
                                );
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
            {/*Ad list*/}
          </tbody>
        </table>
      </div>

      <div className="pagination justify-content-center">
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
      </div>
    </div>
  );
}

export default MyAds;
