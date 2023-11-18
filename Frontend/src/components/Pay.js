import "./cart.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Pay({ cartItems, selectedSizes, selectedQuantities, discount }) {
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const tempTotal = cartItems.reduce((acc, item) => {
      const { basePrice } = item;
      const size = selectedSizes?.[item.id] || "small";
      const quantity = selectedQuantities?.[item.id] || 1;

      if (typeof basePrice === "number" && size && quantity) {
        const sizeFactors = {
          small: 1,
          medium: 1.2,
          large: 1.5,
        };

        const itemTotal = parseFloat(basePrice) * sizeFactors[size] * quantity;
        return acc + itemTotal;
      }

      return acc;
    }, 0);

    // Apply discount if applicable
    const discountedTotal = discount ? tempTotal * (1 - discount) : tempTotal;

    setTotalPayment(discountedTotal.toFixed(2));
  }, [cartItems, selectedSizes, selectedQuantities, discount]);

  return (
    <div className="card pay-card">
      <div className="card-body pay-card-body">
        <h5 className="card-title pay-card-title">Total Payment</h5>
        <p className="card-text pay-card-text">{totalPayment} PKR</p>
        <Link to="/checkout">
          <button className="btn btn-outline-light pay-btn">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pay;
