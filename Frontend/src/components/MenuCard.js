import "./menuCard.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MenuCard() {
  const menu = [
    {
      image: require("../Img/pizza.jpg"),
      category: "Pizzas",
      items: [
        "Pepperoni Pizza",
        "Veggie Pizza",
        "Cheese Pizza",
        "BBQ Chicken Pizza",
      ],
    },
    {
      image: require("../Img/burger.jpg"),
      category: "Burgers",
      items: ["Zinger Burger", "Chicken Burger", "BBQ Burger", "Crunch Burger"],
    },
    {
      image: require("../Img/sandwich.jpg"),
      category: "Sandwiches",
      items: [
        "Grilled Cheese Sandwich",
        "Club Sandwich",
        "Chicken Sandwich",
        "Smoked Salmon Sandwich",
      ],
    },
    {
      image: require("../Img/chicken.jpg"),
      category: "Chickens",
      items: [
        "Extra Crispy Chicken",
        "Spicy Nuggets",
        "Hot Shots",
        "Hot Wings",
      ],
    },
    {
      image: require("../Img/chowmein.jpg"),
      category: "Chowmeins",
      items: [
        "Chicken Chowmein",
        "Beef Chowmein",
        "Vegetable Chowmein",
        "Special Chowmein",
      ],
    },
    {
      image: require("../Img/spup.jpg"),
      category: "Soups",
      items: [
        "Chicken Corn Soup",
        "Chicken Soup",
        "Potato Soup",
        "Hot n Sour Soup",
      ],
    },
    {
      image: require("../Img/icecream.jpg"),
      category: "IceCreams",
      items: [
        "Vanilla Ice Cream",
        "Chocolate Ice Cream",
        "Strawberry Ice Cream",
        "Pista Ice Cream",
      ],
    },
    {
      image: require("../Img/colddrinks.jpg"),
      category: "ColdDrinks",
      items: ["Mint Margarita", "Shakes", "Lemonade", "Regular Drinks"],
    },
    {
      image: require("../Img/hotdrinks.jpg"),
      category: "HotDrinks",
      items: ["Vanilla Chai Latte", "Hot Chocolate", "Ginger Tea", "Green Tea"],
    },
  ];

  return (
    <>
      <div className="row menu-card-row1">
        <div className="container menu-card-container">
          <div className="row row-cols-1 row-cols-md-3 menu-card-row-cols g-4">
            {menu.map((menu) => (
              <div className="col menu-card-col" key={menu.category}>
                <div className="card menu-card">
                  <img
                    className="menu-card-img"
                    src={menu.image}
                    alt={menu.category}
                  />
                  <div className="card-body menu-card-body">
                    <div className="menu-card-title-container">
                      <h5 className="card-title menu-card-title">
                        {menu.category}
                      </h5>
                    </div>
                    <div className="menu-card-text-container">
                      <p className="card-text menu-card-text">
                        All ranges of {menu.category.toLowerCase()} available
                      </p>
                      <p className="card-text menu-card-text">
                        {menu.items.join(", ")} and much more...
                      </p>
                    </div>
                    <div className="menu-card-btn-container">
                      <Link to={`/menu/${menu.category.trim().toLowerCase()}`}>
                        <button
                          className="btn btn-outline-dark menu-card-btn"
                          type="submit"
                        >
                          View Menu
                        </button>
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
