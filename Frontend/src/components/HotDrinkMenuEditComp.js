import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalHotDrink from "./EditFormModalHotDrink";

function HotDrinkMenuEditComp() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedHotDrink, setEditedHotDrink] = useState({});
  const [hotDrinkItems, setHotDrinkItems] = useState([
    {
      id: 1,
      image: require("../Img/hotdrinks/KarakChai.jpg"),
      name: "Karak Chai",
      description: "Strong and aromatic tea with spices and milk.",
      price: 80,
      basePrice: 80,
    },
    {
      id: 2,
      image: require("../Img/hotdrinks/Espresso.jpg"),
      name: "Espresso",
      description: "A shot of intense and rich espresso coffee.",
      price: 100,
      basePrice: 100,
    },
    {
      id: 3,
      image: require("../Img/hotdrinks/MasalaChai.jpg"),
      name: "Masala Chai",
      description:
        "Traditional spiced tea with ginger, cardamom, and cinnamon.",
      price: 90,
      basePrice: 90,
    },
    {
      id: 4,
      image: require("../Img/hotdrinks/Cappuccino.jpg"),
      name: "Cappuccino",
      description:
        "Espresso coffee topped with frothy milk and a sprinkle of cocoa.",
      price: 120,
      basePrice: 120,
    },
    {
      id: 5,
      image: require("../Img/hotdrinks/GreenTea.jpg"),
      name: "Green Tea",
      description: "Healthy and refreshing green tea with antioxidants.",
      price: 85,
      basePrice: 85,
    },
    {
      id: 6,
      image: require("../Img/hotdrinks/HotChocolate.jpg"),
      name: "Hot Chocolate",
      description: "Creamy and indulgent hot chocolate with whipped cream.",
      price: 130,
      basePrice: 130,
    },
    {
      id: 7,
      image: require("../Img/hotdrinks/GreenTea.jpg"),
      name: "Ginger Tea",
      description: "Tea infused with fresh ginger for a spicy kick.",
      price: 90,
      basePrice: 90,
    },
    {
      id: 8,
      image: require("../Img/hotdrinks/Latte.jpg"),
      name: "Latte",
      description:
        "Smooth and creamy latte made with espresso and steamed milk.",
      price: 110,
      basePrice: 110,
    },
    {
      id: 9,
      image: require("../Img/hotdrinks/KashmiriChai.jpg"),
      name: "Kashmiri Chai",
      description: "Pink tea with cardamom, almonds, and saffron.",
      price: 120,
      basePrice: 120,
    },
    {
      id: 10,
      image: require("../Img/hotdrinks/MintTea.jpg"),
      name: "Mint Tea",
      description: "Mint-infused tea for a refreshing taste.",
      price: 85,
      basePrice: 85,
    },
    {
      id: 11,
      image: require("../Img/hotdrinks/IrishCoffee.jpg"),
      name: "Irish Coffee",
      description:
        "Coffee with a shot of Irish whiskey and topped with whipped cream.",
      price: 150,
      basePrice: 150,
    },
    {
      id: 12,
      image: require("../Img/hotdrinks/CinnamonTea.jpg"),
      name: "Cinnamon Tea",
      description: "Tea with a warm and comforting cinnamon flavor.",
      price: 95,
      basePrice: 95,
    },
    {
      id: 13,
      image: require("../Img/hotdrinks/CardamomCoffee.jpg"),
      name: "Cardamom Coffee",
      description: "Coffee with a hint of cardamom for a unique flavor.",
      price: 110,
      basePrice: 110,
    },
    {
      id: 14,
      image: require("../Img/hotdrinks/SaffronMilk.jpg"),
      name: "Saffron Milk",
      description: "Milk infused with saffron strands for a luxurious drink.",
      price: 140,
      basePrice: 140,
    },
    {
      id: 15,
      image: require("../Img/hotdrinks/PeppermintHotCocoa.jpg"),
      name: "Peppermint Hot Cocoa",
      description: "Hot cocoa with a refreshing peppermint twist.",
      price: 125,
      basePrice: 125,
    },
  ]);

  const handleEdit = (hotDrink) => {
    setEditedHotDrink(hotDrink);
    setShowModal(true);
  };

  const handleSave = (editedHotDrinkDetails) => {
    const updatedHotDrinkItems = hotDrinkItems.map((drink) =>
      drink.id === editedHotDrinkDetails.id ? editedHotDrinkDetails : drink
    );
    setHotDrinkItems(updatedHotDrinkItems);
    setShowModal(false);
  };

  const deleteHotDrinkItem = (itemId) => {
    const updatedHotDrinkItems = hotDrinkItems.filter(
      (drink) => drink.id !== itemId
    );
    setHotDrinkItems(updatedHotDrinkItems);
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
        {hotDrinkItems.map((hotdrink) => (
          <div className="card admin-food-item-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={hotdrink.image}
                  className="img-fluid admin-food-item-img"
                  alt={hotdrink.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {hotdrink.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {hotdrink.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      selectedSizes[hotdrink.id] || "small",
                      hotdrink.price,
                      quantities[hotdrink.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(hotdrink)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    type="button"
                    onClick={() => deleteHotDrinkItem(hotdrink.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalHotDrink
        show={showModal}
        handleClose={() => setShowModal(false)}
        hotDrink={editedHotDrink}
        onSave={handleSave}
      />
    </>
  );
}

export default HotDrinkMenuEditComp;
