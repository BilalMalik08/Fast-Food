import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalColdDrink from "./EditFormModalColdDrink";

function ColdDrinkMenuEditComp() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedColdDrink, setEditedColdDrink] = useState({});
  const [coldDrinkItems, setColdDrinkItems] = useState([
    {
      id: 1,
      image: require("../Img/colddrinks/Lemonade.jpg"),
      name: "Lemonade",
      description: "Refreshing lemon-flavored drink.",
      price: 120,
      basePrice: 120,
    },
    {
      id: 2,
      image: require("../Img/colddrinks/MangoLassi.jpg"),
      name: "Mango Lassi",
      description: "A delicious blend of mango and yogurt.",
      price: 150,
      basePrice: 150,
    },
    {
      id: 3,
      image: require("../Img/colddrinks/IcedTea.jpg"),
      name: "Iced Tea",
      description: "Chilled tea served with ice and lemon.",
      price: 110,
      basePrice: 110,
    },
    {
      id: 4,
      image: require("../Img/colddrinks/SodaPop.jpg"),
      name: "Soda Pop",
      description: "Carbonated soft drink of your choice.",
      price: 80,
      basePrice: 80,
    },
    {
      id: 5,
      image: require("../Img/colddrinks/MintMargarita.jpg"),
      name: "Mint Margarita",
      description: "A minty and tangy delight.",
      price: 140,
      basePrice: 140,
    },
    {
      id: 6,
      image: require("../Img/colddrinks/OrangeJuice.jpg"),
      name: "Orange Juice",
      description: "Freshly squeezed orange juice.",
      price: 130,
      basePrice: 130,
    },
    {
      id: 7,
      image: require("../Img/colddrinks/PinaColada.jpg"),
      name: "Pina Colada",
      description: "Tropical pineapple and coconut blend.",
      price: 180,
      basePrice: 180,
    },
    {
      id: 8,
      image: require("../Img/colddrinks/IcedCoffee.jpg"),
      name: "Iced Coffee",
      description: "Chilled coffee with milk and sugar.",
      price: 160,
      basePrice: 160,
    },
    {
      id: 9,
      image: require("../Img/colddrinks/GingerSoda.jpg"),
      name: "Ginger Soda",
      description: "Spicy and refreshing ginger-flavored soda.",
      price: 90,
      basePrice: 90,
    },
    {
      id: 10,
      image: require("../Img/colddrinks/FruitPunch.jpg"),
      name: "Fruit Punch",
      description: "Mixed fruit juice with a twist.",
      price: 160,
      basePrice: 160,
    },
    {
      id: 11,
      image: require("../Img/colddrinks/LimeSoda.jpg"),
      name: "Lime Soda",
      description: "Refreshing soda with a splash of lime.",
      price: 100,
      basePrice: 100,
    },
    {
      id: 12,
      image: require("../Img/colddrinks/PeachIcedTea.jpg"),
      name: "Peach Iced Tea",
      description: "Chilled tea infused with peach flavor.",
      price: 130,
      basePrice: 130,
    },
    {
      id: 13,
      image: require("../Img/colddrinks/WatermelonCooler.jpg"),
      name: "Watermelon Cooler",
      description: "Cool and hydrating watermelon drink.",
      price: 140,
      basePrice: 140,
    },
    {
      id: 14,
      image: require("../Img/colddrinks/CranberryPunch.jpg"),
      name: "Cranberry Punch",
      description: "Tart cranberry juice mixed with other fruits.",
      price: 150,
      basePrice: 150,
    },
    {
      id: 15,
      image: require("../Img/colddrinks/BlueberrySmoothie.jpg"),
      name: "Blueberry Smoothie",
      description: "Creamy smoothie with blueberries and yogurt.",
      price: 170,
      basePrice: 170,
    },
  ]);

  const handleEdit = (coldDrink) => {
    setEditedColdDrink(coldDrink);
    setShowModal(true);
  };

  const handleSave = (editedColdDrinkDetails) => {
    const updatedColdDrinkItems = coldDrinkItems.map((drink) =>
      drink.id === editedColdDrinkDetails.id ? editedColdDrinkDetails : drink
    );
    setColdDrinkItems(updatedColdDrinkItems);
    setShowModal(false);
  };

  const deleteColdDrinkItem = (itemId) => {
    const updatedColdDrinkItems = coldDrinkItems.filter(
      (drink) => drink.id !== itemId
    );
    setColdDrinkItems(updatedColdDrinkItems);
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
        {coldDrinkItems.map((colddrink) => (
          <div className="card admin-food-item-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={colddrink.image}
                  className="img-fluid admin-food-item-img"
                  alt={colddrink.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {colddrink.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {colddrink.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      selectedSizes[colddrink.id] || "small",
                      colddrink.price,
                      quantities[colddrink.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(colddrink)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    type="button"
                    onClick={() => deleteColdDrinkItem(colddrink.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalColdDrink
        show={showModal}
        handleClose={() => setShowModal(false)}
        coldDrink={editedColdDrink}
        onSave={handleSave}
      />
    </>
  );
}

export default ColdDrinkMenuEditComp;
