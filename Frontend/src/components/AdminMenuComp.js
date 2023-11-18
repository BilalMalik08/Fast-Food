import "./adminMenuComp.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AdminMenuComp() {
  const [menu, setMenu] = useState([
    {
      image: require("../Img/pizza.jpg"),
      adminCategory: "Pizzas",
      items: [
        "Pepperoni Pizza",
        "Veggie Pizza",
        "Cheese Pizza",
        "BBQ Chicken Pizza",
      ],
    },
    {
      image: require("../Img/burger.jpg"),
      adminCategory: "Burgers",
      items: ["Zinger Burger", "Chicken Burger", "BBQ Burger", "Crunch Burger"],
    },
    {
      image: require("../Img/sandwich.jpg"),
      adminCategory: "Sandwiches",
      items: [
        "Grilled Cheese Sandwich",
        "Club Sandwich",
        "Chicken Sandwich",
        "Smoked Salmon Sandwich",
      ],
    },
    {
      image: require("../Img/chicken.jpg"),
      adminCategory: "Chickens",
      items: [
        "Extra Crispy Chicken",
        "Spicy Nuggets",
        "Hot Shots",
        "Hot Wings",
      ],
    },
    {
      image: require("../Img/chowmein.jpg"),
      adminCategory: "Chowmeins",
      items: [
        "Chicken Chowmein",
        "Beef Chowmein",
        "Vegetable Chowmein",
        "Special Chowmein",
      ],
    },
    {
      image: require("../Img/spup.jpg"),
      adminCategory: "Soups",
      items: [
        "Chicken Corn Soup",
        "Chicken Soup",
        "Potato Soup",
        "Hot n Sour Soup",
      ],
    },
    {
      image: require("../Img/icecream.jpg"),
      adminCategory: "IceCreams",
      items: [
        "Vanilla Ice Cream",
        "Chocolate Ice Cream",
        "Strawberry Ice Cream",
        "Pista Ice Cream",
      ],
    },
    {
      image: require("../Img/colddrinks.jpg"),
      adminCategory: "ColdDrinks",
      items: ["Mint Margarita", "Shakes", "Lemonade", "Regular Drinks"],
    },
    {
      image: require("../Img/hotdrinks.jpg"),
      adminCategory: "HotDrinks",
      items: ["Vanilla Chai Latte", "Hot Chocolate", "Ginger Tea", "Green Tea"],
    },
  ]);

  const deleteCategory = (category) => {
    const updatedMenu = menu.filter((item) => item.adminCategory !== category);
    setMenu(updatedMenu);
  };

  return (
    <>
      <div className="row menu-card-row1">
        <div className="container-fluid menu-card-container">
          <div className="row row-cols-1 row-cols-md-2 menu-card-row-cols g-4">
            {menu.map((menu) => (
              <div
                className="col menu-card-col admin-menu-card-col"
                key={menu.adminCategory}
              >
                <div className="card menu-card admin-menu-card">
                  <img
                    className="menu-card-img"
                    src={menu.image}
                    alt={menu.adminCategory}
                  />
                  <div className="card-body menu-card-body">
                    <div className="menu-card-title-container">
                      <h5 className="card-title menu-card-title">
                        {menu.adminCategory}
                      </h5>
                    </div>
                    <div className="menu-card-text-container">
                      <p className="card-text menu-card-text">
                        All ranges of {menu.adminCategory.toLowerCase()}{" "}
                        available
                      </p>
                      <p className="card-text menu-card-text">
                        {menu.items.join(", ")} and much more...
                      </p>
                    </div>
                    <div className="menu-card-btn-container">
                      <Link
                        to={`/admin/menu/${menu.adminCategory
                          .trim()
                          .toLowerCase()}`}
                      >
                        <button
                          className="btn btn-outline-dark menu-card-btn admin-menu-card-btn"
                          type="submit"
                        >
                          Edit Menu
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-danger menu-card-btn"
                        type="button"
                        onClick={() => deleteCategory(menu.adminCategory)}
                      >
                        Delete Category
                      </button>
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

export default AdminMenuComp;
