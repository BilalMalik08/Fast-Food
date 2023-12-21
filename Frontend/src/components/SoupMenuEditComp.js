import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalSoup from "./EditFormModalSoup";

function SoupMenuEditComp() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedSoup, setEditedSoup] = useState({});
  const [soupItems, setSoupItems] = useState([
    {
      id: 1,
      name: "Chicken Corn Soup",
      image: require("../Img/soups/ChickenCornSoup.jpg"),
      description:
        "A warm and comforting soup with chicken, corn, and vegetables.",
      price: 250,
      basePrice: 250,
    },
    {
      id: 2,
      name: "Lentil Soup",
      image: require("../Img/soups/LentilSoup.jpg"),
      description:
        "A hearty lentil soup with spices and garnished with fresh coriander.",
      price: 200,
      basePrice: 200,
    },
    {
      id: 3,
      name: "Nihari",
      image: require("../Img/soups/Nihari.jpg"),
      description:
        "A traditional Pakistani slow-cooked stew made with tender beef or mutton.",
      price: 350,
      basePrice: 350,
    },
    {
      id: 4,
      name: "Haleem",
      image: require("../Img/soups/Haleem.jpg"),
      description:
        "A thick and flavorful porridge made from wheat, barley, and a variety of spices.",
      price: 300,
      basePrice: 300,
    },
    {
      id: 5,
      name: "Mutton Yakhni",
      image: require("../Img/soups/MuttonYakhni.jpg"),
      description: "A light and aromatic mutton broth infused with spices.",
      price: 280,
      basePrice: 280,
    },
    {
      id: 6,
      name: "Vegetable Soup",
      image: require("../Img/soups/VegetableSoup.jpg"),
      description:
        "A healthy soup packed with assorted vegetables and mild spices.",
      price: 220,
      basePrice: 220,
    },
    {
      id: 7,
      name: "Beef Paya",
      image: require("../Img/soups/BeefPaya.jpg"),
      description:
        "A rich and savory dish made from beef trotters, slow-cooked in flavorful spices.",
      price: 380,
      basePrice: 380,
    },
    {
      id: 8,
      name: "Mulligatawny Soup",
      image: require("../Img/soups/MulligatawnySoup.jpg"),
      description:
        "A fusion of Indian and Pakistani flavors with lentils, vegetables, and spices.",
      price: 270,
      basePrice: 270,
    },
    {
      id: 9,
      name: "Tomato Soup",
      image: require("../Img/soups/TomatoSoup.jpg"),
      description: "A classic tomato-based soup, garnished with fresh herbs.",
      price: 210,
      basePrice: 210,
    },
    {
      id: 10,
      name: "Mutton Sajji Soup",
      image: require("../Img/soups/MuttonSajjiSoup.jpg"),
      description:
        "A delicious broth with the flavors of Sajji, a traditional Balochi dish.",
      price: 320,
      basePrice: 320,
    },
    {
      id: 11,
      name: "Hot and Sour Soup",
      image: require("../Img/soups/HotandSourSoup.jpg"),
      description:
        "A spicy and tangy soup with a mix of vegetables and chicken.",
      price: 260,
      basePrice: 260,
    },
    {
      id: 12,
      name: "Mushroom Soup",
      image: require("../Img/soups/MushroomSoup.jpg"),
      description:
        "Creamy and earthy mushroom soup with a hint of garlic and herbs.",
      price: 230,
      basePrice: 230,
    },
    {
      id: 13,
      name: "Chicken Corn Noodle Soup",
      image: require("../Img/soups/ChickenCornNoodleSoup.jpg"),
      description:
        "A fusion of chicken corn soup with noodles for a satisfying meal.",
      price: 280,
      basePrice: 280,
    },
    {
      id: 14,
      name: "Spinach Soup",
      image: require("../Img/soups/SpinachSoup.jpg"),
      description:
        "A nutritious and wholesome soup made with fresh spinach leaves and spices.",
      price: 240,
      basePrice: 240,
    },
    {
      id: 15,
      name: "Daal Soup",
      image: require("../Img/soups/DaalSoup.jpg"),
      description:
        "A simple yet flavorful lentil soup with a touch of Pakistani spices.",
      price: 190,
      basePrice: 190,
    },
  ]);

  const handleEdit = (soup) => {
    setEditedSoup(soup);
    setShowModal(true);
  };

  const handleSave = (editedSoupDetails) => {
    // Update the soup details in the state
    const updatedSoupItems = soupItems.map((soup) =>
      soup.id === editedSoupDetails.id ? editedSoupDetails : soup
    );

    setSoupItems(updatedSoupItems);
    setShowModal(false);
  };

  const deleteSoupItem = (itemId) => {
    const updatedSoupItems = soupItems.filter((soup) => soup.id !== itemId);
    setSoupItems(updatedSoupItems);
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
      <div className="container food-item-container admin-food-item-container">
        {soupItems.map((soup) => (
          <div className="card admin-food-item-card mb-4" key={soup.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={soup.image}
                  className="img-fluid admin-food-item-img"
                  alt={soup.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {soup.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {soup.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      selectedSizes[soup.id] || "small",
                      soup.price,
                      quantities[soup.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(soup)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    type="button"
                    onClick={() => deleteSoupItem(soup.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalSoup
        show={showModal}
        handleClose={() => setShowModal(false)}
        soup={editedSoup}
        onSave={handleSave} // Pass the handleSave function directly
      />
    </>
  );
}

export default SoupMenuEditComp;
