import "./menuCard.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../services/api";

function MenuCard() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`${apiURL}/menu`);
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <div className="row menu-card-row1">
        <div className="container menu-card-container">
          <div className="row row-cols-1 row-cols-md-3 menu-card-row-cols g-4">
            {menu.map((menuItem) => (
              <div className="col menu-card-col" key={menuItem._id}>
                <div className="card menu-card">
                  <img
                    className="menu-card-img"
                    src={`/nmenu/${menuItem.image}`}
                    alt={menuItem.adminCategory}
                  />
                  <div className="card-body menu-card-body">
                    <div className="menu-card-title-container">
                      <h5 className="card-title menu-card-title">
                        {menuItem.adminCategory}
                      </h5>
                    </div>
                    <div className="menu-card-text-container">
                      <p className="card-text menu-card-text">
                        All ranges of {menuItem.description.toLowerCase()}{" "}
                        available
                      </p>
                      <p className="card-text menu-card-text">
                        {menuItem.items
                          ? menuItem.items.split(", ").map((item, index) => (
                              <span key={index}>
                                {item}
                                {index !==
                                  menuItem.items.split(", ").length - 1 && ", "}
                              </span>
                            ))
                          : "No items available"}{" "}
                        and much more...
                      </p>
                    </div>
                    <div className="menu-card-btn-container">
                      <Link
                        to={`/menu/${menuItem.adminCategory
                          .trim()
                          .toLowerCase()}`}
                        className="btn btn-outline-light menu-card-btn"
                      >
                        View Menu
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCard;
