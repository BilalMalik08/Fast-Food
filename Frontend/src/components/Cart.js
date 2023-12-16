import "./cart.css";
import React, { useContext, useState } from "react";
import { CartContext } from "./CartState";
import TotalPay from "./TotalPay";
import Footer from "./Footer";

function Cart() {
  const { cartItems, updateCartItem, removeFromCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState({});

  const handleSizeChange = (itemId, newSize, basePrice) => {
    setSelectedSize((prevSize) => ({
      ...prevSize,
      [itemId]: newSize,
    }));

    updateCartItem(itemId, {
      selectedSize: newSize,
      selectedQuantity: selectedQuantity[itemId] || 1, // Use selectedQuantity if available, or default to 1
      basePrice: basePrice,
    });
  };

  const handleQuantityChange = (itemId, newQuantity, basePrice) => {
    // If the new quantity is 0, set it to 1
    newQuantity = newQuantity <= 0 ? 1 : newQuantity;

    setSelectedQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: newQuantity,
    }));

    updateCartItem(itemId, {
      selectedSize: selectedSize[itemId] || "small", // Use selectedSize if available, or default to 'small'
      selectedQuantity: newQuantity,
      basePrice: basePrice,
    });
  };

  const calculateTotalPrice = (basePrice, size, quantity) => {
    const sizeFactors = {
      small: 1,
      medium: 1.2,
      large: 1.5,
    };

    const totalPrice = basePrice * sizeFactors[size] * quantity;
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <div className="row cart-row1">
        <h1>
          <ul>
            <li>Your Shopping Cart</li>
          </ul>
        </h1>
      </div>

      <div className="row cart-row2">
        <div className="col col-md-6 cart-col">
          <div className="container cart-container">
            {cartItems.map((item) => (
              <div className="card mb-3 cart-card" key={item.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid cart-img"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body cart-card-body">
                      <h5 className="card-title cart-card-title">
                        {item.name}
                      </h5>
                      <p className="card-text cart-card-text">
                        {item.description}
                      </p>{" "}
                      <p className="card-text cart-card-text">
                        {calculateTotalPrice(
                          item.basePrice, // Use basePrice instead of item.price
                          selectedSize[item.id] || item.size,
                          selectedQuantity[item.id] || item.quantity
                        )}{" "}
                        PKR
                      </p>
                      <p className="card-text cart-card-text">
                        Size: {selectedSize[item.id] || item.size} | Quantity:{" "}
                        {selectedQuantity[item.id] || item.quantity}
                      </p>
                      <div className="button-select-quantity">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => removeFromCart(item.id)} // Call removeFromCart with item ID
                        >
                          Remove
                        </button>
                        <select
                          name="size"
                          className="selectOptions"
                          value={selectedSize[item.id] || item.size}
                          onChange={(e) =>
                            handleSizeChange(
                              item.id,
                              e.target.value,
                              item.basePrice
                            )
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
                          value={selectedQuantity[item.id] || item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value, 10),
                              item.basePrice
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col col-md6 toyal-col">
          <TotalPay
            cartItems={cartItems}
            selectedSizes={selectedSize}
            selectedQuantities={selectedQuantity}
          />
        </div>
      </div>
      <div className="row cart-row3">
        <Footer />
      </div>
    </>
  );
}

export default Cart;
