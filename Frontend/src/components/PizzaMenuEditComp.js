import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalPizza from "./EditFormModalPizza";

function PizzaMenuEditComp() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedPizza, setEditedPizza] = useState({});
  const [pizzaItems, setPizzaItems] = useState([
    {
      image: require("../Img/pizzas/margheritaPizza.jpeg"),
      id: 1,
      name: "Margherita Pizza",
      description: "Classic tomato sauce, mozzarella cheese, and basil leaves.",
      price: 1299,
      basePrice: 1299,
    },
    {
      id: 2,
      image: require("../Img/pizzas/pepperoniPizza.jpg"),
      name: "Pepperoni Pizza",
      description:
        "Tomato sauce, pepperoni slices, mozzarella cheese, and spices.",
      price: 1350,
      basePrice: 1350,
    },
    {
      id: 3,
      image: require("../Img/pizzas/vegetarianPizza.jpg"),
      name: "Vegetarian Pizza",
      description:
        "Tomato sauce, mushrooms, bell peppers, onions, olives, and mozzarella cheese.",
      price: 1199,
      basePrice: 1199,
    },
    {
      id: 4,
      image: require("../Img/pizzas/bbqChickenPizza.jpg"),
      name: "BBQ Chicken Pizza",
      description:
        "Barbecue sauce, grilled chicken, red onions, and mozzarella cheese.",
      price: 1750,
      basePrice: 1750,
    },
    {
      image: require("../Img/pizzas/hawaiianPizza.jpg"),
      id: 5,
      name: "Hawaiian Pizza",
      description: "Tomato sauce, ham, pineapple, and mozzarella cheese.",
      price: 1650,
      basePrice: 1650,
    },
    {
      id: 6,
      image: require("../Img/pizzas/meatLover'sPizza.jpg"),
      name: "Meat Lover's Pizza",
      description:
        "Tomato sauce, pepperoni, sausage, bacon, and mozzarella cheese.",
      price: 1799,
      basePrice: 1799,
    },
    {
      id: 7,
      image: require("../Img/pizzas/supremePizza.jpg"),
      name: "Supreme Pizza",
      description:
        "Tomato sauce, pepperoni, sausage, mushrooms, bell peppers, onions, olives, and mozzarella cheese.",
      price: 1399,
      basePrice: 1399,
    },
    {
      id: 8,
      image: require("../Img/pizzas/whitePizza.jpg"),
      name: "White Pizza",
      description:
        "Olive oil base, ricotta cheese, garlic, spinach, and mozzarella cheese.",
      price: 1250,
      basePrice: 1250,
    },
    {
      id: 9,
      image: require("../Img/pizzas/buffaloChickenPizza.jpg"),
      name: "Buffalo Chicken Pizza",
      description:
        "Buffalo sauce, grilled chicken, red onions, and mozzarella cheese.",
      price: 1499,
      basePrice: 1499,
    },
    {
      image: require("../Img/pizzas/mushroomPizza.jpg"),
      id: 10,
      name: "Mushroom Pizza",
      description: "Tomato sauce, mushrooms, garlic, and mozzarella cheese.",
      price: 1299,
      basePrice: 1299,
    },
    {
      id: 11,
      image: require("../Img/pizzas/pestoPizza.jpg"),
      name: "Pesto Pizza",
      description:
        "Pesto sauce, cherry tomatoes, spinach, and mozzarella cheese.",
      price: 1550,
      basePrice: 1550,
    },
    {
      id: 12,
      image: require("../Img/pizzas/fourCheesePizza.jpg"),
      name: "Four Cheese Pizza",
      description:
        "Tomato sauce, mozzarella, cheddar, parmesan, and feta cheese.",
      price: 1399,
      basePrice: 1399,
    },
    {
      id: 13,
      image: require("../Img/pizzas/trufflePizza.jpg"),
      name: "Truffle Pizza",
      description:
        "Truffle oil, mushrooms, caramelized onions, and mozzarella cheese.",
      price: 1450,
      basePrice: 1450,
    },
    {
      id: 14,
      image: require("../Img/pizzas/seaFoodPizza.jpg"),
      name: "Seafood Pizza",
      description:
        "Tomato sauce, shrimp, clams, mussels, and mozzarella cheese.",
      price: 1500,
      basePrice: 1500,
    },
    {
      id: 15,
      image: require("../Img/pizzas/barbecueBeefPizza.jpg"),
      name: "Barbecue Beef Pizza",
      description:
        "Barbecue sauce, beef strips, red onions, and mozzarella cheese.",
      price: 1699,
      basePrice: 1699,
    },
  ]);

  const handleEdit = (pizza) => {
    setEditedPizza(pizza);
    setShowModal(true);
  };

  const handleSave = (editedPizzaDetails) => {
    // Update the pizza details in the state
    const updatedPizzaItems = pizzaItems.map((pizza) =>
      pizza.id === editedPizzaDetails.id ? editedPizzaDetails : pizza
    );

    setPizzaItems(updatedPizzaItems); // Update the state with the updated pizza items
    setShowModal(false); // Close the modal after saving changes
  };

  const deletePizzaItem = (itemId) => {
    const updatedPizzaItems = pizzaItems.filter((pizza) => pizza.id !== itemId);
    setPizzaItems(updatedPizzaItems);
  };

  const handleSizeChange = (itemId, newSize) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: newSize });
  };

  function calculatePrice(selectedSize, basePrice, quantity) {
    const sizeFactors = {
      small: 1,
      medium: 1.2,
      large: 1.5,
    };

    const adjustedPrice = basePrice * sizeFactors[selectedSize] * quantity;
    return adjustedPrice.toFixed(2); // Assuming the price is in PKR, and you want to round to 2 decimal places
  }

  return (
    <>
      <div className="container food-item-container">
        {pizzaItems.map((pizza) => (
          <div className="card admin-food-item-card mb-4" key={pizza.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={pizza.image}
                  className="img-fluid admin-food-item-img"
                  alt={pizza.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {pizza.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {pizza.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      selectedSizes[pizza.id] || "small",
                      pizza.price,
                      quantities[pizza.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(pizza)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    type="button"
                    onClick={() => deletePizzaItem(pizza.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalPizza
        show={showModal}
        handleClose={() => setShowModal(false)}
        pizza={editedPizza}
        onSave={handleSave}
      />
    </>
  );
}
export default PizzaMenuEditComp;
