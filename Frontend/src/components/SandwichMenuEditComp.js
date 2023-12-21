import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalSandwich from "./EditFormModalSandwich";

function SandwichMenuEditComp() {
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedSandwich, setEditedSandwich] = useState({});
  const [sandwichItems, setSandwichItems] = useState([
    {
      image: require("../Img/sandwiches/ChickenTikkaSandwich.jpg"),
      id: 1,
      name: "Chicken Tikka Sandwich",
      description:
        "Grilled chicken tikka pieces with mint chutney in a sandwich.",
      price: 350,
      basePrice: 350,
    },
    {
      image: require("../Img/sandwiches/BeefSeekhKebabSandwich.jpg"),
      id: 2,
      name: "Beef Seekh Kebab Sandwich",
      description: "Spiced beef seekh kebabs with yogurt sauce in a sandwich.",
      price: 380,
      basePrice: 380,
    },
    {
      image: require("../Img/sandwiches/VeggieClubSandwich.jpg"),
      id: 3,
      name: "Veggie Club Sandwich",
      description:
        "A triple-decker sandwich with layers of veggies, cheese, and mayo.",
      price: 320,
      basePrice: 320,
    },
    {
      image: require("../Img/sandwiches/OmeletteSandwich.jpg"),
      id: 4,
      name: "Omelette Sandwich",
      description: "Fluffy omelette with tomatoes and onions in a sandwich.",
      price: 300,
      basePrice: 300,
    },
    {
      image: require("../Img/sandwiches/SeekhKebabParathaRoll.jpg"),
      id: 5,
      name: "Seekh Kebab Paratha Roll",
      description: "Spiced seekh kebabs wrapped in a paratha with chutney.",
      price: 370,
      basePrice: 370,
    },
    {
      image: require("../Img/sandwiches/CheeseandTomatoSandwich.jpg"),
      id: 6,
      name: "Cheese and Tomato Sandwich",
      description: "Sliced cheese and fresh tomatoes in a sandwich.",
      price: 290,
      basePrice: 290,
    },
    {
      image: require("../Img/sandwiches/ChanaChaapSandwich.jpg"),
      id: 7,
      name: "Chana Chaap Sandwich",
      description:
        "Spiced chana chaap filling with mint chutney in a sandwich.",
      price: 340,
      basePrice: 340,
    },
    {
      image: require("../Img/sandwiches/BeefBotiSandwich.jpg"),
      id: 8,
      name: "Beef Boti Sandwich",
      description: "Tender beef boti pieces with spicy sauce in a sandwich.",
      price: 390,
      basePrice: 390,
    },
    {
      image: require("../Img/sandwiches/FishFilletSandwich.jpg"),
      id: 9,
      name: "Fish Fillet Sandwich",
      description: "Crispy fish fillet with tartar sauce in a sandwich.",
      price: 360,
      basePrice: 360,
    },
    {
      image: require("../Img/sandwiches/MuttonSandwich.jpg"),
      id: 10,
      name: "Mutton Sandwich",
      description: "Mutton pieces with spicy masala in a sandwich.",
      price: 410,
      basePrice: 410,
    },
    {
      image: require("../Img/sandwiches/EggandCheeseSandwich.jpg"),
      id: 11,
      name: "Egg and Cheese Sandwich",
      description: "Scrambled eggs and melted cheese in a sandwich.",
      price: 320,
      basePrice: 320,
    },
    {
      image: require("../Img/sandwiches/AlooKeemaSandwich.jpg"),
      id: 12,
      name: "Aloo Keema Sandwich",
      description: "Spiced aloo keema (potato and minced meat) in a sandwich.",
      price: 330,
      basePrice: 330,
    },
    {
      image: require("../Img/sandwiches/PakistaniClubSandwich.jpg"),
      id: 13,
      name: "Pakistani Club Sandwich",
      description: "A classic club sandwich with chicken, egg, and veggies.",
      price: 360,
      basePrice: 360,
    },
    {
      image: require("../Img/sandwiches/GrilledSandwich.jpg"),
      id: 14,
      name: "Grilled Sandwich",
      description: "Grilled sandwich with spicy tamarind chutney.",
      price: 290,
      basePrice: 290,
    },
    {
      image: require("../Img/sandwiches/PaneerTikkaSandwich.jpg"),
      id: 15,
      name: "Paneer Tikka Sandwich",
      description:
        "Grilled paneer tikka pieces with mint chutney in a sandwich.",
      price: 340,
      basePrice: 340,
    },
  ]);

  const handleEdit = (sandwich) => {
    setEditedSandwich(sandwich);
    setShowModal(true);
  };

  const handleSave = (editedSandwichDetails) => {
    // Update the sandwich details in the state
    const updatedSandwichItems = sandwichItems.map((sandwich) =>
      sandwich.id === editedSandwichDetails.id
        ? editedSandwichDetails
        : sandwich
    );

    setSandwichItems(updatedSandwichItems); // Update the state with the updated sandwich items
    setShowModal(false); // Close the modal after saving changes
  };

  const deleteSandwichItem = (itemId) => {
    const updatedSandwichItems = sandwichItems.filter(
      (sandwich) => sandwich.id !== itemId
    );
    setSandwichItems(updatedSandwichItems);
  };

  function calculatePrice(basePrice, quantity) {
    const adjustedPrice = basePrice * quantity;
    return adjustedPrice.toFixed(2); // Assuming the price is in PKR, and you want to round to 2 decimal places
  }

  return (
    <>
      <div className="container food-item-container admin-food-item-container">
        {sandwichItems.map((sandwich) => (
          <div className="card admin-food-item-card mb-4" key={sandwich.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={sandwich.image}
                  className="img-fluid admin-food-item-img"
                  alt={sandwich.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {sandwich.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {sandwich.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      sandwich.price,
                      quantities[sandwich.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(sandwich)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    onClick={() => deleteSandwichItem(sandwich.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalSandwich
        show={showModal}
        handleClose={() => setShowModal(false)}
        sandwich={editedSandwich}
        onSave={handleSave} // Pass the handleSave function directly
      />
    </>
  );
}

export default SandwichMenuEditComp;
