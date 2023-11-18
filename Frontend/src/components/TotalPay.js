import "./cart.css";
import React, { useState } from "react";
import Pay from "./Pay";
import Coupon from "./Coupon";

function TotalPay({ cartItems, selectedSizes, selectedQuantities }) {
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (discountPercentage) => {
    setDiscount(discountPercentage);
  };

  return (
    <div className="container total-container">
      <div className="row total-row1">
        <div className="row">
          <div className="col cols-md-6">
            <Pay
              cartItems={cartItems}
              selectedSizes={selectedSizes}
              selectedQuantities={selectedQuantities}
              discount={discount}
            />
          </div>
        </div>
        <div className="row">
          <div className="col cols-md-6">
            <Coupon applyCoupon={applyCoupon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPay;
