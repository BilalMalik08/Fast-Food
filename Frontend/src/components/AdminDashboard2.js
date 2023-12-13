import React, { useState } from "react";
import "./adminDashboard2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar"; // Import the Calendar component
import "react-calendar/dist/Calendar.css"; // Import the Calendar styles
import row3dummypic1 from "../Img/dummypics/row3dummypic1.png";
import row3dummypic2 from "../Img/dummypics/row3dummypic2.png";

function AdminDashboard2() {
  const [date, setDate] = useState(new Date()); // State to manage the selected date

  return (
    <>
      <div
        className="row adminDashboard-row1"
        style={{ overflowY: "scroll", maxHeight: "83vh" }}
      >
        <div className="col col-md-8">
          <div className="row adminDashboard-row2">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body" style={{ color: "#3498db" }}>
                  <FontAwesomeIcon icon={faUser} size="1x" />
                  <p className="card-title-small" style={{ color: "#3498db" }}>
                    Customers
                  </p>
                  <p className="card-text">500</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body" style={{ color: "#e74c3c" }}>
                  <FontAwesomeIcon icon={faClipboardList} size="1x" />
                  <p className="card-title-small" style={{ color: "#e74c3c" }}>
                    Orders
                  </p>
                  <p className="card-text">650</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body" style={{ color: "#2ecc71" }}>
                  <FontAwesomeIcon icon={faTruck} size="1x" />
                  <p className="card-title-small" style={{ color: "#2ecc71" }}>
                    Delivery
                  </p>
                  <p className="card-text">711</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body" style={{ color: "#f39c12" }}>
                  <FontAwesomeIcon icon={faUsers} size="1x" />
                  <p className="card-title-small" style={{ color: "#f39c12" }}>
                    Users
                  </p>
                  <p className="card-text">1000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row adminDashboard-row3">
            <div className="col-md-12 d-flex justify-content-center">
              <div
                className="image-container"
                style={{ height: "27vh", width: "100%" }}
              >
                <img
                  src={row3dummypic1}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div
                className="image-container"
                style={{ height: "27vh", width: "100%" }}
              >
                <img
                  src={row3dummypic2}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4"></div>
        <div className="row adminDashboard-row4">
          <div className="col cols-md-2" style={{ margin: "10px" }}>
            <Calendar
              onChange={setDate}
              value={date}
              className="w-70"
              style={{ height: "27vh" }}
            />
          </div>
          <div className="col cols-md-9"></div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard2;
