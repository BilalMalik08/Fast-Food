import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalBurger from "./EditFormModalBurger";

function BurgerMenuEditComp() {
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedBurger, setEditedBurger] = useState({});
  const [burgerItems, setBurgerItems] = useState([
    {
      id: 1,
      image: require("../Img/burgers/ClasicBeefBurger.jpg"),
      name: "Classic Beef Burger",
      description:
        "Juicy beef patty, lettuce, tomato, onion, and special sauce.",
      price: 349,
      basePrice: 349,
    },
    {
      id: 2,
      image: require("../Img/burgers/CrispyChickenBurger.jpg"),
      name: "Crispy Chicken Burger",
      description: "Crispy chicken fillet, lettuce, mayo, and pickles.",
      price: 299,
      basePrice: 299,
    },
    {
      id: 3,
      image: require("../Img/burgers/VeggieDelightBurger.jpg"),
      name: "Veggie Delight Burger",
      description: "Vegetarian patty, lettuce, tomato, and special sauce.",
      price: 249,
      basePrice: 249,
    },
    {
      id: 4,
      image: require("../Img/burgers/SpicyBeefSensation.jpg"),
      name: "Spicy Beef Sensation",
      description: "Spicy beef patty, jalapenos, lettuce, and chipotle sauce.",
      price: 369,
      basePrice: 369,
    },
    {
      id: 5,
      image: require("../Img/burgers/CheeseLover'sBurger.jpg"),
      name: "Cheese Lover's Burger",
      description: "Beef patty, cheddar cheese, lettuce, and ketchup.",
      price: 329,
      basePrice: 329,
    },
    {
      id: 6,
      image: require("../Img/burgers/MushroomMeltBurger.jpg"),
      name: "Mushroom Melt Burger",
      description: "Beef patty, sautéed mushrooms, Swiss cheese, and mayo.",
      price: 389,
      basePrice: 389,
    },
    {
      id: 7,
      image: require("../Img/burgers/GoldenFishBurger.jpg"),
      name: "Golden Fish Burger",
      description: "Breaded fish fillet, lettuce, tartar sauce, and pickles.",
      price: 319,
      basePrice: 319,
    },
    {
      id: 8,
      image: require("../Img/burgers/UltimateMeatFeast.jpg"),
      name: "Ultimate Meat Feast",
      description:
        "Double beef patties, bacon, cheese, lettuce, and BBQ sauce.",
      price: 449,
      basePrice: 449,
    },
    {
      id: 9,
      image: require("../Img/burgers/VeggieDeluxeBurger.jpg"),
      name: "Veggie Deluxe Burger",
      description:
        "Deluxe vegetarian patty, lettuce, tomato, and special sauce.",
      price: 279,
      basePrice: 279,
    },
    {
      id: 10,
      image: require("../Img/burgers/TandooriChickenBurger.jpg"),
      name: "Tandoori Chicken Burger",
      description:
        "Tandoori-spiced chicken fillet, lettuce, yogurt sauce, and pickles.",
      price: 329,
      basePrice: 329,
    },
    {
      id: 11,
      image: require("../Img/burgers/BeefMeltSupreme.jpg"),
      name: "Beef Melt Supreme",
      description: "Beef patty, melted Swiss cheese, sautéed onions, and mayo.",
      price: 369,
      basePrice: 369,
    },
    {
      id: 12,
      image: require("../Img/burgers/PaneerParadiseBurger.jpg"),
      name: "Paneer Paradise Burger",
      description: "Paneer patty, lettuce, tomato, and special sauce.",
      price: 299,
      basePrice: 299,
    },
    {
      id: 13,
      image: require("../Img/burgers/SpicyChickenFiesta.jpg"),
      name: "Spicy Chicken Fiesta",
      description:
        "Spicy chicken fillet, jalapenos, lettuce, and chipotle sauce.",
      price: 339,
      basePrice: 339,
    },
    {
      id: 14,
      image: require("../Img/burgers/VeggieSupremeDelight.jpg"),
      name: "Veggie Supreme Delight",
      description:
        "Supreme vegetarian patty, lettuce, tomato, and special sauce.",
      price: 289,
      basePrice: 289,
    },
    {
      id: 15,
      image: require("../Img/burgers/BeefBaconBliss.jpg"),
      name: "Beef Bacon Bliss",
      description: "Beef patty, crispy bacon, lettuce, and BBQ sauce.",
      price: 399,
      basePrice: 399,
    },
  ]);

  const handleEdit = (burger) => {
    setEditedBurger(burger);
    setShowModal(true);
  };

  const handleSave = (editedBurgerDetails) => {
    // Update the burger details in the state
    const updatedBurgerItems = burgerItems.map((burger) =>
      burger.id === editedBurgerDetails.id ? editedBurgerDetails : burger
    );

    setBurgerItems(updatedBurgerItems); // Update the state with the updated burger items
    setShowModal(false); // Close the modal after saving changes
  };

  const deleteBurgerItem = (itemId) => {
    const updatedBurgerItems = burgerItems.filter(
      (burger) => burger.id !== itemId
    );
    setBurgerItems(updatedBurgerItems);
  };

  function calculatePrice(basePrice, quantity) {
    const adjustedPrice = basePrice * quantity;
    return adjustedPrice.toFixed(2); // Assuming the price is in PKR, and you want to round to 2 decimal places
  }

  return (
    <>
      <div className="container food-item-container admin-food-item-container">
        {burgerItems.map((burger) => (
          <div className="card admin-food-item-card mb-4" key={burger.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={burger.image}
                  className="img-fluid admin-food-item-img"
                  alt={burger.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {burger.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {burger.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(burger.price, quantities[burger.id] || 1)}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(burger)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    type="button"
                    onClick={() => deleteBurgerItem(burger.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalBurger
        show={showModal}
        handleClose={() => setShowModal(false)}
        burger={editedBurger}
        onSave={handleSave}
      />
    </>
  );
}

export default BurgerMenuEditComp;
