import "./cartCheckout.css";
import React, { useContext } from "react";
import { CartContext } from "./CartState";

function CartCheckOut() {
  const { cartItems, selectedSize, selectedQuantity } = useContext(CartContext);

  return (
    <div className="cart-Cartcheckout-container">
      <div className="cart-Cartcheckout-items-list cart-container">
        {cartItems.map((item) => (
          <div className="card mb-3 cart-Cartcheckout-card" key={item.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded-start"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body cart-Cartcheckout-card-body">
                  <h5 className="card-title cart-Cartcheckout-card-title">
                    {item.name}
                  </h5>
                  <p className="card-text cart-Cartcheckout-card-text">
                    Size:{" "}
                    {selectedSize && selectedSize[item.id]
                      ? selectedSize[item.id]
                      : item.size}
                  </p>
                  <p className="card-text cart-Cartcheckout-card-text">
                    Quantity:{" "}
                    {selectedQuantity && selectedQuantity[item.id]
                      ? selectedQuantity[item.id]
                      : item.quantity}
                  </p>
                  <p className="card-text cart-Cartcheckout-card-text">
                    Price: {item.basePrice} PKR
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartCheckOut;
