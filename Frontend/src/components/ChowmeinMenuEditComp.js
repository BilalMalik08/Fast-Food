import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalChowmein from "./EditFormModalChowmein";

function ChowmeinMenuEditComp() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedChowmein, setEditedChowmein] = useState({});
  const [chowmeinItems, setChowmeinItems] = useState([
    {
      id: 1,
      image: require("../Img/chowmeins/ChickenChowmein.jpg"),
      name: "Chicken Chowmein",
      description:
        "Stir-fried noodles with tender chicken, vegetables, and aromatic spices.",
      price: 299,
      basePrice: 299,
    },
    {
      id: 2,
      image: require("../Img/chowmeins/BeefChowmein.jpg"),
      name: "Beef Chowmein",
      description:
        "Savory beef chowmein cooked with a blend of spices and fresh vegetables.",
      price: 349,
      basePrice: 349,
    },
    {
      id: 3,
      image: require("../Img/chowmeins/VegetableChowmein.jpg"),
      name: "Vegetable Chowmein",
      description:
        "Delicious vegetable chowmein with a variety of crisp, colorful veggies.",
      price: 259,
      basePrice: 259,
    },
    {
      id: 4,
      image: require("../Img/chowmeins/PrawnChowmein.jpg"),
      name: "Prawn Chowmein",
      description:
        "Flavorful prawn chowmein cooked with a special blend of spices and herbs.",
      price: 399,
      basePrice: 399,
    },
    {
      id: 5,
      image: require("../Img/chowmeins/MuttonChowmein.jpg"),
      name: "Mutton Chowmein",
      description:
        "Tender mutton chowmein infused with rich spices and succulent meat.",
      price: 389,
      basePrice: 389,
    },
    {
      id: 6,
      image: require("../Img/chowmeins/EggChowmein.jpg"),
      name: "Egg Chowmein",
      description:
        "Satisfying egg chowmein with scrambled eggs and a medley of vegetables.",
      price: 269,
      basePrice: 269,
    },
    {
      id: 7,
      image: require("../Img/chowmeins/VegetableHakkaChowmein.jpg"),
      name: "Vegetable Hakka Chowmein",
      description:
        "Hakka-style chowmein loaded with a variety of fresh vegetables.",
      price: 279,
      basePrice: 279,
    },
    {
      id: 8,
      image: require("../Img/chowmeins/PaneerChowmein.jpg"),
      name: "Paneer Chowmein",
      description:
        "Delicious chowmein with soft paneer cubes and a flavorful sauce.",
      price: 329,
      basePrice: 329,
    },
    {
      id: 9,
      image: require("../Img/chowmeins/BBQChickenChowmein.jpg"),
      name: "BBQ Chicken Chowmein",
      description: "Chowmein with BBQ chicken pieces and a smoky, tangy sauce.",
      price: 359,
      basePrice: 359,
    },
    {
      id: 10,
      image: require("../Img/chowmeins/VegetableSchezwanChowmein.jpg"),
      name: "Vegetable Schezwan Chowmein",
      description:
        "Spicy Schezwan-style chowmein with a mix of veggies and bold flavors.",
      price: 299,
      basePrice: 299,
    },
    {
      id: 11,
      image: require("../Img/chowmeins/FishChowmein.jpg"),
      name: "Fish Chowmein",
      description: "Tasty chowmein with tender fish pieces and a savory sauce.",
      price: 369,
      basePrice: 369,
    },
    {
      id: 12,
      image: require("../Img/chowmeins/PaneerSchezwanChowmein.jpg"),
      name: "Paneer Schezwan Chow",
      description:
        "Schezwan-style chowmein with spicy paneer cubes and veggies.",
      price: 329,
      basePrice: 329,
    },
    {
      id: 13,
      image: require("../Img/chowmeins/PrawnHakkaChowmein.jpg"),
      name: "Prawn Hakka Chowmein",
      description:
        "Hakka-style chowmein with succulent prawns and a savory sauce.",
      price: 399,
      basePrice: 399,
    },
    {
      id: 14,
      image: require("../Img/chowmeins/VegetableManchurianChowmein.jpg"),
      name: "Vegetable Manchurian Chowmein",
      description:
        "Chowmein with vegetable Manchurian balls in a flavorful sauce.",
      price: 349,
      basePrice: 349,
    },
    {
      id: 15,
      image: require("../Img/chowmeins/EggHakkaChowmein.jpg"),
      name: "Egg Hakka Chowmein",
      description:
        "Hakka-style chowmein with scrambled eggs and a tasty sauce.",
      price: "289 PKR",
      basePrice: 289,
    },
  ]);

  const handleEdit = (chowmein) => {
    setEditedChowmein(chowmein);
    setShowModal(true);
  };

  const handleSave = (editedChowmeinDetails) => {
    // Update the chowmein details in the state
    const updatedChowmeinItems = chowmeinItems.map((chowmein) =>
      chowmein.id === editedChowmeinDetails.id
        ? editedChowmeinDetails
        : chowmein
    );

    setChowmeinItems(updatedChowmeinItems); // Update the state with the updated chowmein items
    setShowModal(false); // Close the modal after saving changes
  };

  const deleteChowmeinItem = (itemId) => {
    // Filter out the chowmein item with the specified itemId
    const updatedChowmeinItems = chowmeinItems.filter(
      (chowmein) => chowmein.id !== itemId
    );
    setChowmeinItems(updatedChowmeinItems);
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
        {chowmeinItems.map((chowmein) => (
          <div className="card admin-food-item-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={chowmein.image}
                  className="img-fluid admin-food-item-img"
                  alt={chowmein.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {chowmein.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {chowmein.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      selectedSizes[chowmein.id] || "small",
                      chowmein.price,
                      quantities[chowmein.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(chowmein)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    type="button"
                    onClick={() => deleteChowmeinItem(chowmein.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalChowmein
        show={showModal}
        handleClose={() => setShowModal(false)}
        chowmein={editedChowmein}
        onSave={handleSave} // Pass the handleSave function directly
      />
    </>
  );
}

export default ChowmeinMenuEditComp;
