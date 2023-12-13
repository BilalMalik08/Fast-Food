import React, { useState } from "react";
import "./adminSideBar2.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUtensils,
  faPizzaSlice,
  faPeopleGroup,
  faCog,
  faThumbsUp,
  faBars, // Hamburger icon
} from "@fortawesome/free-solid-svg-icons";

function AdminSideBar2() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`d-flex ${sidebarOpen ? "toggled" : ""}`} id="wrapper">
        <div className="bg-light border-right col-md-2" id="sidebar">
          <div className="list-group admin-side-bar">
            <Link
              to="/dashboard"
              className="list-group-item side-bar-list list-group-item-action !active"
            >
              <FontAwesomeIcon className="adminSidebar-icons" icon={faList} />
              {"Dashboard"}
            </Link>
            <Link
              to="/adminmenu"
              className="list-group-item side-bar-list list-group-item-action"
            >
              <FontAwesomeIcon
                className="adminSidebar-icons"
                icon={faUtensils}
              />
              {"Menu"}
            </Link>
            <Link
              to="/orders"
              className="list-group-item side-bar-list list-group-item-action"
            >
              <FontAwesomeIcon
                className="adminSidebar-icons"
                icon={faPizzaSlice}
              />
              {"Orders"}
            </Link>
            <Link
              to="/customers"
              className="list-group-item side-bar-list list-group-item-action"
            >
              <FontAwesomeIcon
                className="adminSidebar-icons"
                icon={faPeopleGroup}
              />
              {"Customers"}
            </Link>
            <Link
              to="/settings"
              className="list-group-item side-bar-list list-group-item-action"
            >
              <FontAwesomeIcon className="adminSidebar-icons" icon={faCog} />
              {"Settings"}
            </Link>
            <Link
              to="/feedbacks"
              className="list-group-item side-bar-list list-group-item-action"
            >
              <FontAwesomeIcon
                className="adminSidebar-icons"
                icon={faThumbsUp}
              />
              {"Feedbacks"}
            </Link>
          </div>
          <div className="hamburger-container">
            <button
              className="btn btn-light"
              id="menu-toggle"
              onClick={handleToggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <div id="page-content-wrapper">{/* Your page content goes here */}</div>
      </div>
    </>
  );
}

export default AdminSideBar2;
