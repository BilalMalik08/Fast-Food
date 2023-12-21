import "./foodMenu.css";
import React, { useState } from "react";
import EditFormModalChicken from "./EditFormModalChicken";

function ChickenMenuEditComp() {
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editedChicken, setEditedChicken] = useState({});
  const [chickenItems, setChickenItems] = useState([
    {
      id: 1,
      name: "Original Fried Chicken",
      description: "Crispy fried chicken with a secret blend of spices.",
      price: 999,
      basePrice: 999,
      image: require("../Img/chicken/OriginalFriedChicken.jpg"),
    },
    {
      id: 2,
      name: "Spicy Fried Chicken",
      description: "Fried chicken with a spicy kick, served with hot sauce.",
      price: 1099,
      basePrice: 1099,
      image: require("../Img/chicken/SpicyFriedChicken.jpg"),
    },
    {
      id: 3,
      name: "Garlic Butter Fried Chicken",
      description: "Fried chicken coated in garlic butter for a savory flavor.",
      price: 1199,
      basePrice: 1199,
      image: require("../Img/chicken/GarlicButterFriedChicken.jpg"),
    },
    {
      id: 4,
      name: "Lahori Fried Chicken",
      description: "A local favorite with Lahori spices and herbs.",
      price: 1099,
      basePrice: 1099,
      image: require("../Img/chicken/LahoriFriedChicken.jpg"),
    },
    {
      id: 5,
      name: "Crispy Drumsticks",
      description: "Crispy and tender chicken drumsticks.",
      price: 899,
      basePrice: 899,
      image: require("../Img/chicken/CrispyDrumsticks.jpg"),
    },
    {
      id: 6,
      name: "Tandoori Fried Chicken",
      description: "Fried chicken with a tandoori twist, served with naan.",
      price: 1299,
      basePrice: 1299,
      image: require("../Img/chicken/TandooriFriedChicken.jpg"),
    },
    {
      id: 7,
      name: "Zesty Lemon Chicken",
      description: "Fried chicken marinated in zesty lemon sauce.",
      price: 1099,
      basePrice: 1099,
      image: require("../Img/chicken/ZestyLemonChicken.jpg"),
    },
    {
      id: 8,
      name: "Hot and Spicy Wings",
      description: "Spicy chicken wings with a side of cooling ranch sauce.",
      price: 799,
      basePrice: 799,
      image: require("../Img/chicken/HotandSpicyWings.jpg"),
    },
    {
      id: 9,
      name: "Mango Chili Chicken",
      description: "Fried chicken with a sweet and spicy mango chili glaze.",
      price: 1199,
      basePrice: 1199,
      image: require("../Img/chicken/MangoChiliChicken.jpg"),
    },
    {
      id: 10,
      name: "Honey Mustard Chicken",
      description: "Fried chicken drizzled with honey mustard sauce.",
      price: 999,
      basePrice: 999,
      image: require("../Img/chicken/HoneyMustardChicken.jpg"),
    },
    {
      id: 11,
      name: "Smoky BBQ Chicken",
      description: "Fried chicken smothered in smoky barbecue sauce.",
      price: 1099,
      basePrice: 1099,
      image: require("../Img/chicken/SmokyBBQChicken.jpg"),
    },
    {
      id: 12,
      name: "Sesame Ginger Chicken",
      description: "Fried chicken with a flavorful sesame ginger glaze.",
      price: 1299,
      basePrice: 1299,
      image: require("../Img/chicken/SesameGingerChicken.jpg"),
    },
    {
      id: 13,
      name: "Cajun Spiced Chicken",
      description: "Fried chicken seasoned with zesty Cajun spices.",
      price: 1099,
      basePrice: 1099,
      image: require("../Img/chicken/CajunSpicedChicken.jpg"),
    },
    {
      id: 14,
      name: "Buttermilk Ranch Tenders",
      description:
        "Tender fried chicken strips served with creamy buttermilk ranch dressing.",
      price: 899,
      basePrice: 899,
      image: require("../Img/chicken/ButtermilkRanchTenders.jpg"),
    },
    {
      id: 15,
      name: "Garlic Parmesan Wings",
      description:
        "Crispy fried chicken wings tossed in garlic parmesan sauce.",
      price: 999,
      basePrice: 999,
      image: require("../Img/chicken/GarlicParmesanWings.jpg"),
    },
  ]);

  const handleEdit = (chicken) => {
    setEditedChicken(chicken);
    setShowModal(true);
  };

  const handleSave = (editedChickenDetails) => {
    // Update the chicken details in the state
    const updatedChickenItems = chickenItems.map((chicken) =>
      chicken.id === editedChickenDetails.id ? editedChickenDetails : chicken
    );

    setChickenItems(updatedChickenItems); // Update the state with the updated chicken items
    setShowModal(false); // Close the modal after saving changes
  };

  const deleteChickenItem = (itemId) => {
    // Filter out the chicken item with the specified itemId
    const updatedChickenItems = chickenItems.filter(
      (chicken) => chicken.id !== itemId
    );
    setChickenItems(updatedChickenItems);
  };

  function calculatePrice(basePrice, quantity) {
    const adjustedPrice = basePrice * quantity;
    return adjustedPrice.toFixed(2); // Assuming the price is in PKR, and you want to round to 2 decimal places
  }

  return (
    <>
      <div className="container food-item-container admin-food-item-container">
        {chickenItems.map((chicken) => (
          <div className="card admin-food-item-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={chicken.image}
                  className="img-fluid admin-food-item-img"
                  alt={chicken.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {chicken.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {chicken.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(chicken.price, quantities[chicken.id] || 1)}{" "}
                    PKR
                  </p>
                  <button
                    className="btn btn-outline-light menu-card-btn"
                    onClick={() => handleEdit(chicken)}
                  >
                    Edit Item
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger menu-card-btn"
                    onClick={() => deleteChickenItem(chicken.id)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditFormModalChicken
        show={showModal}
        handleClose={() => setShowModal(false)}
        chicken={editedChicken}
        onSave={handleSave} // Pass the handleSave function directly
      />
    </>
  );
}

export default ChickenMenuEditComp;
