import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
export { numTotalItems };

let numTotalItems = 0;

function ViewScentsComponent() {
  const [scentList, setScentList] = useState([]);
  const [singleCard, setSingleCard] = useState("");
  //const [singleAdList, setSingleAdList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // number of items on page, export to user profile
  numTotalItems = scentList.length;

  const getScents = () => {
    Axios.get("http://localhost:3001/GetScents").then((response) => {
      setScentList(response.data);
    });
  };

  const editScent = (id) => {
    Axios.put("http://localhost:3001/EditScent", {
      name: newName,
      description: newDescription,
      id: id,
    });
    window.location.reload(false);
  };

  const deleteScent = (id) => {
    Axios.delete(`http://localhost:3001/DeleteScent/${id}`);
    window.location.reload(false);
  };

  const createScent = () => {
    Axios.post("http://localhost:3001/CreateScent", {
      name: name,
      description: description,
    }).then(() => {
      alert("Item Uploaded");
      window.location.reload(false);
    });
  };

  useEffect(() => getScents(), []);

  return (
    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
      <div className="widget dashboard-container my-adslist">
        <h3 className="widget-header">All Items</h3>
        <div className="row pb-3">
          <div className="col-sm">
            <label>Scent Name:&nbsp;</label>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
          </div>
          <div className="col-sm">
            <label className="pl-3">Description:&nbsp;</label>
            <input
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></input>
          </div>
          <button
            className="font-weight-bold text-success"
            onClick={createScent}
          >
            <i className="fa fa-plus-circle"></i> Add Scent
          </button>
        </div>
        <table className="table table-responsive product-dashboard-table">
          <thead>
            <tr>
              <th>Scent</th>
              <th className="text-center">Description</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/*Ad list*/}
            {scentList.map((val) => {
              return (
                <tr>
                  <td className="product-details">
                    <h3 className="title">{val.Scent}</h3>
                  </td>
                  <td className="product-category">
                    <span className="categories">{val.Description}</span>
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
                              defaultValue={singleCard.Scent}
                              className="border w-50 p-2 bg-white text-capitalize"
                              onChange={(event) => {
                                setNewName(event.target.value);
                              }}
                            />
                            <h3></h3>

                            <textarea
                              name=""
                              id=""
                              className="border p-3 w-100"
                              rows="7"
                              defaultValue={singleCard.Description}
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
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => {
                                editScent(singleCard.Scent_ID);
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
                                deleteScent(singleCard.Scent_ID);
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

export default ViewScentsComponent;
