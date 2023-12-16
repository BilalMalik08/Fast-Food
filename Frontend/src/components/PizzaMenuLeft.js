import "./foodMenu.css";
import React, { useState, useContext } from "react";
import { CartContext } from "./CartState";
import AddToCartSuccessPopup from "./AddToCartSuccessPopup";

function PizzaMenuLeft() {
  const { cartItems, addToCart } = useContext(CartContext);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const pizza = [
    {
      image: require("../Img/pizzas/margheritaPizza.jpeg"),
      id: 1,
      name: "Margherita Pizza",
      description: "Classic tomato sauce, mozzarella cheese, and basil leaves.",
      price: "1299 PKR",
      basePrice: 1299,
    },
    {
      id: 2,
      image: require("../Img/pizzas/pepperoniPizza.jpg"),
      name: "Pepperoni Pizza",
      description:
        "Tomato sauce, pepperoni slices, mozzarella cheese, and spices.",
      price: "1350 PKR",
      basePrice: 1350,
    },
    {
      id: 3,
      image: require("../Img/pizzas/vegetarianPizza.jpg"),
      name: "Vegetarian Pizza",
      description:
        "Tomato sauce, mushrooms, bell peppers, onions, olives, and mozzarella cheese.",
      price: "1199 PKR",
      basePrice: 1199,
    },
    {
      id: 4,
      image: require("../Img/pizzas/bbqChickenPizza.jpg"),
      name: "BBQ Chicken Pizza",
      description:
        "Barbecue sauce, grilled chicken, red onions, and mozzarella cheese.",
      price: "1750 PKR",
      basePrice: 1750,
    },
    {
      image: require("../Img/pizzas/hawaiianPizza.jpg"),
      id: 5,
      name: "Hawaiian Pizza",
      description: "Tomato sauce, ham, pineapple, and mozzarella cheese.",
      price: "1650 PKR",
      basePrice: 1650,
    },
    {
      id: 6,
      image: require("../Img/pizzas/meatLover'sPizza.jpg"),
      name: "Meat Lover's Pizza",
      description:
        "Tomato sauce, pepperoni, sausage, bacon, and mozzarella cheese.",
      price: "1799 PKR",
      basePrice: 1799,
    },
    {
      id: 7,
      image: require("../Img/pizzas/supremePizza.jpg"),
      name: "Supreme Pizza",
      description:
        "Tomato sauce, pepperoni, sausage, mushrooms, bell peppers, onions, olives, and mozzarella cheese.",
      price: "1399 PKR",
      basePrice: 1399,
    },
    {
      id: 8,
      image: require("../Img/pizzas/whitePizza.jpg"),
      name: "White Pizza",
      description:
        "Olive oil base, ricotta cheese, garlic, spinach, and mozzarella cheese.",
      price: "1250 PKR",
      basePrice: 1250,
    },
    {
      id: 9,
      image: require("../Img/pizzas/buffaloChickenPizza.jpg"),
      name: "Buffalo Chicken Pizza",
      description:
        "Buffalo sauce, grilled chicken, red onions, and mozzarella cheese.",
      price: "1499 PKR",
      basePrice: 1499,
    },
    {
      image: require("../Img/pizzas/mushroomPizza.jpg"),
      id: 10,
      name: "Mushroom Pizza",
      description: "Tomato sauce, mushrooms, garlic, and mozzarella cheese.",
      price: "1299 PKR",
      basePrice: 1299,
    },
    {
      id: 11,
      image: require("../Img/pizzas/pestoPizza.jpg"),
      name: "Pesto Pizza",
      description:
        "Pesto sauce, cherry tomatoes, spinach, and mozzarella cheese.",
      price: "1550 PKR",
      basePrice: 1550,
    },
    {
      id: 12,
      image: require("../Img/pizzas/fourCheesePizza.jpg"),
      name: "Four Cheese Pizza",
      description:
        "Tomato sauce, mozzarella, cheddar, parmesan, and feta cheese.",
      price: "1399 PKR",
      basePrice: 1399,
    },
    {
      id: 13,
      image: require("../Img/pizzas/trufflePizza.jpg"),
      name: "Truffle Pizza",
      description:
        "Truffle oil, mushrooms, caramelized onions, and mozzarella cheese.",
      price: "1450 PKR",
      basePrice: 1450,
    },
    {
      id: 14,
      image: require("../Img/pizzas/seaFoodPizza.jpg"),
      name: "Seafood Pizza",
      description:
        "Tomato sauce, shrimp, clams, mussels, and mozzarella cheese.",
      price: "1500 PKR",
      basePrice: 1500,
    },
    {
      id: 15,
      image: require("../Img/pizzas/barbecueBeefPizza.jpg"),
      name: "Barbecue Beef Pizza",
      description:
        "Barbecue sauce, beef strips, red onions, and mozzarella cheese.",
      price: "1699 PKR",
      basePrice: 1699,
    },
  ];

  const handleSizeChange = (itemId, newSize) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: newSize });
  };

  const handleAddToCart = (pizza) => {
    const existingItem = cartItems.find(
      (item) =>
        item.id === pizza.id &&
        item.size === selectedSizes[pizza.id] &&
        item.quantity === quantities[pizza.id]
    );

    if (existingItem) {
      setPopupMessage(`${pizza.name} is already in your cart`);
      setShowPopup(true);
    } else {
      const totalPrice = calculatePrice(
        selectedSizes[pizza.id] || "small",
        pizza.basePrice,
        quantities[pizza.id] || 1
      );

      addToCart({
        id: pizza.id,
        name: pizza.name,
        image: pizza.image,
        description: pizza.description,
        price: totalPrice,
        size: selectedSizes[pizza.id] || "small",
        quantity: quantities[pizza.id] || 1,
        basePrice: pizza.basePrice,
      });

      setPopupMessage(`${pizza.name} added to cart`);
      setShowPopup(true);
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 1500);
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
        {pizza.map((pizza) => (
          <div className="card food-item-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={pizza.image}
                  className="img-fluid food-item-img"
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
                      pizza.basePrice,
                      quantities[pizza.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <div className="button-select-quantity">
                    <button
                      className="btn btn-outline-light"
                      onClick={() => handleAddToCart(pizza)}
                    >
                      Add to Cart
                    </button>
                    <select
                      name="size"
                      className="selectOptions"
                      value={selectedSizes[pizza.id] || "small"}
                      onChange={(e) =>
                        handleSizeChange(pizza.id, e.target.value)
                      }
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                    <input
                      className="quantity"
                      type="number"
                      placeholder="Qty"
                      value={quantities[pizza.id] || ""}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        const updatedQuantities = {
                          ...quantities,
                          [pizza.id]: newQuantity >= 1 ? newQuantity : 1,
                        };
                        setQuantities(updatedQuantities);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddToCartSuccessPopup
        showModal={showPopup}
        closeModal={() => setShowPopup(false)}
        message={popupMessage}
      />
    </>
  );
}

export default PizzaMenuLeft;
