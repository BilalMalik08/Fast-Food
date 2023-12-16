import "./foodMenu.css";
import React, { useState } from "react";
function IceCreamMenuLeft() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const icecream = [
    {
      id: 1,
      name: "Vanilla Ice Cream",
      description: "Classic vanilla-flavored ice cream.",
      price: "199 PKR",
      basePrice: 199,
      image: require("../Img/icecreams/VanillaIceCream.jpg"),
    },
    {
      id: 2,
      name: "Chocolate Chip Ice Cream",
      description: "Rich chocolate ice cream with chocolate chips.",
      price: "229 PKR",
      basePrice: 229,
      image: require("../Img/icecreams/ChocolateChipIceCream.jpg"),
    },
    {
      id: 3,
      name: "Strawberry Ice Cream",
      description: "Sweet strawberry-flavored ice cream.",
      price: "219 PKR",
      basePrice: 219,
      image: require("../Img/icecreams/StrawberryIceCream.jpg"),
    },
    {
      id: 4,
      name: "Mango Ice Cream",
      description: "Delicious mango-flavored ice cream.",
      price: "249 PKR",
      basePrice: 249,
      image: require("../Img/icecreams/MangoIceCream.jpg"),
    },
    {
      id: 5,
      name: "Pistachio Ice Cream",
      description: "Creamy pistachio-flavored ice cream.",
      price: "239 PKR",
      basePrice: 239,
      image: require("../Img/icecreams/PistachioIceCream.jpg"),
    },
    {
      id: 6,
      name: "Kulfi Ice Cream",
      description: "Traditional Pakistani kulfi ice cream.",
      price: "179 PKR",
      basePrice: 179,
      image: require("../Img/icecreams/KulfiIceCream.jpg"),
    },
    {
      id: 7,
      name: "Butterscotch Ice Cream",
      description: "Sweet and buttery butterscotch-flavored ice cream.",
      price: "219 PKR",
      basePrice: 219,
      image: require("../Img/icecreams/ButterscotchIceCream.jpg"),
    },
    {
      id: 8,
      name: "Caramel Crunch Ice Cream",
      description: "Caramel-flavored ice cream with crunchy caramel bits.",
      price: "249 PKR",
      basePrice: 249,
      image: require("../Img/icecreams/CaramelCrunchIceCream.jpg"),
    },
    {
      id: 9,
      name: "Rocky Road Ice Cream",
      description: "Chocolate ice cream with marshmallows and nuts.",
      price: "259 PKR",
      basePrice: 259,
      image: require("../Img/icecreams/RockyRoadIceCream.jpg"),
    },
    {
      id: 10,
      name: "Coffee Ice Cream",
      description: "Smooth coffee-flavored ice cream.",
      price: "199 PKR",
      basePrice: 199,
      image: require("../Img/icecreams/CoffeeIceCream.jpg"),
    },
    {
      id: 11,
      name: "Mint Chocolate Chip Ice Cream",
      description: "Mint-flavored ice cream with chocolate chips.",
      price: "229 PKR",
      basePrice: 229,
      image: require("../Img/icecreams/MintChocolateChipIceCream.jpg"),
    },
    {
      id: 12,
      name: "Fruit Sorbet",
      description: "Refreshing fruit sorbet with assorted flavors.",
      price: "189 PKR",
      basePrice: 189,
      image: require("../Img/icecreams/FruitSorbet.jpg"),
    },
    {
      id: 13,
      name: "Pralines and Cream Ice Cream",
      description: "Creamy ice cream with praline pieces.",
      price: "239 PKR",
      basePrice: 239,
      image: require("../Img/icecreams/PralinesandCreamIceCream.jpg"),
    },
    {
      id: 14,
      name: "Tiramisu Ice Cream",
      description: "Tiramisu-flavored ice cream with coffee and mascarpone.",
      price: "259 PKR",
      basePrice: 259,
      image: require("../Img/icecreams/TiramisuIceCream.jpg"),
    },
    {
      id: 15,
      name: "Raspberry Ripple Ice Cream",
      description: "Raspberry ripple ice cream with fruit swirls.",
      price: "219 PKR",
      basePrice: 219,
      image: require("../Img/icecreams/RaspberryRippleIceCream.jpg"),
    },
  ];

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
        {icecream.map((icecream) => (
          <div className="card food-item-card mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={icecream.image}
                  className="img-fluid food-item-img"
                  alt={icecream.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body food-item-card-body">
                  <h3 className="card-title food-item-card-title">
                    {icecream.name}
                  </h3>
                  <p className="card-text food-item-card-text">
                    {icecream.description}
                  </p>
                  <p className="card-text food-item-card-text">
                    {calculatePrice(
                      selectedSizes[icecream.id] || "small",
                      icecream.basePrice,
                      quantities[icecream.id] || 1
                    )}{" "}
                    PKR
                  </p>
                  <div className="button-select-quantity">
                    <button className="btn btn-outline-light" type="submit">
                      Add to Cart
                    </button>
                    <select
                      name="size"
                      className="selectOptions"
                      value={selectedSizes[icecream.id] || "small"}
                      onChange={(e) =>
                        handleSizeChange(icecream.id, e.target.value)
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
                      value={quantities[icecream.id] || ""}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        const updatedQuantities = {
                          ...quantities,
                          [icecream.id]: newQuantity >= 1 ? newQuantity : 1,
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
    </>
  );
}

export default IceCreamMenuLeft;
