import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
export { numTotalItems };

let numTotalItems = 0;

function ViewColorsComponent() {
  const [colorList, setColorList] = useState([]);
  const [singleCard, setSingleCard] = useState("");
  //const [singleAdList, setSingleAdList] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [color, setColor] = useState("");

  // number of items on page, export to user profile
  numTotalItems = colorList.length;

  const getColors = () => {
    Axios.get("http://localhost:3001/GetColors").then((response) => {
      setColorList(response.data);
    });
  };

  const editColor = (id) => {
    Axios.put("http://localhost:3001/EditColor", {
      color: newColor,
      id: id,
    });
    window.location.reload(false);
  };

  const deleteColor = (id) => {
    Axios.delete(`http://localhost:3001/DeleteColor/${id}`);
    window.location.reload(false);
  };

  const createColor = () => {
    Axios.post("http://localhost:3001/CreateColor", {
      color: color,
    }).then(() => {
      alert("Item Uploaded");
      window.location.reload(false);
    });
  };

  useEffect(() => getColors(), []);

  return (
    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
      <div className="widget dashboard-container my-adslist">
        <h3 className="widget-header">All Items</h3>
        <div className="row pb-3">
          <div className="col-sm">
            <label>Color:&nbsp;</label>
            <input
              type="text"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            ></input>
          </div>

          <button
            className="font-weight-bold text-success"
            onClick={createColor}
          >
            <i className="fa fa-plus-circle"></i> Add Color
          </button>
        </div>
        <table className="table table-responsive product-dashboard-table">
          <thead>
            <tr>
              <th>Color</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/*Ad list*/}
            {colorList.map((val) => {
              return (
                <tr>
                  <td className="product-details">
                    <h3 className="title">{val.Color}</h3>
                  </td>

                  <td className="action" data-title="Action">
                    <div className="">
                      <ul className="list-inline justify-content-center">
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
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body text-center">
                            <input
                              type="text"
                              defaultValue={singleCard.Color}
                              className="border w-50 p-2 bg-white text-capitalize"
                              onChange={(event) => {
                                setNewColor(event.target.value);
                              }}
                            />
                            <h3></h3>
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
                              className="btn btn-success"
                              onClick={() => {
                                editColor(singleCard.Color_ID);
                              }}
                              data-dismiss="modal"
                            >
                              Update
                            </button>
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
                                deleteColor(singleCard.Color_ID);
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
    </div>
  );
}

export default ViewColorsComponent;
